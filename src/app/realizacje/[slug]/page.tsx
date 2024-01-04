'use client';

import useSWR from 'swr';
import { getRealization } from '@/lib/api';

export default function Realization({ params }: { params: { slug: string } }) {
  const { data } = useSWR(params?.slug, getRealization);
  console.log('🚀 ~ file: page.tsx:9 ~ Realization ~ data:', data);
  return <div>{params.slug}</div>;
}
