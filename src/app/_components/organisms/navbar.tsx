'use client';

import { KeyboardEvent, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { useRouter, usePathname } from 'next/navigation';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Menu from '@/components/molecules/menu';
import Button from '@/components/atoms/button';
import MenuMobile from '@/components/molecules/menuMobile';
import Burger from '@/components/atoms/burger';
import { routes } from '@/routes/routes';
import { setBodyOverflow } from '@/utils/utils';
import Logo from '../../../../public/images/logo.svg';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.config({ limitCallbacks: true });
}

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 7rem;
  background-color: ${({ theme }) => theme.colors.dark};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5.5rem;
  z-index: ${({ theme }) => theme.zIndex.level8};

  ${({ theme }) => theme.maxWidth.lg} {
    height: 6rem;
    padding: 0 2.4rem;
  }
`;

const ButtonWrap = styled.div`
  display: flex;
  align-items: center;
  column-gap: 3rem;

  ${({ theme }) => theme.maxWidth.lg} {
    display: none;
  }
`;

const LogoWrapper = styled.div`
  height: 4.2rem;
  width: 19.2rem;
  z-index: ${({ theme }) => theme.zIndex.level10};
  cursor: pointer;
  svg {
    fill: ${({ theme }) => theme.colors.secondary};
  }
`;

export default function Headerbar() {
  const { push } = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const headerRef = useRef<HTMLElement | null>(null);
  const handleToggle = () => {
    setOpen((prev) => !prev);
  };

  useEffect(() => {
    if (open) setBodyOverflow('hidden');
    else setBodyOverflow('auto');
  }, [open]);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      const navHide = gsap
        .from(headerRef.current, {
          yPercent: -100,
          paused: true,
          duration: 0.5,
        })
        .progress(1);

      ScrollTrigger.create({
        start: 'top+=70 top',
        end: 999999,
        onUpdate: (self) => (self.direction === -1 ? navHide.play() : navHide.reverse()),
      });
    });
    // eslint-disable-next-line consistent-return
    return () => ctx.revert();
  });

  return (
    <>
      <Header ref={headerRef}>
        <LogoWrapper
          role='button'
          tabIndex={0}
          onClick={() => push(routes.home)}
          onKeyDown={(e: KeyboardEvent<HTMLDivElement>) =>
            e.key === 'Enter' && push(routes.home)
          }
        >
          <Logo />
        </LogoWrapper>
        <ButtonWrap>
          <Menu />
          <Button
            large
            text='Porozmawiajmy'
            variant={pathname === routes.contact ? 'secondary' : 'primary'}
            onClick={() => push(routes.contact)}
            borderColor='#fff'
          />
        </ButtonWrap>
        <Burger open={open} toggleOpen={handleToggle} />
      </Header>
      <MenuMobile open={open} setOpen={setOpen} />
    </>
  );
}
