import styled from 'styled-components';
import { InfoItemProps } from '@/components/types';

const Wrapper = styled.div<{ $horizontal?: boolean }>`
  display: flex;
  row-gap: 2rem;
  flex-direction: column;
  h4 {
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 0.2rem;
  }

  div {
    font-weight: 300;
    line-height: 140%;
    font-size: 2.2rem;
    display: flex;
    flex-direction: ${({ $horizontal }) => ($horizontal ? 'row' : 'column')};
    column-gap: 1rem;
    ${({ theme }) => theme.maxWidth.lg} {
      font-size: 1.6rem;
      line-height: 140%;
      margin-bottom: 5rem;
    }
  }
`;

export default function InfoItem({ header, text, children, horizontal }: InfoItemProps) {
  return (
    <Wrapper $horizontal={horizontal}>
      <h4>{header}</h4>
      <div>{children || text}</div>
    </Wrapper>
  );
}
