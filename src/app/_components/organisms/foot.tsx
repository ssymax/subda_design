'use client';

import styled from 'styled-components';
import { useRouter } from 'next/navigation';
import PaddingWrapper from '@/templates/paddingWrapper';
import Form from '@/components/molecules/form';
import FooterInfo from '@/components/molecules/footerInfo';
import Line from '@/components/atoms/line';
import { FootProps } from '../types';

const Footer = styled.footer<{ $dark?: boolean }>`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme, $dark }) =>
    $dark ? theme.colors.dark : theme.colors.secondary};
  margin-top: 3rem;
`;

const Header = styled.h1<{ $dark?: boolean }>`
  margin-top: 8rem;
  font-size: 4.6rem;
  text-transform: uppercase;
  font-weight: 400;
  text-align: center;
  margin-bottom: 5rem;
  color: ${({ theme, $dark }) => ($dark ? theme.colors.secondary : theme.colors.primary)};
  ${({ theme }) => theme.maxWidth.md} {
    font-size: 2.8rem;
    font-weight: 300;
    width: 100%;
    text-align: left;
    padding-left: 2.4rem;
  }
`;

const FormAndInfo = styled.div`
  width: 100%;
  margin-top: 7rem;
  ${({ theme }) => theme.maxWidth.lg} {
    display: flex;
    row-gap: 4rem;
    flex-direction: column;
  }
`;

const WhiteWrap = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
`;

const StyledLine = styled(Line)`
  margin-top: 2rem;
`;

const RightsAndPolicy = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.grey};
  font-size: 1.2rem;
  padding: 0.5rem 0 1rem 0;
  ${({ theme }) => theme.maxWidth.lg} {
    flex-direction: column;
    align-items: flex-start;
    row-gap: 1.5rem;
  }
`;

const ActiveSpan = styled.span`
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const copyright = String.fromCodePoint(0x00a9);

const spanProps = {
  tabIndex: 0,
  role: 'button',
};

export default function Foot({ header, children, dark }: FootProps) {
  const { push } = useRouter();

  return (
    <Footer $dark={dark}>
      <Header $dark={dark}>{header || `Bądźmy w kontakcie`}</Header>
      <FormAndInfo>
        <PaddingWrapper>
          <Form dark={dark} />
          {children}
        </PaddingWrapper>
        <FooterInfo />
      </FormAndInfo>
      <WhiteWrap>
        <PaddingWrapper>
          <StyledLine />
          <RightsAndPolicy>
            <span>{copyright} Wszelkie prawa zastrzeżone</span>
            <div>
              <ActiveSpan {...spanProps} onClick={() => push('?modal=true')}>
                Polityka prywatności
              </ActiveSpan>
            </div>
          </RightsAndPolicy>
        </PaddingWrapper>
      </WhiteWrap>
    </Footer>
  );
}
