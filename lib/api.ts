const REALIZATIONS_QUERY = `query realizationsCollectionQuery {
  realizationsCollection {
    items {
      sys {
        id
      }
      title
      id
      description
      mainImage {
        url
      }
      type
    }
  }
}`;

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
      // next: { tags: ['realizations'] },
    },
  ).then((response) => response.json());
}

export async function getAllRealizations(): Promise<any> {
  const realizations = await fetchGraphQL(REALIZATIONS_QUERY, false);
  return realizations.data.realizationsCollection.items;
}
