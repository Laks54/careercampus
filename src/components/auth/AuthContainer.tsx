'use client';

import { useState } from 'react';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

export default function AuthContainer() {
  const [activeTab, setActiveTab] = useState<'login' | 'register'>('login');

  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 max-w-md mx-auto">
      <div className="flex mb-6 border-b border-gray-200 dark:border-gray-800">
        <button
          onClick={() => setActiveTab('login')}
          className={`pb-3 px-4 text-center flex-1 ${
            activeTab === 'login'
              ? 'border-b-2 border-blue-600 font-medium text-blue-600 dark:text-blue-400 dark:border-blue-400'
              : 'text-gray-600 dark:text-gray-400'
          }`}
        >
          Login
        </button>
        <button
          onClick={() => setActiveTab('register')}
          className={`pb-3 px-4 text-center flex-1 ${
            activeTab === 'register'
              ? 'border-b-2 border-blue-600 font-medium text-blue-600 dark:text-blue-400 dark:border-blue-400'
              : 'text-gray-600 dark:text-gray-400'
          }`}
        >
          Register
        </button>
      </div>

      <div>
        {activeTab === 'login' ? <LoginForm /> : <RegisterForm />}
      </div>
    </div>
  );
} 