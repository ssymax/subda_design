import type { Metadata } from 'next';
import BlogPostContent from '@/app/_components/organisms/blogPostContent';
import Foot from '@/app/_components/organisms/foot';
import PaddingWrapper from '@/app/_templates/paddingWrapper';
import { getBlogPosts, getPost, getTotalBlogsNumber } from '@/lib/api';
import { head } from '@/lib/constants';

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const rel = await getPost(params.slug);
  return {
    title: `${rel[0].title} - ${head.title}`,
    description: rel[0].introduction,
  };
}

export async function generateStaticParams() {
  const limit = await getTotalBlogsNumber();
  const posts = await getBlogPosts(limit?.total);

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <>
      <PaddingWrapper>
        <BlogPostContent slug={params.slug} />
      </PaddingWrapper>
      <Foot />
    </>
  );
}
