import classNames from "classnames";
import Link from "next/link";
import { merryWeather } from "../../fonts";
import { AtSignIcon } from "../layouts/icons/at-sign-icon";
import { GithubIcon } from "../layouts/icons/github-icon";
import { LinkedinIcon } from "../layouts/icons/linkedin-icon";
import { XIcon } from "../layouts/icons/x-icon";
import SplashCursor from "../splash-cursor";

export default function Hero() {
  return (
    <main className="relative min-h-svh w-screen overflow-hidden">
      <SplashCursor
        containerClassName="min-h-svh w-screen"
        usePrimaryColors={true}
      >
        <div
          className={classNames("relative min-h-svh", merryWeather.className)}
        >
          <div className="absolute top-[20%] md:top-[40%] max-w-5xl flex-col space-y-4 justify-center px-8 md:px-24 lg:ml-14">
            <h1 className="text-2xl font-medium md:mr-4 md:text-4xl">
              Welcome to my{" "}
              <span className="font-bold">personal portfolio — </span> or, as I
              like to call it, my{" "}
              <span className="italic border-b border-b-primary-500">
                playground
              </span>{" "}
              on the web.
            </h1>
            <section className="relative z-10">
              <p className="text-base text-justify">
                I'm Musavir Ali — a Software Engineer focused on building
                scalable applications and clean user experiences. I work across
                mobile and backend systems, with hands-on experience in
                iOS/Android development, REST API design, and integrating
                complex backend services into production-ready apps. I enjoy
                turning real-world problems into practical digital solutions —
                whether that’s architecting APIs, optimizing performance, or
                crafting intuitive UI flows. I pay close attention to structure,
                maintainability, and how systems evolve over time. Recently,
                I’ve been working on projects involving music platforms,
                data-driven applications, and client-based products where
                performance and reliability matter. I’m always exploring better
                ways to build, ship, and improve software. I’m open to freelance
                work, collaborations, and challenging projects that push my
                technical and problem-solving skills further.
              </p>
            </section>
            <section className="relative z-10 flex space-x-4 items-center text-sm">
              <div>
                <p>More about me: </p>
                <div className="flex -ml-2">
                  <Link
                    href="https://www.linkedin.com/in/musavirali124/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="linkedin"
                    data-skip-splash-cursor
                  >
                    <LinkedinIcon className="h-9 w-9" />
                  </Link>
                  <Link
                    href="https://github.com/Musavir-Ali"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="github"
                    data-skip-splash-cursor
                  >
                    <GithubIcon className="h-9 w-9" />
                  </Link>

                  <Link
                    href="mailto:musavirali1241@gmail.com"
                    aria-label="email"
                    rel="noreferrer"
                    data-skip-splash-cursor
                  >
                    <AtSignIcon className="h-9 w-9" />
                  </Link>
                </div>
              </div>
              <div className="h-14 border-l border-gray-300" />
              <div
                className="flex flex-wrap space-x-3 space-y-1"
                data-skip-splash-cursor
              >
                <Link href="/projects">/projects</Link>
                <Link href="/skills">/skills</Link>
                <Link href="/stats">/stats</Link>
              </div>
            </section>
          </div>
        </div>
      </SplashCursor>
    </main>
  );
}
