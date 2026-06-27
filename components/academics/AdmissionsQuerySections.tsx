'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import AdmissionsProgramIntent from '@/components/academics/AdmissionsProgramIntent';
import AdmissionsApplicationForm from '@/components/academics/AdmissionsApplicationForm';
import ApplyNowButton from '@/components/shared/ApplyNowButton';
import { getProgramBySlug } from '@/lib/data/programs';
import { deliveryModeLabels, isDeliveryMode } from '@/lib/deliveryMode';
import { isGoogleFormConfigured } from '@/lib/googleForms';

function ProgramIntentInner() {
  const searchParams = useSearchParams();
  const programSlug = searchParams.get('program') ?? undefined;
  const delivery = searchParams.get('delivery') ?? undefined;

  return <AdmissionsProgramIntent programSlug={programSlug} delivery={delivery} />;
}

function ApplySectionsInner() {
  const searchParams = useSearchParams();
  const programSlug = searchParams.get('program') ?? undefined;
  const delivery = searchParams.get('delivery') ?? undefined;
  const selectedProgram = programSlug ? getProgramBySlug(programSlug) : undefined;

  return (
    <>
      <div className="mt-10 rounded-card bg-primary p-8 text-white">
        <h3 className="mb-2 text-white">Ready to apply?</h3>
        <p className="mb-4 text-gray-200">
          {isGoogleFormConfigured('admissions')
            ? 'Use the secure application form below to submit your application and upload documents.'
            : 'Complete the online application form once configured, or contact admissions.'}
        </p>
        <ApplyNowButton
          formKey="admissions"
          prefill={
            selectedProgram
              ? {
                  program: selectedProgram.academicName,
                  ...(delivery && isDeliveryMode(delivery)
                    ? { delivery: deliveryModeLabels[delivery] }
                    : {}),
                }
              : undefined
          }
          className="btn-accent inline-flex items-center gap-2"
          fallbackHref="#application-form"
          openInNewTab={false}
        >
          {isGoogleFormConfigured('admissions') ? 'Go to application form' : 'Apply Now'}
        </ApplyNowButton>
      </div>

      <div className="mt-12">
        <AdmissionsApplicationForm
          programTitle={selectedProgram?.academicName}
          delivery={delivery}
        />
      </div>
    </>
  );
}

export function AdmissionsProgramIntentFromQuery() {
  return (
    <Suspense fallback={null}>
      <ProgramIntentInner />
    </Suspense>
  );
}

export function AdmissionsApplySectionsFromQuery() {
  return (
    <Suspense fallback={null}>
      <ApplySectionsInner />
    </Suspense>
  );
}
