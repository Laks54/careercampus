import { create } from 'zustand';
import { User } from '@/types';

type AuthState = {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
  setUser: (user: User | null) => void;
  setAuthenticated: (isAuthenticated: boolean) => void;
  setLoading: (isLoading: boolean) => void;
  setError: (error: string | null) => void;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
};

// Mock user for development
const mockUser: User = {
  id: '1',
  name: 'John Doe',
  email: 'john@example.com',
  role: 'JOB_SEEKER',
  image: 'https://randomuser.me/api/portraits/men/1.jpg',
};

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  isLoading: false,
  error: null,
  setUser: (user) => set({ user }),
  setAuthenticated: (isAuthenticated) => set({ isAuthenticated }),
  setLoading: (isLoading) => set({ isLoading }),
  setError: (error) => set({ error }),
  login: async (email, password) => {
    set({ isLoading: true, error: null });
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      // In a real app, we'd verify with API, here we just use mock data
      if (email === 'john@example.com' && password === 'password') {
        set({ user: mockUser, isAuthenticated: true, isLoading: false });
      } else if (email === 'company@example.com' && password === 'password') {
        set({
          user: { ...mockUser, id: '2', name: 'Company Admin', role: 'COMPANY' },
          isAuthenticated: true,
          isLoading: false,
        });
      } else {
        set({ error: 'Invalid email or password', isLoading: false });
      }
    } catch (error) {
      set({ error: 'Something went wrong', isLoading: false });
    }
  },
  logout: () => {
    set({ user: null, isAuthenticated: false });
  },
})); 