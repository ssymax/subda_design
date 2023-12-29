'use client';

import styled from 'styled-components';

const SmallHeader = styled.h1<{ $paddingBottom?: string }>`
  text-transform: uppercase;
  padding-bottom: ${({ $paddingBottom }) => $paddingBottom || '2rem'};
  font-weight: 500;
  letter-spacing: 1px;
  ${({ theme }) => theme.maxWidth.lg} {
    font-weight: 600;
  }
`;

export default SmallHeader;
