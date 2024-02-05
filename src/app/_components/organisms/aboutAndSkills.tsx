'use client';

import useSWR from 'swr';
import AboutInfo from '@/components/molecules/aboutInfo';
import SmallHeader from '@/components/atoms/smallHeader';
import { AboutMeType } from '@/lib/types';
import { getAboutMe } from '@/lib/api';
import AboutSkills from '../molecules/aboutSkills';

export default function AboutAndSkills() {
  const { data, isLoading, error } = useSWR<AboutMeType>('about-me', getAboutMe);
  return (
    <>
      <AboutInfo data={data} />
      <SmallHeader>Umiejętności</SmallHeader>
      <AboutSkills data={data} />
    </>
  );
}
