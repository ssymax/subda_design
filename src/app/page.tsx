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

export const metadata: Metadata = {
  title: head.title,
  description: head.description,
};

export default function Page() {
  return (
    <>
      <Hero />
      <PaddingWrapper>
        <HomeAbout />
        <HomeRealizations />
        <HomeOffer />
        <HomeReferences />
        <HomeBlog />
      </PaddingWrapper>
      <Foot />
    </>
  );
}
