export interface User {
  email: string;
  name: string;
}

export const DEMO_CREDENTIALS = {
  email: 'admin@blog.com',
  password: 'admin123',
  name: 'Admin User'
};

export const validateCredentials = (email: string, password: string): User | null => {
  if (email === DEMO_CREDENTIALS.email && password === DEMO_CREDENTIALS.password) {
    return {
      email: DEMO_CREDENTIALS.email,
      name: DEMO_CREDENTIALS.name
    };
  }
  return null;
};

export const getStoredUser = (): User | null => {
  if (typeof window === 'undefined') return null;
  
  try {
    const stored = localStorage.getItem('blog_user');
    return stored ? JSON.parse(stored) : null;
  } catch {
    return null;
  }
};

export const storeUser = (user: User): void => {
  if (typeof window === 'undefined') return;
  localStorage.setItem('blog_user', JSON.stringify(user));
};

export const clearStoredUser = (): void => {
  if (typeof window === 'undefined') return;
  localStorage.removeItem('blog_user');
};