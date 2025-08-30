import React, { useState } from "react";
import { GoogleAuthProvider, getAuth, signInWithPopup, signInWithRedirect, getRedirectResult } from "firebase/auth";
import { app } from "../auth/secret/secret"; // Import the initialized app
import GoogleIcon from "@mui/icons-material/Google";
import CircularProgress from "@mui/material/CircularProgress";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

// Use the already initialized Firebase app
const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();

// Configure the provider
provider.addScope('email');
provider.addScope('profile');
provider.setCustomParameters({
  'prompt': 'select_account'
});

function LoginWithGoogle({ btnClassName = '', iconClassName = '' }) {
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    if (isSigningIn) return;

    setIsSigningIn(true);
    setError(null);

    try {
      // Try popup first, fallback to redirect on COOP errors
      let result;
      
      try {
        result = await signInWithPopup(auth, provider);
      } catch (popupError) {
        console.log("Popup blocked, trying redirect:", popupError.code);
        
        if (popupError.code === 'auth/popup-blocked' || 
            popupError.code === 'auth/popup-closed-by-user' ||
            popupError.code === 'auth/cancelled-popup-request') {
          // Use redirect instead
          await signInWithRedirect(auth, provider);
          return; // Exit here, redirect will handle the rest
        }
        throw popupError; // Re-throw if it's a different error
      }

      if (result) {
        await handleSuccessfulLogin(result);
      }
    } catch (err) {
      console.error("Google Sign-In Error:", err.code, err.message);
      let errorMessage = "Authentication failed. Please try again.";
      
      switch (err.code) {
        case 'auth/popup-blocked':
          errorMessage = "Popup blocked. Please allow popups for this site or try again.";
          break;
        case 'auth/popup-closed-by-user':
          errorMessage = "Sign-in was cancelled.";
          break;
        case 'auth/network-request-failed':
          errorMessage = "Network error. Please check your connection and try again.";
          break;
        case 'auth/too-many-requests':
          errorMessage = "Too many attempts. Please try again later.";
          break;
        default:
          errorMessage = `Authentication error: ${err.message}`;
      }
      
      setError(errorMessage);
    } finally {
      setIsSigningIn(false);
    }
  };

  const handleSuccessfulLogin = async (result) => {
    try {
      const signedInUser = result.user;
      const userRef = doc(db, "users", signedInUser.uid);
      
      // Check if user document exists
      const userSnapshot = await getDoc(userRef);

      if (!userSnapshot.exists()) {
        // Create new user document
        await setDoc(userRef, {
          name: signedInUser.displayName || '',
          email: signedInUser.email || '',
          photoURL: signedInUser.photoURL || '',
          uid: signedInUser.uid,
          createdAt: new Date().toISOString(),
          test: false,
        });
      }

      // Navigate to home page
      navigate("/");
    } catch (firestoreError) {
      console.error("Firestore error:", firestoreError);
      // Still navigate even if Firestore fails
      navigate("/");
    }
  };

  // Handle redirect result on component mount
  React.useEffect(() => {
    const handleRedirectResult = async () => {
      try {
        const result = await getRedirectResult(auth);
        if (result) {
          setIsSigningIn(true);
          await handleSuccessfulLogin(result);
        }
      } catch (err) {
        console.error("Redirect result error:", err);
        setError("Authentication failed after redirect. Please try again.");
      } finally {
        setIsSigningIn(false);
      }
    };

    handleRedirectResult();
  }, []);

  return (
    <div className="w-full mb-6">
      <div className="text-center">
        <button
          type="button"
          className={`w-full bg-white hover:bg-gray-50 text-gray-700 font-semibold py-3 px-4 border border-gray-300 rounded-lg flex items-center justify-center shadow-sm transition-all duration-200 ${btnClassName}`}
          onClick={handleGoogleSignIn}
          disabled={isSigningIn}
        >
          <GoogleIcon className={`mr-3 text-blue-500 ${iconClassName}`} />
          {isSigningIn ? (
            <>
              <CircularProgress size={16} color="inherit" className="mr-2" />
              Signing in...
            </>
          ) : (
            "Continue with Google"
          )}
        </button>
        {error && (
          <p className="text-red-500 text-sm mt-2 p-2 bg-red-50 border border-red-200 rounded">
            {error}
          </p>
        )}
        
        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="flex-shrink mx-4 text-gray-400 text-sm">or</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>
      </div>
    </div>
  );
}

export default LoginWithGoogle;