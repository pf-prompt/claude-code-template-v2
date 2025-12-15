/* KEEP_AFTER_RESET_BEGIN */
// This file contains all in-memory data stores for prototype mode
/* KEEP_AFTER_RESET_END */

export type Article = {
    id: number;
    status: string;
    title: string;
    slug: string;
    content: string;
    excerpt: string | null;
    author: string;
    tags: string | null;
    featured: boolean | null;
    view_count: number | null;
    created_at: string;
    updated_at: string;
    published_at: string | null;
}

export const ArticleMem: Record<string, Article> = {
  '1': {
    id: 1,
    title: 'fake title',
    slug: 'fake slug',
    content: 'This is a randomly generated article content.',
    excerpt: 'A brief excerpt of the article.',
    author: 'author',
    status: 'draft',
    tags: 'random,generated',
    featured: false,
    view_count: 0,
    created_at: new Date().toISOString(),
    published_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  '2': {
    id: 2,
    title: 'fake title',
    slug: 'fake slug',
    content: 'This is a randomly generated article content.',
    excerpt: 'A brief excerpt of the article.',
    author: 'author',
    status: 'draft',
    tags: 'random,generated',
    featured: false,
    view_count: 0,
    created_at: new Date().toISOString(),
    published_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  }
}
