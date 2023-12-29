'use client';

import { useRouter } from 'next/navigation';
import RedirectInfo from '@/components/organisms/redirectInfo';
import { routes } from '@/routes/routes';
import hero from '../../../../public/hero.png';

const text = `Nazywam się Marta Subda – dyplomowana architekt wnętrz i absolwentka prestiżowego Uniwersytetu Artystycznego w Poznaniu. Moja pasja do sztuki 
i designu wyraża się w licznych projektach, które tworzyłam przez lata. 
Od przemyślanych przestrzeni mieszkalnych po wyjątkowe realizacje komercyjne - nieustannie podchodzę do każdego zadania z entuzjazmem.
Moim celem jest adaptacja przestrzeni tak, by doskonale oddawała 
charakter, sposób życia i gusta moich Klientów. W projektowaniu wnętrz 
stawiam na bliską współpracę z inwestorami, dzięki której mogę pełniej 
zrozumieć ich wizję i stworzyć wnętrza przekraczające oczekiwania.`;

export default function HomeAbout() {
  const { push } = useRouter();
  return (
    <section>
      <RedirectInfo
        header='O mnie'
        text={text}
        leftLabel='Więcej'
        rightLabel='Projekty'
        onLeftClick={() => push(routes.about)}
        onRightClick={() => push(routes.realizations)}
        imageSrc={hero}
      />
    </section>
  );
}
