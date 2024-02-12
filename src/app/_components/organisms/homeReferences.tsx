'use client';

import { useState } from 'react';
import styled from 'styled-components';
import HomeHeader from '@/components/atoms/homeHeader';
import HomeReferenceCard from '@/components/molecules/homeReferenceCard';
import Line from '@/components/atoms/line';
import Parallax from '@/components/atoms/parallax';
import { opinions } from '@/lib/constants';
import ArrowIcon from '../../../../public/images/arrow.svg';
import bathroom from '../../../../public/bathroom.jpg';

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
    activeIndex === opinions.length - 1
      ? setActiveIndex(0)
      : setActiveIndex(activeIndex + 1);

  const handleClickPrev = () =>
    activeIndex === 0
      ? setActiveIndex(opinions.length - 1)
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
        <HomeReferenceCard {...opinions[activeIndex]} />
        <IconWrapper
          {...arrowButtonProps}
          onClick={handleClickNext}
          onKeyDown={(e) => e.key === 'Enter' && handleClickNext()}
        >
          <StyledArrowIcon />
        </IconWrapper>
      </Wrapper>
      <Line />
      <Parallax src={bathroom} />
    </section>
  );
}
