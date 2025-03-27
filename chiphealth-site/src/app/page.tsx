import Link from 'next/link';
import { ArrowRight, Heart, Shield, Search } from 'lucide-react';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#685a4e] to-white dark:from-[#564939] dark:to-[#685a4e] py-16 md:py-24">
        <div className="container-custom text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 max-w-4xl mx-auto">
            Finding the Right Eating Disorder Therapist Shouldn't Be Hard
          </h1>
          <p className="text-lg md:text-xl text-white mb-8 max-w-2xl mx-auto">
            We help youth connect with the eating disorder specialists who are right for them. Answer a few questions and get matched today.
          </p>
          <div className="flex justify-center">
            <Link href="/questionnaire" className="btn-secondary dark:bg-white dark:text-[#685a4e]">
              Find Your Therapist
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-[#e6ded6] dark:bg-[#564939]">
        <div className="container-custom">
          <h2 className="heading-2 text-center mb-12">How Chip Health Works</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card flex flex-col items-center text-center">
              <div className="bg-[#685a4e] p-4 rounded-full mb-6">
                <Search className="h-8 w-8 text-white" />
              </div>
              <h3 className="heading-3 mb-4">Answer Our Questionnaire</h3>
              <p className="text-gray-600 dark:text-white">
                Tell us about your needs, preferences, and location to help us find the right therapist for you.
              </p>
            </div>
            
            <div className="card flex flex-col items-center text-center">
              <div className="bg-[#685a4e] p-4 rounded-full mb-6">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="heading-3 mb-4">Get Guardian Approval</h3>
              <p className="text-gray-600 dark:text-white">
                If you're under 18, we'll securely collect your guardian's consent to keep everything safe and proper.
              </p>
            </div>
            
            <div className="card flex flex-col items-center text-center">
              <div className="bg-[#685a4e] p-4 rounded-full mb-6">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="heading-3 mb-4">Connect With Therapists</h3>
              <p className="text-gray-600 dark:text-white">
                Browse your personalized list of eating disorder specialists and connect directly with them.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link href="/questionnaire" className="inline-flex items-center text-[#685a4e] hover:text-[#564939] font-bold dark:text-white dark:hover:text-[#e6ded6]">
              Start Finding Your Therapist <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#685a4e] text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Find Your Therapist?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Take the first step towards recovery with a therapist who understands your unique journey.
          </p>
          <Link href="/questionnaire" className="btn-secondary dark:bg-white dark:text-[#685a4e]">
            Start Now
          </Link>
        </div>
      </section>
    </div>
  );
}
