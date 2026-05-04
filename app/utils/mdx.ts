import fs from 'node:fs';
import matter from 'gray-matter';

type Metadata = {
	title: string;
	publishedAt: string;
	summary: string;
	draft: boolean;
	image?: string;
};

function normalizeDraft(value: unknown): boolean {
	if (typeof value === 'boolean') {
		return value;
	}
	if (typeof value === 'string') {
		return value.toLowerCase() === 'true';
	}
	return false;
}

function matterDataToMetadata(data: Record<string, unknown>): Metadata {
	const image = data.image;
	return {
		title: String(data.title ?? ''),
		publishedAt: String(data.publishedAt ?? ''),
		summary: String(data.summary ?? ''),
		draft: normalizeDraft(data.draft),
		...(typeof image === 'string' && image.length > 0 ? { image } : {}),
	};
}

export function parseMdxSource(raw: string) {
	const { data, content } = matter(raw);
	return {
		metadata: matterDataToMetadata(data as Record<string, unknown>),
		content: content.trim(),
	};
}

export function readMDXFile(filePath: string) {
	const rawContent = fs.readFileSync(filePath, 'utf-8');
	return parseMdxSource(rawContent);
}
