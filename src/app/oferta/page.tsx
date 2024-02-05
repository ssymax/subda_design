import type { Metadata } from 'next';
import Offer from '@/components/organisms/offer';
import Foot from '@/components/organisms/foot';
import { head } from '@/lib/constants';

export const metadata: Metadata = {
  title: `Oferta - ${head.title}`,
  description: head.description,
};

export default function Page() {
  return (
    <>
      <Offer />
      <Foot />
    </>
  );
}
