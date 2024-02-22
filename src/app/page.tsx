import type { Metadata } from 'next';
import HomeAbout from '@/components/organisms/homeAbout';
import HomeRealizations from '@/components/organisms/homeRealizations';
import HomeOffer from '@/components/organisms/homeOffer';
import HomeReferences from '@/components/organisms/homeReferences';
import HomeBlog from '@/components/organisms/homeBlog';
import PaddingWrapper from '@/templates/paddingWrapper';
import Foot from '@/components/organisms/foot';
import Hero from '@/components/organisms/hero';
import { head } from '@/lib/constants';
import { getHomeBlog, getHomeOffer, getHomeRealizations } from '@/lib/api';
import HeroImage from './_components/atoms/heroImage';

export const metadata: Metadata = {
  title: head.title,
  description: head.description,
  openGraph: {
    title: 'Subda Design',
    description: 'Marta Subda Design - projektant wnętrz',
    images: 'https://subdadesign.pl/hero.png',
    type: 'website',
  },
  metadataBase: new URL('https://subdadesign.pl'),
};

export default async function Page() {
  const realizations = await getHomeRealizations();
  const blogPosts = await getHomeBlog();
  const offer = await getHomeOffer();
  return (
    <>
      <HeroImage />
      <Hero />
      <HomeAbout />
      <PaddingWrapper>
        <HomeRealizations realizations={realizations} />
        <HomeOffer offer={offer} />
        <HomeReferences />
        <HomeBlog blogPosts={blogPosts} />
      </PaddingWrapper>
      <Foot />
    </>
  );
}
