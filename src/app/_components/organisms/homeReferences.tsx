'use client';

import { useState } from 'react';
import styled from 'styled-components';
import HomeHeader from '@/components/atoms/homeHeader';
import HomeReferenceCard from '@/components/molecules/homeReferenceCard';
import Line from '@/components/atoms/line';
import Parallax from '@/components/atoms/parallax';
import ArrowIcon from '../../../../public/images/arrow.svg';

const dummyData = [
  {
    id: 1,
    name: 'Object 1',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget convallis justo.',
    place: 'Place A',
  },
  {
    id: 2,
    name: 'Object 2',
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.',
    place: 'Place B',
  },
  {
    id: 3,
    name: 'Object 3',
    description:
      'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
    place: 'Place C',
  },
];

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 3rem auto 3rem;
  min-height: 20rem;
  width: 80%;
  margin: 6rem auto;
  ${({ theme }) => theme.maxWidth.lg} {
    width: 100%;
  }
`;

const IconWrapper = styled.div`
  position: relative;
  cursor: pointer;
  user-select: none;
`;

const StyledArrowIcon = styled(ArrowIcon)<{ $rotated: boolean }>`
  position: absolute;
  width: 100%;
  top: 50%;
  transform: ${({ $rotated }) =>
    $rotated ? 'rotate(180deg) translateY(50%)' : 'translateY(-50%)'};
`;

export default function HomeReferences() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClickNext = () =>
    activeIndex === dummyData.length - 1
      ? setActiveIndex(0)
      : setActiveIndex(activeIndex + 1);

  const handleClickPrev = () =>
    activeIndex === 0
      ? setActiveIndex(dummyData.length - 1)
      : setActiveIndex(activeIndex - 1);

  const arrowButtonProps = {
    role: 'button',
    tabIndex: 0,
  };

  return (
    <section>
      <HomeHeader smallHeader='Referencje' header='Co mówią moi klienci' />
      <Wrapper>
        <IconWrapper
          {...arrowButtonProps}
          onClick={handleClickPrev}
          onKeyDown={(e) => e.key === 'Enter' && handleClickPrev()}
        >
          <StyledArrowIcon $rotated />
        </IconWrapper>
        <HomeReferenceCard {...dummyData[activeIndex]} />
        <IconWrapper
          {...arrowButtonProps}
          onClick={handleClickNext}
          onKeyDown={(e) => e.key === 'Enter' && handleClickNext()}
        >
          <StyledArrowIcon />
        </IconWrapper>
      </Wrapper>
      <Line />
      <Parallax />
    </section>
  );
}
