import { OfferSlideProps } from '@/components/types';
import styles from '@/styles/molecules/slide.module.scss';

export default function OfferSlide({ info, index, parallaxImages }: OfferSlideProps) {
  const contentClass = `${styles.content} ${
    index % 2 === 0 ? styles['content--even'] : ''
  }`;
  const bgImage = parallaxImages?.[index]?.url;

  return (
    <div className={`${styles.slide}`}>
      <div
        className={`${styles.background}`}
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      />

      <div className={contentClass}>
        <h4>{info.header}</h4>
        <span>{info.subheader}</span>
        <p>{info.paragraphOne}</p>
        <p>{info.paragraphTwo}</p>
      </div>
    </div>
  );
}
