'use client';

import { useFormContext } from 'react-hook-form';
import { QuestionnaireFormSchema } from '@/lib/validation/questionnaire-schema';
import { InsuranceStatus } from '@/lib/types/questionnaire';
import { useEffect } from 'react';

const insuranceOptions: { value: InsuranceStatus; label: string }[] = [
  { value: 'has-insurance', label: 'I have insurance and want to use it' },
  { value: 'self-pay', label: 'I plan to self-pay (no insurance)' },
  { value: 'sliding-scale', label: 'I\'m looking for sliding scale options' },
  { value: 'not-sure', label: 'I\'m not sure / Need to figure this out' },
];

const InsuranceStep = () => {
  const { register, watch, formState: { errors }, setValue, clearErrors } = useFormContext<QuestionnaireFormSchema>();
  
  const insuranceStatus = watch('insuranceStatus');
  const hasInsurance = insuranceStatus === 'has-insurance';
  
  // Clear insurance provider if user doesn't select "has-insurance"
  useEffect(() => {
    if (!hasInsurance) {
      setValue('insuranceProvider', '');
      clearErrors('insuranceProvider');
    }
  }, [hasInsurance, setValue, clearErrors]);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold mb-4 text-primary">Insurance Information</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Please tell us about your insurance situation so we can find therapists that work with your coverage.
        </p>
      </div>

      {/* Insurance Status */}
      <div className="mb-6">
        <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
          What is your insurance situation?
        </label>
        <div className="space-y-3">
          {insuranceOptions.map((option) => (
            <div key={option.value} className="relative">
              <input
                type="radio"
                id={`insurance-${option.value}`}
                value={option.value}
                {...register('insuranceStatus')}
                className="absolute opacity-0 w-full h-full cursor-pointer z-10"
              />
              <label
                htmlFor={`insurance-${option.value}`}
                className="block p-3 border border-gray-300 rounded-md cursor-pointer transition-colors hover:border-primary peer-checked:border-primary peer-checked:bg-secondary"
              >
                {option.label}
              </label>
            </div>
          ))}
        </div>
        {errors.insuranceStatus && (
          <p className="mt-1 text-error text-sm">{errors.insuranceStatus.message}</p>
        )}
      </div>

      {/* Insurance Provider (conditional) */}
      {hasInsurance && (
        <div className="mb-6">
          <label htmlFor="insuranceProvider" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
            Who is your insurance provider?
          </label>
          <input
            id="insuranceProvider"
            type="text"
            placeholder="e.g., Blue Cross Blue Shield, Aetna, Cigna, etc."
            {...register('insuranceProvider')}
            className="form-input"
          />
          {errors.insuranceProvider && (
            <p className="mt-1 text-error text-sm">{errors.insuranceProvider.message}</p>
          )}
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            We'll use this to match you with therapists who accept your insurance.
          </p>
        </div>
      )}
    </div>
  );
};

export default InsuranceStep; 