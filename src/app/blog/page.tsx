import type { Metadata } from 'next';

import PaddingWrapper from '@/templates/paddingWrapper';
import Foot from '@/components/organisms/foot';
import SimpleHeader from '@/components/atoms/simpleHeader';
import BlogPosts from '@/components/organisms/blogPosts';
import { getBlogPosts, getTotalBlogsNumber } from '@/lib/api';
import { head } from '@/lib/constants';

export const metadata: Metadata = {
  title: `Blog - ${head.title}`,
  description: head.description,
};

export default async function Page() {
  const quantity = await getTotalBlogsNumber();
  const posts = await getBlogPosts(quantity?.total);
  return (
    <>
      <section>
        <PaddingWrapper>
          <SimpleHeader isPageHeader header='Blog' />
          <BlogPosts data={posts} />
        </PaddingWrapper>
      </section>
      <Foot />
    </>
  );
}
