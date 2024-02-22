'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRouter } from 'next/navigation';
import ButtonsGroup from '@/components/molecules/buttonsGroup';
import InfoItem from '@/components/atoms/infoItem';
import { AboutMeType } from '@/lib/types';
import { routes } from '@/routes/routes';
import ContentfulImage from '@/lib/contentfulImage';
import styles from '@/styles/molecules/aboutInfo.module.scss';

export default function AboutInfo({ data }: { data?: AboutMeType }) {
  const aboutRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const { push } = useRouter();

  useGSAP(
    () => {
      if (!leftRef.current) return;
      if (!rightRef.current) return;

      const tl = gsap.timeline();
      const texts = leftRef.current.children;
      const elements = gsap.utils.toArray(texts);

      tl.from(rightRef.current, {
        autoAlpha: 0,
        scale: 1.05,
        duration: 0.8,
        ease: 'power2.out',
      }).from(
        elements,
        { x: -100, autoAlpha: 0, ease: 'power2.out', stagger: 0.05, duration: 0.8 },
        '<>',
      );
    },
    { scope: aboutRef, revertOnUpdate: true, dependencies: [data] },
  );

  return (
    <div className={styles.info} ref={aboutRef}>
      <div ref={leftRef} className={styles.left}>
        {data?.info.map((item) => (
          <InfoItem key={item.header} header={item.header} text={item.text} />
        ))}
        <ButtonsGroup
          leftLabel='Oferta'
          rightLabel='Porozmawiajmy'
          onLeftClick={() => push(routes.offer)}
          onRightClick={() => push(routes.contact)}
        />
      </div>
      <div ref={rightRef} className={styles.right}>
        <div className={styles.image}>
          {data?.image.url && (
            <ContentfulImage
              priority
              src={data.image.url}
              alt={data?.image.title || ''}
              sizes='100vw'
              width={500}
              height={700}
            />
          )}
        </div>
      </div>
    </div>
  );
}
