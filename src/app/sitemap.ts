import { getAllRealizations, getBlogPosts, getTotalBlogsNumber } from '@/lib/api';
import { baseUrl } from '@/lib/constants';
import { MetadataRoute } from 'next';
import { routesArr } from './_routes/routes';

export default async function Sitemap(): Promise<MetadataRoute.Sitemap> {
  const limit = await getTotalBlogsNumber();
  const allPosts = await getBlogPosts(+limit);
  const allRealizations = await getAllRealizations();

  const routes = routesArr(true).map((r) => ({
    url: `${baseUrl}${r.route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));

  const blogs = allPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));

  const realizations = allRealizations.map((realization) => ({
    url: `${baseUrl}/realizacje/${realization.slug}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));

  return [...routes, ...blogs, ...realizations];
}
