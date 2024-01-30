'use client';

import PaddingWrapper from '@/templates/paddingWrapper';
import SimpleHeader from '@/components/atoms/simpleHeader';

export default function Blog() {
  return (
    <section>
      <PaddingWrapper>
        <SimpleHeader isPageHeader header='Blog' />
      </PaddingWrapper>
    </section>
  );
}
