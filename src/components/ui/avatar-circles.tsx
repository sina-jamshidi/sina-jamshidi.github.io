"use client";

import React from "react";

import { cn } from "@/lib/utils";
import { StaticImage } from "gatsby-plugin-image";

const avatarUrls = [
  "../../images/tanium_logo.png",
  "../../images/amplitude_logo.png",
  "../../images/hatchways_logo.png",
  "../../images/altumview_logo.png",
];

interface AvatarCirclesProps {
  className?: string;
  numPeople?: number;
}

const AvatarCircles = ({ numPeople, className }: AvatarCirclesProps) => {
  return (
    <div className={cn("z-10 flex -space-x-4 rtl:space-x-reverse", className)}>
      <a href="https://altumview.com" target="_blank" rel="noreferrer">
        <StaticImage
          className="h-10 w-10 rounded-full border-2 border-white dark:border-gray-800 hover:opacity-75"
          src={"../../images/altumview_logo.png"}
          width={40}
          height={40}
          alt={`Avatar 1`}
        />
      </a>
      <a href="https://hatchways.io" target="_blank" rel="noreferrer">
        <StaticImage
          className="h-10 w-10 rounded-full border-2 border-white dark:border-gray-800 bg-black hover:opacity-75"
          src={"../../images/hatchways_logo.png"}
          width={40}
          height={40}
          alt={`Avatar 2`}
        />
      </a>
      <a href="https://amplitude.com" target="_blank" rel="noreferrer">
        <StaticImage
          className="h-10 w-10 rounded-full border-2 border-white dark:border-gray-800 hover:opacity-75"
          src={"../../images/amplitude_logo.png"}
          width={40}
          height={40}
          alt={`Avatar 3`}
        />
      </a>
      <a href="https://tanium.com" target="_blank" rel="noreferrer">
        <StaticImage
          className="h-10 w-10 rounded-full border-2 border-white dark:border-gray-800 hover:opacity-75"
          src={"../../images/tanium_logo.png"}
          width={40}
          height={40}
          alt={`Avatar 4`}
        />
      </a>
    </div>
  );
};

export default AvatarCircles;
