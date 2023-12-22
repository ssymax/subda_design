import styled from 'styled-components';

const SimpleHeader = styled.h2`
  font-size: 12rem;
  text-transform: uppercase;
  line-height: 100%;
  font-weight: 500;
  ${({ theme }) => theme.maxWidth.lg} {
    font-weight: 700;
    font-size: 6rem;
  }
`;

export default SimpleHeader;
