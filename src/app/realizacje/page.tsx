import { Metadata } from 'next';
import Foot from '@/components/organisms/foot';
import PaddingWrapper from '@/templates/paddingWrapper';
import Realizations from '@/components/organisms/realizations';
import SimpleHeader from '@/components/atoms/simpleHeader';
import { getSimpleRealizations } from '@/lib/api';

import { head, realizations } from '@/lib/constants';

export const metadata: Metadata = {
  title: `Realizacje - ${head.title}`,
  description: head.description,
};

export default async function Page() {
  const data = await getSimpleRealizations();
  return (
    <>
      <PaddingWrapper>
        <section>
          <SimpleHeader isPageHeader header={realizations.header} alignLeft />
          <Realizations data={data} />
        </section>
      </PaddingWrapper>
      <Foot />
    </>
  );
}
