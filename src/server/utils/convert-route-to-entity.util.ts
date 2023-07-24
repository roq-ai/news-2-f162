const mapping: Record<string, string> = {
  categories: 'category',
  news: 'news',
  organizations: 'organization',
  translations: 'translation',
  urls: 'url',
  users: 'user',
  'user-preferences': 'user_preference',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
