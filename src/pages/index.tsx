import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import BlurIn from "@/components/ui/blur-in";
import AvatarCircles from "@/components/ui/avatar-circles";
import { MailIcon } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Dock, DockIcon } from "@/components/ui/dock";
import { Separator } from "@/components/ui/separator";
import { StaticImage } from "gatsby-plugin-image";
import Marquee from "@/components/ui/marquee";

type IconProps = React.HTMLAttributes<SVGElement>;
const Icons = {
  email: (props: IconProps) => <MailIcon {...props} />,
  bluesky: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        stroke="#1185FE"
        fill="#1185FE"
        d="M6.335 5.144c-1.654 -1.199 -4.335 -2.127 -4.335 .826c0 .59 .35 4.953 .556 5.661c.713 2.463 3.13 2.75 5.444 2.369c-4.045 .665 -4.889 3.208 -2.667 5.41c1.03 1.018 1.913 1.59 2.667 1.59c2 0 3.134 -2.769 3.5 -3.5c.333 -.667 .5 -1.167 .5 -1.5c0 .333 .167 .833 .5 1.5c.366 .731 1.5 3.5 3.5 3.5c.754 0 1.637 -.571 2.667 -1.59c2.222 -2.203 1.378 -4.746 -2.667 -5.41c2.314 .38 4.73 .094 5.444 -2.369c.206 -.708 .556 -5.072 .556 -5.661c0 -2.953 -2.68 -2.025 -4.335 -.826c-2.293 1.662 -4.76 5.048 -5.665 6.856c-.905 -1.808 -3.372 -5.194 -5.665 -6.856z"
      />
    </svg>
  ),
  linkedin: (props: IconProps) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <title>LinkedIn</title>
      <path
        fill="#0A66C2"
        d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
      />
    </svg>
  ),
  x: (props: IconProps) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <title>X</title>
      <path
        fill="currentColor"
        d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932L18.901 1.153ZM17.61 20.644h2.039L6.486 3.24H4.298L17.61 20.644Z"
      />
    </svg>
  ),
  github: (props: IconProps) => (
    <svg viewBox="0 0 438.549 438.549" {...props}>
      <title>GitHub</title>
      <path
        fill="currentColor"
        d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
      ></path>
    </svg>
  ),
};

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-300 to-slate-400 p-8">
      <BlurIn
        word="Hey, I'm Sina!"
        className="font-bold mb-6 max-w-2xl mx-auto text-slate-700"
      />
      <div className="w-full flex justify-center items-center mb-6">
        <StaticImage
          src="../images/sina.jpg"
          alt="Sina Jamshidi"
          className="h-48 w-48 rounded-full"
        />
      </div>
      <h3 className="text-xl font-medium text-slate-600 max-w-2xl mx-auto leading-relaxed mb-6">
        Trusted by the world's coolest people and funnest companies to build
        meaningful products
      </h3>
      <div className="max-w-2xl place-self-center mb-6">
        <Marquee pauseOnHover className="[--duration:20s]">
          <div className="flex items-center gap-8 mr-4">
            <a href="https://tanium.com" target="_blank" rel="noreferrer">
              <div className="flex flex-row items-center gap-2 bg-white/50 backdrop-blur-sm rounded-lg p-4 shadow-sm hover:shadow-md">
                <StaticImage
                  src="../images/tanium_logo.png"
                  alt="Tanium logo"
                  className="size-6 object-contain"
                />
                <span className="text-sm font-medium text-slate-600">
                  Tanium
                </span>
              </div>
            </a>
            <a href="https://amplitude.com" target="_blank" rel="noreferrer">
              <div className="flex flex-row items-center gap-2 bg-white/50 backdrop-blur-sm rounded-lg p-4 shadow-sm hover:shadow-md">
                <StaticImage
                  src="../images/amplitude_logo.png"
                  alt="Amplitude logo"
                  className="size-6 object-contain"
                />
                <span className="text-sm font-medium text-slate-600">
                  Amplitude
                </span>
              </div>
            </a>
            <a href="https://hatchways.io" target="_blank" rel="noreferrer">
              <div className="flex flex-row items-center gap-2 bg-white/50 backdrop-blur-sm rounded-lg p-4 shadow-sm hover:shadow-md">
                <StaticImage
                  src="../images/hatchways_logo.png"
                  alt="Hatchways logo"
                  className="size-6 object-contain"
                />
                <span className="text-sm font-medium text-slate-600">
                  Hatchways
                </span>
              </div>
            </a>
            <a href="https://altumview.com" target="_blank" rel="noreferrer">
              <div className="flex flex-row items-center gap-2 bg-white/50 backdrop-blur-sm rounded-lg p-4 shadow-sm hover:shadow-md">
                <StaticImage
                  src="../images/altumview_logo.png"
                  alt="Altumview logo"
                  className="size-6 object-contain"
                />
                <span className="text-sm font-medium text-slate-600">
                  Altumview
                </span>
              </div>
            </a>
          </div>
        </Marquee>
      </div>
      <section className="max-w-2xl mx-auto mb-12">
        <h2 className="text-2xl font-semibold text-slate-700 mb-4">
          Where I've Worked
        </h2>
        <div className="space-y-4">
          <div className="bg-white/50 backdrop-blur-sm rounded-lg p-4 shadow-sm">
            <div className="flex flex-row justify-between">
              <h3 className="font-medium text-slate-800 mb-2">
                Software Engineer II
              </h3>
              <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                Current
              </span>
            </div>
            <div className="mb-2">
              <a
                href="https://www.tanium.com/"
                target="_blank"
                rel="noreferrer"
                className="hover:opacity-75 flex items-center gap-2"
              >
                <StaticImage
                  className="h-6 w-6 rounded-full border-2 border-white dark:border-gray-800"
                  src={"../images/tanium_logo.png"}
                  width={24}
                  height={24}
                  alt="Tanium logo"
                />
                <span>Tanium</span>
              </a>
            </div>
            <p className="text-slate-600 mb-3">
              I work on the platform team to build and maintain features for
              admins to manage their organization.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-slate-200 rounded-md text-sm text-slate-700">
                Go
              </span>
              <span className="px-2 py-1 bg-slate-200 rounded-md text-sm text-slate-700">
                TypeScript
              </span>
              <span className="px-2 py-1 bg-slate-200 rounded-md text-sm text-slate-700">
                React
              </span>
              <span className="px-2 py-1 bg-slate-200 rounded-md text-sm text-slate-700">
                AWS
              </span>
              <span className="px-2 py-1 bg-slate-200 rounded-md text-sm text-slate-700">
                Azure
              </span>
              <span className="px-2 py-1 bg-slate-200 rounded-md text-sm text-slate-700">
                Terraform
              </span>
            </div>
          </div>
          <div className="bg-white/50 backdrop-blur-sm rounded-lg p-4 shadow-sm">
            <div className="flex flex-row justify-between">
              <h3 className="font-medium text-slate-800 mb-2">
                Software Engineer II
              </h3>
            </div>
            <div className="mb-2">
              <a
                href="https://amplitude.com/"
                target="_blank"
                rel="noreferrer"
                className="hover:opacity-75 flex items-center gap-2"
              >
                <StaticImage
                  className="h-6 w-6 rounded-full border-2 border-white dark:border-gray-800"
                  src={"../images/amplitude_logo.png"}
                  width={24}
                  height={24}
                  alt="Amplitude logo"
                />
                <span>Amplitude</span>
              </a>
            </div>
            <p className="text-slate-600 mb-3">
              As part of the Infrastructure and Integration team, built an end
              to end integration ecosystem, allowing manual and automated data
              ingestion and export at scale. Collaborated in a small team on the
              infrastructure of greenfield project to enable customers to stream
              events to 3rd party destinations, contributing to important{" "}
              <a
                href="https://amplitude.com/blog/amplitude-customer-data-platform"
                target="_blank"
                rel="noreferrer"
              >
                Amplitude CDP product launch
              </a>
              .
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-slate-200 rounded-md text-sm text-slate-700">
                Java
              </span>
              <span className="px-2 py-1 bg-slate-200 rounded-md text-sm text-slate-700">
                Python
              </span>
              <span className="px-2 py-1 bg-slate-200 rounded-md text-sm text-slate-700">
                React
              </span>
              <span className="px-2 py-1 bg-slate-200 rounded-md text-sm text-slate-700">
                TypeScript
              </span>
              <span className="px-2 py-1 bg-slate-200 rounded-md text-sm text-slate-700">
                GraphQL
              </span>
            </div>
          </div>
          <div className="bg-white/50 backdrop-blur-sm rounded-lg p-4 shadow-sm">
            <div className="flex flex-row justify-between">
              <h3 className="font-medium text-slate-800 mb-2">
                Software Engineer
              </h3>
            </div>
            <div className="mb-2">
              <a
                href="https://hatchways.io/"
                target="_blank"
                rel="noreferrer"
                className="hover:opacity-75 flex items-center gap-2"
              >
                <StaticImage
                  className="h-6 w-6 rounded-full border-2 border-white dark:border-gray-800"
                  src={"../images/hatchways_logo.png"}
                  width={24}
                  height={24}
                  alt="Hatchways logo"
                />
                <span>Hatchways</span>
              </a>
            </div>
            <p className="text-slate-600 mb-3">
              Hatchways is an early stage YC startup that qualifies and matches
              software engineers with jobs. I do work on the frontend, backend,
              and automation. I also review candidates' submitted projects and
              perform mock interviews during their interview preparation.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-slate-200 rounded-md text-sm text-slate-700">
                Python
              </span>
              <span className="px-2 py-1 bg-slate-200 rounded-md text-sm text-slate-700">
                React
              </span>
              <span className="px-2 py-1 bg-slate-200 rounded-md text-sm text-slate-700">
                TypeScript
              </span>
              <span className="px-2 py-1 bg-slate-200 rounded-md text-sm text-slate-700">
                Google Cloud
              </span>
            </div>
          </div>
          <div className="bg-white/50 backdrop-blur-sm rounded-lg p-4 shadow-sm">
            <div className="flex flex-row justify-between">
              <h3 className="font-medium text-slate-800 mb-2">
                Software Engineer Intern
              </h3>
            </div>
            <div className="mb-2">
              <a
                href="https://hatchways.io/"
                target="_blank"
                rel="noreferrer"
                className="hover:opacity-75 flex items-center gap-2"
              >
                <StaticImage
                  className="h-6 w-6 rounded-full border-2 border-white dark:border-gray-800"
                  src={"../images/altumview_logo.png"}
                  width={24}
                  height={24}
                  alt="Altumview logo"
                />
                <span>Altumview</span>
              </a>
            </div>
            <p className="text-slate-600 mb-3">
              Worked in a team of 6 on cross-platform mobile app for the Smart
              Activity Sensor. Developed in C# on Xamarin. Personally worked on
              custom UI, BLE and Wi-Fi connectivity, and a caching module.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-slate-200 rounded-md text-sm text-slate-700">
                C#
              </span>
              <span className="px-2 py-1 bg-slate-200 rounded-md text-sm text-slate-700">
                Xamarin
              </span>
            </div>
          </div>
          <div className="bg-white/50 backdrop-blur-sm rounded-lg p-4 shadow-sm">
            <div className="flex flex-row justify-between">
              <h3 className="font-medium text-slate-800 mb-2">
                Machine Learning Engineer Intern
              </h3>
            </div>
            <div className="mb-2">
              <a
                href="https://hatchways.io/"
                target="_blank"
                rel="noreferrer"
                className="hover:opacity-75 flex items-center gap-2"
              >
                <StaticImage
                  className="h-6 w-6 rounded-full border-2 border-white dark:border-gray-800"
                  src={"../images/altumview_logo.png"}
                  width={24}
                  height={24}
                  alt="Altumview logo"
                />
                <span>Altumview</span>
              </a>
            </div>
            <p className="text-slate-600 mb-3">
              Worked on two projects. The AI-education kit in Python and Keras.
              In a team of 2, designed and implemented deep learning projects.
              For the other project, individually designed and built an AI car
              that chases subjects. See it in action below.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-slate-200 rounded-md text-sm text-slate-700">
                Python
              </span>
              <span className="px-2 py-1 bg-slate-200 rounded-md text-sm text-slate-700">
                Keras
              </span>
              <span className="px-2 py-1 bg-slate-200 rounded-md text-sm text-slate-700">
                OpenCV
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-2xl mx-auto mb-12">
        <h2 className="text-2xl font-semibold text-slate-700 mb-4">
          Featured Projects
        </h2>
        <div className="space-y-4 mb-4">
          <div className="bg-white/50 backdrop-blur-sm rounded-lg p-4 shadow-sm">
            <div className="mb-2">
              <a
                href="https://otterscript.com"
                target="_blank"
                rel="noreferrer"
                className="hover:opacity-75 flex items-center gap-2"
              >
                <StaticImage
                  className="h-10 w-16 border-2 object-fill"
                  src={"../images/otterscript_logo.png"}
                  alt="OtterScript logo"
                />
              </a>
              <h3 className="font-medium text-slate-800 mb-2">OtterScript</h3>
            </div>
            <p className="text-slate-600 mb-3">
              A workflow automation tool utilizing LLMs to generate tables and
              text based on chained prompts.{" "}
              <a
                href="https://www.producthunt.com/posts/otter-script?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-otter-script"
                target="_blank"
                className="text-blue-500 hover:underline"
              >
                Achieved "5th Product of the Day" and "4th SaaS Product of the
                Week" on Product Hunt.
              </a>
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-slate-200 rounded-md text-sm text-slate-700">
                React
              </span>
              <span className="px-2 py-1 bg-slate-200 rounded-md text-sm text-slate-700">
                Typescript
              </span>
              <span className="px-2 py-1 bg-slate-200 rounded-md text-sm text-slate-700">
                NextJS
              </span>
              <span className="px-2 py-1 bg-slate-200 rounded-md text-sm text-slate-700">
                OpenAI
              </span>
            </div>
          </div>
          <div className="bg-white/50 backdrop-blur-sm rounded-lg p-4 shadow-sm">
            <div className="mb-2">
              <a
                href="https://palsplay.games"
                target="_blank"
                rel="noreferrer"
                className="hover:opacity-75 flex items-center gap-2"
              >
                <StaticImage
                  className="h-10 w-16 border-2 object-fill"
                  src={"../images/palsplaygames_logo.png"}
                  alt="Pals Play Games logo"
                />
              </a>
              <h3 className="font-medium text-slate-800 mb-2">
                Pals Play Games
              </h3>
            </div>
            <p className="text-slate-600 mb-3">
              A directory of social games to play with friends. Allows a variety
              of filtering on names, tags, and multiplayer player count. Used
              scraping and data cleaning to come up with the list of games and
              to organize them into a database.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-slate-200 rounded-md text-sm text-slate-700">
                React
              </span>
              <span className="px-2 py-1 bg-slate-200 rounded-md text-sm text-slate-700">
                Typescript
              </span>
              <span className="px-2 py-1 bg-slate-200 rounded-md text-sm text-slate-700">
                Python
              </span>
              <span className="px-2 py-1 bg-slate-200 rounded-md text-sm text-slate-700">
                Shadcn
              </span>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <div className="bg-white/50 backdrop-blur-sm rounded-lg p-4 shadow-sm">
            <h3 className="font-medium text-slate-800 mb-2">AI Car</h3>
            <p className="text-slate-600 mb-3">
              I was tasked individually with creating a hands-on, AI based
              project. I designed and implemented a multi-threaded algorithm
              that drives a robot around until it detects a person, and then
              chases them and celebrates when it catches up to them. It will
              also perform obstacle avoidance with an ultrasonic sensor, and is
              written in modular code to be customizable.
            </p>
            <div className="aspect-video mb-3">
              <iframe
                src="https://player.vimeo.com/video/363058196?loop=1&title=0&byline=0&portrait=0"
                className="w-full h-full rounded-lg"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-slate-200 rounded-md text-sm text-slate-700">
                Python
              </span>
              <span className="px-2 py-1 bg-slate-200 rounded-md text-sm text-slate-700">
                OpenCV
              </span>
              <span className="px-2 py-1 bg-slate-200 rounded-md text-sm text-slate-700">
                Arduino
              </span>
              <span className="px-2 py-1 bg-slate-200 rounded-md text-sm text-slate-700">
                Raspberry Pi
              </span>
            </div>
          </div>
        </div>
      </section>
      <TooltipProvider>
        <Dock
          magnification={60}
          distance={100}
          className="border-slate-400 sticky bottom-3 bg-slate-300/50 backdrop-blur-sm rounded-lg shadow-sm"
        >
          <DockIcon>
            <Tooltip>
              <TooltipTrigger asChild>
                <a href="mailto:hello@sinajamshidi.com" target="_blank">
                  <Icons.email className="size-6" />
                </a>
              </TooltipTrigger>
              <TooltipContent>
                <p>Email</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>
          <Separator orientation="vertical" className="h-full bg-slate-400" />
          <DockIcon>
            <Tooltip>
              <TooltipTrigger asChild>
                <a
                  href="https://github.com/sina-jamshidi"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icons.github className="size-6" />
                </a>
              </TooltipTrigger>
              <TooltipContent>
                <p>GitHub</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>
          <DockIcon>
            <Tooltip>
              <TooltipTrigger asChild>
                <a
                  href="https://www.linkedin.com/in/sinajams/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icons.linkedin className="size-6" />
                </a>
              </TooltipTrigger>
              <TooltipContent>
                <p>LinkedIn</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>
          <DockIcon>
            <Tooltip>
              <TooltipTrigger asChild>
                <a
                  href="https://x.com/sjamstweets"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icons.x className="size-6" />
                </a>
              </TooltipTrigger>
              <TooltipContent>
                <p>X</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>
          <DockIcon>
            <Tooltip>
              <TooltipTrigger asChild>
                <a
                  href="https://bsky.app/profile/sinapostsstuff.bsky.social"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icons.bluesky className="size-6" />
                </a>
              </TooltipTrigger>
              <TooltipContent>
                <p>BlueSky</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>
        </Dock>
      </TooltipProvider>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Sina Jamshidi</title>;
