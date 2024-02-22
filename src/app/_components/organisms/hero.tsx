'use client';

import { useRef } from 'react';
import { useRouter } from 'next/navigation';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import Image from 'next/image';
import ButtonsGroup from '@/components/molecules/buttonsGroup';
import SimpleHeader from '@/components/atoms/simpleHeader';
import { routes } from '@/routes/routes';
import PaddingWrapper from '@/templates/paddingWrapper';
import Line from '@/components/atoms/line';
import styles from '@/styles/organisms/hero.module.scss';
import { minQuery } from '@/styles/constants';
import { heroText } from '@/lib/constants';
import hero from '../../../../public/hero.png';
import heroMobile from '../../../../public/hero_mobile.png';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.config({ limitCallbacks: true });
}

export default function Hero() {
  const imageRef = useRef<HTMLImageElement>(null);
  const { push } = useRouter();

  useGSAP(
    () => {
      if (!imageRef.current) return;
      const mm = gsap.matchMedia();
      mm.add(minQuery.lg, () => {
        gsap.to(imageRef.current, {
          y: -70,
          filter: 'blur(5px)',
          scrollTrigger: {
            trigger: imageRef.current,
            start: 'top top',
            end: 'bottom top-=70',
            pin: true,
            pinSpacing: false,
            scrub: 2,
            invalidateOnRefresh: true,
          },
        });
      });
    },
    { revertOnUpdate: true },
  );

  return (
    <section className={styles.container}>
      <div className={styles.imageWrapper} ref={imageRef}>
        <Image
          priority
          className={styles.mobile}
          src={heroMobile}
          alt='Dom w Gryźlinach'
          sizes='100vw'
        />
        <Image
          priority
          sizes='100vw'
          className={styles.desktop}
          src={hero}
          alt='Dom w Gryźlinach'
        />
      </div>

      <PaddingWrapper additionalClass={styles.paddingWrap}>
        <div>
          <SimpleHeader alignLeft header='Sztuka życia' />
          <SimpleHeader alignLeft header='W pięknych wnętrzach' />
        </div>
        <div className={styles.textAndButtons}>
          <span>{heroText}</span>
          <ButtonsGroup
            leftLabel='kontakt'
            rightLabel='oferta'
            onLeftClick={() => push(routes.contact)}
            onRightClick={() => push(routes.offer)}
          />
        </div>
        <Line />
      </PaddingWrapper>
    </section>
  );
}
