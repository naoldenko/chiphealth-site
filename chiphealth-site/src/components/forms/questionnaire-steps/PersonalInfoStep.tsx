'use client';

import { useFormContext } from 'react-hook-form';
import { QuestionnaireFormSchema } from '@/lib/validation/questionnaire-schema';
import { Age, TherapyExperience } from '@/lib/types/questionnaire';

const ageOptions: { value: Age; label: string }[] = [
  { value: 'under18', label: 'Under 18' },
  { value: '18-24', label: '18-24' },
  { value: '25-34', label: '25-34' },
  { value: '35-44', label: '35-44' },
  { value: '45+', label: '45+' },
];

const experienceOptions: { value: TherapyExperience; label: string }[] = [
  { value: 'first-time', label: 'This is my first time seeking therapy' },
  { value: 'returned', label: 'I have been in therapy before, but not currently' },
  { value: 'currently-in-therapy', label: 'I am currently in therapy' },
];

const PersonalInfoStep = () => {
  const { register, formState: { errors } } = useFormContext<QuestionnaireFormSchema>();

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold mb-4 text-[#685a4e] dark:text-white">Tell us about yourself</h2>
        <p className="text-gray-700 dark:text-white mb-6">
          This helps us find the right therapist for your specific needs.
        </p>
      </div>

      {/* Age Selection */}
      <div className="mb-6">
        <label className="block text-gray-700 dark:text-white font-medium mb-2">
          What is your age range?
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {ageOptions.map((option) => (
            <div key={option.value} className="relative">
              <input
                type="radio"
                id={`age-${option.value}`}
                value={option.value}
                {...register('age')}
                className="absolute opacity-0 w-full h-full cursor-pointer z-10"
              />
              <label
                htmlFor={`age-${option.value}`}
                className="block p-3 border border-[#685a4e] rounded-md cursor-pointer transition-colors hover:border-[#685a4e] peer-checked:border-[#685a4e] peer-checked:bg-[#e6ded6] dark:text-white dark:border-white dark:hover:border-[#e6ded6] dark:peer-checked:border-white dark:peer-checked:bg-[#685a4e]"
              >
                {option.label}
              </label>
            </div>
          ))}
        </div>
        {errors.age && (
          <p className="mt-1 text-[#f44336] text-sm">{errors.age.message}</p>
        )}
      </div>

      {/* Location */}
      <div className="mb-6">
        <label htmlFor="location" className="block text-gray-700 dark:text-white font-medium mb-2">
          Where are you located? (City, State)
        </label>
        <input
          id="location"
          type="text"
          placeholder="e.g., San Francisco, CA"
          {...register('location')}
          className="form-input"
        />
        {errors.location && (
          <p className="mt-1 text-[#f44336] text-sm">{errors.location.message}</p>
        )}
      </div>

      {/* Therapy Experience */}
      <div className="mb-6">
        <label className="block text-gray-700 dark:text-white font-medium mb-2">
          What is your experience with therapy?
        </label>
        <div className="space-y-3">
          {experienceOptions.map((option) => (
            <div key={option.value} className="relative">
              <input
                type="radio"
                id={`experience-${option.value}`}
                value={option.value}
                {...register('therapyExperience')}
                className="absolute opacity-0 w-full h-full cursor-pointer z-10"
              />
              <label
                htmlFor={`experience-${option.value}`}
                className="block p-3 border border-[#685a4e] rounded-md cursor-pointer transition-colors hover:border-[#685a4e] peer-checked:border-[#685a4e] peer-checked:bg-[#e6ded6] dark:text-white dark:border-white dark:hover:border-[#e6ded6] dark:peer-checked:border-white dark:peer-checked:bg-[#685a4e]"
              >
                {option.label}
              </label>
            </div>
          ))}
        </div>
        {errors.therapyExperience && (
          <p className="mt-1 text-[#f44336] text-sm">{errors.therapyExperience.message}</p>
        )}
      </div>
    </div>
  );
};

export default PersonalInfoStep; 