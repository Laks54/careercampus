'use client';

import MainLayout from '@/components/layout/MainLayout';
import JobList from '@/components/jobs/JobList';

export default function JobsPage() {
  return (
    <MainLayout>
      <div className="py-8 bg-gray-50 dark:bg-gray-900 min-h-screen">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-2 text-center">All Job Listings</h1>
            <p className="text-gray-600 dark:text-gray-400 text-center mb-8">
              Find the perfect opportunity for your career
            </p>
          </div>
          
          <JobList />
        </div>
      </div>
    </MainLayout>
  );
} 