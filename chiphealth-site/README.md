# Chip Health - Eating Disorder Therapist Finder

Chip Health is a modern web application designed to help youth with eating disorders find the right therapist for their specific needs. The platform features an intuitive questionnaire that understands users' needs, preferences, and location, and matches them with appropriate specialists.

## Features

- **Personalized Questionnaire**: Multi-step form capturing detailed information about users' needs
- **Guardian Consent System**: Special safety measures for users under 18
- **Therapist Matching**: Algorithm to match users with therapists based on their preferences
- **Search & Filter**: Ability to search and filter therapist results
- **Responsive Design**: Works on all devices from mobile to desktop
- **Accessibility**: Implemented for diverse users
- **Dark Mode Support**: Comfortable viewing in any lighting condition

## Technologies Used

- **Next.js** - React framework for server-rendered applications
- **TypeScript** - For type safety and better developer experience
- **Tailwind CSS** - For utility-first styling
- **React Hook Form** - For form management
- **Zod** - For form validation
- **React Toastify** - For notifications
- **Lucide React** - For icons

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/chiphealth-site.git
cd chiphealth-site
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Start the development server
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application

## Project Structure

```
chiphealth-site/
├── public/           # Static files
├── src/              # Source code
│   ├── app/          # Next.js app directory
│   │   ├── about/    # About page
│   │   ├── contact/  # Contact page
│   │   ├── questionnaire/ # Questionnaire page
│   │   ├── therapists/ # Therapist results page
│   │   ├── layout.tsx # Root layout
│   │   ├── page.tsx  # Home page
│   ├── components/   # React components
│   │   ├── forms/    # Form components
│   │   │   ├── questionnaire-steps/ # Questionnaire step components
│   │   ├── layout/   # Layout components (Header, Footer)
│   │   ├── ui/       # UI components
│   ├── lib/          # Utility functions and libraries
│   │   ├── api/      # API functions
│   │   ├── auth/     # Authentication utilities
│   │   ├── therapists/ # Therapist-related utilities
│   │   ├── types/    # TypeScript type definitions
│   │   ├── validation/ # Form validation schemas
│   ├── styles/       # Global styles
```

## Key User Flows

1. **Finding a Therapist**:
   - User navigates to the home page
   - Clicks on "Find a Therapist" 
   - Completes the multi-step questionnaire
   - Views and filters matched therapists
   - Contacts their chosen therapist

2. **Under 18 Flow**:
   - Same as above, but includes guardian consent step
   - Guardian receives email to approve therapist connection
   - After approval, user can proceed with therapist connection

## Development Notes

### Environment Variables

Create a `.env.local` file in the root directory with the following variables:
```
# For production
NEXT_PUBLIC_API_URL=your_api_url
```

### Building for Production

```bash
npm run build
# or
yarn build
```

### Running in Production

```bash
npm start
# or
yarn start
```

## Current Status

This is a demonstration project using mocked data. In a production version:
- Therapist data would come from a real database
- Authentication would be implemented
- Email sending would be connected to a service like SendGrid
- Web search integration would use a real API

## License

[MIT](LICENSE)
