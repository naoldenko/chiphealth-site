'use client';

import { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { questionnaireSchema, QuestionnaireFormSchema } from '@/lib/validation/questionnaire-schema';
import { QuestionnaireFormData } from '@/lib/types/questionnaire';
import PersonalInfoStep from './questionnaire-steps/PersonalInfoStep';
import TherapyPreferencesStep from './questionnaire-steps/TherapyPreferencesStep';
import SpecificConcernsStep from './questionnaire-steps/SpecificConcernsStep';
import InsuranceStep from './questionnaire-steps/InsuranceStep';
import GuardianConsentStep from './questionnaire-steps/GuardianConsentStep';
import ContactInfoStep from './questionnaire-steps/ContactInfoStep';
import { findTherapists, sendGuardianConsent } from '@/lib/therapists/therapist-service';
import { toast } from 'react-toastify';
import { ArrowLeft, ArrowRight, Loader2 } from 'lucide-react';

const QuestionnaireForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();
  
  const methods = useForm<QuestionnaireFormSchema>({
    resolver: zodResolver(questionnaireSchema),
    defaultValues: {
      age: undefined,
      location: '',
      therapyType: undefined,
      therapistPreference: undefined,
      specificConcern: [],
      therapyExperience: undefined,
      insuranceStatus: undefined,
      preferredTherapyMode: undefined,
      contactInfo: {
        name: '',
        email: '',
        phone: '',
      },
      guardianConsent: false,
    },
    mode: 'onChange',
  });
  
  const { watch, handleSubmit, trigger, formState: { errors, isValid } } = methods;
  
  const watchAge = watch('age');
  const needsGuardianConsent = watchAge === 'under18';
  
  const steps = [
    { title: 'Personal Information', component: <PersonalInfoStep /> },
    { title: 'Therapy Preferences', component: <TherapyPreferencesStep /> },
    { title: 'Specific Concerns', component: <SpecificConcernsStep /> },
    { title: 'Insurance Information', component: <InsuranceStep /> },
    { title: 'Contact Information', component: <ContactInfoStep /> },
  ];
  
  // Add guardian consent step if needed
  if (needsGuardianConsent) {
    steps.push({ title: 'Guardian Consent', component: <GuardianConsentStep /> });
  }
  
  const totalSteps = steps.length;
  
  const nextStep = async () => {
    // Define which fields to validate based on the current step
    const fieldsToValidate = [
      ['age', 'location', 'therapyExperience'], // Step 0
      ['therapyType', 'therapistPreference', 'preferredTherapyMode'], // Step 1
      ['specificConcern'], // Step 2
      ['insuranceStatus'], // Step 3
      ['contactInfo.name', 'contactInfo.email'], // Step 4
      needsGuardianConsent ? ['guardianConsent', 'guardianInfo.name', 'guardianInfo.email', 'guardianInfo.relationship'] : [], // Step 5
    ];
    
    // Validate the current step's fields
    const isStepValid = await trigger(fieldsToValidate[currentStep], { shouldFocus: true });
    
    if (isStepValid) {
      if (currentStep < totalSteps - 1) {
        setCurrentStep(current => current + 1);
        window.scrollTo(0, 0);
      } else {
        await handleSubmit(onSubmit)();
      }
    }
  };
  
  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(current => current - 1);
      window.scrollTo(0, 0);
    }
  };
  
  const onSubmit = async (data: QuestionnaireFormSchema) => {
    try {
      setIsSubmitting(true);
      
      // If user is under 18, send guardian consent email
      if (data.age === 'under18' && data.guardianInfo) {
        const sentConsent = await sendGuardianConsent(
          data.contactInfo.email,
          data.guardianInfo.email,
          data.contactInfo.name,
          data.guardianInfo.name
        );
        
        if (!sentConsent) {
          toast.error('Failed to send guardian consent email. Please try again.');
          setIsSubmitting(false);
          return;
        }
      }
      
      // Search for therapists based on form data
      const therapists = await findTherapists(data as QuestionnaireFormData);
      
      // Store results in session storage to pass to results page
      sessionStorage.setItem('therapistResults', JSON.stringify(therapists));
      sessionStorage.setItem('questionnaireData', JSON.stringify(data));
      
      // Redirect to results page
      router.push('/therapists');
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('An error occurred. Please try again later.');
      setIsSubmitting(false);
    }
  };
  
  const progressPercentage = (currentStep / (totalSteps - 1)) * 100;
  
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="heading-1 mb-4">Find Your Eating Disorder Therapist</h1>
        <p className="text-gray-700 dark:text-white mb-6">
          Please answer these questions to help us find the right therapist for you.
        </p>
        
        {/* Progress bar */}
        <div className="w-full bg-white rounded-full h-2.5 mb-4 dark:bg-[#685a4e]">
          <div 
            className="bg-[#685a4e] h-2.5 rounded-full transition-all duration-300 ease-in-out dark:bg-white"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
        
        <div className="flex justify-between text-sm text-[#685a4e] dark:text-white">
          <span>Step {currentStep + 1} of {totalSteps}</span>
          <span>{steps[currentStep].title}</span>
        </div>
      </div>
      
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Current step component */}
          <div className="bg-white dark:bg-[#564939] rounded-lg shadow-md p-6 border-l-4 border-[#685a4e] dark:border-white">
            {steps[currentStep].component}
          </div>
          
          {/* Navigation buttons */}
          <div className="flex justify-between mt-8">
            <button
              type="button"
              onClick={prevStep}
              disabled={currentStep === 0 || isSubmitting}
              className={`flex items-center ${
                currentStep === 0 
                  ? 'opacity-50 cursor-not-allowed bg-[#e6ded6] text-[#685a4e]' 
                  : 'btn-secondary'
              }`}
            >
              <ArrowLeft className="mr-2 h-4 w-4" /> Previous
            </button>
            
            <button
              type="button"
              onClick={nextStep}
              disabled={isSubmitting}
              className="bg-[#685a4e] hover:bg-[#564939] text-white font-medium py-2 px-4 rounded-md transition-all focus:outline-none focus:ring-2 focus:ring-[#685a4e] flex items-center"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Processing...
                </>
              ) : currentStep === totalSteps - 1 ? (
                'Submit'
              ) : (
                <>
                  Next <ArrowRight className="ml-2 h-4 w-4" />
                </>
              )}
            </button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default QuestionnaireForm; 