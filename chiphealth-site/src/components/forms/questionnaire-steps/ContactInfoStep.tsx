'use client';

import { useFormContext } from 'react-hook-form';
import { QuestionnaireFormSchema } from '@/lib/validation/questionnaire-schema';

const ContactInfoStep = () => {
  const { register, formState: { errors } } = useFormContext<QuestionnaireFormSchema>();

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold mb-4 text-primary">Contact Information</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Please provide your contact details so we can connect you with therapists.
          Your information is kept secure and will only be shared with therapists you choose.
        </p>
      </div>

      {/* Name Field */}
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
          Your Name
        </label>
        <input
          id="name"
          type="text"
          placeholder="Full Name"
          {...register('contactInfo.name')}
          className="form-input"
        />
        {errors.contactInfo?.name && (
          <p className="mt-1 text-error text-sm">{errors.contactInfo.name.message}</p>
        )}
      </div>

      {/* Email Field */}
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
          Email Address
        </label>
        <input
          id="email"
          type="email"
          placeholder="your@email.com"
          {...register('contactInfo.email')}
          className="form-input"
        />
        {errors.contactInfo?.email && (
          <p className="mt-1 text-error text-sm">{errors.contactInfo.email.message}</p>
        )}
        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
          We'll email you with your therapist matches and important updates.
        </p>
      </div>

      {/* Phone Field (Optional) */}
      <div className="mb-4">
        <label htmlFor="phone" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
          Phone Number (Optional)
        </label>
        <input
          id="phone"
          type="tel"
          placeholder="(123) 456-7890"
          {...register('contactInfo.phone')}
          className="form-input"
        />
        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
          Some therapists may prefer to contact you by phone initially.
        </p>
      </div>

      {/* Privacy Notice */}
      <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-md border border-gray-200 dark:border-gray-700 mt-6">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          <span className="font-medium text-primary">Privacy Notice:</span> We take your privacy seriously. Your information is protected and will only be shared with therapists you choose to connect with. Read our full <a href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</a>.
        </p>
      </div>
    </div>
  );
};

export default ContactInfoStep; 