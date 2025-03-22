# Job Board Platform

A modern job board platform built with Next.js, TypeScript, and Tailwind CSS. This application allows companies to post job listings and candidates to search and apply for jobs.

## Features

- **User Authentication**
  - Login & Registration with form validation
  - Role-based access (Job Seekers and Companies)
  - Demo accounts for testing

- **Job Management**
  - Browse job listings with search functionality
  - Detailed job view with application option
  - Company dashboard for managing job postings

- **UI/UX**
  - Responsive design for all devices
  - Dark mode support
  - Modern and clean interface

## Tech Stack

- **Frontend**: Next.js, TypeScript, Tailwind CSS
- **State Management**: Zustand
- **Form Validation**: React Hook Form with Zod
- **Styling**: Tailwind CSS
- **UI Enhancements**: Next-themes for dark mode

## Getting Sta

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd job-board
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Demo Accounts

For testing purposes, you can use the following demo accounts:

- **Job Seeker**:
  - Email: john@example.com
  - Password: password

- **Company**:
  - Email: company@example.com
  - Password: password

## Project Structure

```
job-board/
├── src/
│   ├── app/               # Next.js pages
│   ├── components/        # React components
│   │   ├── auth/          # Authentication components
│   │   ├── jobs/          # Job-related components
│   │   ├── layout/        # Layout components
│   │   └── ui/            # Reusable UI components
│   ├── lib/               # Utility functions
│   ├── store/             # Zustand stores
│   └── types/             # TypeScript types
├── public/                # Static files
└── package.json           # Project dependencies
```

## Current Status

This is a frontend-focused implementation with mock data and simulated API calls. In a production environment, this would be connected to a backend API.

### What's Working

- Complete frontend UI with responsive design
- Mock authentication flow with different user roles
- Job listing, searching, and filtering
- Job detail view and application functionality
- Dark mode toggle
- Company dashboard view

### What's Missing

- Backend API integration
- Persistent storage
- File uploads for resumes
- Job posting functionality
- User profile management
- Admin features

## Future Improvements

With more time, the following features would be implemented:

- Backend API using Node.js and Express/NestJS
- Database integration with MongoDB or PostgreSQL
- Real authentication with JWT or NextAuth
- File uploads for resumes and company logos
- Advanced filtering and sorting options
- Email notifications
- Admin panel for platform management
- Analytics for companies
- Recommendation system for job seekers

## License

MIT
