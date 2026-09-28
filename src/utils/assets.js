export const getAssetUrl = (path) => {
  if (!path) return '';
  if (path.startsWith('http://') || path.startsWith('https://')) return path;
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  const baseUrl = import.meta.env.BASE_URL || '/';
  const formattedBase = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;
  return `${formattedBase}${cleanPath}`;
};
