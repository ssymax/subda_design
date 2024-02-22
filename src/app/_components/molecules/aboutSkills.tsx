'use client';

import { CSSProperties, useRef } from 'react';
import { AboutMeType } from '@/lib/types';
import { minQuery } from '@/styles/constants';
import useMediaQuery from '@/hooks/useMediaQuery';
import ContentfulImage from '@/lib/contentfulImage';
import { useGSAP } from '@gsap/react';
import { thumbsAnimation } from '@/utils/utils';
import styles from '@/styles/molecules/aboutSkills.module.scss';

export default function AboutSkills({ data }: { data?: AboutMeType }) {
  const containerRef = useRef<HTMLDivElement>(null);

  const largeScreen = useMediaQuery(minQuery.lg);

  const aboutImages = data?.imagesCollection.items.map(({ url, title }) => ({
    url,
    title,
  }));

  const skillImgClass = 'skill-image';

  useGSAP(
    () => {
      thumbsAnimation(skillImgClass);
    },
    { scope: containerRef, revertOnUpdate: true, dependencies: aboutImages },
  );

  const imagePositions: CSSProperties[] = [
    { left: largeScreen ? '55%' : '73%' },
    { right: '4%', top: '18%' },
    { left: '60%', top: '40%' },
    { left: '40%', top: '60%' },
    { right: '10%', bottom: '0' },
  ];

  const imagesSizes = [
    { width: 200, height: 120 },
    { width: 200, height: 130 },
    { width: 200, height: 150 },
    { width: 250, height: 150 },
    { width: 120, height: 180 },
  ];

  return (
    <div className={styles.skills} ref={containerRef}>
      {aboutImages?.map((image, index) => (
        <ContentfulImage
          className={skillImgClass}
          key={image.url}
          width={largeScreen ? imagesSizes[index].width : imagesSizes[index].width / 2}
          height={largeScreen ? imagesSizes[index].height : imagesSizes[index].height / 2}
          src={image.url}
          alt=''
          style={imagePositions[index]}
        />
      ))}
      {data?.skills.map((s) => (
        <div className={styles.skill} key={s}>
          {s}
        </div>
      ))}
    </div>
  );
}
