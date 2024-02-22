import type { Metadata } from 'next';
import PaddingWrapper from '@/templates/paddingWrapper';
import SimpleHeader from '@/components/atoms/simpleHeader';
import Foot from '@/components/organisms/foot';
import AboutBottomHeader from '@/components/molecules/aboutBottomHeader';
import Parallax from '@/components/atoms/parallax';
import SmallHeader from '@/components/atoms/smallHeader';
import AboutSkills from '@/components/molecules/aboutSkills';
import AboutInfo from '@/components/molecules/aboutInfo';
import { head } from '@/lib/constants';
import { getAboutMe } from '@/lib/api';
import kitchen2 from '../../../public/kitchen2.jpg';

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
