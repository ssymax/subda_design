import {
  DetailedRealizationItem,
  RealizationItem,
  RealizationsModel,
  SimpleRealizationsModel,
} from './types';

export const simpleRealizationsConverter = (
  data: SimpleRealizationsModel,
): RealizationItem[] => {
  const convertedData = data.realizationsCollection.items.map((item) => ({
    id: item.sys.id,
    slug: item.slug,
    title: item.title,
    year: item.year ? item.year : '',
    type: item.type,
    mainImage: item.mainImage.url,
  }));

  return convertedData;
};

export const detailedRealizationsConverter = (
  data: RealizationsModel,
): DetailedRealizationItem[] => {
  const convertedData = data.realizationsCollection.items.map((item) => ({
    id: item.sys.id,
    slug: item.slug,
    title: item.title,
    year: item.year ? item.year : '',
    type: item.type,
    description: item.description ? item.description : '',
    mainImage: item.mainImage.url,
    images: item.imagesCollection.items.map((img) => img.url),
  }));

  return convertedData;
};
