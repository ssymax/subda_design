'use client';

import { useRef } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRouter } from 'next/navigation';
import ButtonsGroup from '@/components/molecules/buttonsGroup';
import InfoItem from '@/components/atoms/infoItem';
import { AboutMeType } from '@/lib/types';
import { routes } from '@/routes/routes';
import ContentfulImage from '@/lib/contentfulImage';

const AboutWrapper = styled.div`
  display: flex;
  margin-top: 3rem;
  column-gap: 10rem;
  margin-bottom: 10rem;
  min-height: 100vh;
  ${({ theme }) => theme.maxWidth.lg} {
    flex-direction: column-reverse;
    row-gap: 5rem;
  }
`;

const LeftWrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  row-gap: 5rem;
  ${({ theme }) => theme.maxWidth.lg} {
    row-gap: 0rem;
    width: 100%;
  }
`;

const RightWrapper = styled.div`
  width: 50%;
  ${({ theme }) => theme.maxWidth.lg} {
    width: 100%;
  }
`;

const ImageWrapper = styled.div`
  padding: 0 5%;
  position: relative;
  img {
    border-radius: 1rem;
    width: 100%;
    height: auto;
  }
`;

export default function AboutInfo({ data }: { data?: AboutMeType }) {
  const aboutRef = useRef<HTMLDivElement>(null);
  const { push } = useRouter();

  useGSAP(
    () => {
      const tl = gsap.timeline();
      const texts = document.querySelector('.left');
      if (!texts) return;
      const elements = gsap.utils.toArray(texts?.children);

      tl.from('.right', {
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
    <AboutWrapper ref={aboutRef}>
      <LeftWrapper className='left'>
        {data?.info.map((item) => (
          <InfoItem key={item.header} header={item.header} text={item.text} />
        ))}
        <ButtonsGroup
          leftLabel='Oferta'
          rightLabel='Porozmawiajmy'
          onLeftClick={() => push(routes.offer)}
          onRightClick={() => push(routes.contact)}
        />
      </LeftWrapper>
      <RightWrapper className='right'>
        {data?.image.url && (
          <ImageWrapper>
            <ContentfulImage
              src={data.image.url}
              alt={data?.image.title || ''}
              sizes='100vw'
              width={500}
              height={700}
            />
          </ImageWrapper>
        )}
      </RightWrapper>
    </AboutWrapper>
  );
}
