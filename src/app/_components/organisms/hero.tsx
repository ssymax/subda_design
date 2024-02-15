'use client';

import styled from 'styled-components';
import { useRef } from 'react';
import { useRouter } from 'next/navigation';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Image from 'next/image';
import ButtonsGroup from '@/components/molecules/buttonsGroup';
import SimpleHeader from '@/components/atoms/simpleHeader';
import { routes } from '@/routes/routes';
import PaddingWrapper from '@/templates/paddingWrapper';
import hero from '../../../../public/hero.png';
import heroMobile from '../../../../public/hero_mobile.png';

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

  img {
    width: 100%;
    height: auto;
  }
`;

const TextAndButtons = styled.div`
  align-self: flex-end;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 50%;
  row-gap: 4rem;
  padding-bottom: 4rem;

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
`;

export default function Hero() {
  const imageRef = useRef<HTMLImageElement>(null);
  const { push } = useRouter();

  useGSAP(
    () => {
      if (!imageRef.current) return;
      const tl = gsap.timeline();
      tl.from(imageRef.current, {
        filter: 'blur(10px)',
        scale: 1.1,
        duration: 1.5,
        ease: 'expo.inOut',
      });
    },
    { revertOnUpdate: true },
  );

  return (
    <Section>
      <Image
        ref={imageRef}
        priority
        className='mobile'
        src={heroMobile}
        alt='Dom w Gryźlinach'
        placeholder='blur'
      />
      <Image
        ref={imageRef}
        priority
        className='desktop'
        src={hero}
        alt='Dom w Gryźlinach'
        placeholder='blur'
      />
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
      </StyledPaddingWrapper>
    </Section>
  );
}
