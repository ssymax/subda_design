import styled from 'styled-components';

const SimpleHeader = styled.h2<{ $fontSize?: string; $paddingBottom?: string }>`
  font-size: ${({ $fontSize }) => $fontSize || '12rem'};
  padding-bottom: ${({ $paddingBottom }) => $paddingBottom || 0};
  text-transform: uppercase;
  line-height: 100%;
  font-weight: 600;
  ${({ theme }) => theme.maxWidth.lg} {
    font-weight: 700;
    font-size: 5rem;
  }
`;

export default SimpleHeader;
