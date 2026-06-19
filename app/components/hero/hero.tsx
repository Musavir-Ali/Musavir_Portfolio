import classNames from 'classnames';
import Link from 'next/link';
import { merryWeather } from '../../fonts';
import { AtSignIcon } from '../layouts/icons/at-sign-icon';
import { GithubIcon } from '../layouts/icons/github-icon';
import { LinkedinIcon } from '../layouts/icons/linkedin-icon';
import SplashCursor from '../splash-cursor';

export default function Hero() {
	return (
		<main className='relative min-h-svh w-full overflow-x-hidden'>
			<SplashCursor
				containerClassName='min-h-svh w-full'
				usePrimaryColors={true}
			>
				<div
					className={classNames(
						'relative min-h-svh pt-[20vh] pb-12 md:pt-[35vh] md:pb-24',
						merryWeather.className,
					)}
				>
					<div className='relative max-w-5xl flex flex-col space-y-4 px-8 md:px-24 lg:ml-14'>
						<h1 className='text-2xl font-medium md:mr-4 md:text-4xl'>
							Welcome to my{' '}
							<span className='font-bold'>personal portfolio — </span> or, as I
							like to call it, my{' '}
							<span className='italic border-b border-b-primary-500'>
								playground
							</span>{' '}
							on the web.
						</h1>
						<section className='relative z-10'>
							<p className='text-base text-justify'>
								I’m Musavir Ali — a Software Engineer building scalable
								applications and clean user experiences. I work across mobile
								and backend systems, with experience in iOS/Android development,
								REST APIs, and integrating complex backend services into
								production apps. I focus on turning real-world problems into
								efficient digital solutions — from API architecture to
								performance optimization and intuitive UI flows. Recently, I’ve
								worked on music platforms and data-driven products where
								reliability and scalability are critical. I’m open to freelance
								work, collaborations, and challenging projects.
							</p>
						</section>
						<section className='relative z-10 flex space-x-4 items-center text-sm'>
							<div>
								<p>More about me: </p>
								<div className='flex -ml-2'>
									<Link
										href='https://www.linkedin.com/in/musavirali124/'
										target='_blank'
										rel='noreferrer'
										aria-label='linkedin'
										data-skip-splash-cursor
									>
										<LinkedinIcon className='h-9 w-9' />
									</Link>
									<Link
										href='https://github.com/Musavir-Ali'
										target='_blank'
										rel='noreferrer'
										aria-label='github'
										data-skip-splash-cursor
									>
										<GithubIcon className='h-9 w-9' />
									</Link>

									<Link
										href='mailto:musavirali1241@gmail.com'
										aria-label='email'
										rel='noreferrer'
										data-skip-splash-cursor
									>
										<AtSignIcon className='h-9 w-9' />
									</Link>
								</div>
							</div>
							<div className='h-14 border-l border-gray-300' />
							<div
								className='flex flex-wrap space-x-3 space-y-1'
								data-skip-splash-cursor
							>
								<Link href='/projects'>/projects</Link>
								<Link href='/skills'>/skills</Link>
								<Link href='/stats'>/stats</Link>
								<Link href='/resume' target='_blank' rel='noreferrer'>
									/resume
								</Link>
							</div>
						</section>
					</div>
				</div>
			</SplashCursor>
		</main>
	);
}
