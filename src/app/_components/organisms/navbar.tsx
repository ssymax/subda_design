'use client';

import { KeyboardEvent, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/navigation';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Menu from '@/components/molecules/menu';
import Button from '@/components/atoms/button';
import { minQuery } from '@/styles/constants';
import MenuMobile from '@/components/molecules/menuMobile';
import Burger from '@/components/atoms/burger';
import { routes } from '@/routes/routes';
import { setBodyOverflow } from '@/utils/utils';
import useMediaQuery from '@/hooks/useMediaQuery';
import Logo from '../../../../public/images/logo.svg';

gsap.registerPlugin(ScrollTrigger);

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 7rem;
  background-color: ${({ theme }) => theme.colors.primary};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem 0 2rem;
  z-index: ${({ theme }) => theme.zIndex.level8};

  ${({ theme }) => theme.maxWidth.lg} {
    height: 6rem;
  }
`;

const StyledLogo = styled(Logo)`
  height: 60%;
  width: auto;
  fill: ${({ theme }) => theme.colors.secondary};
  overflow: hidden;
  z-index: ${({ theme }) => theme.zIndex.level10};
  cursor: pointer;
`;

export default function Headerbar() {
  const { push } = useRouter();
  const [open, setOpen] = useState(false);
  const headerRef = useRef<HTMLElement | null>(null);
  const largeScreen = useMediaQuery(minQuery.lg);
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
          duration: 0.3,
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

  const contactButton = (
    <Button
      large
      text='Porozmawiajmy'
      variant='primary'
      onClick={() => push(routes.contact)}
    />
  );
  const menuComponent = largeScreen ? (
    <Menu />
  ) : (
    <Burger open={open} toggleOpen={handleToggle} />
  );

  return (
    <>
      <Header ref={headerRef}>
        <StyledLogo
          role='button'
          tabIndex={0}
          onClick={() => push(routes.home)}
          onKeyDown={(e: KeyboardEvent<SVGSVGElement>) =>
            e.key === 'Enter' && push(routes.home)
          }
        />
        {menuComponent}
        {largeScreen && contactButton}
      </Header>
      <MenuMobile open={open} setOpen={setOpen}>
        {contactButton}
      </MenuMobile>
    </>
  );
}
