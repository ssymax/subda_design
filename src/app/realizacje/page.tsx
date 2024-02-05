import { Metadata } from 'next';
import Foot from '@/components/organisms/foot';
import PaddingWrapper from '@/templates/paddingWrapper';
import Realizations from '@/components/organisms/realizations';
import SimpleHeader from '@/components/atoms/simpleHeader';
import { head, realizations } from '@/lib/constants';

export const metadata: Metadata = {
  title: `Realizacje - ${head.title}`,
  description: head.description,
};

export default function Page() {
  return (
    <>
      <PaddingWrapper>
        <section style={{ marginTop: '3rem' }}>
          <SimpleHeader
            isPageHeader
            header={realizations.header}
            textAlign='left'
            fontSize='8rem'
          />
          <Realizations />
        </section>
      </PaddingWrapper>
      <Foot />
    </>
  );
}
