'use client';

import styled from 'styled-components';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import ButtonsGroup from '@/components/molecules/buttonsGroup';
import SimpleHeader from '@/components/atoms/simpleHeader';
import { routes } from '@/routes/routes';
import PaddingWrapper from '@/templates/paddingWrapper';
import hero from '../../../../public/hero.png';
import heroMobile from '../../../../public/hero_mobile.png';

const text = `Tworząc swój wymarzony projekt wnętrz, pragną Państwo
współpracować z kimś, kto rozumie Państwa potrzeby.`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  row-gap: 4rem;
  align-items: center;

  .mobile {
    ${({ theme }) => theme.minWidth.lg} {
      display: none;
    }
  }

  .desktop {
    ${({ theme }) => theme.maxWidth.lg} {
      display: none;
    }
  }

  ${({ theme }) => theme.maxWidth.lg} {
    row-gap: 2rem;
    margin: 0 auto;
  }

  img {
    width: 100%;
    height: auto;
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

const StyledPaddingWrapper = styled(PaddingWrapper)`
  display: flex;
  flex-direction: column;
  row-gap: 4rem;
`;

export default function Hero() {
  const { push } = useRouter();

  return (
    <Section>
      <Image
        priority
        className='mobile'
        src={heroMobile}
        alt='Dom w Gryźlinach'
        placeholder='blur'
      />
      <Image
        priority
        className='desktop'
        src={hero}
        alt='Dom w Gryźlinach'
        placeholder='blur'
      />
      <StyledPaddingWrapper>
        <div>
          <SimpleHeader header='Sztuka życia' />
          <SimpleHeader header='W pięknych wnętrzach' />
        </div>
        <TextAndButtons>
          <span>{text}</span>
          <ButtonsGroup
            leftLabel='kontakt'
            rightLabel='oferta'
            onLeftClick={() => push(routes.contact)}
            onRightClick={() => push(routes.offer)}
          />
        </TextAndButtons>
      </StyledPaddingWrapper>
    </Section>
  );
}
