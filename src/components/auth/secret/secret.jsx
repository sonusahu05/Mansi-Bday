import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore, connectFirestoreEmulator, doc, setDoc } from "firebase/firestore";

export const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app)

// Test Firebase connection
const testFirebaseConnection = async () => {
  try {
    const testDoc = doc(db, 'test', 'connection');
    await setDoc(testDoc, { 
      timestamp: new Date().toISOString(),
      status: 'connected'
    });
    console.log("✅ Firebase connection test successful");
  } catch (error) {
    console.error("❌ Firebase connection test failed:", error);
  }
};

// Run connection test in development
if (import.meta.env.DEV) {
  testFirebaseConnection();
}

// Log Firebase configuration for debugging
console.log("Firebase initialized with config:", {
  projectId: firebaseConfig.projectId,
  authDomain: firebaseConfig.authDomain,
  storageBucket: firebaseConfig.storageBucket
});
