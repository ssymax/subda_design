'use client';

import styled from 'styled-components';
import Socials from '@/components/atoms/socials';
import Menu from '@/components/molecules/menu';
import Logo from '../../../../public/images/logo.svg';

const data = {
  street: 'Jarosława Iwaszkiewicza 30/24',
  city: '10-089 Olsztyn',
  mail: 'mail: info@subdadesign.pl',
  phone: 'tel: 600 047 360',
};

export const socials = [
  { id: 1, name: 'Facebook', href: '' },
  { id: 2, name: 'Instagram', href: '' },
  { id: 3, name: 'Linkedin', href: '' },
  { id: 4, name: 'Pinterest', href: '' },
];

export const text = `Projektowanie i aranżaca wnętrz w Warszawie, 
Olsztynie i Lublinie. Od stylu minimalistycznego 
przez boho po luksusowy, dopracowywane 
z największą dbałością o detale, łącząc 
funkcjonalność, komfort i estetykę. Oferuję 
indywidualne konsultacje, projektowanie 3D, 
doboru kolorystyki, mebli i oświetlenia.`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledLogo = styled(Logo)`
  width: 22.5rem;
`;

const MoreInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  column-gap: 5rem;
`;

const Personal = styled.div`
  display: flex;
  flex-direction: column;
  text-transform: uppercase;
  font-weight: 500;
  row-gap: 2rem;
  width: 50%;

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
`;

const Info = styled.p`
  width: 30rem;
  font-size: 1.2rem;
`;

export default function FooterInfo() {
  return (
    <Wrapper>
      <StyledLogo />
      <MoreInfo>
        <Personal>
          <div>
            <span>{data.street}</span>
            <span>{data.city}</span>
          </div>
          <div>
            <span>{data.mail}</span>
            <span>{data.phone}</span>
          </div>
        </Personal>
        <LinksAndDescription>
          <Menu vertical dark contact />
          <Socials socials={socials} />
          <Info>{text}</Info>
        </LinksAndDescription>
      </MoreInfo>
    </Wrapper>
  );
}
