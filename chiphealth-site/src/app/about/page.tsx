import Link from 'next/link';
import { Heart, LightbulbIcon, Briefcase, UserCheck } from 'lucide-react';

export const metadata = {
  title: 'About Chip Health | Our Mission',
  description: 'Learn about Chip Health\'s mission to help youth with eating disorders find the right therapist for their needs.',
};

export default function AboutPage() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen py-12">
      <div className="container-custom">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="heading-1 mb-6">About Chip Health</h1>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            We're on a mission to make professional eating disorder therapy more accessible to youth by simplifying the process of finding and connecting with the right specialist.
          </p>
        </div>

        {/* Our Story Section */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 mb-16">
          <h2 className="heading-2 mb-6">Our Story</h2>
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-gray-600 dark:text-gray-300">
              Chip Health was founded with a simple but powerful realization: finding the right eating disorder therapist is often an overwhelming challenge at a time when people need support the most.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              After witnessing friends and family struggle to navigate the complex process of finding specialized care for eating disorders, we decided to create a solution that puts the needs of young people first.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              We built Chip Health to remove barriers between those seeking help and the qualified professionals who can provide it. Our platform considers the unique needs of each individual and matches them with therapists who specialize in their specific concerns.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              For young people under 18, we've implemented a thoughtful parental consent process that respects both youth autonomy and the important role guardians play in supporting recovery.
            </p>
          </div>
        </div>

        {/* Our Values Section */}
        <div className="mb-16">
          <h2 className="heading-2 text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 flex flex-col items-center text-center">
              <div className="bg-secondary p-4 rounded-full mb-4">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <h3 className="heading-3 mb-2">Compassion</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We approach our work with deep empathy, understanding that each person's journey with an eating disorder is unique.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 flex flex-col items-center text-center">
              <div className="bg-secondary p-4 rounded-full mb-4">
                <UserCheck className="h-6 w-6 text-primary" />
              </div>
              <h3 className="heading-3 mb-2">Accessibility</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We believe quality mental health care should be accessible to everyone, regardless of background or circumstances.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 flex flex-col items-center text-center">
              <div className="bg-secondary p-4 rounded-full mb-4">
                <Briefcase className="h-6 w-6 text-primary" />
              </div>
              <h3 className="heading-3 mb-2">Excellence</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We maintain high standards in our therapist network and constantly improve our matching process.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 flex flex-col items-center text-center">
              <div className="bg-secondary p-4 rounded-full mb-4">
                <LightbulbIcon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="heading-3 mb-2">Innovation</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We're always looking for new ways to improve the therapy-finding experience through thoughtful technology.
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 mb-16">
          <h2 className="heading-2 mb-6">Why Choose Chip Health</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-medium text-primary mb-2">Specialized for Eating Disorders</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Unlike general therapist directories, we focus exclusively on eating disorder treatment, ensuring you find true specialists in this field.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-medium text-primary mb-2">Youth-Centered Approach</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Our platform is designed with young people in mind, with age-appropriate resources and a guardian consent process that respects autonomy while ensuring safety.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-medium text-primary mb-2">Personalized Matching</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Our questionnaire goes beyond basic preferences to understand your unique needs, helping you find a therapist who's truly right for you.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-medium text-primary mb-2">Ongoing Support</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We're here to help throughout your journey, from finding a therapist to navigating insurance and scheduling your first session.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-primary text-white rounded-lg shadow-md p-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Find Your Therapist?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Take the first step on your journey to recovery with a therapist who understands and specializes in eating disorders.
          </p>
          <Link href="/questionnaire" className="btn-secondary">
            Start Now
          </Link>
        </div>
      </div>
    </div>
  );
} 