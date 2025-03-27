'use client';

import { useFormContext } from 'react-hook-form';
import { QuestionnaireFormSchema } from '@/lib/validation/questionnaire-schema';
import { TherapistPreference, TherapyType, PreferredTherapyMode } from '@/lib/types/questionnaire';

const therapyTypeOptions: { value: TherapyType; label: string }[] = [
  { value: 'individual', label: 'Individual Therapy' },
  { value: 'group', label: 'Group Therapy' },
  { value: 'family', label: 'Family Therapy' },
  { value: 'not-sure', label: 'I\'m not sure yet' },
];

const therapistPreferenceOptions: { value: TherapistPreference; label: string }[] = [
  { value: 'no-preference', label: 'No Preference' },
  { value: 'female', label: 'Female' },
  { value: 'male', label: 'Male' },
  { value: 'non-binary', label: 'Non-binary' },
  { value: 'other', label: 'Other' },
];

const therapyModeOptions: { value: PreferredTherapyMode; label: string }[] = [
  { value: 'in-person', label: 'In-person sessions' },
  { value: 'virtual', label: 'Virtual sessions (video/phone)' },
  { value: 'both', label: 'Comfortable with both options' },
];

const TherapyPreferencesStep = () => {
  const { register, formState: { errors } } = useFormContext<QuestionnaireFormSchema>();

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold mb-4 text-[#685a4e] dark:text-white">Therapy Preferences</h2>
        <p className="text-gray-700 dark:text-white mb-6">
          Let us know your preferences for therapy to help find the right match.
        </p>
      </div>

      {/* Therapy Type */}
      <div className="mb-6">
        <label className="block text-gray-700 dark:text-white font-medium mb-2">
          What type of therapy are you looking for?
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {therapyTypeOptions.map((option) => (
            <div key={option.value} className="relative">
              <input
                type="radio"
                id={`therapy-type-${option.value}`}
                value={option.value}
                {...register('therapyType')}
                className="absolute opacity-0 w-full h-full cursor-pointer z-10"
              />
              <label
                htmlFor={`therapy-type-${option.value}`}
                className="block p-3 border border-[#685a4e] rounded-md cursor-pointer transition-colors hover:border-[#685a4e] peer-checked:border-[#685a4e] peer-checked:bg-[#e6ded6] dark:text-white dark:border-white dark:hover:border-[#e6ded6] dark:peer-checked:border-white dark:peer-checked:bg-[#685a4e]"
              >
                {option.label}
              </label>
            </div>
          ))}
        </div>
        {errors.therapyType && (
          <p className="mt-1 text-[#f44336] text-sm">{errors.therapyType.message}</p>
        )}
      </div>

      {/* Therapist Gender Preference */}
      <div className="mb-6">
        <label className="block text-gray-700 dark:text-white font-medium mb-2">
          Do you have a preference for your therapist's gender?
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {therapistPreferenceOptions.map((option) => (
            <div key={option.value} className="relative">
              <input
                type="radio"
                id={`therapist-preference-${option.value}`}
                value={option.value}
                {...register('therapistPreference')}
                className="absolute opacity-0 w-full h-full cursor-pointer z-10"
              />
              <label
                htmlFor={`therapist-preference-${option.value}`}
                className="block p-3 border border-[#685a4e] rounded-md cursor-pointer transition-colors hover:border-[#685a4e] peer-checked:border-[#685a4e] peer-checked:bg-[#e6ded6] dark:text-white dark:border-white dark:hover:border-[#e6ded6] dark:peer-checked:border-white dark:peer-checked:bg-[#685a4e]"
              >
                {option.label}
              </label>
            </div>
          ))}
        </div>
        {errors.therapistPreference && (
          <p className="mt-1 text-[#f44336] text-sm">{errors.therapistPreference.message}</p>
        )}
      </div>

      {/* Session Mode Preference */}
      <div className="mb-6">
        <label className="block text-gray-700 dark:text-white font-medium mb-2">
          How would you prefer to attend therapy sessions?
        </label>
        <div className="space-y-3">
          {therapyModeOptions.map((option) => (
            <div key={option.value} className="relative">
              <input
                type="radio"
                id={`therapy-mode-${option.value}`}
                value={option.value}
                {...register('preferredTherapyMode')}
                className="absolute opacity-0 w-full h-full cursor-pointer z-10"
              />
              <label
                htmlFor={`therapy-mode-${option.value}`}
                className="block p-3 border border-[#685a4e] rounded-md cursor-pointer transition-colors hover:border-[#685a4e] peer-checked:border-[#685a4e] peer-checked:bg-[#e6ded6] dark:text-white dark:border-white dark:hover:border-[#e6ded6] dark:peer-checked:border-white dark:peer-checked:bg-[#685a4e]"
              >
                {option.label}
              </label>
            </div>
          ))}
        </div>
        {errors.preferredTherapyMode && (
          <p className="mt-1 text-[#f44336] text-sm">{errors.preferredTherapyMode.message}</p>
        )}
      </div>
    </div>
  );
};

export default TherapyPreferencesStep; 