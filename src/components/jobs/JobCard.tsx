'use client';

import Link from 'next/link';
import { JobListing } from '@/types';

interface JobCardProps {
  job: JobListing;
}

export default function JobCard({ job }: JobCardProps) {
  // Format date to be more readable
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    }).format(date);
  };

  // Determine badge color based on job type
  const getBadgeColor = (type: string) => {
    switch (type) {
      case 'FULL_TIME':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'PART_TIME':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'CONTRACT':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
      case 'REMOTE':
        return 'bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200';
    }
  };

  return (
    <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow bg-white dark:bg-gray-900">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-semibold">{job.title}</h3>
        <span className={`text-xs px-2 py-1 rounded-full ${getBadgeColor(job.type)}`}>
          {job.type.replace('_', ' ')}
        </span>
      </div>
      
      <div className="mb-4">
        <p className="text-gray-700 dark:text-gray-300 font-medium">{job.company}</p>
        <p className="text-gray-600 dark:text-gray-400">{job.location}</p>
      </div>
      
      <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
        {job.description}
      </p>
      
      <div className="flex justify-between items-center">
        {job.salary && (
          <span className="text-gray-700 dark:text-gray-300 font-medium">
            {job.salary}
          </span>
        )}
        <span className="text-gray-500 dark:text-gray-500 text-sm">
          Posted on {formatDate(job.createdAt)}
        </span>
      </div>
      
      <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-800">
        <Link 
          href={`/jobs/${job.id}`}
          className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
        >
          View Details →
        </Link>
      </div>
    </div>
  );
} 