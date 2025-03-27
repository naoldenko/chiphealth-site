import { z } from 'zod';
import { 
  Age, 
  TherapyType, 
  TherapistPreference, 
  SpecificConcern, 
  TherapyExperience,
  InsuranceStatus,
  PreferredTherapyMode
} from '../types/questionnaire';

// Create a schema for each part of the questionnaire
const ageSchema = z.enum(['under18', '18-24', '25-34', '35-44', '45+'] as const);
const therapyTypeSchema = z.enum(['individual', 'group', 'family', 'not-sure'] as const);
const therapistPreferenceSchema = z.enum(['no-preference', 'female', 'male', 'non-binary', 'other'] as const);
const specificConcernSchema = z.array(
  z.enum(['anorexia', 'bulimia', 'binge-eating', 'orthorexia', 'arfid', 'other-specified', 'not-sure'] as const)
).min(1, 'Please select at least one concern');
const therapyExperienceSchema = z.enum(['first-time', 'returned', 'currently-in-therapy'] as const);
const insuranceStatusSchema = z.enum(['has-insurance', 'self-pay', 'sliding-scale', 'not-sure'] as const);
const preferredTherapyModeSchema = z.enum(['in-person', 'virtual', 'both'] as const);

// Contact info schema
const contactInfoSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
});

// Guardian info schema for users under 18
const guardianInfoSchema = z.object({
  name: z.string().min(2, 'Guardian name must be at least 2 characters'),
  email: z.string().email('Please enter a valid guardian email address'),
  relationship: z.string().min(2, 'Please specify your relationship'),
});

// Main questionnaire schema
export const questionnaireSchema = z.object({
  age: ageSchema,
  location: z.string().min(2, 'Please enter a valid location'),
  therapyType: therapyTypeSchema,
  therapistPreference: therapistPreferenceSchema,
  specificConcern: specificConcernSchema,
  therapyExperience: therapyExperienceSchema,
  insuranceStatus: insuranceStatusSchema,
  insuranceProvider: z.string().optional(),
  preferredTherapyMode: preferredTherapyModeSchema,
  additionalNotes: z.string().optional(),
  contactInfo: contactInfoSchema,
  guardianConsent: z.boolean().refine(value => value === true, {
    message: "Guardian consent is required for users under 18",
    path: ["guardianConsent"],
  }).optional(),
  guardianInfo: guardianInfoSchema.optional(),
})
// Add conditional validation based on age
.refine(
  (data) => {
    // If user is under 18, guardianConsent and guardianInfo must be provided
    if (data.age === 'under18') {
      return data.guardianConsent === true && data.guardianInfo !== undefined;
    }
    return true;
  },
  {
    message: "Guardian information is required for users under 18",
    path: ["guardianInfo"],
  }
)
// Add conditional validation for insurance provider
.refine(
  (data) => {
    // If user has insurance, insurance provider must be provided
    if (data.insuranceStatus === 'has-insurance') {
      return data.insuranceProvider !== undefined && data.insuranceProvider.length > 0;
    }
    return true;
  },
  {
    message: "Insurance provider is required if you have insurance",
    path: ["insuranceProvider"],
  }
);

export type QuestionnaireFormSchema = z.infer<typeof questionnaireSchema>; 