'use client';

import styled from 'styled-components';
import { HomeHeaderProps } from '@/components/types';
import SmallHeader from '@/components/atoms/smallHeader';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 10rem 5rem 5rem 0;
`;

const HeaderWithDescription = styled.div`
  display: flex;
  align-items: center;
`;

const Header = styled.h2`
  width: 70%;
  text-transform: uppercase;
  font-weight: 500;
`;

const Description = styled.span`
  width: 30%;
  font-size: 1.8rem;
`;

export default function HomeHeader({
  smallHeader,
  header,
  description,
}: HomeHeaderProps) {
  return (
    <Wrapper>
      <SmallHeader>{smallHeader}</SmallHeader>
      <HeaderWithDescription>
        <Header>{header}</Header>
        <Description>{description || ''}</Description>
      </HeaderWithDescription>
    </Wrapper>
  );
}
