'use client';

import styled from 'styled-components';
import RealizationItem from '@/components/molecules/realizationItem';
import Line from '@/components/atoms/line';
import { RealizationsContainerProps } from '../types';

const Wrapper = styled.div`
  padding: 2rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-flow: row;
  grid-template-rows: auto;
  gap: 4rem;
  ${({ theme }) => theme.maxWidth.lg} {
    display: flex;
    flex-direction: column;
  }
`;

export default function RealizationsContainer({
  realizations,
}: RealizationsContainerProps) {
  return (
    <>
      <Line />
      <Wrapper>{realizations?.map((r) => <RealizationItem key={r.id} {...r} />)}</Wrapper>
    </>
  );
}
