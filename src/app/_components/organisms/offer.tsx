'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { OfferType } from '@/lib/types';
import SimpleHeader from '@/components/atoms/simpleHeader';
import PaddingWrapper from '@/templates/paddingWrapper';
import OfferCard from '@/components/molecules/offerCard';
import Button from '@/components/atoms/button';
import { routes } from '@/routes/routes';
import OfferStep from '@/components/molecules/offerStep';
import { minQuery } from '@/styles/constants';
import OfferSlide from '@/components/molecules/slide';
import styles from '@/styles/organisms/offer.module.scss';
import offerSaloon from '../../../../public/offer-saloon.jpg';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Offer({ data }: { data: OfferType }) {
  const cardWrapRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);
  const { push } = useRouter();

  const approaches = data?.approachesCollection.items;
  const steps = data?.steps;
  const info = data?.info;
  const parallaxImages = data?.parallaxCollection?.items;

  useGSAP(
    () => {
      if (!cardWrapRef.current) return;
      const cards = gsap.utils.toArray(cardWrapRef?.current.children) as HTMLElement[];

      gsap.from(cards, {
        autoAlpha: 0,
        duration: 0.8,
        y: 100,
      });
    },

    { scope: cardWrapRef, revertOnUpdate: true, dependencies: approaches },
  );

  useGSAP(
    () => {
      const slides = gsap.utils.toArray('[class*="slide_slide"]') as HTMLElement[];
      const getRatio = (el: HTMLElement) =>
        window.innerHeight / (window.innerHeight + el.offsetHeight);

      const mm = gsap.matchMedia();

      slides.forEach((slide, i) => {
        const bg = slide.querySelector('[class*="slide_background"]');
        const content = slide.querySelector('[class*="slide_content"]');
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: slide,
            start: () => (i ? 'top bottom' : 'top top'),
            end: 'bottom top',
            scrub: true,
            invalidateOnRefresh: true,
            snap: {
              snapTo: 0.5,
              duration: 0.5,
              ease: 'power1.inOut',
            },
          },
        });

        tl.fromTo(
          bg,
          {
            y: () => (i ? -window.innerHeight * getRatio(slide as HTMLElement) : 0),
          },
          {
            y: () => window.innerHeight * (1 - getRatio(slide as HTMLElement)),
            ease: 'none',
          },
        );

        mm.add(minQuery.md, () => {
          tl.fromTo(
            content,
            {
              y: () => (i ? window.innerHeight * -getRatio(slide as HTMLElement) * 2 : 0),
            },
            {
              y: () => window.innerHeight * getRatio(slide as HTMLElement) * 2,
              ease: 'none',
            },
            0,
          );
        });
      });
    },

    {
      revertOnUpdate: true,
      dependencies: parallaxImages,
    },
  );

  useGSAP(
    () => {
      if (!stepsRef.current) return;

      gsap.to(stepsRef.current.parentElement, {
        filter: 'blur(10px) grayscale(50)',
        scrollTrigger: {
          trigger: stepsRef.current,
          start: 'center top',
          pin: stepsRef.current.parentElement,
          pinSpacing: false,
          scrub: 2,
        },
      });
    },
    { scope: stepsRef, dependencies: steps },
  );
  return (
    <section>
      <PaddingWrapper>
        <SimpleHeader isPageHeader header='Oferta' />
        <div className={styles.cardWrapper} ref={cardWrapRef}>
          {approaches?.map((a) => <OfferCard key={a.url} {...a} />)}
        </div>
        <div className={styles.splitedWrapper}>
          <div className={styles.leftWrapper}>
            <div>
              <SimpleHeader alignLeft header='Prosta droga' />
              <SimpleHeader alignLeft header='ku wymarzonym wnętrzom' />
            </div>
            <span>{data?.stepsDescription}</span>
            <Button
              variant='primary'
              text='Porozmawiajmy o projekcie'
              onClick={() => push(routes.contact)}
            />
            <Image priority src={offerSaloon} alt='' />
          </div>
          <div className={styles.steps} ref={stepsRef}>
            {steps?.map((s, i) => (
              <OfferStep key={s.title} step={s} index={i} stepsLength={steps.length} />
            ))}
          </div>
        </div>
      </PaddingWrapper>

      <div className={styles.slides}>
        <div className={styles.list}>
          {info?.map((item, i) => (
            <OfferSlide
              key={item.id}
              info={item}
              parallaxImages={parallaxImages || []}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
