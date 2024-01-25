'use client';

import styled from 'styled-components';
import { OfferSlideProps } from '@/components/types';

const Slide = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
  align-items: center;
  justify-content: flex-end;
  padding-right: 10rem;
`;

const ParallaxBackground = styled.div<{ $url?: string }>`
  background-image: ${({ $url }) => $url && `url(${$url})`};
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-position: center;
  will-change: transform;
  background-size: cover;
`;

const Content = styled.div<{ $even: boolean }>`
  aspect-ratio: 1 / 1;
  background-color: ${({ theme, $even }) => ($even ? theme.colors.secondary : '#1b1b1b')};
  color: ${({ theme, $even }) => ($even ? theme.colors.primary : theme.colors.secondary)};
  width: 30%;
  border-radius: 1rem;
  display: flex;
  padding: 4rem;
  flex-direction: column;
  row-gap: 3rem;
  position: sticky;
  top: 0;
  overflow: hidden;

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

export default function OfferSlide({ info, index, parallaxImages }: OfferSlideProps) {
  return (
    <Slide className='slide'>
      <ParallaxBackground className='background' $url={parallaxImages?.[index]?.url} />
      <Content $even={index % 2 === 0} className='content'>
        <h4>{info.header}</h4>
        <span>{info.subheader}</span>
        <p>{info.paragraphOne}</p>
        <p>{info.paragraphTwo}</p>
      </Content>
    </Slide>
  );
}
