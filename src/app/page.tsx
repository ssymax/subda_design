import Hero from '@/components/organisms/hero';
import HomeAbout from '@/components/organisms/homeAbout';
import HomeRealizations from '@/components/organisms/homeRealizations';
import HomeOffer from '@/components/organisms/homeOffer';
import HomeReferences from '@/components/organisms/homeReferences';
import HomeBlog from '@/components/organisms/homeBlog';

export default function Page() {
  return (
    <>
      <Hero />
      <HomeAbout />
      <HomeRealizations />
      <HomeOffer />
      <HomeReferences />
      <HomeBlog />
    </>
  );
}
