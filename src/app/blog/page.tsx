'use client';

import styled from 'styled-components';
import { ChangeEvent, useEffect, useState } from 'react';
import useSWR from 'swr';
import PaddingWrapper from '@/templates/paddingWrapper';
import BlogCard from '@/components/molecules/blogCard';
import Foot from '@/components/organisms/foot';
import SimpleHeader from '@/components/atoms/simpleHeader';
import Sorter from '@/components/atoms/sorter';
import SearchInput from '@/components/atoms/searchInput';
import { BLOG_POSTS, ASC, DESC } from '@/lib/constants';
import { HomeBlogItem, Order, TotalPosts } from '@/lib/types';
import { getBlogPosts, getTotalBlogsNumber } from '@/lib/api';
import { sortAndFilterBlogPosts } from '../_utils/utils';

const PostsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 5.5rem;
  margin-top: 3rem;
  grid-auto-flow: row;
  min-height: 100vh;

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
  top: 22.5rem;
  display: flex;
  align-items: center;
  column-gap: 2rem;
  z-index: ${({ theme }) => theme.zIndex.level1};
  ${({ theme }) => theme.maxWidth.lg} {
    top: 16rem;
    right: 2.4rem;
  }
`;

export default function Blog() {
  const [order, setOrder] = useState<Order>(DESC);
  const [search, setSearch] = useState('');
  const [posts, setPosts] = useState<HomeBlogItem[]>([]);

  const { data: quantity } = useSWR<TotalPosts>('total', getTotalBlogsNumber);

  const { data, error, isLoading } = useSWR<HomeBlogItem[]>(
    [BLOG_POSTS, quantity?.total],
    () => getBlogPosts(quantity?.total ? quantity.total : 0),
  );

  useEffect(() => data && setPosts(data), [data]);

  const handleOrderClick = () => setOrder((prev) => (prev === DESC ? ASC : DESC));

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => setSearch(e.target.value);

  const sortedPosts = sortAndFilterBlogPosts(posts, order, search);

  return (
    <>
      <section>
        <PaddingWrapper>
          <SimpleHeader isPageHeader header='Blog' />
          <ActionWrapper>
            <Sorter order={order} onClick={handleOrderClick} />
            <SearchInput onChange={handleChange} value={search} placeholder='Szukaj' />
          </ActionWrapper>
          <PostsContainer>
            {sortedPosts?.map((p) => (
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
