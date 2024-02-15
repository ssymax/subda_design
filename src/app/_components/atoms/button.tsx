'use client';

import styled, { css } from 'styled-components';
import { ButtonProps, ButtonVariant } from '@/components/types';
import ArrowIcon from '../../../../public/images/arrow.svg';

const Btn = styled.button<{
  $variant: ButtonVariant;
  $large?: boolean;
  $borderColor?: string;
}>`
  display: flex;
  align-items: center;
  border-radius: 2rem;
  font-weight: 500;
  text-transform: uppercase;
  column-gap: 1rem;
  transition: all 0.15s ease-in-out;
  font-size: ${({ $large }) => ($large ? '1.6rem' : '1.4rem')};
  padding: ${({ $large }) => ($large ? '1rem 4rem' : '0.7rem 2rem')};
  white-space: nowrap;
  height: fit-content;
  width: fit-content;
  line-height: normal;
  letter-spacing: 1px;

  svg {
    width: auto;
    height: 2rem;
    transition:
      fill 0.15s ease-in-out,
      transform 0.3s ease-in-out;
  }

  ${({ $variant }) =>
    $variant === 'primary' &&
    css`
      color: ${({ theme }) => theme.colors.dark};
      background-color: ${({ theme }) => theme.colors.secondary};
      border: 1px solid ${({ theme }) => theme.colors.dark};

      svg {
        fill: ${({ theme }) => theme.colors.dark};
      }

      &:hover {
        color: ${({ theme }) => theme.colors.secondary};
        background-color: ${({ theme }) => theme.colors.dark};
        border: 1px solid ${({ theme }) => theme.colors.secondary};
        svg {
          fill: ${({ theme }) => theme.colors.secondary};
          transform: translateX(0.5rem);
        }
      }
    `}

  ${({ $variant, $borderColor }) =>
    $variant === 'secondary' &&
    css`
      color: ${({ theme }) => theme.colors.secondary};
      background-color: ${({ theme }) => theme.colors.dark};
      border: 1px solid ${({ theme }) => $borderColor || theme.colors.dark};

      svg {
        fill: ${({ theme }) => theme.colors.secondary};
      }

      &:hover {
        color: ${({ theme }) => theme.colors.dark};
        background-color: ${({ theme }) => theme.colors.secondary};
        border: 1px solid ${({ theme }) => theme.colors.dark};
        svg {
          fill: ${({ theme }) => theme.colors.dark};
          transform: translateX(0.5rem);
        }
      }
    `};
`;

export default function Button({
  text,
  variant,
  large,
  Icon,
  onClick,
  tabIndex,
  withArrow = true,
  borderColor,
}: ButtonProps) {
  return (
    <Btn
      $borderColor={borderColor}
      $variant={variant}
      $large={large}
      onClick={onClick}
      tabIndex={tabIndex || 0}
    >
      {text}
      {Icon || (withArrow && <ArrowIcon />)}
    </Btn>
  );
}
