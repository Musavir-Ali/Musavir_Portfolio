import path from 'node:path';
import { Fragment } from 'react';
import Header from '../components/header';
import { CustomMDX } from '../components/mdx';
import { readMDXFile } from '../utils/mdx';
import SkillsTitle from './skills-title';

const contentPath = path.join(process.cwd(), 'app', 'skills', 'content.mdx');
const { content } = readMDXFile(contentPath);

export const metadata = {
	title: 'Skills',
	description: 'My Skills',
};

export default function Page() {
	return (
		<Fragment>
			<Header title='Skills' />
			<SkillsTitle />
			<CustomMDX source={content} />
		</Fragment>
	);
}
