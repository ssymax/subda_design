import { detailedRealizationsConverter, simpleRealizationsConverter } from './converters';
import {
  REALIZATIONS_QUERY,
  HOME_REALIZATIONS_QUERY,
  SIMPLE_REALIZATIONS_QUERY,
} from './queries';

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

export async function getAllRealizations(): Promise<any> {
  const realizations = await fetchGraphQL(REALIZATIONS_QUERY, false);
  return detailedRealizationsConverter(realizations.data);
}

export async function getHomeRealizations(): Promise<any> {
  const homeRealizations = await fetchGraphQL(HOME_REALIZATIONS_QUERY, false);
  return simpleRealizationsConverter(homeRealizations.data);
}

export async function getSimpleRealizations(): Promise<any> {
  const simpleRealizations = await fetchGraphQL(SIMPLE_REALIZATIONS_QUERY, false);
  return simpleRealizationsConverter(simpleRealizations.data);
}

export async function getRealization(slug: string): Promise<any> {
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
          mainImage {
            url
          }
          imagesCollection {
            items {
              url
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
