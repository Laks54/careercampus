'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import MainLayout from '@/components/layout/MainLayout';
import { useAuthStore } from '@/store/authStore';
import { useJobStore } from '@/store/jobStore';
import JobCard from '@/components/jobs/JobCard';

export default function DashboardPage() {
  const { user, isAuthenticated } = useAuthStore();
  const { jobs } = useJobStore();
  const router = useRouter();

  // Redirect if not authenticated or not a company
  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/auth');
    } else if (user?.role !== 'COMPANY') {
      router.push('/');
    }
  }, [isAuthenticated, user, router]);

  // Filter jobs to only show the ones posted by this company
  const companyJobs = jobs.filter(job => job.postedBy === user?.id);

  if (!isAuthenticated || user?.role !== 'COMPANY') {
    return null; // Don't render anything during redirect
  }

  return (
    <MainLayout>
      <div className="py-8 bg-gray-50 dark:bg-gray-900 min-h-screen">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-3xl font-bold">Company Dashboard</h1>
              <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md">
                Post New Job
              </button>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-xl font-semibold mb-4">Your Posted Jobs</h2>
              
              {companyJobs.length === 0 ? (
                <div className="text-center py-6">
                  <p className="text-gray-600 dark:text-gray-400">You haven't posted any jobs yet.</p>
                  <p className="mt-2">Click "Post New Job" to get started.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {companyJobs.map(job => (
                    <JobCard key={job.id} job={job} />
                  ))}
                </div>
              )}
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">Job Applications</h2>
              
              <div className="text-center py-6">
                <p className="text-gray-600 dark:text-gray-400">
                  No applications to display at this time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
} 