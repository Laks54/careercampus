import Link from 'next/link';
import MainLayout from '@/components/layout/MainLayout';
import JobList from '@/components/jobs/JobList';

export default function Home() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Find Your Dream Job Today
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Connect with top companies and discover opportunities that match your skills and career goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/jobs" 
              className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-md font-medium text-lg"
            >
              Browse Jobs
            </Link>
            <Link 
              href="/auth" 
              className="bg-transparent border-2 border-white hover:bg-white/10 px-6 py-3 rounded-md font-medium text-lg"
            >
              Post a Job
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Jobs Section */}
      <section className="py-12 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-2">Featured Jobs</h2>
          <p className="text-gray-600 dark:text-gray-400 text-center mb-8">
            Explore our handpicked selection of top opportunities
          </p>
          <JobList />
          <div className="text-center mt-8">
            <Link 
              href="/jobs" 
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium"
            >
              View All Jobs
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Create an Account</h3>
              <p className="text-gray-600 dark:text-gray-400">Sign up in seconds and complete your profile to get started.</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">Find Your Match</h3>
              <p className="text-gray-600 dark:text-gray-400">Search and filter through thousands of listings to find the perfect job.</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">Apply with Ease</h3>
              <p className="text-gray-600 dark:text-gray-400">Submit your application with a single click and track your progress.</p>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
