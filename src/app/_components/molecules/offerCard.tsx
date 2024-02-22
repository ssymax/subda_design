import { OfferCardProps } from '@/components/types';
import ContentfulImage from '@/lib/contentfulImage';
import styles from '@/styles/molecules/offerCard.module.scss';

export default function OfferCard({ url, title, description }: OfferCardProps) {
  return (
    <div className={styles.card}>
      <ContentfulImage
        priority
        src={url}
        alt={title}
        sizes='100vw'
        width={300}
        height={391}
        style={{
          maxWidth: '100%',
          height: 'auto',
        }}
      />
      <div>
        <span>{title}</span>
        <p>{description}</p>
      </div>
    </div>
  );
}
