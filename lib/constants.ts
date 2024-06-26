export const baseUrl = 'https://subdadesign.pl';
export const DESC = 'desc';
export const ASC = 'asc';

export const socials = [
  {
    id: 1,
    name: 'Facebook',
    href: 'https://www.facebook.com/subdadesign',
    shortcut: 'FB',
  },
  {
    id: 2,
    name: 'Instagram',
    href: 'https://www.instagram.com/martasubdadesign/',
    shortcut: 'IN',
  },
  {
    id: 3,
    name: 'Linkedin',
    href: 'https://www.linkedin.com/in/subdadesign',
    shortcut: 'LI',
  },
  {
    id: 4,
    name: 'Pinterest',
    href: 'https://pl.pinterest.com/subdadesign/?eq=SUBDADESI&etslf=4180',
    shortcut: 'PIN',
  },
];

export const contactData = {
  street: 'Jarosława Iwaszkiewicza 30/24',
  city: '10-089 Olsztyn',
  mail: 'info@subdadesign.pl',
  phone: '+48 600 047 360',
};

export const contactTexts = {
  invite: `Chętnie opowiem Państwu jak wygląda proces pracy nad projektem, od pomysłu do jego wykonania. Możemy omówić Państwa potrzeby telefonicznie, mailowo, poprzez telekonferencje lub osobiście. Nacześciej spotkać mnie można Olsztynie. Warszawie i Lublinie, ale zachęcam do kontaku z każdego miejsca.`,
  footer: `Projektowanie i aranżaca wnętrz w Warszawie, Olsztynie i Lublinie. Od stylu minimalistycznego przez boho po luksusowy, dopracowywane z największą dbałością o detale, łącząc funkcjonalność, komfort i estetykę. Oferuję indywidualne konsultacje, projektowanie 3D, doboru kolorystyki, mebli i oświetlenia.
  `,
};

export const head = {
  title: 'Subda Design - projektant wnętrz Olsztyn, Warszawa, Lublin',
  description: contactTexts.footer,
};

export const realizations = {
  header: 'Zobacz najnowsze realizacje moich projektów',
  redirectHeader:
    'POZWÓL MI SPRAWIĆ, BY TAKŻE TWOJE WNĘTRZA ZYSKAŁY NIEPOWTARZALNY BLASK',
  text: `Przygotowuję projekty kuchni, łazienek i innych pomieszczeń mieszkalnych oraz komercyjnych. Łączę nowoczesność z funkcjonalnością, tworząc przyjazne przestrzenie z charakterem, odzwierciedlające osobowość i potrzeby moich klientów. Chcesz, by Twoje wnętrze zachwycało i służyło przez długie lata? Porozmawiajmy o Twoim marzeniu - i o tym, jak je spełnić.`,
};

export const defaultFormValues = {
  name: '',
  phone: '',
  message: '',
  policy: false,
};

export const privacyPolicyData = {
  generalTerms: {
    administrator: {
      name: 'Marta Subda Design',
      address: 'ul. Jarosława Iwaszkiewicza 30/24',
      nip: '7393709206',
      contact: {
        postalAddress: 'ul. Jarosława Iwaszkiewicza 30/24',
        email: 'martasubda@gmail.com',
      },
      dataProtectionOfficer:
        'Nie powołano Inspektora Ochrony Danych zgodnie z Art. 37 RODO.',
    },
    privacyPolicy: {
      integralPart: 'Polityka prywatności stanowi integralną część Regulaminu.',
      information:
        'Korzystając z oferowanych przez nas usług, powierzasz nam swoje informacje.',
      legalBasis:
        'Przestrzegamy zasad ochrony danych osobowych oraz wszelkich uregulowań prawnych.',
    },
    userRights:
      'Na żądanie osoby, której dane osobowe są przetwarzane, udzielamy wyczerpujących informacji.',
  },
  privacyPrinciples: {
    respect:
      'Szanujemy Twoją prywatność. Pragniemy zagwarantować Ci wygodę korzystania z naszych usług.',
    fairUse:
      'Cenimy zaufanie, jakim Nas obdarzasz, powierzając nam swoje dane osobowe w celu realizacji usług.',
    transparency:
      'Jako Użytkownik masz prawo do uzyskania pełnych i jasnych informacji o tym, w jaki sposób wykorzystujemy Twoje dane osobowe.',
    protection:
      'Podejmiemy wszystkie uzasadnione działania, aby chronić Twoje dane przed nienależytym i niekontrolowanym wykorzystaniem.',
    legalBasis: [
      'art. 6 ust. 1 lit. a - zgoda',
      'art. 6 ust. 1 lit. b - niezbędność do wykonania umowy',
      'art. 6 ust. 1 lit. c - niezbędność do wypełnienia obowiązku prawnego',
      'art. 6 ust. 1 lit. d - ochrona żywotnych interesów',
      'art. 6 ust. 1 lit. e - wykonanie zadania publicznego',
      'art. 6 ust. 1 lit. f - prawnie uzasadnione interesy',
    ],
    dataRetention:
      'Twoje dane osobowe przetwarzane będą przez okres realizacji umowy oraz nie dłużej niż 10 lat.',
  },
  userRights: {
    accessAndCopy:
      'Przysługuje Ci prawo dostępu do swoich danych osobowych i otrzymania kopii danych osobowych.',
    correction: 'Przysługuje Ci prawo do sprostowania swoich nieprawidłowych danych.',
    deletion: 'Przysługuje Ci prawo do usunięcia danych osobowych.',
    restriction: 'Przysługuje Ci prawo do ograniczenia przetwarzania danych osobowych.',
    dataPortability:
      'Przysługuje Ci prawo do przenoszenia dostarczonych danych w formie zautomatyzowanej.',
    objection:
      'Przysługuje Ci prawo do wniesienia sprzeciwu wobec przetwarzania danych osobowych.',
    complaint: 'Przysługuje Ci prawo do wniesienia skargi do organu nadzorczego.',
  },
};

export const opinions = [
  {
    id: 1,
    name: 'Marta',
    description: `Pani Marta ma wysmakowany gust; jednocześnie dyskretny. Dobiera wzory, kolory i materiały, by pasowały do oświetlenia oraz przestrzeni, jaką dysponuje. Uwzględnia
      także uwagi klienta, jego gust i potrzeby. Gorąco polecam.`,
    place: 'Poznań',
  },
  {
    id: 2,
    name: 'Marta',
    description: `Właśnie jestem po fantastycznej współpracy z profesjonalną, kreatywną i bardzo zdolną projektantką. Spotkałam się z indywidualnym i elastycznym podejściem do klienta a jednocześnie z wielorakością pomysłów i doświadczeniem mimo młodego wieku właścicielki firmy. Polecam z zamkniętymi oczami aranżowanie, projektowanie i doradztwo SubdaDesign`,
    place: 'Lublin',
  },
  {
    id: 3,
    name: 'Katarzyna',
    description: `Pani Marta świetnie sobie radzi nawet z najbardziej wymagającymi klientami - potrafi połączyć dwa różne światy w jedną wspólną całość. Szczerze polecam współpracę, a finalny projekt już czeka na realizację, której nie możemy się doczekać`,
    place: 'Warszawa',
  },
];

export const heroText = `Cześć! Szukasz pomocy w urządzaniu mieszkania, domu, biura czy restauracji? Przygotuję dla Ciebie projekt wnętrz - funkcjonalnej kuchni, stylowego salonu, wygodnej sypialni czy innej przestrzeni.`;

export const aboutText = `Cześć, jestem Marta Subda. Serdecznie witam Cię w moim studiu projektowym.

Jestem doświadczonym architektem wnętrz z dyplomem prestiżowego Uniwersytetu Artystycznego w Poznaniu. Moje studio projektowe Subda Design działa od 2015 roku. Na koncie mam już dziesiątki zrealizowanych projektów, zarówno prywatnych, jak i komercyjnych. 

Swobodnie poruszam się w każdym stylu wnętrzarskim. Cyklicznie podnoszę swoje kompetencje, biorę udział w szkoleniach, śledzę trendy w kraju i za granicą. Każdy projekt poprzedza uważna rozmowa z inwestorem i gruntowny research potrzeb, na które ma odpowiadać projektowana przestrzeń. 
.`;

export const blogDescription = `Przygotowałam dla Państwa artykuły, mogące pomóc w wielu 
aspektach urządzania mieszkań i innych przestrzeni.`;

export const realizationsDescription = `Każdy projekt jest wynikiem dokładnego zbadania potrzeb 
i dodania indywidualnego charakteru Państwa wnętrzom.`;
