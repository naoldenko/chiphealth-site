'use client';

import { useFormContext } from 'react-hook-form';
import { QuestionnaireFormSchema } from '@/lib/validation/questionnaire-schema';
import { Info } from 'lucide-react';

const GuardianConsentStep = () => {
  const { register, formState: { errors } } = useFormContext<QuestionnaireFormSchema>();

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold mb-4 text-primary">Guardian Consent</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Since you're under 18, we need a parent or guardian's permission before connecting you with a therapist.
          This is to ensure your safety and comply with regulations.
        </p>
      </div>

      {/* Guardian Information Section */}
      <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-md border border-gray-200 dark:border-gray-700 mb-6">
        <div className="flex items-start">
          <div className="flex-shrink-0 mt-1">
            <Info className="h-5 w-5 text-primary" />
          </div>
          <div className="ml-3">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              We'll send an email to your guardian asking for their consent. Once they approve, 
              we'll connect you with matched therapists. Your information remains confidential and secure.
            </p>
          </div>
        </div>
      </div>

      {/* Guardian Name */}
      <div className="mb-4">
        <label htmlFor="guardianName" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
          Guardian's Full Name
        </label>
        <input
          id="guardianName"
          type="text"
          placeholder="Full Name"
          {...register('guardianInfo.name')}
          className="form-input"
        />
        {errors.guardianInfo?.name && (
          <p className="mt-1 text-error text-sm">{errors.guardianInfo.name.message}</p>
        )}
      </div>

      {/* Guardian Email */}
      <div className="mb-4">
        <label htmlFor="guardianEmail" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
          Guardian's Email Address
        </label>
        <input
          id="guardianEmail"
          type="email"
          placeholder="guardian@email.com"
          {...register('guardianInfo.email')}
          className="form-input"
        />
        {errors.guardianInfo?.email && (
          <p className="mt-1 text-error text-sm">{errors.guardianInfo.email.message}</p>
        )}
        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
          We'll send a verification email to this address.
        </p>
      </div>

      {/* Guardian Relationship */}
      <div className="mb-4">
        <label htmlFor="guardianRelationship" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
          Relationship to You
        </label>
        <input
          id="guardianRelationship"
          type="text"
          placeholder="e.g., Parent, Legal Guardian, etc."
          {...register('guardianInfo.relationship')}
          className="form-input"
        />
        {errors.guardianInfo?.relationship && (
          <p className="mt-1 text-error text-sm">{errors.guardianInfo.relationship.message}</p>
        )}
      </div>

      {/* Consent Checkbox */}
      <div className="mb-4">
        <div className="relative flex items-start">
          <div className="flex items-center h-5">
            <input
              id="guardianConsent"
              type="checkbox"
              {...register('guardianConsent')}
              className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary focus:ring-offset-0"
            />
          </div>
          <div className="ml-3 text-sm">
            <label htmlFor="guardianConsent" className="font-medium text-gray-700 dark:text-gray-300">
              I confirm that I have permission to provide my guardian's information
            </label>
            <p className="text-gray-500 dark:text-gray-400">
              By checking this box, you confirm that your guardian is aware that you are seeking therapy and that 
              you have permission to provide their contact information.
            </p>
          </div>
        </div>
        {errors.guardianConsent && (
          <p className="mt-1 text-error text-sm">{errors.guardianConsent.message}</p>
        )}
      </div>
    </div>
  );
};

export default GuardianConsentStep; 