import type { Metadata } from 'next';
import BlogPostContent from '@/app/_components/organisms/blogPostContent';
import Foot from '@/app/_components/organisms/foot';
import PaddingWrapper from '@/app/_templates/paddingWrapper';
import { getPost } from '@/lib/api';
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

export default async function Page({ params }: { params: { slug: string } }) {
  const postData = await getPost(params.slug);
  return (
    <>
      <PaddingWrapper>
        <BlogPostContent postData={postData[0]} />
      </PaddingWrapper>
      <Foot />
    </>
  );
}
