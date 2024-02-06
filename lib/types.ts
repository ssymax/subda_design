import { Dayjs } from 'dayjs';

export interface SimpleRealizationItemModel {
  sys: {
    id: string;
  };
  slug: string;
  title: string;
  type: string;
  year: string;
  mainImage: {
    url: string;
  };
}

type ImageItem = {
  url: string;
  sys: {
    id: string;
  };
  width: number;
  height: number;
};

export interface RealizationsItemModel extends SimpleRealizationItemModel {
  description: string;
  location: string;
  area: string;
  year: string;
  imagesCollection: {
    items: ImageItem[];
  };
}

export interface RealizationsModel {
  realizationsCollection: {
    items: RealizationsItemModel[];
  };
}

export interface SimpleRealizationsModel {
  realizationsCollection: {
    items: SimpleRealizationItemModel[];
  };
}

export interface RealizationItem {
  id: string;
  slug: string;
  title: string;
  type: string;
  year: string;
  mainImage: string;
}

export type DetailedImage = {
  id: string;
  url: string;
  width: number;
  height: number;
};

export interface DetailedRealizationItem extends RealizationItem {
  images: DetailedImage[];
  area: string;
  location: string;
  description: string;
}

type Info = {
  header: string;
  text: string;
};

type Image = {
  url: string;
  title: string;
};
export interface AboutMeType {
  info: Info[];
  image: Image;
  skills: string[];
  imagesCollection: {
    items: Image[];
  };
}

export type Step = {
  header: string;
  title: string;
  description: string;
};

type OfferImage = {
  url: string;
  title: string;
  description: string;
};

export type OfferInfo = {
  id: number;
  header: string;
  subheader: string;
  paragraphOne: string;
  paragraphTwo: string;
};

export interface OfferType {
  steps: Step[];
  approachesCollection: {
    items: OfferImage[];
  };
  stepsDescription: string;
  info: OfferInfo[];
  parallaxCollection: {
    items: {
      url: string;
    }[];
  };
}

export type Order = 'asc' | 'desc';

export interface HomeBlogItemModel {
  sys: {
    id: string;
  };
  slug: string;
  title: string;
  image: {
    url: string;
    title: string;
  };
  date: string;
}

export interface HomeBlogItem {
  id: string;
  slug: string;
  title: string;
  image: {
    url: string;
    title: string;
  };
  date: string;
}

export interface TotalPosts {
  total: number;
}

export interface BlogPost {
  sys: {
    id: string;
  };
  slug: string;
  title: string;
  date: string;
  introduction: string;
  underIntro: string;
  image: {
    url: string;
    title: string;
    width: number;
    height: number;
  };
  header1st: string;
  text1st: string;
  header2nd: string;
  text2nd: string;
  header3rd: string;
  text3rd: string;
  header4th: string;
  text4th: string;
}
