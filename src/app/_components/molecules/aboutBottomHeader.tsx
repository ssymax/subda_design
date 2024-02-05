'use client';

import styled from 'styled-components';
import SimpleHeader from '@/components/atoms/simpleHeader';

const TextWrap = styled.div`
  text-align: center;
  padding: 5rem 0;
  margin-bottom: -3rem;
  background-color: ${({ theme }) => theme.colors.secondary};
`;

export default function AboutBottomHeader() {
  return (
    <TextWrap>
      <SimpleHeader header='Pasja do piękna' />
      <SimpleHeader header='Miłość do komfortu' />
    </TextWrap>
  );
}
