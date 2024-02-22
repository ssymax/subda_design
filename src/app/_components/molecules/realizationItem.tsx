/* eslint-disable jsx-a11y/mouse-events-have-key-events */

'use client';

import { MouseEvent } from 'react';
import { useRouter } from 'next/navigation';
import { RealizationItemProps } from '@/components/types';
import Button from '@/components/atoms/button';
import { routes } from '@/routes/routes';
import ContentfulImage from '@/lib/contentfulImage';
import styles from '@/styles/molecules/realizationItem.module.scss';

export default function RealizationItem({
  mainImage,
  title,
  year,
  type,
  slug,
}: RealizationItemProps) {
  const { push } = useRouter();

  const handleMouseOver = (e: MouseEvent<HTMLDivElement>) => {
    const img = e.currentTarget.children[0] as HTMLElement;
    img.style.transform = `scale(1.1)`;
  };

  const handleMouseOut = (e: MouseEvent<HTMLDivElement>) => {
    const img = e.currentTarget.children[0] as HTMLElement;
    img.style.transform = 'scale(1)';
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const x = (e.nativeEvent.offsetX / e.currentTarget.offsetWidth) * 50;
    const y = (e.nativeEvent.offsetY / e.currentTarget.offsetHeight) * 50;
    const img = e.currentTarget.children[0] as HTMLElement;
    img.style.transformOrigin = `${x}% ${y}%`;
  };

  return (
    <div className={styles.item}>
      <div
        className={styles.image}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        onMouseMove={handleMouseMove}
      >
        <ContentfulImage src={mainImage} alt={title} width={800} height={600} />
      </div>
      <div>
        <span>{type}</span>
        <span>{year}</span>
      </div>
      <div>
        <h3 className={styles.title}>{title}</h3>
        <Button
          variant='primary'
          text='Zobacz'
          onClick={() => push(`${routes.realizations}/${slug}`)}
        />
      </div>
    </div>
  );
}
