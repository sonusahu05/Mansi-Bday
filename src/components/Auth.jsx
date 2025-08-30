import { useState, useEffect } from 'react';
import authService from '../services/auth';

const Auth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    displayName: ''
  });
  const [error, setError] = useState('');

  useEffect(() => {
    // Check if user is already logged in
    const checkAuth = () => {
      if (authService.isAuthenticated()) {
        setUser(authService.getCurrentUser());
      }
      setLoading(false);
    };

    checkAuth();
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      let result;
      if (isLogin) {
        result = await authService.login(formData.email, formData.password);
      } else {
        result = await authService.register(formData.email, formData.password, formData.displayName);
      }
      
      setUser(result.data);
      setFormData({ email: '', password: '', displayName: '' });
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSignOut = async () => {
    try {
      await authService.logout();
      setUser(null);
    } catch (error) {
      setError(error.message);
    }
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[200px] bg-[#fdf6f9]">
        <div className="w-8 h-8 border-4 border-[#fb6da0] border-t-transparent rounded-full animate-spin"></div>
        <div className="mt-3 text-[#1e2a38] font-medium">Loading...</div>
      </div>
    );
  }

  if (user) {
    return (
      <div className="bg-white p-8 rounded-2xl max-w-md mx-auto shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
        <h2 className="text-2xl font-semibold mb-6 text-[#1e2a38] text-center">Welcome back!</h2>
        <div className="mb-6 p-4 bg-[#f9f9f9] rounded-lg">
          <p className="mb-2 text-[#555]"><strong className="text-[#1e2a38]">Name:</strong> {user.displayName || 'N/A'}</p>
          <p className="text-[#555]"><strong className="text-[#1e2a38]">Email:</strong> {user.email}</p>
        </div>
        <button
          onClick={handleSignOut}
          className="w-full py-3 px-4 bg-gradient-to-br from-[#f21b6a] to-[#fb6da0] text-white font-semibold rounded-lg transition-colors duration-300 hover:from-[#e60b5e] hover:to-[#f94e8b]"
        >
          Sign Out
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 rounded-2xl max-w-md mx-auto shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
      <h2 className="text-2xl font-semibold mb-6 text-[#1e2a38] text-center">
        {isLogin ? 'Welcome Back' : 'Create Account'}
      </h2>
      
      {error && (
        <div className="mb-4 p-3 bg-red-100 border border-red-300 text-red-700 rounded-lg text-sm">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {!isLogin && (
          <div>
            <input
              type="text"
              name="displayName"
              placeholder="Full Name"
              value={formData.displayName}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-[#f9f9f9] border border-[#dcdce1] rounded-lg text-[#333] text-sm transition-colors duration-200 focus:border-[#fb6da0] focus:outline-none focus:shadow-[0_0_0_3px_rgba(251,109,160,0.2)] placeholder-[#999]"
              required={!isLogin}
            />
          </div>
        )}
        
        <div>
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-4 py-3 bg-[#f9f9f9] border border-[#dcdce1] rounded-lg text-[#333] text-sm transition-colors duration-200 focus:border-[#fb6da0] focus:outline-none focus:shadow-[0_0_0_3px_rgba(251,109,160,0.2)] placeholder-[#999]"
            required
          />
        </div>
        
        <div>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleInputChange}
            className="w-full px-4 py-3 bg-[#f9f9f9] border border-[#dcdce1] rounded-lg text-[#333] text-sm transition-colors duration-200 focus:border-[#fb6da0] focus:outline-none focus:shadow-[0_0_0_3px_rgba(251,109,160,0.2)] placeholder-[#999]"
            required
            minLength="6"
          />
        </div>
        
        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 px-4 bg-gradient-to-br from-[#f21b6a] to-[#fb6da0] text-white font-semibold rounded-lg transition-colors duration-300 hover:from-[#e60b5e] hover:to-[#f94e8b] disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? 'Please wait...' : (isLogin ? 'Sign In' : 'Create Account')}
        </button>
      </form>

      <div className="mt-6 text-center">
        <button
          onClick={() => setIsLogin(!isLogin)}
          className="text-[#f15b84] font-medium text-sm hover:underline transition-colors duration-200"
        >
          {isLogin ? 'Need an account? Sign up' : 'Already have an account? Sign in'}
        </button>
      </div>
    </div>
  );
};

export default Auth;
