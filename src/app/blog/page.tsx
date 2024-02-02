'use client';

import styled from 'styled-components';
import { useEffect, useRef, useState } from 'react';
import useSWR from 'swr';
import PaddingWrapper from '@/templates/paddingWrapper';
import BlogCard from '@/components/molecules/blogCard';
import Foot from '@/components/organisms/foot';
import SimpleHeader from '@/components/atoms/simpleHeader';
import Sorter from '@/components/atoms/sorter';
import { BLOG_POSTS, DATE_ASC, DATE_DESC } from '@/lib/constants';
import { HomeBlogItem, Order, TotalPosts } from '@/lib/types';
import { getBlogPosts, getTotalBlogsNumber } from '@/lib/api';
import { sortBlogPostByDate } from '../_utils/utils';

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

const ActionWrapper = styled.div`
  position: absolute;
  right: 5.5rem;
  top: 22rem;
  z-index: ${({ theme }) => theme.zIndex.level1};
`;

export default function Blog() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [order, setOrder] = useState<Order>(DATE_DESC);
  const [search, setSearch] = useState('');
  const [posts, setPosts] = useState<HomeBlogItem[]>([]);

  const { data: quantity } = useSWR<TotalPosts>('total', getTotalBlogsNumber);

  const { data, error, isLoading } = useSWR<HomeBlogItem[]>(
    [BLOG_POSTS, quantity?.total],
    () => getBlogPosts(quantity?.total ? quantity.total : 0),
  );

  useEffect(() => data && setPosts(data), [data]);

  const handleOrderClick = () =>
    setOrder((prev) => (prev === DATE_DESC ? DATE_ASC : DATE_DESC));

  return (
    <>
      <section>
        <PaddingWrapper>
          <SimpleHeader isPageHeader header='Blog' />
          <ActionWrapper>
            <Sorter onClick={handleOrderClick} />
          </ActionWrapper>
          {isLoading && <div style={{ width: '100%', height: '100vh' }} />}
          <PostsContainer ref={containerRef}>
            {sortBlogPostByDate(posts, order)?.map((p) => (
              <BlogCard
                key={p.id}
                id={p.id}
                slug={p.slug}
                url={p.image.url}
                title={p.title}
              />
            ))}
          </PostsContainer>
        </PaddingWrapper>
      </section>
      <Foot />
    </>
  );
}
