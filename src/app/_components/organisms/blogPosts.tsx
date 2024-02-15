'use client';

import { ChangeEvent, useRef, useState } from 'react';
import styled from 'styled-components';
import { useGSAP } from '@gsap/react';
import BlogCard from '@/components/molecules/blogCard';
import Sorter from '@/components/atoms/sorter';
import SearchInput from '@/components/atoms/searchInput';
import { HomeBlogItem, Order } from '@/lib/types';
import { animateBlogPosts, sortAndFilterBlogPosts } from '@/utils/utils';
import { ASC, DESC } from '@/lib/constants';

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

const NoPosts = styled.div`
  display: flex;
  font-size: 2rem;
  margin-top: 3rem;
  letter-spacing: 2px;
`;

export default function BlogPosts({ data }: { data: HomeBlogItem[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [order, setOrder] = useState<Order>(DESC);
  const [search, setSearch] = useState('');

  const handleOrderClick = () => setOrder((prev) => (prev === DESC ? ASC : DESC));

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => setSearch(e.target.value);

  const sortedPosts = sortAndFilterBlogPosts(data, order, search);

  useGSAP(
    () => {
      animateBlogPosts(containerRef);
    },
    { scope: containerRef, revertOnUpdate: true, dependencies: data },
  );

  return (
    <>
      <ActionWrapper>
        <Sorter order={order} onClick={handleOrderClick} />
        <SearchInput onChange={handleChange} value={search} placeholder='Szukaj' />
      </ActionWrapper>
      {!!search.length && !sortedPosts.length && (
        <NoPosts>{`Brak wyników dla "${search}"`}</NoPosts>
      )}
      <PostsContainer ref={containerRef}>
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
    </>
  );
}
