'use client';

import useSWR from 'swr';
import { useGSAP } from '@gsap/react';
import { MouseEvent, useRef, useState } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import { Flip } from 'gsap/Flip';
import Image from 'next/image';
import { getRealization } from '@/lib/api';
import { DetailedImage, DetailedRealizationItem } from '@/lib/types';

gsap.registerPlugin(Flip);

const Container = styled.div`
  margin: 0 auto;
  position: relative;
  padding-top: 10%;
`;

const Masonry = styled.div`
  column-count: 2;
  column-gap: 10%;
  padding: 0 10%;
  position: relative;

  ${({ theme }) => theme.maxWidth.md} {
    column-count: 1;
  }
`;

const Brick = styled.div`
  break-inside: avoid;
  counter-increment: brick-counter;
  position: relative;
  margin-bottom: 19%;
  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    cursor: pointer;
  }
`;

const Gallery = styled.div<{ $vertical: boolean }>`
  display: 'none';
  position: fixed;
  justify-content: center;
  align-items: center;
  z-index: 20000;
  width: 100%;
  cursor: pointer;

  img {
    max-height: 100%;
    width: 'auto';
    object-fit: contain;

    ${({ theme }) => theme.maxWidth.xl} {
      max-width: 100%;
      height: auto;
    }
  }
`;

export default function Realization({ params }: { params: { slug: string } }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const { data } = useSWR<DetailedRealizationItem[], Error>(params?.slug, getRealization);

  const normalizedData = data?.[0];
  const initialState = {
    id: '',
    url: '',
    width: 0,
    height: 0,
  };
  const [galleryImage, setGalleryImage] = useState<DetailedImage>(initialState);

  const animation = gsap.timeline();
  const { contextSafe } = useGSAP({ scope: containerRef });

  useGSAP(
    () => {
      if (!galleryImage.url.length) return;
      const element = document.getElementById(galleryImage?.id);
      const elementRect = element?.children[0].getBoundingClientRect();
      animation.fromTo(
        galleryRef.current,
        {
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
      );

      animation.play();
    },
    {
      dependencies: [galleryImage.id],
      scope: containerRef,
      revertOnUpdate: true,
    },
  );

  const onImageClick = (image: DetailedImage) => {
    setGalleryImage(image);
  };

  const onGalleryClick = contextSafe(() => {
    const element = document.getElementById(galleryImage?.id);
    const elementRect = element?.children[0].getBoundingClientRect();
    animation
      .to(galleryRef.current, {
        left: elementRect?.left,
        top: elementRect?.top,
        width: elementRect?.width,
        height: elementRect?.height,
        display: 'none',
      })
      .eventCallback('onComplete', () => setGalleryImage(initialState));
  });

  return (
    <Container ref={containerRef}>
      <Masonry>
        {normalizedData?.images.map((image) => (
          <Brick
            key={image.id}
            id={image.id}
            tabIndex={0}
            role='presentation'
            onClick={() => onImageClick(image)}
            onKeyDown={(e) => e.key === 'Enter' && onImageClick(image)}
          >
            <img alt={normalizedData?.title} src={image.url} />
          </Brick>
        ))}
      </Masonry>
      <Gallery
        $vertical={
          window.innerHeight > window.innerWidth &&
          galleryImage.width > galleryImage.height
        }
        ref={galleryRef}
        tabIndex={0}
        role='presentation'
        onClick={() => onGalleryClick()}
        onKeyDown={(e) => e.key === 'Enter' && onGalleryClick()}
      >
        <img src={galleryImage?.url} alt='' />
      </Gallery>
    </Container>
  );
}
