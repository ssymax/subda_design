import type { Metadata } from 'next';
import Offer from '@/components/organisms/offer';
import Foot from '@/components/organisms/foot';
import { head } from '@/lib/constants';
import { getOffer } from '@/lib/api';

export const metadata: Metadata = {
  title: `Oferta - ${head.title}`,
  description: head.description,
};

export default async function Page() {
  const offer = await getOffer();
  return (
    <>
      <Offer data={offer} />
      <Foot />
    </>
  );
}
