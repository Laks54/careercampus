'use client';

import { useEffect } from 'react';
import { useJobStore } from '@/store/jobStore';
import JobCard from './JobCard';
import SearchBar from './SearchBar';

export default function JobList() {
  const { filteredJobs, isLoading, error } = useJobStore();

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

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6 text-center">Available Job Opportunities</h2>
      
      <SearchBar />
      
      {filteredJobs.length === 0 ? (
        <div className="text-center py-10">
          <p className="text-gray-600 dark:text-gray-400">No jobs found matching your search criteria.</p>
          <p className="mt-2">Try different keywords or browse all jobs.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredJobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      )}
    </div>
  );
} 