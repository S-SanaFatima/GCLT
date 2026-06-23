import { Metadata } from 'next';
import PageHero from '@/components/shared/PageHero';
import AccordionItem from '@/components/shared/AccordionItem';

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Frequently asked questions about GCLT admissions, fees, eligibility, certificates, delivery modes, and more.',
};

const faqs = [
  {
    q: 'What is the full name of GCLT?',
    a: 'GCLT stands for the Global Centre for Learning & Training. Use "Centre" (British spelling) and "&" (not "and") in all official references.',
  },
  {
    q: 'Where is GCLT located?',
    a: 'GCLT is based in Islamabad, Pakistan — Behind National Press Club, St#39, F-6/1. See our Contact page for directions and map.',
  },
  {
    q: 'How do I apply for a diploma programme?',
    a: 'Visit the Admissions page, review programme requirements, prepare your documents, and email admissions@gclt.com.pk with the programme name in the subject line.',
  },
  {
    q: 'What are the admission fees?',
    a: 'Fees vary by programme. Contact admissions@gclt.com.pk for the current fee structure for your chosen programme.',
  },
  {
    q: 'What documents are required for admission?',
    a: 'Typically: application form, academic transcripts, statement of purpose, CV, references (for diplomas), and a passport-size photograph. See the Admissions page for the full list.',
  },
  {
    q: 'Are programmes delivered online, in-person, or hybrid?',
    a: 'Delivery mode varies by programme. Each programme page displays Mode of Delivery in the Quick Facts box (online, in-person, or hybrid).',
  },
  {
    q: 'What certificates will I receive?',
    a: 'Certificates are issued by the Global Centre for Learning & Training upon successful completion. The qualification type is listed on each programme page.',
  },
  {
    q: 'Are scholarships available?',
    a: 'GCLT may offer limited scholarships subject to availability. Contact admissions@gclt.com.pk to enquire about current scholarship opportunities.',
  },
  {
    q: 'What is the refund policy?',
    a: 'Refund terms depend on the programme and timing of withdrawal. Contact admissions@gclt.com.pk before enrolling for the current refund policy.',
  },
  {
    q: 'Are there internship opportunities?',
    a: 'Yes — Research Internships and Editorial Internships (for journals). Visit Academics → Internships or Careers → Internship Opportunities.',
  },
  {
    q: 'What research journals does GCLT publish?',
    a: 'Three peer-reviewed journals: Al Kashaf, Al Salihat, and Al Haqeeqah. Visit Research → Journals for details and submission guidelines.',
  },
  {
    q: 'How can I submit a paper for publication?',
    a: 'Visit our Call for Papers page or email research@gclt.com.pk with your abstract and journal name in the subject line.',
  },
  {
    q: 'What is the TAR programme?',
    a: 'Technical Approaches to Research (TAR) is a 12-week professional research training course delivered online. See Academics → Short Courses.',
  },
  {
    q: 'What is IERP?',
    a: 'IERP stands for International Education & Research Programme — GCLT\'s platform for global academic exchange and collaborative research.',
  },
  {
    q: 'How do I contact GCLT?',
    a: 'General: info@gclt.com.pk | Admissions: admissions@gclt.com.pk | Careers: careers@gclt.com.pk | Phone/WhatsApp: +92 333 9381201',
  },
];

export default function FAQPage() {
  return (
    <>
      <PageHero
        title="Frequently Asked Questions"
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'FAQ' }]}
      />
      <section className="section-padding bg-white">
        <div className="container-gclt max-w-3xl">
          {faqs.map((faq, i) => (
            <AccordionItem key={faq.q} title={faq.q} defaultOpen={i === 0}>
              <p>{faq.a}</p>
            </AccordionItem>
          ))}
        </div>
      </section>
    </>
  );
}
