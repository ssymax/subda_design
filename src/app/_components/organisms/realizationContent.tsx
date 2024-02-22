/* eslint-disable @next/next/no-img-element */

'use client';

import { MouseEvent, useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import GalleryButtons from '@/components/molecules/galleryButtons';
import Line from '@/components/atoms/line';
import Pill from '@/components/atoms/pill';
import { DetailedImage, DetailedRealizationItem } from '@/lib/types';
import PaddingWrapper from '@/templates/paddingWrapper';
import ContentfulImage from '@/lib/contentfulImage';
import { minQuery } from '@/styles/constants';
import styles from '@/styles/organisms/realizationContent.module.scss';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.config({ limitCallbacks: true });
}

export default function RealizationContent({
  realizationData,
}: {
  realizationData: DetailedRealizationItem;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const galleryButtonsRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const initialState = {
    id: '',
    url: '',
    width: 0,
    height: 0,
  };
  const [galleryImage, setGalleryImage] = useState<DetailedImage>(initialState);
  const [activeIndex, setActiveIndex] = useState(0);

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

  useGSAP(
    () => {
      if (!imageRef.current) return;
      const tl = gsap.timeline();
      tl.from('.header', { x: -50, autoAlpha: 0, duration: 0.8 })
        .from('.text', { autoAlpha: 0, x: 50 }, '<>')
        .from(imageRef.current, {
          height: 0,
          duration: 3,
          delay: 0.5,
          ease: 'expo.inOut',
        });
    },
    { dependencies: [realizationData], revertOnUpdate: true },
  );

  useGSAP(
    () => {
      if (!wrapperRef.current) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: 'top top',
          end: 'bottom center',
          scrub: 2,
        },
      });
      const movement = -(wrapperRef.current.offsetHeight * 0.2);
      const mm = gsap.matchMedia();

      mm.add(minQuery.lg, () => {
        tl.to(wrapperRef.current, { y: movement, ease: 'none' }, 0);
      });
    },
    { dependencies: [realizationData], revertOnUpdate: true },
  );

  const onImageClick = (image: DetailedImage, index: number) => {
    setActiveIndex(index);
    setGalleryImage(image);
  };

  const onGalleryClick = contextSafe(() => {
    const element = document.getElementById(realizationData?.images?.[activeIndex].id!);
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
    if (!realizationData?.images.length) return;
    const length = realizationData?.images.length;
    if (activeIndex === length - 1) setActiveIndex(0);
    else setActiveIndex(activeIndex + 1);
  };

  const handleClickPrev = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    if (!realizationData?.images.length) return;
    const { length } = realizationData.images;
    if (activeIndex === 0) setActiveIndex(length - 1);
    else setActiveIndex(activeIndex - 1);
  };

  const gallerySrc = realizationData?.images[activeIndex].url || '';

  return (
    <section className={styles.section}>
      <div className={styles.imageWrapper} ref={imageRef}>
        <ContentfulImage
          priority
          sizes='100vw'
          fill
          src={realizationData?.mainImage}
          alt={realizationData?.title}
        />
      </div>
      <div className={styles.contentWrapper} ref={wrapperRef}>
        <PaddingWrapper>
          <div className={styles.headerWithText}>
            <h1 className='header'>{realizationData?.title}</h1>
            <span className='text'>{realizationData?.description}</span>
          </div>
          <Line />
          <div className={styles.pills}>
            {realizationData?.location && <Pill label={realizationData.location} />}
            {realizationData?.area && <Pill label={`${realizationData.area}`} withSup />}
            {realizationData?.year && <Pill label={realizationData?.year} />}
          </div>
        </PaddingWrapper>
      </div>

      <div className={styles.imagesContainer} ref={containerRef}>
        <div className={styles.masonry}>
          {realizationData?.images.map((image, index) => (
            <div
              className={styles.brick}
              key={image.id}
              id={image.id}
              // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
              tabIndex={0}
              role='presentation'
              onClick={() => onImageClick(image, index)}
              onKeyDown={(e) => e.key === 'Enter' && onImageClick(image, index)}
            >
              <img src={image.url} alt={realizationData?.title} />
            </div>
          ))}
        </div>
        <div
          className={styles.gallery}
          ref={galleryRef}
          // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
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
        </div>
      </div>
    </section>
  );
}
