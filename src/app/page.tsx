import dynamic from 'next/dynamic';
import HomeAbout from '@/components/organisms/homeAbout';
import HomeRealizations from '@/components/organisms/homeRealizations';
import HomeOffer from '@/components/organisms/homeOffer';
import HomeReferences from '@/components/organisms/homeReferences';
import HomeBlog from '@/components/organisms/homeBlog';
import PaddingWrapper from '@/templates/paddingWrapper';
import Foot from '@/components/organisms/foot';

const DynamicHero = dynamic(() => import('@/components/organisms/hero'), {
  ssr: false,
  loading: () => <div style={{ height: '100vh' }} />,
});

export default function Page() {
  return (
    <>
      <DynamicHero />
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
