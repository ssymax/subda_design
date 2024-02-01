import styled from 'styled-components';
import Line from '@/components/atoms/line';
import { SimpleHeaderProps } from '@/components/types';

const Header = styled.h1<{
  $fontSize?: string;
  $paddingBottom?: string;
  $isPageHeader?: boolean;
}>`
  position: relative;
  font-size: ${({ $fontSize }) => $fontSize || '9.6rem'};
  padding-bottom: ${({ $paddingBottom }) => $paddingBottom || 0};
  text-transform: uppercase;
  line-height: 100%;
  font-weight: 800;
  margin: ${({ $isPageHeader }) => $isPageHeader && '4rem 0'};
  text-align: ${({ $isPageHeader }) => $isPageHeader && 'center'};
  ${({ theme }) => theme.maxWidth.lg} {
    font-weight: 700;
    font-size: 5rem;
  }
`;

export default function SimpleHeader({
  header,
  isPageHeader,
  fontSize,
  paddingBottom,
}: SimpleHeaderProps) {
  return (
    <div>
      <Header
        $fontSize={fontSize}
        $paddingBottom={paddingBottom}
        $isPageHeader={isPageHeader}
      >
        {header}
      </Header>
      {isPageHeader && <Line />}
    </div>
  );
}
