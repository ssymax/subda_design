import { ASC, DESC } from '@/lib/constants';
import { HomeBlogItem, Order } from '@/lib/types';

export function setBodyOverflow(value: 'hidden' | 'auto'): void {
  const { body } = document;
  if (body) body.style.overflowY = value;
  else console.error('Document body not found.');
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
    ? filteredPosts.sort((a, b) => a.date.diff(b.date))
    : order === DESC
      ? filteredPosts.sort((a, b) => b.date.diff(a.date))
      : filteredPosts;
}
