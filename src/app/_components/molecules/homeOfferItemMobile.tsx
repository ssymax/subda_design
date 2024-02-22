/* eslint-disable jsx-a11y/click-events-have-key-events */

'use client';

import Button from '@/components/atoms/button';
import { useRouter } from 'next/navigation';
import { routes } from '@/routes/routes';
import ContentfulImage from '@/lib/contentfulImage';
import { HomeOfferItemMobileProps } from '@/components/types';
import styles from '@/styles/molecules/homeOfferItemMobile.module.scss';
import clsx from 'clsx';

export default function HomeOfferItemMobile({
  id,
  onClick,
  openId,
  text1st,
  text2nd,
  image,
  title,
  accordionNumber,
  index,
  itemsQuantity,
}: HomeOfferItemMobileProps) {
  const { push } = useRouter();
  const isFirst = index === 0;
  const isLast = index === itemsQuantity - 1;
  const open = id === openId;

  const accordionClass = clsx(styles.accordion, {
    [styles['accordion--first']]: isFirst,
    [styles['accordion--last-not-open']]: isLast && !open,
  });

  const contentClass = clsx(styles.content, {
    [styles['content--open']]: open,
    [styles['content--last']]: isLast,
    [styles['content--last-and-open']]: isLast && open,
  });

  return (
    <div className={styles.wrapper}>
      <div className={accordionClass} role='button' tabIndex={0} onClick={onClick}>
        <span>{title}</span> <span>{accordionNumber}</span>
      </div>
      <div className={contentClass}>
        <div>
          <span>{text1st}</span>
          <span>{text2nd}</span>
        </div>

        <Button
          tabIndex={openId !== id ? -1 : 0}
          variant='primary'
          text='Porozmawiajmy'
          onClick={() => push(routes.contact)}
        />
        <ContentfulImage width={600} height={400} src={image} alt={title} sizes='100vw' />
      </div>
    </div>
  );
}
