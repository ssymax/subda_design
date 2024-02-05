'use client';

import styled from 'styled-components';

const Wrapper = styled.div`
  height: calc(100vh - 7rem);
  width: 100%;
  color: ${({ theme }) => theme.colors.secondary};
  background-color: ${({ theme }) => theme.colors.dark};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  letter-spacing: 2px;
  row-gap: 4rem;

  ${({ theme }) => theme.maxWidth.lg} {
    height: calc(100vh - 6rem);
  }
`;

export default function NotFound() {
  return (
    <Wrapper>
      <h2>404</h2>
      <h3>Nie znaleziono strony</h3>
    </Wrapper>
  );
}
