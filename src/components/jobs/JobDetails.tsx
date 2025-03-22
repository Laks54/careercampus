'use client';

import { useEffect, useState } from 'react';
import { useJobStore } from '@/store/jobStore';
import { useAuthStore } from '@/store/authStore';
import { JobListing } from '@/types';

interface JobDetailsProps {
  jobId: string;
}

export default function JobDetails({ jobId }: JobDetailsProps) {
  const { jobs, isLoading, error } = useJobStore();
  const { user, isAuthenticated } = useAuthStore();
  const [job, setJob] = useState<JobListing | null>(null);
  const [isApplying, setIsApplying] = useState(false);
  const [applicationSubmitted, setApplicationSubmitted] = useState(false);

  useEffect(() => {
    const foundJob = jobs.find((j) => j.id === jobId);
    setJob(foundJob || null);
  }, [jobs, jobId]);

  const handleApply = async () => {
    if (!isAuthenticated) {
      // In a real app, we would redirect to login
      alert('Please log in to apply for this job');
      return;
    }

    setIsApplying(true);
    try {
      // Simulate API call to submit application
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setApplicationSubmitted(true);
    } catch (err) {
      console.error(err);
    } finally {
      setIsApplying(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-10">
        <p className="text-red-500">{error}</p>
        <p>Please try again later.</p>
      </div>
    );
  }

  if (!job) {
    return (
      <div className="text-center py-10">
        <p className="text-red-500">Job not found</p>
        <p>The job you're looking for doesn't exist or has been removed.</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6">
        <div className="mb-6">
          <div className="flex justify-between items-start">
            <h1 className="text-3xl font-bold mb-2">{job.title}</h1>
            <span className="px-3 py-1 rounded-full text-sm bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
              {job.type.replace('_', ' ')}
            </span>
          </div>
          <div className="text-gray-600 dark:text-gray-400">
            <p className="text-xl font-medium text-gray-800 dark:text-gray-200">{job.company}</p>
            <p>{job.location}</p>
            {job.salary && <p className="font-medium mt-1">{job.salary}</p>}
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-3">Job Description</h2>
          <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line">
            {job.description}
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-3">Requirements</h2>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
            {job.requirements.map((req, index) => (
              <li key={index}>{req}</li>
            ))}
          </ul>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 pt-6 mt-6">
          {applicationSubmitted ? (
            <div className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 p-4 rounded-md mb-6">
              <p className="font-medium">Application Submitted!</p>
              <p className="text-sm mt-1">Thank you for applying to this position. The employer will review your application.</p>
            </div>
          ) : (
            <button
              onClick={handleApply}
              disabled={isApplying}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-medium disabled:opacity-75 disabled:cursor-not-allowed"
            >
              {isApplying ? 'Submitting...' : 'Apply Now'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
} 