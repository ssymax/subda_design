'use client';

import { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import HomeHeader from '@/components/atoms/homeHeader';
import HomeOfferItem from '@/components/molecules/homeOfferItem';
import HomeOfferItemMobile from '@/components/molecules/homeOfferItemMobile';
import useMediaQuery from '@/app/_hooks/useMediaQuery';
import { maxQuery, minQuery } from '@/app/_styles/constants';
import offer from '../../../../public/offer.png';

const dummyData = [
  {
    id: uuidv4(),
    accordionNumber: '01',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: offer,
    title: 'Offer 1',
  },
  {
    id: uuidv4(),
    accordionNumber: '02',
    text: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: offer,
    title: 'Offer 2',
  },
  {
    id: uuidv4(),
    accordionNumber: '03',
    text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    image: offer,
    title: 'Offer 3',
  },
  {
    id: uuidv4(),
    accordionNumber: '04',
    text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    image: offer,
    title: 'Offer 4',
  },
];

const description = `Zachęcam do zapoznania się z ofertą i podzielenia się swoimi 
potrzebami. Jestem tu, by realizować Państwa marzenia.`;

const Wrapper = styled.div<{ $isMobile: boolean }>`
  display: flex;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 1rem;
  width: 100%;
  height: ${({ $isMobile }) => ($isMobile ? '80rem' : 'auto')};
  flex-direction: ${({ $isMobile }) => $isMobile && 'column'};
  overflow-y: ${({ $isMobile }) => $isMobile && 'hidden'};
`;

export default function HomeOffer() {
  const [rect, setRect] = useState<DOMRect>();
  const wrapperRef = useRef<HTMLDivElement>(null);
  const largeScreen = useMediaQuery(minQuery.lg);
  const mediumScreen = useMediaQuery(maxQuery.md);

  useEffect(() => {
    if (!wrapperRef.current) return;
    const wrapper = wrapperRef.current;
    setRect(wrapper.getBoundingClientRect());
    const handleResize = () => {
      if (wrapper) setRect(wrapperRef.current.getBoundingClientRect());
    };

    window.addEventListener('resize', handleResize);
    // eslint-disable-next-line consistent-return
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [wrapperRef]);

  const [openId, setOpenId] = useState(dummyData[0]?.id);
  const handleOpen = (id: string) => {
    setOpenId(id);
  };

  return (
    <section>
      <HomeHeader
        smallHeader='Usługi'
        header='W czym mogę pomóc'
        description={description}
      />
      <Wrapper $isMobile={mediumScreen} ref={wrapperRef}>
        {mediumScreen &&
          dummyData.map(({ id, text, image, title }, index) => (
            <HomeOfferItemMobile
              key={id}
              id={id}
              openId={openId}
              accordionNumber={`0${index + 1}`}
              text={text}
              title={title}
              image={image}
              onClick={() => handleOpen(id)}
              itemsQuantity={dummyData.length}
              index={index}
            />
          ))}
        {!mediumScreen &&
          dummyData.map(({ id, text, image, title }, index) => (
            <HomeOfferItem
              key={id}
              id={id}
              openId={openId}
              accordionNumber={`0${index + 1}`}
              text={text}
              image={image}
              title={title}
              onClick={() => handleOpen(id)}
              containerWidth={rect?.width}
              accordionWidth={largeScreen ? 80 : 60}
              itemsQuantity={dummyData.length}
              padding={30}
              index={index}
            />
          ))}
      </Wrapper>
    </section>
  );
}
