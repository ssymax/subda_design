'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styled from 'styled-components';
import { MenuProps } from '@/components/types';
import { routesArr } from '@/routes/routes';

const MenuWrap = styled.nav<{ $vertical?: boolean }>`
  display: flex;
  flex-direction: ${({ $vertical }) => ($vertical ? 'column' : 'row')};
  align-items: ${({ $vertical }) => ($vertical ? 'flex-start' : 'center')};
  column-gap: 3rem;
  ${({ theme }) => theme.maxWidth.lg} {
    display: none;
  }
`;

const Span = styled.span<{ $dark?: boolean; $vertical?: boolean }>`
  color: ${({ theme, $dark }) => ($dark ? theme.colors.primary : theme.colors.secondary)};
  font-weight: ${({ $vertical }) => ($vertical ? 500 : '')};
  transition: all 0.3s ease-in-out;
  &:hover {
    text-decoration: underline;
  }
`;

const StyledLink = styled(Link)`
  display: block;
  z-index: inherit;
  text-transform: uppercase;
  text-decoration: none;
  font-weight: 400;
  font-size: 1.6rem;
  white-space: nowrap;

  &.active {
    color: ${({ theme }) => theme.colors.secondary};
    span {
      text-decoration: underline;
    }
  }
`;

export default function Menu({ vertical, dark, contact }: MenuProps) {
  const currentRoute = usePathname();
  return (
    <MenuWrap $vertical={vertical}>
      {routesArr(contact).map((r) => (
        <StyledLink
          key={r.route}
          href={r.route}
          className={currentRoute === r.route ? 'active' : ''}
        >
          <Span $dark={dark} $vertical={vertical}>
            {r.text}
          </Span>
        </StyledLink>
      ))}
    </MenuWrap>
  );
}
