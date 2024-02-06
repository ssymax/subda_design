import type { Metadata } from 'next';
import ContactContent from '@/components/organisms/contactContent';
import { contactTexts, head } from '@/lib/constants';

export const metadata: Metadata = {
  title: `Kontakt - ${head.title}`,
  description: contactTexts.invite,
};

export default function Page() {
  return <ContactContent />;
}
