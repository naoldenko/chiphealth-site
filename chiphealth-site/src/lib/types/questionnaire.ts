export type Age = 'under18' | '18-24' | '25-34' | '35-44' | '45+';

export type TherapyType = 'individual' | 'group' | 'family' | 'not-sure';

export type TherapistPreference = 'no-preference' | 'female' | 'male' | 'non-binary' | 'other';

export type SpecificConcern = 
  | 'anorexia' 
  | 'bulimia' 
  | 'binge-eating' 
  | 'orthorexia'
  | 'arfid'
  | 'other-specified'
  | 'not-sure';

export type TherapyExperience = 'first-time' | 'returned' | 'currently-in-therapy';

export type InsuranceStatus = 'has-insurance' | 'self-pay' | 'sliding-scale' | 'not-sure';

export type PreferredTherapyMode = 'in-person' | 'virtual' | 'both';

export interface QuestionnaireFormData {
  age: Age;
  location: string;
  therapyType: TherapyType;
  therapistPreference: TherapistPreference;
  specificConcern: SpecificConcern[];
  therapyExperience: TherapyExperience;
  insuranceStatus: InsuranceStatus;
  insuranceProvider?: string;
  preferredTherapyMode: PreferredTherapyMode;
  additionalNotes?: string;
  contactInfo: {
    name: string;
    email: string;
    phone?: string;
  };
  guardianConsent: boolean;
  guardianInfo?: {
    name: string;
    email: string;
    relationship: string;
  };
}

export interface TherapistResult {
  id: string;
  name: string;
  title: string;
  specialties: string[];
  bio: string;
  location: string;
  acceptsInsurance: boolean;
  insuranceProviders?: string[];
  therapyTypes: string[];
  sessionTypes: string[];
  imageUrl?: string;
  contactInfo: {
    email: string;
    phone?: string;
    website?: string;
  };
  availability?: {
    nextAvailable: string;
    typicalHours: string;
  };
} 