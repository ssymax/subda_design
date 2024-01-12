'use client';

import { forwardRef } from 'react';
import styled from 'styled-components';
import ArrowIcon from '../../../../public/images/arrow.svg';
import { GalleryButtonsProps } from '../types';

const Wrapper = styled.div`
  display: flex;
  position: absolute;
  right: 5.5rem;
  column-gap: 3rem;
  bottom: 5.5rem;
`;

const ArrowButton = styled.button`
  background-color: ${({ theme }) => theme.colors.secondary};
  height: 5rem;
  position: relative;
  width: 5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.15s ease-in-out;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  svg {
    fill: ${({ theme }) => theme.colors.primary};
    transition: fill 0.15s ease-in-out;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
    background-color: ${({ theme }) => theme.colors.primary};
    border: 1px solid ${({ theme }) => theme.colors.secondary};
    svg {
      fill: ${({ theme }) => theme.colors.secondary};
    }
  }
`;

const StyledArrowIcon = styled(ArrowIcon)<{ $rotated: boolean }>`
  position: absolute;
  width: 3rem;
  top: 50%;
  transform: ${({ $rotated }) =>
    $rotated ? 'rotate(180deg) translateY(50%)' : 'translateY(-50%)'};
`;

const GalleryButtons = forwardRef<HTMLDivElement, GalleryButtonsProps>(
  ({ onPrevClick, onNextClick }, ref) => {
    return (
      <Wrapper ref={ref}>
        <ArrowButton onClick={onPrevClick}>
          <StyledArrowIcon $rotated />
        </ArrowButton>
        <ArrowButton onClick={onNextClick}>
          <StyledArrowIcon />
        </ArrowButton>
      </Wrapper>
    );
  },
);

export default GalleryButtons;
