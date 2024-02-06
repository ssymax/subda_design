'use client';

import { useRef } from 'react';
import styled from 'styled-components';
import { BlogPost } from '@/lib/types';
import dayjs from 'dayjs';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger';
import SimpleHeader from '@/app/_components/atoms/simpleHeader';
import Foot from '@/app/_components/organisms/foot';
import PaddingWrapper from '@/app/_templates/paddingWrapper';
import ContentfulImage from '@/lib/contentfulImage';
import CalendarIcon from '../../../../public/images/calendar.svg';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.config({ limitCallbacks: true });
}

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

const Hover = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.beige};
  opacity: 0.5;
  left: 0;
`;

export default function BlogPostContent({ postData }: { postData: BlogPost }) {
  const postRef = useRef<HTMLElement>(null);
  const date = dayjs(postData?.date).format('DD.MM.YYYY');

  const postElements: { id: string; header?: string; text?: string }[] = [
    { id: '1', header: postData?.header1st, text: postData?.text1st },
    { id: '2', header: postData?.header2nd, text: postData?.text2nd },
    { id: '3', header: postData?.header3rd, text: postData?.text3rd },
    { id: '4', header: postData?.header4th, text: postData?.text4th },
  ];

  useGSAP(
    () => {
      const hovers = document.querySelectorAll('.hover');
      if (!hovers.length) return;

      hovers.forEach((h) =>
        gsap.to(h, {
          yPercent: 100,
          scrollTrigger: {
            trigger: h,
            start: 'top-=100 center',
            end: 'bottom center',
            scrub: 0.5,
          },
        }),
      );
    },
    { revertOnUpdate: true, scope: postRef, dependencies: [postData] },
  );

  return (
    <Section ref={postRef}>
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
            {p.header && <Header className='header'>{p.header}</Header>}
            {p.text && <Paragraph className='paragraph'>{p.text}</Paragraph>}
            <Hover className='hover' />
          </Wrapper>
        ))}
      </Content>
    </Section>
  );
}
