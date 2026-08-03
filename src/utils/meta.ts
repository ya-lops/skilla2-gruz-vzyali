export interface MetaItem {
  id: number;
  url: string;
  title: string;
  description: string;
  keywords: string;
}

const URL_MAP: Record<string, string> = {
  'blog': 'news',
  // добавляйте свои маппинги - 'урлСтраницы': 'название_урла_в_ответе'
};

export function getMetaByUrl(meta: MetaItem[], currentUrl: string): MetaItem | undefined {
  const normalizedUrl = currentUrl.replace(/^\/|\/$/g, '').toLowerCase();
  const mappedUrl = URL_MAP[normalizedUrl] || normalizedUrl;
  
  return meta.find(item => item.url.toLowerCase() === mappedUrl);
}