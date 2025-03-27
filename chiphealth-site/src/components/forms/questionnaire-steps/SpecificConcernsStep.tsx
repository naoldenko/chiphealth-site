'use client';

import { useFormContext } from 'react-hook-form';
import { QuestionnaireFormSchema } from '@/lib/validation/questionnaire-schema';
import { SpecificConcern } from '@/lib/types/questionnaire';

const concernOptions: { value: SpecificConcern; label: string }[] = [
  { value: 'anorexia', label: 'Anorexia Nervosa' },
  { value: 'bulimia', label: 'Bulimia Nervosa' },
  { value: 'binge-eating', label: 'Binge Eating Disorder' },
  { value: 'orthorexia', label: 'Orthorexia' },
  { value: 'arfid', label: 'Avoidant/Restrictive Food Intake Disorder (ARFID)' },
  { value: 'other-specified', label: 'Other Specified Feeding or Eating Disorder (OSFED)' },
  { value: 'not-sure', label: 'I\'m not sure / Still figuring it out' },
];

const SpecificConcernsStep = () => {
  const { register, formState: { errors } } = useFormContext<QuestionnaireFormSchema>();

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold mb-4 text-primary">Specific Concerns</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Please select any specific eating disorder concerns you're experiencing. You can select multiple options.
        </p>
      </div>

      {/* Specific Concerns Checkboxes */}
      <div className="mb-6">
        <label className="block text-gray-700 dark:text-gray-300 font-medium mb-3">
          What specific concerns are you seeking help for? (Select all that apply)
        </label>
        <div className="space-y-3">
          {concernOptions.map((option) => (
            <div key={option.value} className="relative flex items-start">
              <div className="flex items-center h-5">
                <input
                  type="checkbox"
                  id={`concern-${option.value}`}
                  value={option.value}
                  {...register('specificConcern')}
                  className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary focus:ring-offset-0"
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor={`concern-${option.value}`} className="text-gray-700 dark:text-gray-300">
                  {option.label}
                </label>
              </div>
            </div>
          ))}
        </div>
        {errors.specificConcern && (
          <p className="mt-1 text-error text-sm">{errors.specificConcern.message}</p>
        )}
      </div>

      {/* Additional Information Textarea */}
      <div className="mb-6">
        <label htmlFor="additionalNotes" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
          Is there anything else you'd like to share about your concerns? (Optional)
        </label>
        <textarea
          id="additionalNotes"
          rows={4}
          placeholder="Please share any additional details that might help us find the right therapist for you..."
          {...register('additionalNotes')}
          className="form-input"
        />
      </div>
    </div>
  );
};

export default SpecificConcernsStep; 