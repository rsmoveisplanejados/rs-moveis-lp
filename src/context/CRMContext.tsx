import { createContext, useContext, ReactNode } from 'react';
import { supabase } from '../lib/supabase';

export interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  store: string;
  investment: string;
  environments: string;
  status: string;
  createdAt: string;
}

interface CRMContextType {
  addLead: (lead: Omit<Lead, 'id' | 'status' | 'createdAt'>) => Promise<void>;
}

const CRMContext = createContext<CRMContextType | undefined>(undefined);

export const CRMProvider = ({ children }: { children: ReactNode }) => {
  const addLead = async (leadData: Omit<Lead, 'id' | 'status' | 'createdAt'>) => {
    try {
      const newLead = {
        ...leadData,
        status: 'novo',
      };

      console.log('Enviando lead:', newLead);

      const { error } = await supabase
        .from('leads')
        .insert([newLead]);

      if (error) {
        throw error;
      }

      console.log('Lead enviado com sucesso.');
    } catch (e) {
      console.error('Erro ao adicionar lead:', e);
      throw e;
    }
  };

  return (
    <CRMContext.Provider value={{ addLead }}>
      {children}
    </CRMContext.Provider>
  );
};

export const useCRM = () => {
  const context = useContext(CRMContext);
  if (context === undefined) {
    throw new Error('useCRM must be used within a CRMProvider');
  }
  return context;
};
