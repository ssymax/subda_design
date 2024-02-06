'use client';

import styled from 'styled-components';
import HomeHeader from '@/components/atoms/homeHeader';
import BlogCard from '@/components/molecules/blogCard';
import { HomeBlogItemModel } from '@/lib/types';

const description = `Przygotowałam dla Państwa artykuły, mogące pomóc w wielu 
aspektach urządzania mieszkań i innych przestrzeni.`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  column-gap: 6rem;
  margin-bottom: 3rem;
  ${({ theme }) => theme.maxWidth.lg} {
    row-gap: 3rem;
    flex-direction: column;
    justify-content: center;
  }
`;

export default function HomeBlog({ blogPosts }: { blogPosts: HomeBlogItemModel[] }) {
  return (
    <section>
      <HomeHeader
        smallHeader='Blog'
        header='Porady, trendy i wskazówki'
        description={description}
      />
      <Wrapper>
        {blogPosts?.map((d) => (
          <BlogCard key={d.sys.id} slug={d.slug} url={d.image.url} title={d.title} />
        ))}
      </Wrapper>
    </section>
  );
}
