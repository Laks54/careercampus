'use client';

import Link from 'next/link';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { useAuthStore } from '@/store/authStore';

export default function Header() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const { user, isAuthenticated, logout } = useAuthStore();

  // After mounting, we have access to the theme
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <header className="py-4 border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          JobBoard
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/jobs" className="hover:text-blue-600 dark:hover:text-blue-400">
            Browse Jobs
          </Link>
          {isAuthenticated && user?.role === 'COMPANY' && (
            <Link href="/dashboard" className="hover:text-blue-600 dark:hover:text-blue-400">
              Dashboard
            </Link>
          )}
          {isAuthenticated ? (
            <div className="flex items-center space-x-4">
              <span>Hello, {user?.name}</span>
              <button
                onClick={() => logout()}
                className="px-4 py-2 rounded bg-red-100 hover:bg-red-200 text-red-700 dark:bg-red-900 dark:hover:bg-red-800 dark:text-red-200"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link
              href="/auth"
              className="px-4 py-2 rounded bg-blue-600 hover:bg-blue-700 text-white"
            >
              Login
            </Link>
          )}
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-800"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? '🌞' : '🌙'}
          </button>
        </nav>

        {/* Mobile menu button - would implement dropdown in a real app */}
        <button className="md:hidden p-2">
          ☰
        </button>
      </div>
    </header>
  );
} 