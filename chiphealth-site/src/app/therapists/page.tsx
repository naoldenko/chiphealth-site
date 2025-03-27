'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { TherapistResult } from '@/lib/types/questionnaire';
import Image from 'next/image';
import Link from 'next/link';
import { Mail, Phone, Globe, MapPin, Calendar, Shield, Filter, ChevronDown, Search } from 'lucide-react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

export default function TherapistResultsPage() {
  const [therapists, setTherapists] = useState<TherapistResult[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filterOpen, setFilterOpen] = useState(false);
  const [filters, setFilters] = useState({
    acceptsInsurance: false,
    inPerson: false,
    virtual: false,
    individual: false,
    group: false,
    family: false,
  });
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  // Load therapists from session storage on component mount
  useEffect(() => {
    try {
      // Check if we have therapist results in session storage
      const storedTherapists = sessionStorage.getItem('therapistResults');
      const formData = sessionStorage.getItem('questionnaireData');
      
      if (!storedTherapists || !formData) {
        // If no results found, redirect to questionnaire
        toast.error('Please complete the questionnaire first to see therapist matches.');
        setTimeout(() => router.push('/questionnaire'), 2000);
        return;
      }
      
      // Parse and set the therapist results
      const parsedTherapists = JSON.parse(storedTherapists) as TherapistResult[];
      setTherapists(parsedTherapists);
      
      // Show message if no therapists found
      if (parsedTherapists.length === 0) {
        toast.info('No therapists match your criteria. Try adjusting your preferences.');
      }
    } catch (error) {
      console.error('Error loading therapist results:', error);
      toast.error('There was an error loading the therapist results.');
    } finally {
      setIsLoading(false);
    }
  }, [router]);

  // Filter therapists based on user-selected filters and search
  const filteredTherapists = therapists.filter(therapist => {
    // Apply filters
    if (filters.acceptsInsurance && !therapist.acceptsInsurance) return false;
    if (filters.inPerson && !therapist.sessionTypes.includes('In-person')) return false;
    if (filters.virtual && !therapist.sessionTypes.includes('Virtual')) return false;
    if (filters.individual && !therapist.therapyTypes.includes('Individual')) return false;
    if (filters.group && !therapist.therapyTypes.includes('Group')) return false;
    if (filters.family && !therapist.therapyTypes.includes('Family')) return false;
    
    // Apply search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      const nameMatch = therapist.name.toLowerCase().includes(query);
      const titleMatch = therapist.title.toLowerCase().includes(query);
      const locationMatch = therapist.location.toLowerCase().includes(query);
      const specialtyMatch = therapist.specialties.some(s => s.toLowerCase().includes(query));
      
      return nameMatch || titleMatch || locationMatch || specialtyMatch;
    }
    
    return true;
  });

  // Toggle filter drawer
  const toggleFilters = () => setFilterOpen(!filterOpen);

  // Handle filter changes
  const handleFilterChange = (filterName: keyof typeof filters) => {
    setFilters({
      ...filters,
      [filterName]: !filters[filterName],
    });
  };

  // Handle search input
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="bg-[#e6ded6] dark:bg-[#564939] min-h-screen py-12">
      <div className="container-custom">
        <div className="mb-10">
          <h1 className="heading-1 mb-4">Your Matched Therapists</h1>
          <p className="text-gray-700 dark:text-white max-w-3xl">
            Based on your responses, we've found therapists who specialize in treating eating disorders and match your preferences.
            You can contact them directly through the information provided.
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="mb-8 flex flex-col md:flex-row justify-between gap-4">
          <div className="relative flex-grow">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-[#685a4e] dark:text-white" />
            </div>
            <input
              type="text"
              placeholder="Search by name, specialty, or location"
              className="form-input pl-10"
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </div>
          
          <button
            className="btn-secondary flex items-center justify-center md:w-auto"
            onClick={toggleFilters}
          >
            <Filter className="h-5 w-5 mr-2" />
            Filters
            <ChevronDown className={`h-5 w-5 ml-2 transition-transform ${filterOpen ? 'rotate-180' : ''}`} />
          </button>
        </div>

        {/* Filter Options */}
        {filterOpen && (
          <div className="bg-white dark:bg-[#685a4e] rounded-lg shadow-md p-6 mb-8 grid grid-cols-1 md:grid-cols-3 gap-6 border-l-4 border-[#685a4e] dark:border-white">
            <div>
              <h3 className="font-medium text-[#685a4e] dark:text-white mb-3">Insurance</h3>
              <div className="space-y-2">
                <label className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-[#685a4e] text-[#685a4e] focus:ring-[#685a4e] focus:ring-offset-0"
                    checked={filters.acceptsInsurance}
                    onChange={() => handleFilterChange('acceptsInsurance')}
                  />
                  <span className="ml-2 text-gray-700 dark:text-white">Accepts Insurance</span>
                </label>
              </div>
            </div>
            
            <div>
              <h3 className="font-medium text-[#685a4e] dark:text-white mb-3">Session Type</h3>
              <div className="space-y-2">
                <label className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-[#685a4e] text-[#685a4e] focus:ring-[#685a4e] focus:ring-offset-0"
                    checked={filters.inPerson}
                    onChange={() => handleFilterChange('inPerson')}
                  />
                  <span className="ml-2 text-gray-700 dark:text-white">In-Person</span>
                </label>
                <label className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-[#685a4e] text-[#685a4e] focus:ring-[#685a4e] focus:ring-offset-0"
                    checked={filters.virtual}
                    onChange={() => handleFilterChange('virtual')}
                  />
                  <span className="ml-2 text-gray-700 dark:text-white">Virtual</span>
                </label>
              </div>
            </div>
            
            <div>
              <h3 className="font-medium text-[#685a4e] dark:text-white mb-3">Therapy Format</h3>
              <div className="space-y-2">
                <label className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-[#685a4e] text-[#685a4e] focus:ring-[#685a4e] focus:ring-offset-0"
                    checked={filters.individual}
                    onChange={() => handleFilterChange('individual')}
                  />
                  <span className="ml-2 text-gray-700 dark:text-white">Individual</span>
                </label>
                <label className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-[#685a4e] text-[#685a4e] focus:ring-[#685a4e] focus:ring-offset-0"
                    checked={filters.group}
                    onChange={() => handleFilterChange('group')}
                  />
                  <span className="ml-2 text-gray-700 dark:text-white">Group</span>
                </label>
                <label className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-[#685a4e] text-[#685a4e] focus:ring-[#685a4e] focus:ring-offset-0"
                    checked={filters.family}
                    onChange={() => handleFilterChange('family')}
                  />
                  <span className="ml-2 text-gray-700 dark:text-white">Family</span>
                </label>
              </div>
            </div>
          </div>
        )}

        {/* Results Counter */}
        <div className="mb-6">
          <p className="text-[#685a4e] dark:text-white">
            Showing {filteredTherapists.length} {filteredTherapists.length === 1 ? 'therapist' : 'therapists'}
          </p>
        </div>

        {/* Therapist Cards */}
        {isLoading ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#685a4e] mx-auto mb-4"></div>
            <p className="text-[#685a4e] dark:text-white">Loading therapist matches...</p>
          </div>
        ) : filteredTherapists.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredTherapists.map((therapist) => (
              <div key={therapist.id} className="bg-white dark:bg-[#564939] rounded-lg shadow-md overflow-hidden border-l-4 border-[#685a4e] dark:border-white">
                <div className="flex flex-col md:flex-row">
                  {/* Therapist Image */}
                  <div className="md:w-1/3 bg-[#e6ded6] dark:bg-[#685a4e] flex items-center justify-center p-4">
                    <div className="w-32 h-32 relative rounded-full overflow-hidden bg-white">
                      {therapist.imageUrl ? (
                        <Image 
                          src={therapist.imageUrl} 
                          alt={therapist.name} 
                          layout="fill" 
                          objectFit="cover"
                          className="rounded-full"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-[#e6ded6] rounded-full">
                          <span className="text-3xl font-bold text-[#685a4e]">
                            {therapist.name.charAt(0)}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  {/* Therapist Info */}
                  <div className="md:w-2/3 p-6">
                    <h2 className="text-xl font-semibold text-[#685a4e] dark:text-white">{therapist.name}</h2>
                    <p className="text-gray-600 dark:text-white mb-2">{therapist.title}</p>
                    
                    <div className="flex items-center text-[#685a4e] dark:text-white mb-4">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>{therapist.location}</span>
                    </div>
                    
                    <div className="mb-4">
                      <h3 className="text-sm font-medium text-[#685a4e] dark:text-white mb-1">Specialties:</h3>
                      <div className="flex flex-wrap gap-2">
                        {therapist.specialties.slice(0, 3).map((specialty, index) => (
                          <span 
                            key={index} 
                            className="inline-block bg-[#e6ded6] text-[#685a4e] dark:bg-[#685a4e] dark:text-white px-2 py-1 rounded-full text-xs"
                          >
                            {specialty}
                          </span>
                        ))}
                        {therapist.specialties.length > 3 && (
                          <span className="inline-block bg-white dark:bg-[#685a4e] text-[#685a4e] dark:text-white px-2 py-1 rounded-full text-xs">
                            +{therapist.specialties.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <h3 className="text-sm font-medium text-[#685a4e] dark:text-white mb-1">Session Types:</h3>
                      <div className="flex flex-wrap gap-2">
                        {therapist.therapyTypes.map((type, index) => (
                          <span 
                            key={index} 
                            className="inline-block bg-white dark:bg-[#685a4e] text-[#685a4e] dark:text-white px-2 py-1 rounded-full text-xs"
                          >
                            {type}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {therapist.acceptsInsurance && (
                      <div className="flex items-center text-[#4caf50] dark:text-[#a5d6a7] mb-4">
                        <Shield className="h-4 w-4 mr-1" />
                        <span className="text-sm">Accepts Insurance</span>
                      </div>
                    )}
                    
                    {therapist.availability && (
                      <div className="flex items-center text-[#685a4e] dark:text-white mb-4">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span className="text-sm">Next available: {therapist.availability.nextAvailable}</span>
                      </div>
                    )}
                    
                    <div className="mt-4 flex flex-wrap gap-3">
                      <a 
                        href={`mailto:${therapist.contactInfo.email}`} 
                        className="inline-flex items-center bg-[#685a4e] hover:bg-[#564939] text-white font-medium py-1 px-3 rounded-md transition-all text-sm"
                      >
                        <Mail className="h-4 w-4 mr-2" />
                        Email
                      </a>
                      
                      {therapist.contactInfo.phone && (
                        <a 
                          href={`tel:${therapist.contactInfo.phone}`} 
                          className="inline-flex items-center bg-[#e6ded6] hover:bg-[#d7cbc0] text-[#685a4e] font-medium py-1 px-3 rounded-md transition-all text-sm"
                        >
                          <Phone className="h-4 w-4 mr-2" />
                          Call
                        </a>
                      )}
                      
                      {therapist.contactInfo.website && (
                        <a 
                          href={therapist.contactInfo.website} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="inline-flex items-center border border-[#685a4e] dark:border-white rounded-md py-1 px-3 text-sm text-[#685a4e] dark:text-white hover:bg-[#e6ded6] dark:hover:bg-[#685a4e] transition-colors"
                        >
                          <Globe className="h-4 w-4 mr-2" />
                          Website
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                
                {/* Bio Section */}
                <div className="p-6 border-t border-[#e6ded6] dark:border-[#685a4e]">
                  <h3 className="text-sm font-medium text-[#685a4e] dark:text-white mb-2">About:</h3>
                  <p className="text-gray-700 dark:text-white text-sm">{therapist.bio}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white dark:bg-[#564939] rounded-lg shadow-md border-l-4 border-[#685a4e] dark:border-white">
            <p className="text-[#685a4e] dark:text-white mb-4">No therapists match your current criteria.</p>
            <p className="text-[#685a4e] dark:text-white mb-6">Try adjusting your filters or search terms.</p>
            <Link href="/questionnaire" className="bg-[#685a4e] hover:bg-[#564939] text-white font-medium py-2 px-4 rounded-md transition-all">
              Retake Questionnaire
            </Link>
          </div>
        )}
        
        {/* No initial results message */}
        {!isLoading && therapists.length === 0 && (
          <div className="text-center py-12 mt-8 bg-white dark:bg-[#564939] rounded-lg shadow-md border-l-4 border-[#685a4e] dark:border-white">
            <p className="text-[#685a4e] dark:text-white mb-4">
              We couldn't find therapists matching your criteria.
            </p>
            <p className="text-[#685a4e] dark:text-white mb-6">
              This could be due to your location or specific requirements. Try adjusting your preferences.
            </p>
            <Link href="/questionnaire" className="bg-[#685a4e] hover:bg-[#564939] text-white font-medium py-2 px-4 rounded-md transition-all">
              Retake Questionnaire
            </Link>
          </div>
        )}
        
        {/* Help Message */}
        <div className="mt-12 p-6 bg-white dark:bg-[#564939] rounded-lg shadow-md border-l-4 border-[#685a4e] dark:border-white">
          <h2 className="heading-3 mb-4">Need Help?</h2>
          <p className="text-gray-700 dark:text-white mb-4">
            If you're having trouble finding the right therapist or have questions about the process, our team is here to help.
          </p>
          <Link href="/questionnaire" className="bg-[#685a4e] hover:bg-[#564939] text-white font-medium py-2 px-4 rounded-md transition-all">
            Contact Support
          </Link>
        </div>
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
} 