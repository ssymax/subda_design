'use client';

import Link from 'next/link';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import { MenuProps } from '@/components/types';
import { routesArr } from '@/routes/routes';
import styles from '@/styles/molecules/menu.module.scss';

export default function Menu({ vertical, dark, contact }: MenuProps) {
  const currentRoute = usePathname();

  const navClass = clsx(styles.nav, {
    [styles['nav--vertical']]: vertical,
    [styles['nav--dark']]: dark,
  });

  const spanClass = clsx(styles.text, {
    [styles['text--vertical']]: vertical,
    [styles['text--dark']]: dark,
  });

  const linkClass = (route: string) =>
    `${styles.link} ${currentRoute === route ? styles.active : ''}`;

  return (
    <nav className={navClass}>
      {routesArr(contact).map((r) => (
        <Link key={r.route} href={r.route} className={linkClass(r.route)}>
          <span className={spanClass}>{r.text}</span>
        </Link>
      ))}
    </nav>
  );
}
