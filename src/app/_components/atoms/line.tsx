'use client';

import styled from 'styled-components';

const Line = styled.hr`
  border-top: 1px solid ${({ theme }) => theme.colors.dark};
  width: 100%;
`;

export default Line;
