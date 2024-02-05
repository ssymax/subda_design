'use client';

import { KeyboardEvent, useRef } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { useRouter } from 'next/navigation';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Button from '@/components/atoms/button';
import { MenuMobileProps } from '@/components/types';
import { routes, routesArr } from '@/routes/routes';
import CloseIcon from '../../../../public/images/close.svg';

const Container = styled.div<{ $open: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: ${({ $open }) => ($open ? 'flex' : 'none')};
  height: 100%;
  z-index: ${({ theme }) => theme.zIndex.level10};
`;

const HalfWrapper = styled.div<{ $open?: boolean }>`
  background-color: ${({ theme }) => theme.colors.dark};
  position: relative;
  height: 100%;
  width: 50%;
  display: flex;
  justify-content: end;
  align-items: start;
  padding: 1rem 1.4rem;
`;

const MobileNav = styled.nav`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-evenly;
  align-items: center;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.secondary};
  position: absolute;
  height: 100%;
  left: 50%;
  transform: translateX(-50%);
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.secondary};
  &.active {
    font-weight: 600;
  }
`;

const StyledCloseIcon = styled(CloseIcon)`
  width: 4rem;
  height: 4rem;
  fill: ${({ theme }) => theme.colors.secondary};
  cursor: pointer;
`;

export default function MenuMobile({ open, setOpen }: MenuMobileProps) {
  const { push } = useRouter();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const leftWrapRef = useRef<HTMLDivElement | null>(null);
  const rightWrapRef = useRef<HTMLDivElement | null>(null);
  const mobileNavRef = useRef<HTMLElement | null>(null);

  const entryTl = gsap.timeline({ paused: true, reversed: true });
  useGSAP(
    () => {
      if (!mobileNavRef.current) return;
      const childs = gsap.utils.toArray(mobileNavRef.current.children) as HTMLElement[];
      const onlyLinks = childs.slice(0, -1);
      const button = childs.slice(-1);
      gsap.set(childs, { autoAlpha: 0 });

      entryTl
        .fromTo(
          containerRef.current,
          { display: 'none', duration: 0 },
          { display: 'flex' },
        )
        .fromTo(
          leftWrapRef.current,
          { xPercent: -100, duration: 0.4 },
          { xPercent: 0, autoAlpha: 1 },
          '>',
        )
        .fromTo(
          rightWrapRef.current,
          { xPercent: 100, duration: 0.4 },
          { xPercent: 0, autoAlpha: 1 },
          '<',
        )
        .fromTo(onlyLinks, { y: -20, duration: 0.3 }, { y: 0, autoAlpha: 1 })
        .to(button, { duration: 0.3, autoAlpha: 1 }, '<');

      if (open) entryTl.play();
    },
    { dependencies: [open], scope: containerRef, revertOnUpdate: true },
  );

  const { contextSafe } = useGSAP({ scope: containerRef });

  const onLinkClick = contextSafe(() => {
    entryTl.reverse().eventCallback('onReverseComplete', () => setOpen(false));
  });

  return (
    <Container ref={containerRef} $open={open}>
      <HalfWrapper ref={leftWrapRef} />
      <HalfWrapper $open={open} ref={rightWrapRef}>
        <StyledCloseIcon
          onClick={onLinkClick}
          role='button'
          onKeyDown={(e: KeyboardEvent<SVGAElement>) =>
            e.key === 'Enter' && onLinkClick()
          }
          tabIndex={0}
        />
      </HalfWrapper>
      <MobileNav ref={mobileNavRef}>
        {routesArr().map((r) => (
          <StyledLink key={r.route} href={r.route} onClick={() => onLinkClick()}>
            {r.text}
          </StyledLink>
        ))}
        <Button
          large
          text='Porozmawiajmy'
          variant='primary'
          onClick={() => {
            onLinkClick();
            push(routes.contact);
          }}
        />
      </MobileNav>
    </Container>
  );
}
