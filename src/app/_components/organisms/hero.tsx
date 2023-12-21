'use client';

import styled from 'styled-components';
import { redirect } from 'next/navigation';
import Image from 'next/image';
import ButtonsGroup from '@/components/molecules/buttonsGroup';
import { routes } from '@/routes/routes';
import hero from '../../../../public/hero.png';

const text = `Tworząc swój wymarzony projekt wnętrz, pragną Państwo
współpracować z kimś, kto rozumie Państwa potrzeby.`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  row-gap: 4rem;
  align-items: center;
  img {
    width: calc(100% + 11rem);
    height: auto;
  }
`;

const Header = styled.h2`
  font-size: 12rem;
  text-transform: uppercase;
  line-height: 100%;
  font-weight: 500;
`;

const TextAndButtons = styled.div`
  align-self: flex-end;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 50%;
  row-gap: 4rem;
  padding-bottom: 4rem;

  span {
    font-size: 3rem;
  }
`;

export default function Hero() {
  return (
    <Section>
      <Image src={hero} alt='Dom w Gryźlinach' />
      <div>
        <Header>Sztuka życia</Header>
        <Header>W pięknych wnętrzach</Header>
      </div>
      <TextAndButtons>
        <span>{text}</span>
        <ButtonsGroup
          leftLabel='kontakt'
          rightLabel='oferta'
          onLeftClick={() => redirect(routes.contact)}
          onRightClick={() => redirect(routes.offer)}
        />
      </TextAndButtons>
    </Section>
  );
}
