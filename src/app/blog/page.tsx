'use client';

import styled from 'styled-components';
import { useRef, useState } from 'react';
import useSWR from 'swr';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import scrollTrigger from 'gsap/ScrollTrigger';
import PaddingWrapper from '@/templates/paddingWrapper';
import BlogCard from '@/components/molecules/blogCard';
import Foot from '@/components/organisms/foot';
import SimpleHeader from '@/components/atoms/simpleHeader';
import { BLOG_POSTS, DATE_DESC } from '@/lib/constants';
import { HomeBlogItemModel, Order, TotalPosts } from '@/lib/types';
import { getBlogPosts, getTotalBlogsNumber } from '@/lib/api';

gsap.registerPlugin(scrollTrigger);

const PostsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 5.5rem;
  margin-top: 3rem;
  grid-auto-flow: row;
  ${({ theme }) => theme.maxWidth.xl} {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 5.5rem;
    row-gap: 5.5rem;
  }
  ${({ theme }) => theme.maxWidth.md} {
    display: flex;
    flex-direction: column;
  }
`;

export default function Blog() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [order, setOrder] = useState<Order>(DATE_DESC);
  const [search, setSearch] = useState('');

  const { data: quantity } = useSWR<TotalPosts>('total', getTotalBlogsNumber);

  const { data, error, isLoading } = useSWR<HomeBlogItemModel[]>(
    [BLOG_POSTS, quantity?.total, order, search],
    () => getBlogPosts(quantity?.total ? quantity.total : 0, order, search),
  );

  useGSAP(
    () => {
      if (!containerRef.current) return;
      const childs = gsap.utils.toArray(containerRef.current.children) as HTMLElement[];
      childs.forEach((ch) =>
        gsap.from(ch, {
          marginTop: 0,
          autoAlpha: 0,
          scrollTrigger: {
            trigger: ch,
            start: 'top center',
          },
        }),
      );
    },
    { scope: containerRef, dependencies: [data?.length] },
  );

  return (
    <>
      <section>
        <PaddingWrapper>
          <SimpleHeader isPageHeader header='Blog' />
          {isLoading && <div style={{ width: '100%', height: '100vh' }} />}
          <PostsContainer ref={containerRef}>
            {data?.map((p, index) => (
              <BlogCard
                key={p.sys.id}
                id={p.sys.id}
                slug={p.slug}
                url={p.image.url}
                title={p.title}
                index={index}
              />
            ))}
          </PostsContainer>
        </PaddingWrapper>
      </section>
      <Foot />
    </>
  );
}
