/* eslint-disable jsx-a11y/control-has-associated-label */

'use client';

import { KeyboardEvent, useEffect, useRef, useState } from 'react';
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
import styles from '@/styles/organisms/navbar.module.scss';
import Logo from '../../../../public/images/logo.svg';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.config({ limitCallbacks: true });
}

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
      <header className={styles.header} ref={headerRef}>
        <div
          className={styles.logo}
          role='button'
          tabIndex={0}
          onClick={() => push(routes.home)}
          onKeyDown={(e: KeyboardEvent<HTMLDivElement>) =>
            e.key === 'Enter' && push(routes.home)
          }
        >
          <Logo />
        </div>
        <div className={styles.buttonWrap}>
          <Menu />
          <Button
            large
            text='Porozmawiajmy'
            variant={pathname === routes.contact ? 'secondary' : 'primary'}
            onClick={() => push(routes.contact)}
            borderColor='#fff'
          />
        </div>
        <Burger open={open} toggleOpen={handleToggle} />
      </header>
      <MenuMobile open={open} setOpen={setOpen} />
    </>
  );
}
