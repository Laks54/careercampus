'use client';

import { useState, ChangeEvent, FormEvent } from 'react';
import { useJobStore } from '@/store/jobStore';

export default function SearchBar() {
  const { searchTerm, filterJobs } = useJobStore();
  const [localSearchTerm, setLocalSearchTerm] = useState(searchTerm);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    filterJobs(localSearchTerm);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLocalSearchTerm(e.target.value);
  };

  return (
    <div className="w-full max-w-4xl mx-auto mb-8">
      <form onSubmit={handleSubmit} className="relative">
        <input
          type="text"
          placeholder="Search for jobs, companies, or locations..."
          value={localSearchTerm}
          onChange={handleChange}
          className="w-full py-3 px-4 pr-12 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-900"
        />
        <button
          type="submit"
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </form>
    </div>
  );
} 