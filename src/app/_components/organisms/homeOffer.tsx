'use client';

import { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import HomeHeader from '@/components/atoms/homeHeader';
import HomeOfferItem from '@/components/molecules/homeOfferItem';
import offer from '../../../../public/offer.png';

const dummyData = [
  {
    id: 1,
    accordionNumber: '01',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: offer,
    title: 'Offer 1',
  },
  {
    id: 2,
    accordionNumber: '02',
    text: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: offer,
    title: 'Offer 2',
  },
  {
    id: 3,
    accordionNumber: '03',
    text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    image: offer,
    title: 'Offer 3',
  },
  {
    id: 4,
    accordionNumber: '04',
    text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    image: offer,
    title: 'Offer 4',
  },
];

const description = `Zachęcam do zapoznania się z ofertą i podzielenia się swoimi 
potrzebami. Jestem tu, by realizować Państwa marzenia.`;

const Wrapper = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 1rem;
  width: 100%;
  height: auto;
`;

export default function HomeOffer() {
  const [rect, setRect] = useState<DOMRect>();

  const wrapperRef = useRef<HTMLDivElement>(null);

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

  const [openId, setOpenId] = useState(1);
  const handleOpen = (id: number) => setOpenId(id);

  return (
    <section>
      <HomeHeader
        smallHeader='Usługi'
        header='W czym mogę pomóc'
        description={description}
      />
      <Wrapper ref={wrapperRef}>
        {dummyData.map(({ id, text, image, title }, index) => (
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
            accordionWidth={80}
            itemsQuantity={dummyData.length}
            padding={30}
            index={index}
          />
        ))}
      </Wrapper>
    </section>
  );
}
