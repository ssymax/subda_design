'use client';

import { MouseEvent, useRef, useState } from 'react';
import Image from 'next/image';
import useSWR from 'swr';
import { useGSAP } from '@gsap/react';
import styled from 'styled-components';
import gsap from 'gsap';
import GalleryButtons from '@/components/molecules/galleryButtons';
import Line from '@/components/atoms/line';
import Pill from '@/components/atoms/pill';
import { getRealization } from '@/lib/api';
import { DetailedImage, DetailedRealizationItem } from '@/lib/types';
import PaddingWrapper from '@/templates/paddingWrapper';
import ContentfulImage from '@/lib/contentfulImage';

const Section = styled.section`
  display: flex;
  flex-direction: column;
  position: relative;
  img {
    max-width: 100%;
    height: auto;
    position: relative !important;
  }
`;

const HeaderWithText = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 6rem 0;
  column-gap: 3rem;
  ${({ theme }) => theme.maxWidth.lg} {
    flex-direction: column;
    row-gap: 6rem;
  }
  h1 {
    width: 50%;
    text-transform: uppercase;
    font-weight: 500;
    font-size: 5.4rem;
    ${({ theme }) => theme.maxWidth.lg} {
      width: 100%;
    }
    ${({ theme }) => theme.maxWidth.md} {
      font-size: 2.8rem;
      font-weight: 300;
    }
  }
  span {
    width: 50%;
    font-size: 1.8rem;
    font-weight: 300;
    line-height: 140%;
    ${({ theme }) => theme.maxWidth.lg} {
      width: 100%;
      font-size: 1.6rem;
      font-weight: 300;
    }
  }
`;

const PillsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 3rem;
`;

const ImagesContainer = styled.div`
  margin: 0 auto;
  padding-top: 10rem;
`;

const Masonry = styled.div`
  column-count: 2;
  column-gap: 10%;
  padding: 0 10%;
  position: relative;

  ${({ theme }) => theme.minWidth.md} {
    :nth-child(odd) {
      margin-top: 10%;
    }
    :nth-child(even) {
      margin-top: 20%;
    }
  }

  ${({ theme }) => theme.maxWidth.md} {
    column-count: 1;
  }
`;

const Brick = styled.div`
  break-inside: avoid;
  counter-increment: brick-counter;
  position: relative;
  ${({ theme }) => theme.maxWidth.md} {
    margin-top: 10%;
  }
  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    cursor: pointer;
    border-radius: 1rem;
  }
`;

const Gallery = styled.div`
  display: 'none';
  position: fixed;
  justify-content: center;
  align-items: center;
  z-index: 20000;
  width: 100%;
  cursor: pointer;

  img {
    user-select: none;
    max-height: 100%;
    width: 'auto';
    object-fit: contain;

    ${({ theme }) => theme.maxWidth.xl} {
      max-width: 100%;
      height: auto;
    }
  }
`;

export default function RealizationContent({ slug }: { slug: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const galleryButtonsRef = useRef<HTMLDivElement>(null);

  const { data } = useSWR<DetailedRealizationItem[], Error>(slug, getRealization);
  const initialState = {
    id: '',
    url: '',
    width: 0,
    height: 0,
  };
  const [galleryImage, setGalleryImage] = useState<DetailedImage>(initialState);
  const [activeIndex, setActiveIndex] = useState(0);

  const normalizedData = data?.[0];

  const animation = gsap.timeline();

  const { contextSafe } = useGSAP({ scope: containerRef });

  useGSAP(
    () => {
      if (!galleryImage.url.length) return;
      const element = document.getElementById(galleryImage?.id);
      const elementRect = element?.children[0].getBoundingClientRect();
      gsap.set(galleryButtonsRef?.current, { autoAlpha: 0, y: 100 });

      animation
        .fromTo(
          galleryRef.current,
          {
            duration: 1,
            left: elementRect?.x,
            top: elementRect?.y,
            width: elementRect?.width,
            height: elementRect?.height,
            display: 'flex',
          },
          {
            left: 0,
            top: 0,
            right: 0,
            height: window.innerHeight,
            width: '100%',
            backgroundColor: '#000',
          },
        )
        .to(galleryButtonsRef?.current, { autoAlpha: 1, delay: 0.2, y: 0 });
    },
    {
      dependencies: [galleryImage],
      scope: containerRef,
      revertOnUpdate: true,
    },
  );

  const onImageClick = (image: DetailedImage, index: number) => {
    setActiveIndex(index);
    setGalleryImage(image);
  };

  const onGalleryClick = contextSafe(() => {
    const element = document.getElementById(normalizedData?.images?.[activeIndex].id!);
    const elementRect = element?.children[0].getBoundingClientRect();
    animation
      .to(galleryButtonsRef.current, { duration: 0.1, autoAlpha: 0 })
      .to(
        galleryRef.current,
        {
          left: elementRect?.left,
          top: elementRect?.top,
          width: elementRect?.width,
          height: elementRect?.height,
          display: 'none',
        },
        '>',
      )
      .eventCallback('onComplete', () => setGalleryImage(initialState));
  });

  const handleClickNext = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    if (!normalizedData?.images.length) return;
    const length = normalizedData?.images.length;
    if (activeIndex === length - 1) setActiveIndex(0);
    else setActiveIndex(activeIndex + 1);
  };

  const handleClickPrev = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    if (!normalizedData?.images.length) return;
    const { length } = normalizedData.images;
    if (activeIndex === 0) setActiveIndex(length - 1);
    else setActiveIndex(activeIndex - 1);
  };

  const gallerySrc = normalizedData?.images[activeIndex].url || '';

  return (
    <Section>
      <ContentfulImage
        fill
        sizes='100vw'
        src={normalizedData?.mainImage || ''}
        alt={normalizedData?.title || ''}
      />
      <PaddingWrapper>
        <HeaderWithText>
          <h1>{normalizedData?.title}</h1>
          <span>{normalizedData?.description}</span>
        </HeaderWithText>
        <Line />
        <PillsWrapper>
          {normalizedData?.location && <Pill label={normalizedData.location} />}
          {normalizedData?.area && <Pill label={`${normalizedData.area}`} withSup />}
          {normalizedData?.year && <Pill label={normalizedData?.year} />}
        </PillsWrapper>
      </PaddingWrapper>
      <ImagesContainer ref={containerRef}>
        <Masonry>
          {normalizedData?.images.map((image, index) => (
            <Brick
              key={image.id}
              id={image.id}
              tabIndex={0}
              role='presentation'
              onClick={() => onImageClick(image, index)}
              onKeyDown={(e) => e.key === 'Enter' && onImageClick(image, index)}
            >
              <img src={image.url} alt={normalizedData?.title} />
            </Brick>
          ))}
        </Masonry>
        <Gallery
          ref={galleryRef}
          tabIndex={0}
          role='presentation'
          onClick={() => onGalleryClick()}
          onKeyDown={(e) => e.key === 'Enter' && onGalleryClick()}
        >
          <img src={gallerySrc} alt='' />
          <GalleryButtons
            ref={galleryButtonsRef}
            onNextClick={handleClickNext}
            onPrevClick={handleClickPrev}
          />
        </Gallery>
      </ImagesContainer>
    </Section>
  );
}
