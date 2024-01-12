export const HOME_REALIZATIONS_QUERY = `query realizationsCollectionQuery {
  realizationsCollection (order: sys_publishedAt_DESC, limit: 4) {
    items {
      sys {
        id
      }
      slug
      title
      type
      year
      mainImage {
        url
      }
    }
  }
}
`;

export const SIMPLE_REALIZATIONS_QUERY = `query realizationsCollectionQuery {
  realizationsCollection (order: sys_publishedAt_DESC) {
    items {
      sys {
        id
      }
      slug
      title
      type
      year
      mainImage {
        url
      }
    }
  }
}
`;

export const REALIZATIONS_QUERY = `query realizationsCollectionQuery {
  realizationsCollection (order: sys_publishedAt_DESC) {
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
`;
