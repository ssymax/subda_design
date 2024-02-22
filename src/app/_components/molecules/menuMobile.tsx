/* eslint-disable jsx-a11y/control-has-associated-label */

'use client';

import { KeyboardEvent, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import gsap from 'gsap';
import clsx from 'clsx';
import { useGSAP } from '@gsap/react';
import Button from '@/components/atoms/button';
import { MenuMobileProps } from '@/components/types';
import { routes, routesArr } from '@/routes/routes';
import styles from '@/styles/molecules/menuMobile.module.scss';
import CloseIcon from '../../../../public/images/close.svg';

export default function MenuMobile({ open, setOpen }: MenuMobileProps) {
  const { push } = useRouter();
  const containerRef = useRef<HTMLElement | null>(null);
  const leftWrapRef = useRef<HTMLDivElement | null>(null);
  const rightWrapRef = useRef<HTMLDivElement | null>(null);
  const mobileNavRef = useRef<HTMLUListElement | null>(null);

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

  const navClass = clsx(styles.nav, { [styles['nav---open']]: open });

  return (
    <nav className={navClass} ref={containerRef}>
      <div className={styles.half} ref={leftWrapRef} />
      <div className={styles.half} ref={rightWrapRef}>
        <div
          className={styles.closeIcon}
          onClick={() => onLinkClick()}
          role='button'
          onKeyDown={(e: KeyboardEvent<HTMLDivElement>) =>
            e.key === 'Enter' && onLinkClick()
          }
          tabIndex={0}
        >
          <CloseIcon />
        </div>
      </div>
      <ul className={styles.list} ref={mobileNavRef}>
        {routesArr().map((r) => (
          <li className={styles.item} key={r.route}>
            <Link className={styles.link} href={r.route} onClick={() => onLinkClick()}>
              {r.text}
            </Link>
          </li>
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
      </ul>
    </nav>
  );
}
