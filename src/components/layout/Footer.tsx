import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">JobBoard</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Find your dream job or post job listings to attract top talent.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/jobs" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                  Browse Jobs
                </Link>
              </li>
              <li>
                <Link href="/auth" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                  Sign In
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                  Company Dashboard
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <address className="not-italic text-gray-600 dark:text-gray-400">
              <p>Email: info@jobboard.com</p>
              <p>Phone: (123) 456-7890</p>
              <p>123 Job Street, Career City</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-800 mt-8 pt-6 text-center text-gray-600 dark:text-gray-400">
          <p>&copy; {new Date().getFullYear()} JobBoard. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 