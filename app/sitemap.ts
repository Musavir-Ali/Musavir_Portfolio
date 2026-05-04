export const baseUrl = 'https://musavirali.com';

export default async function sitemap() {
	const routes = ['', 'projects', 'stats', 'skills'].map((route) => ({
		url: route === '' ? `${baseUrl}/` : `${baseUrl}/${route}`,
		lastModified: new Date().toISOString().split('T')[0],
	}));

	return routes;
}
