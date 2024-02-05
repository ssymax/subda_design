'use client';

import styled from 'styled-components';
import { HomeHeaderProps } from '@/components/types';
import SmallHeader from '@/components/atoms/smallHeader';
import useMediaQuery from '@/app/_hooks/useMediaQuery';
import { minQuery } from '@/app/_styles/constants';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 10rem 5rem 5rem 0;
  ${({ theme }) => theme.maxWidth.lg} {
    margin: 5rem 5rem 5rem 0;
  }
`;

const HeaderWithDescription = styled.div`
  display: flex;
  align-items: center;
  ${({ theme }) => theme.maxWidth.lg} {
    flex-direction: column;
    row-gap: 1rem;
  }
`;

const Header = styled.h2`
  width: 70%;
  text-transform: uppercase;
  font-weight: 500;
  ${({ theme }) => theme.maxWidth.lg} {
    width: 100%;
  }
  ${({ theme }) => theme.maxWidth.md} {
    font-size: 2.8rem;
    font-weight: 300;
  }
`;

const Description = styled.span`
  width: 30%;
  font-size: 1.8rem;
  font-weight: 500;
  line-height: 140%;
  ${({ theme }) => theme.maxWidth.lg} {
    width: 100%;
    font-size: 1.6rem;
    font-weight: 300;
  }
`;

export default function HomeHeader({
  smallHeader,
  header,
  description,
}: HomeHeaderProps) {
  const largeScreen = useMediaQuery(minQuery.lg);
  return (
    <Wrapper>
      <SmallHeader $paddingBottom={!largeScreen ? '1rem' : ''}>{smallHeader}</SmallHeader>
      <HeaderWithDescription>
        <Header>{header}</Header>
        <Description>{description || ''}</Description>
      </HeaderWithDescription>
    </Wrapper>
  );
}
