'use client';
import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { firebaseAuth } from '@/firebase/firebase';
import { onAuthStateChanged, signInAnonymously, User } from 'firebase/auth';

interface AuthContextType {
  user: User | null;
  authStatus: boolean;
  getIdToken: () => Promise<string | null>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [authStatus, setAuthStatus] = useState<boolean>(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, (user) => {
      if (user) {
        setUser(user);
        setAuthStatus(true);
      } else {
        signInAnonymously(firebaseAuth)
          .then((result) => {
            setUser(result.user);
            setAuthStatus(true);
          })
          .catch((error) => {
            console.error('Anonymous sign-in failed:', error);
          });
      }
    });

    return () => unsubscribe();
  }, []);

  const getIdToken = async () => {
    if (user) {
      return await user.getIdToken();
    }
    return null;
  };


  return (
    <AuthContext.Provider value={{ user, authStatus, getIdToken }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
