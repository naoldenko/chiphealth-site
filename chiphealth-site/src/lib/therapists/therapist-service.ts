import axios from 'axios';
import { QuestionnaireFormData, TherapistResult } from '../types/questionnaire';

// Mock therapist data - In a real application, this would come from a database or external API
const mockTherapists: TherapistResult[] = [
  {
    id: 'therapist-1',
    name: 'Dr. Sarah Johnson',
    title: 'Licensed Clinical Psychologist',
    specialties: ['Anorexia', 'Bulimia', 'Body Image Issues', 'Anxiety', 'Depression'],
    bio: 'Dr. Johnson specializes in eating disorders with over 15 years of experience helping adolescents and young adults. Her approach combines cognitive-behavioral therapy with family-based treatment.',
    location: 'San Francisco, CA',
    acceptsInsurance: true,
    insuranceProviders: ['Blue Cross', 'Aetna', 'Cigna', 'United Healthcare'],
    therapyTypes: ['Individual', 'Family'],
    sessionTypes: ['In-person', 'Virtual'],
    imageUrl: '/images/therapists/sarah-johnson.jpg',
    contactInfo: {
      email: 'sarah.johnson@example.com',
      phone: '(415) 555-1234',
      website: 'https://www.drsarahjohnson.com',
    },
    availability: {
      nextAvailable: '2 weeks',
      typicalHours: 'Monday-Thursday, 9am-5pm',
    },
  },
  {
    id: 'therapist-2',
    name: 'Michael Rodriguez, LMFT',
    title: 'Licensed Marriage and Family Therapist',
    specialties: ['Binge Eating Disorder', 'Orthorexia', 'ARFID', 'Family Dynamics', 'Trauma'],
    bio: 'Michael specializes in working with teens and families affected by eating disorders. His therapeutic approach is compassionate and strength-based, focusing on whole-person healing.',
    location: 'Los Angeles, CA',
    acceptsInsurance: true,
    insuranceProviders: ['Kaiser', 'Blue Shield', 'Anthem'],
    therapyTypes: ['Individual', 'Family', 'Group'],
    sessionTypes: ['In-person', 'Virtual'],
    imageUrl: '/images/therapists/michael-rodriguez.jpg',
    contactInfo: {
      email: 'michael@familyhealingcenter.com',
      phone: '(323) 555-6789',
      website: 'https://www.familyhealingcenter.com',
    },
    availability: {
      nextAvailable: '1 week',
      typicalHours: 'Tuesday-Saturday, 10am-7pm',
    },
  },
  {
    id: 'therapist-3',
    name: 'Dr. Emily Chen',
    title: 'Psychiatrist, MD',
    specialties: ['Eating Disorders', 'Medication Management', 'Co-occurring Disorders', 'Anxiety', 'Depression'],
    bio: 'Dr. Chen is a board-certified psychiatrist specializing in eating disorders and associated mental health conditions. She provides comprehensive psychiatric evaluations and medication management.',
    location: 'New York, NY',
    acceptsInsurance: true,
    insuranceProviders: ['Oxford', 'UnitedHealthcare', 'Cigna', 'Aetna'],
    therapyTypes: ['Individual'],
    sessionTypes: ['In-person', 'Virtual'],
    imageUrl: '/images/therapists/emily-chen.jpg',
    contactInfo: {
      email: 'dr.chen@mentalhealthpartners.org',
      phone: '(212) 555-4321',
      website: 'https://www.mentalhealthpartners.org',
    },
    availability: {
      nextAvailable: '3 weeks',
      typicalHours: 'Monday, Wednesday, Friday, 8am-4pm',
    },
  },
  {
    id: 'therapist-4',
    name: 'Jessica Taylor, LCSW',
    title: 'Licensed Clinical Social Worker',
    specialties: ['Eating Disorders in Athletes', 'Body Image', 'Performance Anxiety', 'Stress Management'],
    bio: 'Jessica specializes in working with athletes and performers struggling with eating disorders and body image issues. Her approach is client-centered with a focus on developing healthy relationships with food and exercise.',
    location: 'Chicago, IL',
    acceptsInsurance: false,
    therapyTypes: ['Individual', 'Group'],
    sessionTypes: ['In-person', 'Virtual'],
    imageUrl: '/images/therapists/jessica-taylor.jpg',
    contactInfo: {
      email: 'jessica@athletementalhealth.com',
      phone: '(312) 555-8765',
      website: 'https://www.athletementalhealth.com',
    },
    availability: {
      nextAvailable: 'This week',
      typicalHours: 'Monday-Friday, 12pm-8pm',
    },
  },
  {
    id: 'therapist-5',
    name: 'Dr. Marcus Williams',
    title: 'Clinical Psychologist',
    specialties: ['Binge Eating Disorder', 'Emotional Eating', 'Cultural Considerations', 'Trauma-Informed Care'],
    bio: 'Dr. Williams provides culturally responsive care for eating disorders with expertise in addressing factors that affect underrepresented communities. His approach integrates evidence-based practices with cultural awareness.',
    location: 'Atlanta, GA',
    acceptsInsurance: true,
    insuranceProviders: ['Blue Cross Blue Shield', 'Humana', 'Cigna', 'Aetna'],
    therapyTypes: ['Individual', 'Group'],
    sessionTypes: ['In-person', 'Virtual'],
    imageUrl: '/images/therapists/marcus-williams.jpg',
    contactInfo: {
      email: 'dr.williams@inclusivetherapy.org',
      phone: '(404) 555-1111',
      website: 'https://www.inclusivetherapy.org',
    },
    availability: {
      nextAvailable: '2 weeks',
      typicalHours: 'Tuesday-Thursday, 9am-6pm',
    },
  },
];

/**
 * In a real application, this would query a real API or database
 * This version performs a simulated search using the mock data
 */
export const findTherapists = async (formData: QuestionnaireFormData): Promise<TherapistResult[]> => {
  try {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // In a real application, we would call an actual API endpoint
    // const response = await axios.post('/api/find-therapists', formData);
    // return response.data;
    
    // For now, filter the mock data based on user preferences
    const filteredTherapists = mockTherapists.filter(therapist => {
      // Match by therapy type
      const hasMatchingTherapyType = formData.therapyType === 'not-sure' || 
        therapist.therapyTypes.some(type => type.toLowerCase() === formData.therapyType);
      
      // Match by session mode
      const hasMatchingSessionMode = formData.preferredTherapyMode === 'both' ||
        therapist.sessionTypes.some(type => {
          if (formData.preferredTherapyMode === 'in-person') return type === 'In-person';
          if (formData.preferredTherapyMode === 'virtual') return type === 'Virtual';
          return true;
        });
      
      // Match by insurance (if specified)
      const matchesInsurance = formData.insuranceStatus !== 'has-insurance' || 
        (therapist.acceptsInsurance && 
          (!formData.insuranceProvider || 
            therapist.insuranceProviders?.some(provider => 
              provider.toLowerCase().includes(formData.insuranceProvider?.toLowerCase() || '')
            )
          )
        );
      
      // Match by concerns/specialties
      const hasMatchingSpecialty = formData.specificConcern.some(concern => {
        if (concern === 'not-sure') return true;
        return therapist.specialties.some(specialty => 
          specialty.toLowerCase().includes(concern.replace(/-/g, ' '))
        );
      });
      
      return hasMatchingTherapyType && hasMatchingSessionMode && matchesInsurance && hasMatchingSpecialty;
    });
    
    return filteredTherapists;
  } catch (error) {
    console.error('Error finding therapists:', error);
    return [];
  }
};

export const getTherapistById = async (id: string): Promise<TherapistResult | null> => {
  try {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Find the therapist in our mock data
    const therapist = mockTherapists.find(t => t.id === id);
    
    if (!therapist) {
      return null;
    }
    
    return therapist;
  } catch (error) {
    console.error('Error getting therapist details:', error);
    return null;
  }
};

export const sendGuardianConsent = async (
  userEmail: string, 
  guardianEmail: string,
  userName: string,
  guardianName: string
): Promise<boolean> => {
  try {
    // In a real app, we would call an API endpoint to send an email
    // const response = await axios.post('/api/send-guardian-consent', {
    //   userEmail,
    //   guardianEmail,
    //   userName,
    //   guardianName
    // });
    
    // Simulate API call success
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    return true;
  } catch (error) {
    console.error('Error sending guardian consent:', error);
    return false;
  }
};

export const verifyGuardianConsent = async (token: string): Promise<boolean> => {
  try {
    // In a real app, we would verify the token with an API
    // const response = await axios.post('/api/verify-guardian-consent', { token });
    
    // Simulate API call success
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // For demonstration, always return true
    return true;
  } catch (error) {
    console.error('Error verifying guardian consent:', error);
    return false;
  }
}; 