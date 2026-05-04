export interface Project {
	title: string;
	src: string;
	color: string;
	url?: string;
	androidUrl?: string;
	iosUrl?: string;
	role: string;
}

export interface ProjectModal {
	active: boolean;
	index: number;
}
