import Link from 'next/link';
import { Scale, AlertTriangle, BookOpen, MessageSquare } from 'lucide-react';

export const metadata = {
  title: 'Terms of Service | Chip Health',
  description: 'Chip Health\'s terms of service outline the rules and guidelines for using our therapy matching platform.',
};

export default function TermsOfServicePage() {
  return (
    <div className="bg-[#e6ded6] dark:bg-[#564939] min-h-screen py-12">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="heading-1 mb-4">Terms of Service</h1>
          <p className="text-gray-700 dark:text-white max-w-3xl mx-auto">
            Please read these terms carefully before using the Chip Health platform.
          </p>
          <p className="text-gray-700 dark:text-white mt-2">
            Last Updated: March 27, 2023
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-white dark:bg-[#564939] rounded-lg shadow-md p-8 mb-10 border-l-4 border-[#685a4e] dark:border-white">
          <div className="prose dark:prose-invert max-w-none text-gray-700 dark:text-white">
            <h2 className="text-xl font-semibold text-[#685a4e] dark:text-white mb-4">1. Agreement to Terms</h2>
            <p>
              By accessing or using Chip Health's platform, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our service.
            </p>
            <p>
              These Terms constitute a legally binding agreement between you and Chip Health regarding your use of our platform that connects youth with eating disorder therapists.
            </p>

            <h2 className="text-xl font-semibold text-[#685a4e] dark:text-white mt-8 mb-4">2. Service Description</h2>
            <p>
              Chip Health provides a platform designed to help youth find appropriate eating disorder therapists based on their specific needs and preferences. Our service includes:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>A questionnaire to gather information about your therapy needs</li>
              <li>A matching algorithm to connect you with appropriate therapists</li>
              <li>A guardian consent system for users under 18</li>
              <li>Information about potential therapist matches</li>
            </ul>

            <h2 className="text-xl font-semibold text-[#685a4e] dark:text-white mt-8 mb-4">3. Eligibility</h2>
            <p>
              Our service is available to individuals of all ages seeking eating disorder therapy. However, users under 18 years of age must:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Have permission from a parent or legal guardian to use our service</li>
              <li>Provide parent/guardian contact information for consent purposes</li>
              <li>Not proceed with therapist matching until guardian consent is obtained</li>
            </ul>

            <h2 className="text-xl font-semibold text-[#685a4e] dark:text-white mt-8 mb-4">4. Not a Medical Service</h2>
            <p>
              <strong>IMPORTANT:</strong> Chip Health is not a medical service, therapy provider, or healthcare provider. We do not:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Provide medical advice, diagnosis, or treatment</li>
              <li>Guarantee the quality or appropriateness of any therapist</li>
              <li>Create a doctor-patient or therapist-client relationship</li>
              <li>Handle emergencies or crisis situations</li>
            </ul>
            <p className="mt-4">
              If you are experiencing a medical emergency or mental health crisis, please call 911, the National Suicide Prevention Lifeline at 988, or go to your nearest emergency room.
            </p>

            <h2 className="text-xl font-semibold text-[#685a4e] dark:text-white mt-8 mb-4">5. User Accounts and Information</h2>
            <p>
              To use our service, you must provide accurate and complete information. You agree to:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Provide accurate personal information</li>
              <li>Update your information when necessary</li>
              <li>Maintain the confidentiality of any account credentials</li>
              <li>Accept responsibility for all activities that occur under your account</li>
            </ul>

            <h2 className="text-xl font-semibold text-[#685a4e] dark:text-white mt-8 mb-4">6. Privacy</h2>
            <p>
              Your privacy is important to us. Our collection and use of your information is governed by our <Link href="/privacy-policy" className="text-[#685a4e] hover:underline dark:text-[#e6ded6]">Privacy Policy</Link>, which is incorporated into these Terms.
            </p>

            <h2 className="text-xl font-semibold text-[#685a4e] dark:text-white mt-8 mb-4">7. Prohibited Conduct</h2>
            <p>
              You agree not to:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Use our service for any illegal purpose</li>
              <li>Provide false information or impersonate others</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Interfere with the proper functioning of the platform</li>
              <li>Harass, abuse, or harm others through our service</li>
              <li>Violate the rights of therapists listed on our platform</li>
            </ul>

            <h2 className="text-xl font-semibold text-[#685a4e] dark:text-white mt-8 mb-4">8. Intellectual Property</h2>
            <p>
              All content and materials available on Chip Health, including but not limited to text, graphics, logos, icons, images, audio clips, and software, are the property of Chip Health or our licensors and are protected by copyright, trademark, and other intellectual property laws.
            </p>
            <p className="mt-2">
              You may not modify, reproduce, distribute, create derivative works from, publicly display, or exploit in any way any content from our platform without explicit permission.
            </p>

            <h2 className="text-xl font-semibold text-[#685a4e] dark:text-white mt-8 mb-4">9. Disclaimer of Warranties</h2>
            <p>
              OUR SERVICE AND CONTENT ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. TO THE FULLEST EXTENT PERMISSIBLE UNDER APPLICABLE LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
            </p>
            <p className="mt-2">
              WE DO NOT GUARANTEE THE ACCURACY, COMPLETENESS, OR USEFULNESS OF INFORMATION ON OUR PLATFORM, INCLUDING THERAPIST INFORMATION. ANY RELIANCE YOU PLACE ON SUCH INFORMATION IS STRICTLY AT YOUR OWN RISK.
            </p>

            <h2 className="text-xl font-semibold text-[#685a4e] dark:text-white mt-8 mb-4">10. Limitation of Liability</h2>
            <p>
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, CHIP HEALTH SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING OUT OF OR RELATING TO YOUR USE OF OUR SERVICE.
            </p>

            <h2 className="text-xl font-semibold text-[#685a4e] dark:text-white mt-8 mb-4">11. Modifications to Terms</h2>
            <p>
              We may revise these Terms from time to time. The most current version will always be posted on our website. By continuing to use our service after revisions become effective, you agree to be bound by the revised terms.
            </p>

            <h2 className="text-xl font-semibold text-[#685a4e] dark:text-white mt-8 mb-4">12. Governing Law</h2>
            <p>
              These Terms are governed by the laws of the state of California, without regard to its conflict of law principles.
            </p>

            <h2 className="text-xl font-semibold text-[#685a4e] dark:text-white mt-8 mb-4">13. Contact Information</h2>
            <p>
              If you have any questions about these Terms, please contact us at:
            </p>
            <p className="mt-2">
              <strong>Email:</strong> legal@chiphealth.org
            </p>
          </div>
        </div>

        {/* Key Points Section */}
        <div className="mb-10">
          <h2 className="heading-2 text-center mb-8">Key Points to Remember</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white dark:bg-[#564939] rounded-lg shadow-md p-6 flex flex-col items-center text-center border-l-4 border-[#685a4e] dark:border-white">
              <div className="bg-[#e6ded6] dark:bg-[#685a4e] p-4 rounded-full mb-4">
                <Scale className="h-6 w-6 text-[#685a4e] dark:text-white" />
              </div>
              <h3 className="text-lg font-semibold text-[#685a4e] dark:text-white mb-2">Not Medical Advice</h3>
              <p className="text-gray-700 dark:text-white">
                We connect you with therapists but don't provide medical advice or therapy.
              </p>
            </div>
            
            <div className="bg-white dark:bg-[#564939] rounded-lg shadow-md p-6 flex flex-col items-center text-center border-l-4 border-[#685a4e] dark:border-white">
              <div className="bg-[#e6ded6] dark:bg-[#685a4e] p-4 rounded-full mb-4">
                <AlertTriangle className="h-6 w-6 text-[#685a4e] dark:text-white" />
              </div>
              <h3 className="text-lg font-semibold text-[#685a4e] dark:text-white mb-2">For Emergencies</h3>
              <p className="text-gray-700 dark:text-white">
                Call 911 or 988 for crises—we're not an emergency service.
              </p>
            </div>
            
            <div className="bg-white dark:bg-[#564939] rounded-lg shadow-md p-6 flex flex-col items-center text-center border-l-4 border-[#685a4e] dark:border-white">
              <div className="bg-[#e6ded6] dark:bg-[#685a4e] p-4 rounded-full mb-4">
                <BookOpen className="h-6 w-6 text-[#685a4e] dark:text-white" />
              </div>
              <h3 className="text-lg font-semibold text-[#685a4e] dark:text-white mb-2">Use Honestly</h3>
              <p className="text-gray-700 dark:text-white">
                Provide accurate information to get the best therapist matches.
              </p>
            </div>
            
            <div className="bg-white dark:bg-[#564939] rounded-lg shadow-md p-6 flex flex-col items-center text-center border-l-4 border-[#685a4e] dark:border-white">
              <div className="bg-[#e6ded6] dark:bg-[#685a4e] p-4 rounded-full mb-4">
                <MessageSquare className="h-6 w-6 text-[#685a4e] dark:text-white" />
              </div>
              <h3 className="text-lg font-semibold text-[#685a4e] dark:text-white mb-2">Contact Us</h3>
              <p className="text-gray-700 dark:text-white">
                Reach out if you have questions about our terms or service.
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
              href="/accessibility" 
              className="bg-[#e6ded6] hover:bg-[#d7cbc0] text-[#685a4e] font-bold py-2 px-4 rounded-md transition-all"
            >
              Accessibility Statement
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 