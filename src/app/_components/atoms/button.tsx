'use client';

import styled, { css } from 'styled-components';
import { ButtonProps, ButtonVariant } from '@/components/types';
import ArrowIcon from '../../../../public/images/arrow.svg';

const Btn = styled.button<{ $variant: ButtonVariant; $large?: boolean }>`
  display: flex;
  align-items: center;
  border-radius: 2rem;
  font-weight: 500;
  text-transform: uppercase;
  column-gap: 1rem;
  transition: all 0.15s ease-in-out;
  font-size: 1.6rem;
  padding: ${({ $large }) => ($large ? '1rem 4rem' : '0.5rem 2.5rem')};
  white-space: nowrap;
  height: fit-content;
  width: fit-content;
  line-height: normal;

  svg {
    width: auto;
    height: 2rem;
    transition: fill 0.15s ease-in-out;
  }

  ${({ $variant }) =>
    $variant === 'primary' &&
    css`
      color: ${({ theme }) => theme.colors.primary};
      background-color: ${({ theme }) => theme.colors.secondary};
      border: 1px solid ${({ theme }) => theme.colors.primary};

      svg {
        fill: ${({ theme }) => theme.colors.primary};
      }

      &:hover {
        color: ${({ theme }) => theme.colors.secondary};
        background-color: ${({ theme }) => theme.colors.primary};
        border: 1px solid ${({ theme }) => theme.colors.secondary};
        svg {
          fill: ${({ theme }) => theme.colors.secondary};
        }
      }
    `}

  ${({ $variant }) =>
    $variant === 'secondary' &&
    css`
      color: ${({ theme }) => theme.colors.secondary};
      background-color: ${({ theme }) => theme.colors.primary};
      border: 1px solid ${({ theme }) => theme.colors.primary};

      svg {
        fill: ${({ theme }) => theme.colors.secondary};
      }

      &:hover {
        color: ${({ theme }) => theme.colors.primary};
        background-color: ${({ theme }) => theme.colors.secondary};
        border: 1px solid ${({ theme }) => theme.colors.primary};
        svg {
          fill: ${({ theme }) => theme.colors.primary};
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
}: ButtonProps) {
  return (
    <Btn $variant={variant} $large={large} onClick={onClick} tabIndex={tabIndex || 0}>
      {text}
      {Icon || <ArrowIcon />}
    </Btn>
  );
}
