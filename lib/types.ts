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
};

export interface RealizationsItemModel extends SimpleRealizationItemModel {
  description: string;
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
}

export interface DetailedRealizationItem extends RealizationItem {
  mainImage: string;
  images: string[];
}
