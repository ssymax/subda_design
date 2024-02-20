import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
// import ContactContent from '@/components/organisms/contactContent';
import { contactTexts, head } from '@/lib/constants';

const DynamicContent = dynamic(() => import('@/components/organisms/contactContent'), {
  ssr: false,
});

export const metadata: Metadata = {
  title: `Kontakt - ${head.title}`,
  description: contactTexts.invite,
};

export default function Page() {
  return <DynamicContent />;
}
