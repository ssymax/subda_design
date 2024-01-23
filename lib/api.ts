import { detailedRealizationsConverter, simpleRealizationsConverter } from './converters';
import {
  REALIZATIONS_QUERY,
  HOME_REALIZATIONS_QUERY,
  SIMPLE_REALIZATIONS_QUERY,
  ABOUT_QUERY,
  OFFER_QUERY,
} from './queries';
import {
  AboutMeType,
  DetailedRealizationItem,
  OfferType,
  RealizationItem,
} from './types';

async function fetchGraphQL(query: string, preview = false): Promise<any> {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${
          preview
            ? process.env.NEXT_PUBLIC_CONTENTFUL_PREVIEW_ACCESS_TOKEN
            : process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
        }`,
      },
      body: JSON.stringify({ query }),
    },
  ).then((response) => response.json());
}

export async function getAllRealizations(): Promise<DetailedRealizationItem[]> {
  const realizations = await fetchGraphQL(REALIZATIONS_QUERY, false);
  return detailedRealizationsConverter(realizations.data);
}

export async function getHomeRealizations(): Promise<RealizationItem[]> {
  const homeRealizations = await fetchGraphQL(HOME_REALIZATIONS_QUERY, false);
  return simpleRealizationsConverter(homeRealizations.data);
}

export async function getSimpleRealizations(): Promise<RealizationItem[]> {
  const simpleRealizations = await fetchGraphQL(SIMPLE_REALIZATIONS_QUERY, false);
  return simpleRealizationsConverter(simpleRealizations.data);
}

export async function getRealization(slug: string): Promise<DetailedRealizationItem[]> {
  const realization = await fetchGraphQL(
    `query {
      realizationsCollection(where: { slug: "${slug}" }) {
        items {
          sys {
            id
          }
          slug
          title
          description
          type
          year
          area
          location
          mainImage {
            url
          }
          imagesCollection {
            items {
              sys {
                id
              }
              url
              width
              height
            }
          }
        }
      }
    }
    
  `,
    false,
  );

  return detailedRealizationsConverter(realization.data);
}

export async function getAboutMe(): Promise<AboutMeType> {
  const aboutMe = await fetchGraphQL(ABOUT_QUERY, false);
  return aboutMe.data.about;
}

export async function getOffer(): Promise<OfferType> {
  const offer = await fetchGraphQL(OFFER_QUERY, false);
  return offer.data.offer;
}
