
import { memo } from 'react';
import { useRouter } from 'next/navigation';
import Button from '@/components/atoms/button';
import { HomeBlogCardProps } from '@/components/types';
import { routes } from '@/routes/routes';
import ContentfulImage from '@/lib/contentfulImage';
import styles from '@/styles/molecules/blogCard.module.scss';

function BlogCard({ id, slug, title, url }: HomeBlogCardProps) {
  const { push } = useRouter();

  return (
    <div className={styles.card} id={id}>
      <div>
        <ContentfulImage src={url} alt={title} sizes='100vw' width={500} height={300} />
      </div>
      <span>{title}</span>
      <Button
        variant='primary'
        text='Czytaj'
        onClick={() => push(`${routes.blog}/${slug}`)}
      />
    </div>
  );
}

export default memo(BlogCard);
