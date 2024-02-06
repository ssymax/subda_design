import type { Metadata } from 'next';
import RealizationContent from '@/app/_components/organisms/realizationContent';
import Foot from '@/components/organisms/foot';
import { getRealization } from '@/lib/api';
import { head } from '@/lib/constants';

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const rel = await getRealization(params.slug);
  return {
    title: `${rel[0].title} - ${head.title}`,
    description: rel[0].description,
  };
}

export default async function Page({ params }: { params: { slug: string } }) {
  const realizationData = await getRealization(params.slug);

  return (
    <>
      <RealizationContent realizationData={realizationData[0]} />
      <Foot />
    </>
  );
}
