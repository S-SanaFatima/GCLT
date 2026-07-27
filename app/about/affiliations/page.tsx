import { Metadata } from 'next';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Affiliations & Partnerships',
};

/** Legacy URL — brief §4 renames this to Collaborations & Partnerships. */
export default function AffiliationsRedirectPage() {
  redirect('/about/collaborations-partnerships');
}
