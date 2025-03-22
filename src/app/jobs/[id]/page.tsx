'use client';

import { useParams } from 'next/navigation';
import MainLayout from '@/components/layout/MainLayout';
import JobDetails from '@/components/jobs/JobDetails';

export default function JobDetailPage() {
  const params = useParams();
  const jobId = Array.isArray(params.id) ? params.id[0] : params.id;

  if (!jobId) {
    return (
      <MainLayout>
        <div className="py-8 bg-gray-50 dark:bg-gray-900 min-h-screen">
          <div className="text-center py-10">
            <p className="text-red-500">Job ID is missing</p>
            <p>Please go back to the jobs page and try again.</p>
          </div>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="py-8 bg-gray-50 dark:bg-gray-900 min-h-screen">
        <JobDetails jobId={jobId} />
      </div>
    </MainLayout>
  );
} 