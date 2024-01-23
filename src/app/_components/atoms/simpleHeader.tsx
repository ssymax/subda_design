import styled from 'styled-components';

const SimpleHeader = styled.h1<{ $fontSize?: string; $paddingBottom?: string }>`
  font-size: ${({ $fontSize }) => $fontSize || '9.6rem'};
  padding-bottom: ${({ $paddingBottom }) => $paddingBottom || 0};
  text-transform: uppercase;
  line-height: 100%;
  font-weight: 800;
  ${({ theme }) => theme.maxWidth.lg} {
    font-weight: 700;
    font-size: 5rem;
  }
`;

export default SimpleHeader;
