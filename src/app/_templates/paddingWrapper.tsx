'use client';

import styled from 'styled-components';

const PaddingWrapper = styled.div`
  width: 100%;
  padding: 0 5.5rem;
  ${({ theme }) => theme.maxWidth.lg} {
    padding: 0 2.4rem;
  }
`;

export default PaddingWrapper;
