import {
  blogPostsConverter,
  detailedRealizationsConverter,
  simpleRealizationsConverter,
} from './converters';
import {
  REALIZATIONS_QUERY,
  HOME_REALIZATIONS_QUERY,
  SIMPLE_REALIZATIONS_QUERY,
  ABOUT_QUERY,
  OFFER_QUERY,
  HOME_BLOG_QUERY,
  TOTAL_BLOG_POSTS_QUERY,
} from './queries';
import {
  AboutMeType,
  BlogPost,
  DetailedRealizationItem,
  HomeBlogItem,
  HomeBlogItemModel,
  OfferType,
  RealizationItem,
  TotalPosts,
} from './types';

async function fetchGraphQL(
  query: string,
  preview = false,
  variables?: Record<string, any>,
): Promise<any> {
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
      body: JSON.stringify({ query, variables }),
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

export async function getHomeBlog(): Promise<HomeBlogItemModel[]> {
  const homeBlog = await fetchGraphQL(HOME_BLOG_QUERY, false);
  return homeBlog.data.blogCollection.items;
}

export async function getTotalBlogsNumber(): Promise<TotalPosts> {
  const blogPosts = await fetchGraphQL(TOTAL_BLOG_POSTS_QUERY, false);
  return blogPosts.blogCollection;
}

export async function getBlogPosts(limit: number): Promise<HomeBlogItem[]> {
  const blogPosts = await fetchGraphQL(
    `query blogCollectionQuery($limit: Int) {
      blogCollection( limit: $limit, order: date_DESC) {
        items {
          sys {
            id
          }
          title
          slug
          image {
            url
            title
          }
          date
        }
      }
    }`,
    false,
    { limit },
  );

  return blogPostsConverter(blogPosts.data.blogCollection.items);
}

export async function getPost(slug: string): Promise<BlogPost[]> {
  const post = await fetchGraphQL(`query {
    blogCollection (where: {slug: "${slug}"}) {
      items {
        sys {
          id
        }
        slug
        title
        date
        introduction
        underIntro
        image {
          url
          title
          width
          height
        }
        header1st
        text1st
        header2nd
        text2nd
        header3rd
        text3rd
        header4th
        text4th
      }
    }
  }`);
  return post.data.blogCollection.items;
}
