'use client';

import { ChangeEvent, useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import BlogCard from '@/components/molecules/blogCard';
import Sorter from '@/components/atoms/sorter';
import SearchInput from '@/components/atoms/searchInput';
import { HomeBlogItem, Order } from '@/lib/types';
import { sortAndFilterBlogPosts } from '@/utils/utils';
import { ASC, DESC } from '@/lib/constants';
import styles from '@/styles/organisms/blogPosts.module.scss';

export default function BlogPosts({ data }: { data: HomeBlogItem[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [order, setOrder] = useState<Order>(DESC);
  const [search, setSearch] = useState('');

  const handleOrderClick = () => {
    setOrder((prev) => (prev === DESC ? ASC : DESC));
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => setSearch(e.target.value);

  const sortedPosts = sortAndFilterBlogPosts(data, order, search);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      const items = gsap.utils.toArray(containerRef.current.children) as HTMLElement[];

      items.forEach((item) => {
        gsap.from(item, {
          autoAlpha: 0,
          y: 100,
          duration: 0.8,
        });
      });
    },
    { scope: containerRef, dependencies: [sortedPosts, order] },
  );

  return (
    <>
      <div className={styles.actions}>
        <Sorter order={order} onClick={handleOrderClick} />
        <SearchInput onChange={handleChange} value={search} placeholder='Szukaj' />
      </div>
      {!!search.length && !sortedPosts.length && (
        <div className={styles.noPosts}>{`Brak wyników dla "${search}"`}</div>
      )}
      <div className={styles.posts} ref={containerRef}>
        {sortedPosts?.map((p) => (
          <BlogCard
            key={p.id}
            id={p.id}
            slug={p.slug}
            url={p.image.url}
            title={p.title}
          />
        ))}
      </div>
    </>
  );
}
