'use client';

import styled from 'styled-components';
import Form from '@/components/molecules/form';
import FooterInfo from '@/components/molecules/footerInfo';
import Line from '@/components/atoms/line';

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  margin-top: 8rem;
`;

const Header = styled.h1`
  font-size: 4.6rem;
  text-transform: uppercase;
  font-weight: 400;
  text-align: center;
  margin-bottom: 5rem;
`;

const FormAndInfo = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
  width: 100%;
  border-radius: 2rem;
  padding: 7rem 2rem;
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

export default function Foot() {
  return (
    <Footer>
      <Header>Bądźmy w kontakcie</Header>
      <FormAndInfo>
        <Form />
        <FooterInfo />
      </FormAndInfo>
      <StyledLine />
      <RightsAndPolicy>
        <span>{copyright} Wszelkie prawa zastrzeżone</span>
        <div>
          <ActiveSpan {...spanProps} onClick={() => {}}>
            Polityka prywatności
          </ActiveSpan>
          {` / `}
          <ActiveSpan {...spanProps} onClick={() => {}}>
            Polityka cookies
          </ActiveSpan>
        </div>
      </RightsAndPolicy>
    </Footer>
  );
}
