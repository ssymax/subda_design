import dayjs from 'dayjs';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { ASC, DESC } from '@/lib/constants';
import { HomeBlogItem, Order } from '@/lib/types';
import { minQuery } from '../_styles/constants';

gsap.registerPlugin(ScrollTrigger);

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

export const animateBlogPosts = (containerRef: React.RefObject<HTMLDivElement>): void => {
  if (!containerRef.current) return;

  const items = gsap.utils.toArray(containerRef.current.children) as HTMLElement[];

  items.forEach((item) => {
    gsap.from(item, {
      autoAlpha: 0,
      y: 100,
      duration: 0.8,
      scrollTrigger: {
        trigger: item,
        start: 'top+=200px bottom',
      },
    });
  });
};

export const thumbsAnimation = (className: string): void => {
  const mm = gsap.matchMedia();
  mm.add(minQuery.lg, () => {
    const items = gsap.utils.toArray(
      document.querySelectorAll(`.${className}`),
    ) as HTMLElement[];

    items.forEach((item, i) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          scrub: 2,
          start: 'top-=200 center',
        },
      });

      tl.to(
        item,
        {
          y: i % 2 === 0 ? 50 * 0.6 : 100,
          duration: 1,
        },
        0,
      );
    });
  });
};
