'use client';

import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { ChevronDown } from 'lucide-react';

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

export default function AccordionItem({ title, children, defaultOpen = false }: AccordionItemProps) {
  return (
    <Disclosure as="div" className="border-b border-border" defaultOpen={defaultOpen}>
      {({ open }) => (
        <>
          <DisclosureButton className="flex w-full items-center justify-between py-4 text-left font-semibold text-primary transition-colors hover:text-primary-dark">
            <span>{title}</span>
            <ChevronDown
              className={`h-5 w-5 shrink-0 transition-transform ${open ? 'rotate-180' : ''}`}
            />
          </DisclosureButton>
          <DisclosurePanel className="pb-4 text-[var(--color-text-light)]">{children}</DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}
