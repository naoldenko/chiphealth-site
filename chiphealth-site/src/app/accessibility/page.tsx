import Link from 'next/link';
import { Accessibility, Zap, Phone, PenTool } from 'lucide-react';

export const metadata = {
  title: 'Accessibility Statement | Chip Health',
  description: 'Chip Health\'s commitment to making our therapy matching platform accessible to all users, including those with disabilities.',
};

export default function AccessibilityPage() {
  return (
    <div className="bg-[#e6ded6] dark:bg-[#564939] min-h-screen py-12">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="heading-1 mb-4">Accessibility Statement</h1>
          <p className="text-gray-700 dark:text-white max-w-3xl mx-auto">
            Chip Health is committed to ensuring digital accessibility for people of all abilities.
          </p>
          <p className="text-gray-700 dark:text-white mt-2">
            Last Updated: March 27, 2023
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-white dark:bg-[#564939] rounded-lg shadow-md p-8 mb-10 border-l-4 border-[#685a4e] dark:border-white">
          <div className="prose dark:prose-invert max-w-none text-gray-700 dark:text-white">
            <h2 className="text-xl font-semibold text-[#685a4e] dark:text-white mb-4">Our Commitment</h2>
            <p>
              Chip Health is committed to making our website and therapy matching platform accessible to all users, regardless of ability or technology. We strive to comply with the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards and are continually improving the user experience for everyone.
            </p>
            
            <h2 className="text-xl font-semibold text-[#685a4e] dark:text-white mt-8 mb-4">Accessibility Features</h2>
            <p>
              Our website includes the following accessibility features:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Semantic HTML structure for better screen reader compatibility</li>
              <li>Keyboard navigation support throughout the site</li>
              <li>Text alternatives for non-text content</li>
              <li>Sufficient color contrast for text and important graphics</li>
              <li>Responsive design that adapts to different devices and screen sizes</li>
              <li>Dark mode for reduced eye strain and improved readability</li>
              <li>Clear, consistent navigation and page structure</li>
              <li>Form fields with appropriate labels and error messages</li>
            </ul>
            
            <h2 className="text-xl font-semibold text-[#685a4e] dark:text-white mt-8 mb-4">Assistive Technology Compatibility</h2>
            <p>
              We've designed our platform to be compatible with various assistive technologies, including:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Screen readers (such as NVDA, JAWS, and VoiceOver)</li>
              <li>Speech recognition software</li>
              <li>Screen magnification tools</li>
              <li>Alternative input devices</li>
            </ul>
            
            <h2 className="text-xl font-semibold text-[#685a4e] dark:text-white mt-8 mb-4">Known Limitations</h2>
            <p>
              While we strive for comprehensive accessibility, we acknowledge that some content may not yet be fully accessible. We are actively working to improve these areas:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Some older PDF documents may not be fully accessible</li>
              <li>Some third-party content or applications may not fully meet our accessibility standards</li>
              <li>Certain complex interactive features may have limited accessibility</li>
            </ul>
            
            <h2 className="text-xl font-semibold text-[#685a4e] dark:text-white mt-8 mb-4">Alternative Formats</h2>
            <p>
              If you need information in an alternative format, please contact us using the details below. We will make reasonable efforts to provide information in your preferred format within a reasonable timeframe.
            </p>
            
            <h2 className="text-xl font-semibold text-[#685a4e] dark:text-white mt-8 mb-4">Feedback and Assistance</h2>
            <p>
              We welcome your feedback on the accessibility of the Chip Health website. If you encounter accessibility barriers or have suggestions for improvement, please contact us at:
            </p>
            <p className="mt-2">
              <strong>Email:</strong> accessibility@chiphealth.org
            </p>
            <p className="mt-2">
              <strong>Phone:</strong> (555) 123-4567
            </p>
            <p className="mt-2">
              We aim to respond to feedback within 3 business days.
            </p>
            
            <h2 className="text-xl font-semibold text-[#685a4e] dark:text-white mt-8 mb-4">Accommodation Requests</h2>
            <p>
              If you need assistance or have specific accessibility needs when using our therapy matching service, please let us know. We are committed to providing reasonable accommodations to ensure you can effectively use our platform to find suitable therapy support.
            </p>
            
            <h2 className="text-xl font-semibold text-[#685a4e] dark:text-white mt-8 mb-4">Continuous Improvement</h2>
            <p>
              We are continuously working to improve the accessibility of our website through regular testing and addressing identified issues. Our accessibility policy and features will be regularly reviewed and updated as part of our commitment to digital inclusion.
            </p>
          </div>
        </div>

        {/* Accessibility Principles Section */}
        <div className="mb-10">
          <h2 className="heading-2 text-center mb-8">Our Accessibility Principles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white dark:bg-[#564939] rounded-lg shadow-md p-6 flex flex-col items-center text-center border-l-4 border-[#685a4e] dark:border-white">
              <div className="bg-[#e6ded6] dark:bg-[#685a4e] p-4 rounded-full mb-4">
                <Accessibility className="h-6 w-6 text-[#685a4e] dark:text-white" />
              </div>
              <h3 className="text-lg font-semibold text-[#685a4e] dark:text-white mb-2">Inclusive Design</h3>
              <p className="text-gray-700 dark:text-white">
                We design our platform to be usable by people of all abilities.
              </p>
            </div>
            
            <div className="bg-white dark:bg-[#564939] rounded-lg shadow-md p-6 flex flex-col items-center text-center border-l-4 border-[#685a4e] dark:border-white">
              <div className="bg-[#e6ded6] dark:bg-[#685a4e] p-4 rounded-full mb-4">
                <Zap className="h-6 w-6 text-[#685a4e] dark:text-white" />
              </div>
              <h3 className="text-lg font-semibold text-[#685a4e] dark:text-white mb-2">Proactive Approach</h3>
              <p className="text-gray-700 dark:text-white">
                We address accessibility from the beginning of development.
              </p>
            </div>
            
            <div className="bg-white dark:bg-[#564939] rounded-lg shadow-md p-6 flex flex-col items-center text-center border-l-4 border-[#685a4e] dark:border-white">
              <div className="bg-[#e6ded6] dark:bg-[#685a4e] p-4 rounded-full mb-4">
                <Phone className="h-6 w-6 text-[#685a4e] dark:text-white" />
              </div>
              <h3 className="text-lg font-semibold text-[#685a4e] dark:text-white mb-2">Responsive Support</h3>
              <p className="text-gray-700 dark:text-white">
                We provide timely assistance for accessibility needs.
              </p>
            </div>
            
            <div className="bg-white dark:bg-[#564939] rounded-lg shadow-md p-6 flex flex-col items-center text-center border-l-4 border-[#685a4e] dark:border-white">
              <div className="bg-[#e6ded6] dark:bg-[#685a4e] p-4 rounded-full mb-4">
                <PenTool className="h-6 w-6 text-[#685a4e] dark:text-white" />
              </div>
              <h3 className="text-lg font-semibold text-[#685a4e] dark:text-white mb-2">Continuous Testing</h3>
              <p className="text-gray-700 dark:text-white">
                We regularly test and improve our accessibility features.
              </p>
            </div>
          </div>
        </div>

        {/* Other Policies Section */}
        <div className="text-center">
          <h2 className="heading-3 mb-6">Other Policies</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/privacy-policy" 
              className="bg-[#685a4e] hover:bg-[#564939] text-white font-medium py-2 px-4 rounded-md transition-all"
            >
              Privacy Policy
            </Link>
            <Link 
              href="/terms-of-service" 
              className="bg-[#e6ded6] hover:bg-[#d7cbc0] text-[#685a4e] font-bold py-2 px-4 rounded-md transition-all"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 