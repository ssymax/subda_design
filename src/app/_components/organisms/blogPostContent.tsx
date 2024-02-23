import { BlogPost } from '@/lib/types';
import dayjs from 'dayjs';
import SimpleHeader from '@/app/_components/atoms/simpleHeader';
import ContentfulImage from '@/lib/contentfulImage';
import styles from '@/styles/organisms/blogPostContent.module.scss';
import CalendarIcon from '../../../../public/images/calendar.svg';

export default function BlogPostContent({ postData }: { postData: BlogPost }) {
  const date = dayjs(postData?.date).format('DD.MM.YYYY');

  const postElements: { id: string; header?: string; text?: string }[] = [
    { id: '1', header: postData?.header1st, text: postData?.text1st },
    { id: '2', header: postData?.header2nd, text: postData?.text2nd },
    { id: '3', header: postData?.header3rd, text: postData?.text3rd },
    { id: '4', header: postData?.header4th, text: postData?.text4th },
  ];

  return (
    <section className={styles.container}>
      <SimpleHeader
        isPageHeader
        header={postData?.title || ''}
        alignLeft
        mediumFont
        lineHeight
      />
      {postData?.date && (
        <div className={styles.date}>
          <CalendarIcon />
          <span>{date}</span>
        </div>
      )}
      <div className={styles.content}>
        {postData?.introduction && (
          <span className={styles.intro}>{postData.introduction}</span>
        )}
        {postData?.underIntro && (
          <p className={styles.paragraph}>{postData.underIntro}</p>
        )}
        <ContentfulImage
          src={postData?.image.url || ''}
          alt={postData?.image.title || ''}
          sizes='100vw'
          width={postData?.image.width}
          height={postData?.image.height}
        />
        {postElements?.map((p) => (
          <div className={styles.wrapper} key={p.id}>
            {p.header && <h4 className={styles.header}>{p.header}</h4>}
            {p.text && <p className={styles.paragraph}>{p.text}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}
