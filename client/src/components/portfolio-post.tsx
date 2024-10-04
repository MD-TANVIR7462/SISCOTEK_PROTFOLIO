"use client";

import { InstagramEmbed } from "react-social-media-embed";

export function PortfolioPost({ url }: { url: string }) {
  return (
    <div className="flex h-[34rem] items-center justify-center overflow-hidden rounded-2xl bg-white p-4 pt-7">
      <InstagramEmbed url={url} className="relative" />
    </div>
  );
}
