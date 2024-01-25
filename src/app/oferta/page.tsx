'use client';

import { useRef } from 'react';
import styled from 'styled-components';
import useSWR from 'swr';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { getOffer } from '@/lib/api';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { OfferType } from '@/lib/types';
import SimpleHeader from '@/components/atoms/simpleHeader';
import Line from '@/components/atoms/line';
import PaddingWrapper from '@/templates/paddingWrapper';
import OfferCard from '@/components/molecules/offerCard';
import Foot from '@/components/organisms/foot';
import Button from '@/components/atoms/button';
import { routes } from '@/routes/routes';
import offerSaloon from '../../../public/offer-saloon.jpg';
import OfferStep from '../_components/molecules/offerStep';
import OfferSlide from '../_components/molecules/slide';

gsap.registerPlugin(ScrollTrigger);

const StyledSimpleHeader = styled(SimpleHeader)`
  text-align: center;
  margin: 4rem 0;
`;

const CardWrapper = styled.div`
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  grid-auto-flow: row;
  column-gap: 6rem;
  margin: 3rem auto;
  padding: 0 5rem;
  min-height: 80rem;
`;

const SplitedWrapper = styled.div`
  display: flex;
  column-gap: 5.5rem;
  margin: 8rem 0;
  align-items: center;
`;

const LeftWrapper = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 3rem;

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
  height: fit-content;
`;

const Slides = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  z-index: 1;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export default function Offer() {
  const cardWrapRef = useRef<HTMLDivElement>(null);
  const { data, isLoading, error } = useSWR<OfferType>('offer', getOffer);
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
        marginTop: 0,
        duration: 1,
        stagger: {
          amount: 0.2,
          from: 'random',
        },
      });
    },

    { scope: cardWrapRef, revertOnUpdate: true, dependencies: approaches },
  );

  useGSAP(
    () => {
      const slides = gsap.utils.toArray('.slide') as HTMLElement[];
      const getRatio = (el: HTMLElement) =>
        window.innerHeight / (window.innerHeight + el.offsetHeight);

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
    },

    {
      revertOnUpdate: true,
      dependencies: parallaxImages,
    },
  );

  return (
    <>
      <section>
        <PaddingWrapper>
          <StyledSimpleHeader>Oferta</StyledSimpleHeader>
          <Line />
          <CardWrapper ref={cardWrapRef}>
            {approaches?.map((a) => <OfferCard key={a.url} {...a} />)}
          </CardWrapper>
          <SplitedWrapper>
            <LeftWrapper>
              <div>
                <SimpleHeader>Prosta droga</SimpleHeader>
                <SimpleHeader>ku wymarzonym wnętrzom</SimpleHeader>
              </div>
              <span>{data?.stepsDescription}</span>
              <Button
                variant='primary'
                text='Porozmawiajmy o państwa projekcie'
                onClick={() => push(routes.contact)}
              />
              <Image priority src={offerSaloon} alt='' />
            </LeftWrapper>
            <Steps>
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
      <Foot />
    </>
  );
}
