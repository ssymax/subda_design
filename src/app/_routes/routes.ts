export const routes = {
  home: '/',
  about: '/o-mnie',
  realizations: '/realizacje',
  offer: '/oferta',
  blog: '/blog',
  contact: '/kontakt',
};

export const routesArr = (contact?: boolean) => {
  const defaultRoutes = [
    { route: routes.home, text: 'home' },
    { route: routes.about, text: 'o mnie' },
    { route: routes.realizations, text: 'realizacje' },
    { route: routes.offer, text: 'oferta' },
    { route: routes.blog, text: 'blog' },
  ];

  if (contact) return [...defaultRoutes, { route: routes.contact, text: 'kontakt' }];
  return defaultRoutes;
};
