import type { Metadata } from 'next';
import PaddingWrapper from '@/templates/paddingWrapper';
import SimpleHeader from '@/components/atoms/simpleHeader';
import Foot from '@/components/organisms/foot';
import AboutAndSkills from '@/components/organisms/aboutAndSkills';
import AboutBottomHeader from '@/components/molecules/aboutBottomHeader';
import Parallax from '@/components/atoms/parallax';
import { head } from '@/lib/constants';
import kitchen2 from '../../../public/kitchen2.jpg';

export const metadata: Metadata = {
  title: `O mnie - ${head.title}`,
  description: head.description,
};

export default function AboutMe() {
  return (
    <>
      <section>
        <PaddingWrapper>
          <SimpleHeader isPageHeader header='O mnie' />
          <AboutAndSkills />
        </PaddingWrapper>
        <AboutBottomHeader />
      </section>
      <Foot>
        <Parallax src={kitchen2} />
      </Foot>
    </>
  );
}
