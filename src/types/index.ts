export type User = {
  id: string;
  name: string;
  email: string;
  role: 'COMPANY' | 'JOB_SEEKER';
  image?: string;
};

export type JobListing = {
  id: string;
  title: string;
  company: string;
  location: string;
  type: 'FULL_TIME' | 'PART_TIME' | 'CONTRACT' | 'REMOTE';
  description: string;
  requirements: string[];
  salary?: string;
  createdAt: string;
  postedBy: string;
};

export type JobApplication = {
  id: string;
  jobId: string;
  userId: string;
  resume?: string;
  coverLetter?: string;
  status: 'PENDING' | 'REVIEWED' | 'REJECTED' | 'ACCEPTED';
  createdAt: string;
}; 