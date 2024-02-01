import dayjs from 'dayjs';
import {
  DetailedRealizationItem,
  RealizationItem,
  RealizationsModel,
  SimpleRealizationsModel,
  HomeBlogItemModel,
  HomeBlogItem,
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
    mainImage: `${item.mainImage.url}?fm=webp`,
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
    location: item.location,
    area: item.area,
    year: item.year ? item.year : '',
    type: item.type,
    description: item.description ? item.description : '',
    mainImage: item.mainImage.url,
    images: item.imagesCollection.items.map((img) => ({
      id: img.sys.id,
      url: `${img.url}?fm=webp`,
      width: img.width,
      height: img.height,
    })),
  }));

  return convertedData;
};

export const blogPostsConverter = (items: HomeBlogItemModel[]): HomeBlogItem[] => {
  const convertedData = items.map((item) => ({
    id: item.sys.id,
    slug: item.slug,
    title: item.title,
    image: {
      url: `${item.image.url}?fm=webp`,
      title: item.image.title,
    },
    date: dayjs(item.date),
  }));
  return convertedData;
};
