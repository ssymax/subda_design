'use client';

import styled from 'styled-components';
import { BlogPost } from '@/lib/types';
import dayjs from 'dayjs';
import SimpleHeader from '@/app/_components/atoms/simpleHeader';
import ContentfulImage from '@/lib/contentfulImage';
import CalendarIcon from '../../../../public/images/calendar.svg';

const Section = styled.section`
  margin: 0 auto 3rem auto;
  width: 50vw;
  min-height: 100vh;
  ${({ theme }) => theme.maxWidth.lg} {
    width: 100%;
  }
`;

const Date = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: flex-end;
  column-gap: 1rem;
  span {
    font-size: 1.8rem;
    font-weight: 600;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 3rem;
  margin-top: 5.5rem;
  img {
    border-radius: 1rem;
    margin: 4rem 0;
  }
`;

const Intro = styled.span`
  font-weight: 600;
  line-height: 150%;
  font-size: 2.2rem;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
  position: relative;
  overflow: hidden;
`;

const Header = styled.h4`
  font-weight: 600;
  line-height: 150%;
  font-size: 2.2rem;
  position: relative;
`;

const Paragraph = styled.p`
  font-weight: 300;
  line-height: 150%;
  position: relative;
`;

export default function BlogPostContent({ postData }: { postData: BlogPost }) {
  const date = dayjs(postData?.date).format('DD.MM.YYYY');

  const postElements: { id: string; header?: string; text?: string }[] = [
    { id: '1', header: postData?.header1st, text: postData?.text1st },
    { id: '2', header: postData?.header2nd, text: postData?.text2nd },
    { id: '3', header: postData?.header3rd, text: postData?.text3rd },
    { id: '4', header: postData?.header4th, text: postData?.text4th },
  ];

  return (
    <Section>
      <SimpleHeader
        isPageHeader
        header={postData?.title || ''}
        textAlign='left'
        fontSize='6rem'
        lineHeight='120%'
      />
      {postData?.date && (
        <Date>
          <CalendarIcon />
          <span>{date}</span>
        </Date>
      )}
      <Content>
        {postData?.introduction && <Intro>{postData.introduction}</Intro>}
        {postData?.underIntro && <Paragraph>{postData.underIntro}</Paragraph>}
        <ContentfulImage
          src={postData?.image.url || ''}
          alt={postData?.image.title || ''}
          sizes='100vw'
          width={postData?.image.width}
          height={postData?.image.height}
          style={{
            width: '100%',
            height: 'auto',
          }}
        />
        {postElements?.map((p) => (
          <Wrapper key={p.id}>
            {p.header && <Header>{p.header}</Header>}
            {p.text && <Paragraph>{p.text}</Paragraph>}
          </Wrapper>
        ))}
      </Content>
    </Section>
  );
}
