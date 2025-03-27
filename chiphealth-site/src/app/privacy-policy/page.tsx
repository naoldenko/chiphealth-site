import Link from 'next/link';
import { Shield, Lock, Eye, FileText } from 'lucide-react';

export const metadata = {
  title: 'Privacy Policy | Chip Health',
  description: 'Chip Health\'s privacy policy details how we collect, use, and protect your information while using our therapy matching services.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-[#e6ded6] dark:bg-[#564939] min-h-screen py-12">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="heading-1 mb-4">Privacy Policy</h1>
          <p className="text-gray-700 dark:text-white max-w-3xl mx-auto">
            At Chip Health, we take your privacy seriously. This policy explains how we collect, use, and protect your information.
          </p>
          <p className="text-gray-700 dark:text-white mt-2">
            Last Updated: March 27, 2023
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-white dark:bg-[#564939] rounded-lg shadow-md p-8 mb-10 border-l-4 border-[#685a4e] dark:border-white">
          <div className="prose dark:prose-invert max-w-none text-gray-700 dark:text-white">
            <h2 className="text-xl font-semibold text-[#685a4e] dark:text-white mb-4">1. Information We Collect</h2>
            <p>
              We collect information that you provide directly to us when using the Chip Health platform, including:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Personal Information:</strong> Name, email address, phone number, and age range.
              </li>
              <li>
                <strong>Location Information:</strong> City and state to help match you with nearby therapists.
              </li>
              <li>
                <strong>Health Information:</strong> Information about your eating disorder concerns and therapy preferences. This information is considered protected health information.
              </li>
              <li>
                <strong>Guardian Information:</strong> For users under 18, we collect parent/guardian contact information for consent purposes.
              </li>
            </ul>

            <h2 className="text-xl font-semibold text-[#685a4e] dark:text-white mt-8 mb-4">2. How We Use Your Information</h2>
            <p>
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Match you with appropriate eating disorder therapists based on your needs and preferences.</li>
              <li>Communicate with you about our services and your therapist matches.</li>
              <li>Obtain guardian consent for minors seeking therapy services.</li>
              <li>Improve our matching algorithm and user experience.</li>
              <li>Maintain the security and functionality of our platform.</li>
            </ul>

            <h2 className="text-xl font-semibold text-[#685a4e] dark:text-white mt-8 mb-4">3. Information Sharing</h2>
            <p>
              We understand the sensitive nature of mental health information. We share your information only in these limited circumstances:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Therapist Matching:</strong> We share necessary information with potential therapist matches to facilitate appropriate care.
              </li>
              <li>
                <strong>Service Providers:</strong> We may share information with trusted third parties who help us operate our platform.
              </li>
              <li>
                <strong>Legal Requirements:</strong> We may disclose information if required by law or to protect rights and safety.
              </li>
            </ul>
            <p>
              We will never sell your personal information to advertisers or other third parties.
            </p>

            <h2 className="text-xl font-semibold text-[#685a4e] dark:text-white mt-8 mb-4">4. Protection of Minors</h2>
            <p>
              As our service is designed to help youth find appropriate therapy, we take additional care with information from users under 18:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>We require parental/guardian consent before processing minor's information.</li>
              <li>We limit the information collected from minors to what is necessary for our service.</li>
              <li>Parents/guardians can review, modify, or request deletion of their child's information.</li>
            </ul>

            <h2 className="text-xl font-semibold text-[#685a4e] dark:text-white mt-8 mb-4">5. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal information:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Encryption of sensitive data in transit and at rest.</li>
              <li>Regular security assessments and updates.</li>
              <li>Staff training on privacy and security practices.</li>
              <li>Limited access to personal information on a need-to-know basis.</li>
            </ul>

            <h2 className="text-xl font-semibold text-[#685a4e] dark:text-white mt-8 mb-4">6. Your Rights</h2>
            <p>
              You have the right to:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Access the personal information we hold about you.</li>
              <li>Correct inaccurate information.</li>
              <li>Request deletion of your information when no longer needed.</li>
              <li>Withdraw consent at any time.</li>
              <li>Lodge a complaint with a supervisory authority if you believe your rights have been violated.</li>
            </ul>

            <h2 className="text-xl font-semibold text-[#685a4e] dark:text-white mt-8 mb-4">7. Changes to This Policy</h2>
            <p>
              We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last Updated" date. We encourage you to review this privacy policy periodically.
            </p>

            <h2 className="text-xl font-semibold text-[#685a4e] dark:text-white mt-8 mb-4">8. Contact Us</h2>
            <p>
              If you have any questions about this privacy policy or our data practices, please contact us at:
            </p>
            <p className="mt-2">
              <strong>Email:</strong> privacy@chiphealth.org
            </p>
          </div>
        </div>

        {/* Privacy Principles Section */}
        <div className="mb-10">
          <h2 className="heading-2 text-center mb-8">Our Privacy Principles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white dark:bg-[#564939] rounded-lg shadow-md p-6 flex flex-col items-center text-center border-l-4 border-[#685a4e] dark:border-white">
              <div className="bg-[#e6ded6] dark:bg-[#685a4e] p-4 rounded-full mb-4">
                <Shield className="h-6 w-6 text-[#685a4e] dark:text-white" />
              </div>
              <h3 className="text-lg font-semibold text-[#685a4e] dark:text-white mb-2">Protection</h3>
              <p className="text-gray-700 dark:text-white">
                We protect your data with industry-standard security measures.
              </p>
            </div>
            
            <div className="bg-white dark:bg-[#564939] rounded-lg shadow-md p-6 flex flex-col items-center text-center border-l-4 border-[#685a4e] dark:border-white">
              <div className="bg-[#e6ded6] dark:bg-[#685a4e] p-4 rounded-full mb-4">
                <Lock className="h-6 w-6 text-[#685a4e] dark:text-white" />
              </div>
              <h3 className="text-lg font-semibold text-[#685a4e] dark:text-white mb-2">Confidentiality</h3>
              <p className="text-gray-700 dark:text-white">
                Your health information is kept strictly confidential.
              </p>
            </div>
            
            <div className="bg-white dark:bg-[#564939] rounded-lg shadow-md p-6 flex flex-col items-center text-center border-l-4 border-[#685a4e] dark:border-white">
              <div className="bg-[#e6ded6] dark:bg-[#685a4e] p-4 rounded-full mb-4">
                <Eye className="h-6 w-6 text-[#685a4e] dark:text-white" />
              </div>
              <h3 className="text-lg font-semibold text-[#685a4e] dark:text-white mb-2">Transparency</h3>
              <p className="text-gray-700 dark:text-white">
                We're clear about what data we collect and how we use it.
              </p>
            </div>
            
            <div className="bg-white dark:bg-[#564939] rounded-lg shadow-md p-6 flex flex-col items-center text-center border-l-4 border-[#685a4e] dark:border-white">
              <div className="bg-[#e6ded6] dark:bg-[#685a4e] p-4 rounded-full mb-4">
                <FileText className="h-6 w-6 text-[#685a4e] dark:text-white" />
              </div>
              <h3 className="text-lg font-semibold text-[#685a4e] dark:text-white mb-2">Control</h3>
              <p className="text-gray-700 dark:text-white">
                You maintain control over your personal information.
              </p>
            </div>
          </div>
        </div>

        {/* Other Policies Section */}
        <div className="text-center">
          <h2 className="heading-3 mb-6">Other Policies</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/terms-of-service" 
              className="bg-[#685a4e] hover:bg-[#564939] text-white font-medium py-2 px-4 rounded-md transition-all"
            >
              Terms of Service
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