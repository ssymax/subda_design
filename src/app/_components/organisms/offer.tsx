'use client';

import { useRef } from 'react';
import styled from 'styled-components';
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
import offerSaloon from '../../../../public/offer-saloon.jpg';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const CardWrapper = styled.div`
  display: flex;
  justify-items: center;
  column-gap: 6rem;
  margin: 3rem auto;
  min-height: 80rem;

  ${({ theme }) => theme.maxWidth.xl} {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
    grid-auto-flow: row;
  }
`;

const SplitedWrapper = styled.div`
  display: flex;
  column-gap: 5.5rem;
  margin: 8rem 0;
  align-items: center;
  ${({ theme }) => theme.maxWidth.xl} {
    flex-direction: column;
  }
`;

const LeftWrapper = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 3rem;
  ${({ theme }) => theme.maxWidth.xl} {
    width: 100%;
  }
  span {
    line-height: 140%;
  }
  img {
    max-width: 100%;
    height: auto;
    border-radius: 1rem;
  }
`;

const Steps = styled.div`
  width: 40%;
  border-radius: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: 4rem;
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
  height: auto;
  transition: all 0.3s ease;
  ${({ theme }) => theme.maxWidth.xl} {
    width: 100%;
    margin-top: 8rem;
  }
  ${({ theme }) => theme.maxWidth.lg} {
    padding: 4rem 2rem;
  }
`;

const Slides = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  z-index: 1;
  overflow: hidden;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

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
      const slides = gsap.utils.toArray('.slide') as HTMLElement[];
      const getRatio = (el: HTMLElement) =>
        window.innerHeight / (window.innerHeight + el.offsetHeight);

      const mm = gsap.matchMedia();

      slides.forEach((slide, i) => {
        const bg = slide.querySelector('.background');
        const content = slide.querySelector('.content');
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
        <CardWrapper ref={cardWrapRef}>
          {approaches?.map((a) => <OfferCard key={a.url} {...a} />)}
        </CardWrapper>
        <SplitedWrapper>
          <LeftWrapper>
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
          </LeftWrapper>
          <Steps ref={stepsRef}>
            {steps?.map((s, i) => (
              <OfferStep key={s.title} step={s} index={i} stepsLength={steps.length} />
            ))}
          </Steps>
        </SplitedWrapper>
      </PaddingWrapper>

      <Slides>
        <List>
          {info?.map((item, i) => (
            <OfferSlide
              key={item.id}
              info={item}
              parallaxImages={parallaxImages || []}
              index={i}
            />
          ))}
        </List>
      </Slides>
    </section>
  );
}
