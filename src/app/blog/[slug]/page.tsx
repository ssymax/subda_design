'use client';

import useSWR from 'swr';
import dayjs from 'dayjs';
import { getPost } from '@/lib/api';
import { BlogPost } from '@/lib/types';

export default function Post({ params }: { params: { slug: string } }) {
  const { data } = useSWR<BlogPost[], Error>(params?.slug, getPost);

  const postData = data?.[0];

  const date = dayjs(postData?.date).format('DD.MM.YYYY');

  return <div>{params.slug}</div>;
}
