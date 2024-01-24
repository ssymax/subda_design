export const HOME_REALIZATIONS_QUERY = `query realizationsCollectionQuery {
  realizationsCollection (order: year_DESC, limit: 4) {
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
  realizationsCollection (order: year_DESC) {
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
  realizationsCollection (order: year_DESC) {
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

export const ABOUT_QUERY = `query aboutEntryQuery {
  about(id: "1AcwW4b4H7pAwv7yg6NgPW") {
  	image {
      url
      title
    }
    info
    skills
    imagesCollection {
      items {
        url
        title
      }
    }
    }
}`;

export const OFFER_QUERY = `query offerEntryQuery {
  offer(id: "7lu5msf5VRzYTxgvhwNfBi") {
   approachesCollection {
    items {
      url
      title
      description
    }
  }
    steps
    stepsDescription
    info
  }
}`;
