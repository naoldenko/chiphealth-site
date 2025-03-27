'use client';

import { useState } from 'react';
import { Mail, Phone, MessageSquare } from 'lucide-react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill out all required fields.');
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // In a real implementation, this would send the form data to an API
      // await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(formData),
      // });
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast.success('Your message has been sent! We\'ll get back to you soon.');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      console.error('Error sending message:', error);
      toast.error('There was an error sending your message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[#e6ded6] dark:bg-[#564939] min-h-screen py-12">
      <div className="container-custom">
        <div className="mb-12 text-center">
          <h1 className="heading-1 mb-4">Contact Us</h1>
          <p className="text-lg text-gray-700 dark:text-white max-w-2xl mx-auto">
            Have questions about our services or need support? We're here to help.
            Reach out to our team using the form below or through our contact information.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white dark:bg-[#564939] rounded-lg shadow-md p-6 flex flex-col items-center text-center border-l-4 border-[#685a4e] dark:border-white">
            <div className="bg-[#e6ded6] dark:bg-[#685a4e] p-4 rounded-full mb-4">
              <Mail className="h-6 w-6 text-[#685a4e] dark:text-white" />
            </div>
            <h3 className="text-xl font-semibold text-[#685a4e] dark:text-white mb-2">Email Us</h3>
            <p className="text-gray-700 dark:text-white mb-4">
              For general inquiries or support questions, send us an email.
            </p>
            <a 
              href="mailto:support@chiphealth.org" 
              className="text-[#685a4e] dark:text-white hover:underline font-medium"
            >
              support@chiphealth.org
            </a>
          </div>
          
          <div className="bg-white dark:bg-[#564939] rounded-lg shadow-md p-6 flex flex-col items-center text-center border-l-4 border-[#685a4e] dark:border-white">
            <div className="bg-[#e6ded6] dark:bg-[#685a4e] p-4 rounded-full mb-4">
              <Phone className="h-6 w-6 text-[#685a4e] dark:text-white" />
            </div>
            <h3 className="text-xl font-semibold text-[#685a4e] dark:text-white mb-2">Call Us</h3>
            <p className="text-gray-700 dark:text-white mb-4">
              Need to speak with someone directly? Give us a call.
            </p>
            <a 
              href="tel:+1234567890" 
              className="text-[#685a4e] dark:text-white hover:underline font-medium"
            >
              (123) 456-7890
            </a>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
              Mon-Fri, 9am-5pm EST
            </p>
          </div>
          
          <div className="bg-white dark:bg-[#564939] rounded-lg shadow-md p-6 flex flex-col items-center text-center border-l-4 border-[#685a4e] dark:border-white">
            <div className="bg-[#e6ded6] dark:bg-[#685a4e] p-4 rounded-full mb-4">
              <MessageSquare className="h-6 w-6 text-[#685a4e] dark:text-white" />
            </div>
            <h3 className="text-xl font-semibold text-[#685a4e] dark:text-white mb-2">Message Us</h3>
            <p className="text-gray-700 dark:text-white mb-4">
              Use the contact form below to send us a message and we'll respond shortly.
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Response time: Within 24 hours
            </p>
          </div>
        </div>
        
        {/* Contact Form */}
        <div className="bg-white dark:bg-[#564939] rounded-lg shadow-md p-8 max-w-3xl mx-auto border-l-4 border-[#685a4e] dark:border-white">
          <h2 className="heading-2 mb-6 text-[#685a4e] dark:text-white">Send Us a Message</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label 
                  htmlFor="name" 
                  className="block text-gray-700 dark:text-white font-medium mb-2"
                >
                  Your Name <span className="text-red-500">*</span>
                </label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </div>
              
              <div>
                <label 
                  htmlFor="email" 
                  className="block text-gray-700 dark:text-white font-medium mb-2"
                >
                  Your Email <span className="text-red-500">*</span>
                </label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </div>
            </div>
            
            <div>
              <label 
                htmlFor="subject" 
                className="block text-gray-700 dark:text-white font-medium mb-2"
              >
                Subject
              </label>
              <select 
                id="subject" 
                name="subject" 
                value={formData.subject}
                onChange={handleChange}
                className="form-input"
              >
                <option value="">Please select a subject</option>
                <option value="General Inquiry">General Inquiry</option>
                <option value="Therapist Question">Therapist Question</option>
                <option value="Guardian Consent">Guardian Consent</option>
                <option value="Technical Support">Technical Support</option>
                <option value="Other">Other</option>
              </select>
            </div>
            
            <div>
              <label 
                htmlFor="message" 
                className="block text-gray-700 dark:text-white font-medium mb-2"
              >
                Your Message <span className="text-red-500">*</span>
              </label>
              <textarea 
                id="message" 
                name="message" 
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className="form-input"
                required
              ></textarea>
            </div>
            
            <div className="flex justify-end">
              <button 
                type="submit" 
                className="bg-[#685a4e] hover:bg-[#564939] text-white font-medium py-2 px-6 rounded-md transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </form>
        </div>
        
        {/* Privacy Notice */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            Your information is kept private and secure. By contacting us, you agree to our <a href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</a>.
          </p>
        </div>
      </div>
      
      <ToastContainer position="bottom-right" />
    </div>
  );
} 