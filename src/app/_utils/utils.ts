import { DATE_ASC, DATE_DESC } from '@/lib/constants';
import { HomeBlogItem, Order } from '@/lib/types';

export function setBodyOverflow(value: 'hidden' | 'auto'): void {
  const { body } = document;
  if (body) body.style.overflowY = value;
  else console.error('Document body not found.');
}

export function sortBlogPostByDate(posts: HomeBlogItem[], order: Order) {
  if (order === DATE_ASC) return posts.sort((a, b) => a.date.diff(b.date));
  if (order === DATE_DESC) return posts.sort((a, b) => b.date.diff(a.date));
}
