import type { Metadata } from 'next';
import PaddingWrapper from '@/templates/paddingWrapper';
import SimpleHeader from '@/components/atoms/simpleHeader';
import Foot from '@/components/organisms/foot';
import AboutBottomHeader from '@/components/molecules/aboutBottomHeader';
import Parallax from '@/components/atoms/parallax';
import { head } from '@/lib/constants';
import { getAboutMe } from '@/lib/api';
import kitchen2 from '../../../public/kitchen2.jpg';
import SmallHeader from '../_components/atoms/smallHeader';
import AboutInfo from '../_components/molecules/aboutInfo';
import AboutSkills from '../_components/molecules/aboutSkills';

export const metadata: Metadata = {
  title: `O mnie - ${head.title}`,
  description: head.description,
};

export default async function AboutMe() {
  const data = await getAboutMe();
  return (
    <>
      <section>
        <PaddingWrapper>
          <SimpleHeader isPageHeader header='O mnie' />
          <AboutInfo data={data} />
          <SmallHeader>Umiejętności</SmallHeader>
          <AboutSkills data={data} />
        </PaddingWrapper>
        <AboutBottomHeader />
      </section>
      <Foot>
        <Parallax src={kitchen2} />
      </Foot>
    </>
  );
}
