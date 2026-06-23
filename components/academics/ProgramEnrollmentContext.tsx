'use client';

import { createContext, useContext, useState, type ReactNode } from 'react';
import type { Program } from '@/lib/data/programs';
import type { DeliveryMode } from '@/lib/deliveryMode';

interface ProgramEnrollmentContextValue {
  program: Program;
  selectedDelivery: DeliveryMode;
  setSelectedDelivery: (mode: DeliveryMode) => void;
}

const ProgramEnrollmentContext = createContext<ProgramEnrollmentContextValue | null>(null);

interface ProgramEnrollmentProviderProps {
  program: Program;
  initialDelivery?: DeliveryMode;
  children: ReactNode;
}

export function ProgramEnrollmentProvider({
  program,
  initialDelivery,
  children,
}: ProgramEnrollmentProviderProps) {
  const defaultDelivery =
    initialDelivery && program.deliveryOptions.includes(initialDelivery)
      ? initialDelivery
      : program.deliveryOptions[0];
  const [selectedDelivery, setSelectedDelivery] = useState<DeliveryMode>(defaultDelivery);

  return (
    <ProgramEnrollmentContext.Provider
      value={{ program, selectedDelivery, setSelectedDelivery }}
    >
      {children}
    </ProgramEnrollmentContext.Provider>
  );
}

export function useProgramEnrollment() {
  const context = useContext(ProgramEnrollmentContext);

  if (!context) {
    throw new Error('useProgramEnrollment must be used within ProgramEnrollmentProvider');
  }

  return context;
}
