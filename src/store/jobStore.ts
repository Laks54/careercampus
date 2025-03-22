import { create } from 'zustand';
import { JobListing } from '@/types';

type JobState = {
  jobs: JobListing[];
  filteredJobs: JobListing[];
  searchTerm: string;
  selectedJob: JobListing | null;
  isLoading: boolean;
  error: string | null;
  setJobs: (jobs: JobListing[]) => void;
  setFilteredJobs: (jobs: JobListing[]) => void;
  setSearchTerm: (term: string) => void;
  selectJob: (job: JobListing | null) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  filterJobs: (term: string) => void;
};

// Mock data for development
const mockJobs: JobListing[] = [
  {
    id: '1',
    title: 'Frontend Developer',
    company: 'TechCorp',
    location: 'Remote',
    type: 'FULL_TIME',
    description: 'We are looking for a skilled Frontend Developer to join our team.',
    requirements: ['React', 'TypeScript', 'CSS', '3+ years experience'],
    salary: '$80,000 - $120,000',
    createdAt: new Date().toISOString(),
    postedBy: 'user1',
  },
  {
    id: '2',
    title: 'Backend Engineer',
    company: 'DataSystems Inc.',
    location: 'New York, NY',
    type: 'FULL_TIME',
    description: 'Backend engineer position for our growing team.',
    requirements: ['Node.js', 'PostgreSQL', 'AWS', '4+ years experience'],
    salary: '$100,000 - $150,000',
    createdAt: new Date().toISOString(),
    postedBy: 'user2',
  },
  {
    id: '3',
    title: 'UX/UI Designer',
    company: 'Creative Studios',
    location: 'San Francisco, CA',
    type: 'CONTRACT',
    description: 'Looking for a talented designer to work on our product.',
    requirements: ['Figma', 'Adobe XD', 'UI/UX principles', 'Portfolio'],
    salary: '$70,000 - $110,000',
    createdAt: new Date().toISOString(),
    postedBy: 'user3',
  },
];

export const useJobStore = create<JobState>((set) => ({
  jobs: mockJobs,
  filteredJobs: mockJobs,
  searchTerm: '',
  selectedJob: null,
  isLoading: false,
  error: null,
  setJobs: (jobs) => set({ jobs }),
  setFilteredJobs: (filteredJobs) => set({ filteredJobs }),
  setSearchTerm: (searchTerm) => set({ searchTerm }),
  selectJob: (selectedJob) => set({ selectedJob }),
  setLoading: (isLoading) => set({ isLoading }),
  setError: (error) => set({ error }),
  filterJobs: (term) => set((state) => {
    const filtered = state.jobs.filter((job) => 
      job.title.toLowerCase().includes(term.toLowerCase()) ||
      job.company.toLowerCase().includes(term.toLowerCase()) ||
      job.location.toLowerCase().includes(term.toLowerCase())
    );
    return { filteredJobs: filtered, searchTerm: term };
  }),
})); 