'use client';

import styled from 'styled-components';
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
import hero from '../../../../public/hero.png';
import heroMobile from '../../../../public/hero_mobile.png';
import Line from '../atoms/line';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.config({ limitCallbacks: true });
}

const text = `Tworząc swój wymarzony projekt wnętrz, pragną Państwo
współpracować z kimś, kto rozumie Państwa potrzeby.`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  row-gap: 4rem;
  align-items: center;
  position: relative;

  .mobile {
    ${({ theme }) => theme.minWidth.lg} {
      display: none;
    }
  }

  .desktop {
    ${({ theme }) => theme.maxWidth.lg} {
      display: none;
    }
  }

  ${({ theme }) => theme.maxWidth.lg} {
    row-gap: 2rem;
    margin: 0 auto;
  }
`;

const ImageWrapper = styled.div`
  overflow: hidden;
  margin-top: -7rem;
  z-index: -1;
`;

const TextAndButtons = styled.div`
  align-self: flex-end;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 50%;
  row-gap: 4rem;

  ${({ theme }) => theme.maxWidth.lg} {
    width: 100%;
  }
  span {
    font-size: 3rem;
    line-height: 140%;

    ${({ theme }) => theme.maxWidth.lg} {
      font-size: 1.8rem;
    }
  }
  div {
    ${({ theme }) => theme.maxWidth.lg} {
      justify-content: center;
      width: 100%;
    }
  }
`;

const StyledPaddingWrapper = styled(PaddingWrapper)`
  display: flex;
  flex-direction: column;
  row-gap: 4rem;
  background-color: ${({ theme }) => theme.colors.beige};
  padding-top: 4rem;
`;

export default function Hero() {
  const imageRef = useRef<HTMLImageElement>(null);
  const { push } = useRouter();

  useGSAP(() => {
    if (!imageRef.current) return;

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
      },
    });
  }, {});

  return (
    <Section>
      <ImageWrapper ref={imageRef}>
        <Image
          priority
          className='mobile'
          src={heroMobile}
          alt='Dom w Gryźlinach'
          placeholder='blur'
        />
        <Image
          priority
          className='desktop'
          src={hero}
          alt='Dom w Gryźlinach'
          placeholder='blur'
        />
      </ImageWrapper>

      <StyledPaddingWrapper>
        <div>
          <SimpleHeader header='Sztuka życia' />
          <SimpleHeader header='W pięknych wnętrzach' />
        </div>
        <TextAndButtons>
          <span>{text}</span>
          <ButtonsGroup
            leftLabel='kontakt'
            rightLabel='oferta'
            onLeftClick={() => push(routes.contact)}
            onRightClick={() => push(routes.offer)}
          />
        </TextAndButtons>
        <Line />
      </StyledPaddingWrapper>
    </Section>
  );
}
