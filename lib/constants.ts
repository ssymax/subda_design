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
  redirectHeader: 'Odkryj nieograniczone możliwości aranżacji Twoich wnętrz. ',
  text: `Moja oferta obejmuje wyjątkowe projekty kuchni, łazienek i inny`,
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
