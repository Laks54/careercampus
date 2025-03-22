'use client';

import MainLayout from '@/components/layout/MainLayout';
import AuthContainer from '@/components/auth/AuthContainer';

export default function AuthPage() {
  return (
    <MainLayout>
      <div className="py-12 bg-gray-50 dark:bg-gray-900 min-h-screen">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto mb-8 text-center">
            <h1 className="text-3xl font-bold mb-2">Join Our Community</h1>
            <p className="text-gray-600 dark:text-gray-400">
              Sign in or create an account to unlock all features
            </p>
          </div>
          
          <AuthContainer />
        </div>
      </div>
    </MainLayout>
  );
} 