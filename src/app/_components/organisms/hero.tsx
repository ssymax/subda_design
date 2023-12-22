'use client';

import styled from 'styled-components';
import { redirect } from 'next/navigation';
import Image from 'next/image';
import ButtonsGroup from '@/components/molecules/buttonsGroup';
import SimpleHeader from '@/components/atoms/simpleHeader';
import { routes } from '@/routes/routes';
import hero from '../../../../public/hero.png';

const text = `Tworząc swój wymarzony projekt wnętrz, pragną Państwo
współpracować z kimś, kto rozumie Państwa potrzeby.`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  row-gap: 4rem;
  align-items: center;
  ${({ theme }) => theme.maxWidth.lg} {
    row-gap: 2rem;
  }

  img {
    width: calc(100% + 11rem);
    height: auto;
    ${({ theme }) => theme.maxWidth.lg} {
      width: 190%;
    }
  }
`;

const TextAndButtons = styled.div`
  align-self: flex-end;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 50%;
  row-gap: 4rem;
  padding-bottom: 4rem;

  ${({ theme }) => theme.maxWidth.lg} {
    width: 100%;
  }

  span {
    font-size: 3rem;
    ${({ theme }) => theme.maxWidth.lg} {
      font-size: 1.8rem;
      line-height: 150%;
    }
  }
  div {
    ${({ theme }) => theme.maxWidth.lg} {
      justify-content: center;
      width: 100%;
    }
  }
`;

export default function Hero() {
  return (
    <Section>
      <Image src={hero} alt='Dom w Gryźlinach' />
      <div>
        <SimpleHeader>Sztuka życia</SimpleHeader>
        <SimpleHeader>W pięknych wnętrzach</SimpleHeader>
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
