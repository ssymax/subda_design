'use client';

import styled from 'styled-components';
import Image from 'next/image';
import useSWR from 'swr';
import dayjs from 'dayjs';
import { getPost } from '@/lib/api';
import { BlogPost } from '@/lib/types';
import SimpleHeader from '@/app/_components/atoms/simpleHeader';
import CalendarIcon from '../../../../public/images/calendar.svg';
import { Fragment } from 'react';
import Foot from '@/app/_components/organisms/foot';

const Section = styled.section`
  margin: 3rem auto;
  width: 50vw;
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

const Header = styled.h4`
  font-weight: 600;
  line-height: 150%;
  font-size: 2.2rem;
`;

const Paragraph = styled.p`
  font-weight: 300;
  line-height: 150%;
`;

export default function Post({ params }: { params: { slug: string } }) {
  const { data } = useSWR<BlogPost[], Error>(params?.slug, getPost);

  const postData = data?.[0];

  const date = dayjs(postData?.date).format('DD.MM.YYYY');

  const loader = postData?.image.url || '';

  return (
    <>
      <Section>
        <SimpleHeader
          isPageHeader
          header={postData?.title || ''}
          textAlign='left'
          fontSize='6rem'
          lineHeight='120%'
        />
        <Date>
          <CalendarIcon />
          <span>{date}</span>
        </Date>
        <Content>
          {postData?.introduction && <Intro>{postData.introduction}</Intro>}
          {postData?.underIntro && <Paragraph>{postData.underIntro}</Paragraph>}
          <Image
            loader={() => loader}
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
          {postData?.header1st && <Header>{postData.header1st}</Header>}
          {postData?.text1st && <Paragraph>{postData.text1st}</Paragraph>}
          {postData?.header2nd && <Header>{postData.header2nd}</Header>}
          {postData?.text2nd && <Paragraph>{postData.text2nd}</Paragraph>}
          {postData?.header3rd && <Header>{postData.header3rd}</Header>}
          {postData?.text3rd && <Paragraph>{postData.text3rd}</Paragraph>}
          {postData?.header4th && <Header>{postData.header4th}</Header>}
          {postData?.text4th && <Paragraph>{postData.text4th}</Paragraph>}
        </Content>
      </Section>
      <Foot />
    </>
  );
}
