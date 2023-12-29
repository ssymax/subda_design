'use client';

import styled from 'styled-components';
import Image from 'next/image';
import { redirect } from 'next/navigation';
import Line from '@/components/atoms/line';
import SmallHeader from '@/components/atoms/smallHeader';
import ButtonsGroup from '@/components/molecules/buttonsGroup';
import { routes } from '@/routes/routes';
import hero from '../../../../public/hero.png';

const text = `Nazywam się Marta Subda – dyplomowana architekt wnętrz i absolwentka prestiżowego Uniwersytetu Artystycznego w Poznaniu. Moja pasja do sztuki 
i designu wyraża się w licznych projektach, które tworzyłam przez lata. 
Od przemyślanych przestrzeni mieszkalnych po wyjątkowe realizacje komercyjne - nieustannie podchodzę do każdego zadania z entuzjazmem.
Moim celem jest adaptacja przestrzeni tak, by doskonale oddawała 
charakter, sposób życia i gusta moich Klientów. W projektowaniu wnętrz 
stawiam na bliską współpracę z inwestorami, dzięki której mogę pełniej 
zrozumieć ich wizję i stworzyć wnętrza przekraczające oczekiwania.`;

const InnerWrapper = styled.div`
  padding: 2rem 0 4rem 0;
  display: flex;
  justify-content: space-between;
  column-gap: 5rem;
  ${({ theme }) => theme.maxWidth.lg} {
    flex-direction: column;
    flex-flow: column-reverse;
    row-gap: 2rem;
  }

  div {
    width: 50%;

    ${({ theme }) => theme.maxWidth.lg} {
      width: 100%;
    }
  }

  p {
    font-size: 2.2rem;
    line-height: 120%;
    font-weight: 300;
    margin-bottom: 8rem;

    ${({ theme }) => theme.maxWidth.lg} {
      font-size: 1.6rem;
      line-height: 140%;
      margin-bottom: 5rem;
    }
  }
`;

const ImageWrapper = styled.div`
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
  }
`;

export default function HomeAbout() {
  return (
    <section>
      <Line />
      <InnerWrapper>
        <div>
          <SmallHeader>O mnie</SmallHeader>
          <p>{text}</p>
          <ButtonsGroup
            leftLabel='Więcej'
            rightLabel='Projekty'
            onLeftClick={() => redirect(routes.about)}
            onRightClick={() => redirect(routes.realizations)}
          />
        </div>
        <ImageWrapper>
          <Image src={hero} alt='' />
        </ImageWrapper>
      </InnerWrapper>
      <Line />
    </section>
  );
}
