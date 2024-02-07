import { ASC, DESC } from '@/lib/constants';
import { HomeBlogItem, Order } from '@/lib/types';
import dayjs from 'dayjs';

export function setBodyOverflow(value: 'hidden' | 'auto'): void {
  const { body } = document;
  if (body) body.style.overflowY = value;
}
export function sortAndFilterBlogPosts(
  posts: HomeBlogItem[],
  order: Order,
  value: string,
) {
  const trimmedValue = value.trim().toLowerCase();

  const filteredPosts =
    trimmedValue.length > 0
      ? posts.filter((post) => post.title.toLowerCase().includes(trimmedValue))
      : posts;

  // eslint-disable-next-line no-nested-ternary
  return order === ASC
    ? filteredPosts.sort((a, b) => dayjs(a.date).diff(dayjs(b.date)))
    : order === DESC
      ? filteredPosts.sort((a, b) => dayjs(b.date).diff(dayjs(a?.date)))
      : filteredPosts;
}
