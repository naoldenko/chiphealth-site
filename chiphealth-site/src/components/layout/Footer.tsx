import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#e6ded6] dark:bg-[#564939] py-8 border-t-2 border-[#685a4e] dark:border-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-[#685a4e] dark:text-white mb-4">Chip Health</h3>
            <p className="text-gray-700 dark:text-white mb-4">
              Helping youth with eating disorders find the right therapist.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-[#685a4e] dark:text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/" 
                  className="text-gray-700 hover:text-[#685a4e] dark:text-white dark:hover:text-[#e6ded6] transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  href="/questionnaire" 
                  className="text-gray-700 hover:text-[#685a4e] dark:text-white dark:hover:text-[#e6ded6] transition-colors"
                >
                  Find a Therapist
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-[#685a4e] dark:text-white mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/privacy-policy" 
                  className="text-gray-700 hover:text-[#685a4e] dark:text-white dark:hover:text-[#e6ded6] transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link 
                  href="/terms-of-service" 
                  className="text-gray-700 hover:text-[#685a4e] dark:text-white dark:hover:text-[#e6ded6] transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link 
                  href="/accessibility" 
                  className="text-gray-700 hover:text-[#685a4e] dark:text-white dark:hover:text-[#e6ded6] transition-colors"
                >
                  Accessibility
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-[#685a4e] dark:border-white">
          <p className="text-center text-[#685a4e] font-medium dark:text-white">
            &copy; {currentYear} Chip Health. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 