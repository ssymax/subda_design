import { useRouter } from 'next/navigation';
import { routes } from '@/routes/routes';
import { HomeOfferItemProps } from '@/components/types';
import Button from '@/components/atoms/button';
import ContentfulImage from '@/lib/contentfulImage';
import styles from '@/styles/molecules/homeOfferItem.module.scss';
import clsx from 'clsx';

export default function HomeOfferItem({
  id,
  onClick,
  openId,
  accordionNumber,
  text1st,
  text2nd,
  image,
  title,
  containerWidth,
  itemsQuantity,
  accordionWidth,
  padding,
  index,
}: HomeOfferItemProps) {
  const { push } = useRouter();
  const accordionsWidth = itemsQuantity * accordionWidth;
  const responsiveHalfWidth =
    containerWidth && (containerWidth - accordionWidth) / 2 - 3 * padding;
  const isFirst = index === 0;
  const isLast = index === itemsQuantity - 1;

  const open = openId === id;

  const accordionClass = clsx(styles.accordion, {
    [styles['accordion--open']]: open,
    [styles['accordion--first']]: isFirst,
    [styles['accordion--not-open-last-not-first']]: !open && isLast && !isFirst,
  });

  const contentClass = clsx(styles.content, {
    [styles['content--open']]: open,
    [styles['content--open-and-last']]: open && isLast,
  });

  return (
    <div className={styles.wrapper}>
      <div
        className={accordionClass}
        role='button'
        tabIndex={0}
        onClick={onClick}
        onKeyDown={(e) => {
          if (e.key === 'Enter') onClick();
        }}
      >
        <span className={styles.number}>{accordionNumber}</span>
        <span className={styles.title}>{title}</span>
      </div>
      <div
        className={contentClass}
        style={{ width: open ? `calc(${containerWidth}px - ${accordionsWidth}px)` : 0 }}
      >
        <div className={styles.half}>
          <div className={styles.inner} style={{ width: `${responsiveHalfWidth}px` }}>
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
          </div>
        </div>
        <div className={styles.half}>
          <div className={styles.inner} style={{ width: `${responsiveHalfWidth}px` }}>
            <ContentfulImage
              width={600}
              height={400}
              src={image}
              alt={title}
              sizes='100vw'
            />
          </div>
        </div>
      </div>
    </div>
  );
}
