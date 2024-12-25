import React, { useState } from 'react';
import { X, Linkedin, Mail } from 'lucide-react';
import { auth } from '../config/firebase';
import { 
  signInWithPopup, 
  signInWithRedirect, 
  GoogleAuthProvider,
  OAuthProvider 
} from 'firebase/auth';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AuthModal({ isOpen, onClose }: AuthModalProps) {
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  if (!isOpen) return null;

  const handleGoogleLogin = async () => {
    try {
      setError(null);
      setIsLoading(true);
      const provider = new GoogleAuthProvider();
      provider.setCustomParameters({
        prompt: 'select_account'
      });
      
      try {
        // First try popup
        const result = await signInWithPopup(auth, provider);
        if (result.user) {
          onClose();
        }
      } catch (popupError: any) {
        if (popupError.code === 'auth/popup-blocked') {
          // If popup is blocked, fallback to redirect
          await signInWithRedirect(auth, provider);
        } else {
          throw popupError;
        }
      }
    } catch (error: any) {
      console.error('Google login error:', error);
      let errorMessage = 'Failed to sign in with Google. Please try again.';
      
      switch (error.code) {
        case 'auth/cancelled-popup-request':
        case 'auth/popup-closed-by-user':
          errorMessage = 'Sign in was cancelled. Please try again.';
          break;
        case 'auth/unauthorized-domain':
          errorMessage = 'This domain is not authorized. Please contact support.';
          break;
        default:
          errorMessage = error.message || 'An error occurred during sign in.';
      }
      
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  // const handleLinkedInLogin = async () => {
  //   try {
  //     setError(null);
  //     setIsLoading(true);
  //     const provider = new OAuthProvider('oidc.linkedin');
  //     // Add these scopes for LinkedIn
  //     provider.addScope('openid');
  //     provider.addScope('profile');
  //     provider.addScope('email');
  //     provider.setCustomParameters({
  //       'prompt': 'consent'
  //     });
      
  //     try {
  //       // First try popup
  //       const result = await signInWithPopup(auth, provider);
  //       if (result.user) {
  //         onClose();
  //       }
  //     } catch (popupError: any) {
  //       if (popupError.code === 'auth/popup-blocked') {
  //         // If popup is blocked, fallback to redirect
  //         await signInWithRedirect(auth, provider);
  //       } else {
  //         throw popupError;
  //       }
  //     }
  //   } catch (error: any) {
  //     console.error('LinkedIn login error:', error);
  //     let errorMessage = 'Failed to sign in with LinkedIn. Please try again.';
      
  //     switch (error.code) {
  //       case 'auth/cancelled-popup-request':
  //       case 'auth/popup-closed-by-user':
  //         errorMessage = 'Sign in was cancelled. Please try again.';
  //         break;
  //       case 'auth/unauthorized-domain':
  //         errorMessage = 'This domain is not authorized. Please contact support.';
  //         break;
  //       default:
  //         errorMessage = error.message || 'An error occurred during sign in.';
  //     }
      
  //     setError(errorMessage);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  // const handleNaukriLogin = () => {
  //   setError('Naukri login will be available soon. Please use Google authentication for now.');
  // };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 w-96 relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          disabled={isLoading}
        >
          <X className="w-6 h-6" />
        </button>
        
        <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>
        
        {error && (
          <div className="mb-4 p-4 bg-red-50 text-red-700 rounded-lg text-sm">
            {error}
          </div>
        )}
        
        <div className="space-y-4">
          <button
            onClick={handleGoogleLogin}
            disabled={isLoading}
            className={`w-full flex items-center justify-center gap-2 bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded-lg transition-colors ${
              isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-50'
            }`}
          >
            {isLoading ? (
              <div className="w-5 h-5 border-2 border-gray-300 border-t-gray-600 rounded-full animate-spin" />
            ) : (
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
            )}
            {isLoading ? 'Signing in...' : 'Continue with Google'}
          </button>

          {/* <button
            onClick={handleLinkedInLogin}
            disabled={isLoading}
            className={`w-full flex items-center justify-center gap-2 bg-[#0077B5] text-white py-2 px-4 rounded-lg transition-colors ${
              isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#006399]'
            }`}
          >
            <Linkedin className="w-5 h-5" />
            Continue with LinkedIn
          </button>

          <button
            onClick={handleNaukriLogin}
            disabled={isLoading}
            className={`w-full flex items-center justify-center gap-2 bg-[#FF7555] text-white py-2 px-4 rounded-lg transition-colors ${
              isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#FF6B4A]'
            }`}
          >
            <Mail className="w-5 h-5" />
            Continue with Naukri
          </button> */}
        </div>

        <p className="mt-4 text-xs text-gray-500 text-center">
          Note: LinkedIn and Naukri login options will be available soon.
          For now, please use Google authentication.
        </p>
      </div>
    </div>
  );
}