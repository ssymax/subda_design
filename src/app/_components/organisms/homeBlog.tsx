'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import HomeHeader from '@/components/atoms/homeHeader';
import BlogCard from '@/components/molecules/blogCard';
import { HomeBlogItemModel } from '@/lib/types';
import { animateBlogPosts } from '@/utils/utils';
import styles from '@/styles/organisms/homeBlog.module.scss';
import { blogDescription } from '@/lib/constants';

export default function HomeBlog({ blogPosts }: { blogPosts: HomeBlogItemModel[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      animateBlogPosts(containerRef);
    },
    { scope: containerRef, revertOnUpdate: true, dependencies: blogPosts },
  );
  return (
    <section>
      <HomeHeader
        smallHeader='Blog'
        header='Porady, trendy i wskazówki'
        description={blogDescription}
      />
      <div className={styles.posts} ref={containerRef}>
        {blogPosts?.map((d) => (
          <BlogCard key={d.sys.id} slug={d.slug} url={d.image.url} title={d.title} />
        ))}
      </div>
    </section>
  );
}
