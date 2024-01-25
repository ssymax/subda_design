'use client';

import styled from 'styled-components';
import Socials from '@/components/atoms/socials';
import Menu from '@/components/molecules/menu';
import useMediaQuery from '@/hooks/useMediaQuery';
import { minQuery } from '@/styles/constants';
import { contactData, contactTexts, socials } from '@/lib/constants';
import Logo from '../../../../public/images/logo.svg';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.secondary};
  width: 100%;
  padding: 5rem 7.5rem;
  ${({ theme }) => theme.maxWidth.lg} {
    padding: 5rem 2.4rem;
  }
`;

const StyledLogo = styled(Logo)`
  width: 22.5rem;
  margin-bottom: 2rem;
`;

const MoreInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  column-gap: 5rem;
  ${({ theme }) => theme.maxWidth.lg} {
    flex-direction: column;
    row-gap: 4rem;
  }
`;

const Personal = styled.div`
  display: flex;
  flex-direction: column;
  text-transform: uppercase;
  font-weight: 500;
  row-gap: 2rem;
  width: 50%;

  ${({ theme }) => theme.maxWidth.lg} {
    width: 100%;
    font-weight: 700;
  }
  div {
    display: flex;
    flex-direction: column;
    row-gap: 0.2rem;
  }
`;

const LinksAndDescription = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
  ${({ theme }) => theme.maxWidth.lg} {
    width: 100%;
  }
`;

const Info = styled.p`
  width: 30rem;
  font-size: 1.2rem;
  ${({ theme }) => theme.maxWidth.lg} {
    width: 100%;
  }
`;

export default function FooterInfo() {
  const largeScreen = useMediaQuery(minQuery.lg);
  return (
    <Wrapper>
      <StyledLogo />
      <MoreInfo>
        <Personal>
          <div>
            <span>{contactData.street}</span>
            <span>{contactData.city}</span>
          </div>
          <div>
            <span>{contactData.mail}</span>
            <span>{contactData.phone}</span>
          </div>
        </Personal>
        <LinksAndDescription>
          <Menu vertical dark contact />
          <Socials socials={socials} />
          {largeScreen && <Info>{contactTexts.footer}</Info>}
        </LinksAndDescription>
        {!largeScreen && <Info>{contactTexts.footer}</Info>}
      </MoreInfo>
    </Wrapper>
  );
}
