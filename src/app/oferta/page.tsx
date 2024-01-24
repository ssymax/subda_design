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
import offerBg from '../../../public/offer-bg.jpg';

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
  margin-top: 8rem;
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

const Step = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
  line-height: 140%;

  span {
    font-weight: 600;
    font-size: 2.2rem;
  }
`;

const StickyWrapper = styled.div`
  width: 100%;
  position: relative;
  margin-top: 10rem;
  overflow: hidden;
  img {
    max-width: 100%;
    height: auto;
    position: relative !important;
    z-index: -2;
  }
`;

const Sticky = styled.div`
  aspect-ratio: 1 / 1;
  position: absolute;
  background-color: ${({ theme }) => theme.colors.secondary};
  top: 0;
  z-index: -1;
  right: 0;
  width: 30%;
  border-radius: 1rem;
  display: flex;
  padding: 4rem;
  flex-direction: column;
  row-gap: 3rem;
  right: 10rem;

  h4 {
    text-transform: uppercase;
  }

  span {
    font-size: 3rem;
    font-weight: 600;
  }

  p {
    line-height: 140%;
  }
`;

export default function Offer() {
  const cardWrapRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const { data, isLoading, error } = useSWR<OfferType>('offer', getOffer);
  const { push } = useRouter();

  const approaches = data?.approachesCollection.items;
  const steps = data?.steps;
  const info = data?.info;

  useGSAP(
    () => {
      if (!cardWrapRef.current) return;
      const cards = gsap.utils.toArray(cardWrapRef?.current.children);

      gsap.from(cards, {
        autoAlpha: 0,
        y: 100,
        stagger: {
          amount: 0.2,
          from: 'random',
        },
      });

      const animation = gsap.from(cards, {
        marginTop: 0,
        duration: 2,
        ease: 'expo.out',
      });

      ScrollTrigger.create({
        animation,
        trigger: cardWrapRef.current,
        start: 'top top+=120px',
        scrub: 1,
      });
    },

    { scope: cardWrapRef, revertOnUpdate: true, dependencies: approaches },
  );

  useGSAP(
    () => {
      if (!stickyRef.current) return;

      gsap.fromTo(
        stickyRef.current,
        {
          yPercent: -100,
        },
        {
          yPercent: 50,
          scrollTrigger: {
            trigger: stickyRef.current.parentElement,
            start: 'top center',
            end: 'center center',
            scrub: 1,
          },
        },
      );
    },
    {
      scope: stickyRef,
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
              <Image src={offerSaloon} alt='' />
            </LeftWrapper>
            <Steps>
              {steps?.map((s, i) => (
                <Step key={s.title}>
                  <h4>{s.header}</h4>
                  <span>{s.title}</span>
                  <p>{s.description}</p>
                  {i !== steps.length - 1 && <Line />}
                </Step>
              ))}
            </Steps>
          </SplitedWrapper>
        </PaddingWrapper>
        <StickyWrapper>
          <Sticky ref={stickyRef}>
            <h4>{info?.header}</h4>
            <span>{info?.subheader}</span>
            <p>{info?.paragraphOne}</p>
            <p>{info?.paragraphTwo}</p>
          </Sticky>
          <Image src={offerBg} alt='' />
        </StickyWrapper>
      </section>
      <Foot />
    </>
  );
}
