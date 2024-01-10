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
`;

const Masonry = styled.div`
  column-count: 2;
  column-gap: 6.9rem;
  padding: 0 6.9rem;
  position: relative;
`;

const Brick = styled.div`
  break-inside: avoid;
  counter-increment: brick-counter;
  margin: 3.5rem 0;
  position: relative;
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
    max-width: ${({ $vertical }) => $vertical && '100%'};
    max-height: ${({ $vertical }) => !$vertical && '100%'};
    width: ${({ $vertical }) => !$vertical && 'auto'};
    height: ${({ $vertical }) => $vertical && '100%'};
    object-fit: contain;
  }
`;

export default function Realization({ params }: { params: { slug: string } }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const { data } = useSWR<DetailedRealizationItem[], Error>(params?.slug, getRealization);

  const normalizedData = data?.[0];
  const [galleryImage, setGalleryImage] = useState<DetailedImage>({
    id: '',
    url: '',
    width: 0,
    height: 0,
  });

  const animation = gsap.timeline();
  animation.set(galleryRef, { paused: true });
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
          width: '100vw',
          backgroundColor: '#000',
        },
      );

      animation.play();
    },
    {
      dependencies: [galleryImage],
      scope: containerRef,
      revertOnUpdate: true,
    },
  );

  const onImageClick = (e: MouseEvent<HTMLDivElement>, image: DetailedImage) => {
    setGalleryImage(image);

    e.stopPropagation();
    e.preventDefault();
  };

  const onGalleryClick = contextSafe(() => {
    const element = document.getElementById(galleryImage?.id);
    const elementRect = element?.children[0].getBoundingClientRect();
    animation.to(galleryRef.current, {
      left: elementRect?.left,
      top: elementRect?.top,
      width: elementRect?.width,
      height: elementRect?.height,
      display: 'none',
    });
  });

  return (
    <Container ref={containerRef}>
      <Masonry>
        {normalizedData?.images.map((image) => (
          <Brick key={image.id} id={image.id} onClick={(e) => onImageClick(e, image)}>
            <img alt={normalizedData?.title} src={image.url} />
          </Brick>
        ))}
      </Masonry>
      <Gallery
        $vertical={galleryImage.height > galleryImage.width}
        ref={galleryRef}
        onClick={() => onGalleryClick()}
      >
        <img src={galleryImage?.url} alt='' />
      </Gallery>
    </Container>
  );
}
