import QuestionnaireForm from '@/components/forms/QuestionnaireForm';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const metadata = {
  title: 'Find a Therapist Questionnaire | Chip Health',
  description: 'Answer our questionnaire to find the right eating disorder therapist for your needs.',
};

export default function QuestionnairePage() {
  return (
    <div className="bg-[#e6ded6] dark:bg-[#564939] min-h-screen py-12">
      <div className="container-custom">
        <QuestionnaireForm />
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