import { classnames } from "../../utils/class";
import { Hyperlink } from "../hyperlink";

type Props = {
  href: string;
  className?: string;
  display?: string;
};

type BrandLink = {
  pattern: RegExp;
  icon: string;
};

const BRAND_LINKS: BrandLink[] = [
  // Twitter
  {
    pattern: /^twitter\.com$/,
    icon: "fa-x-twitter",
  },
  {
    pattern: /^x\.com$/,
    icon: "fa-x-twitter",
  },
  // GitHub
  {
    pattern: /^github\.com$/,
    icon: "fa-github",
  },
  // Discord
  {
    pattern: /^discord\.com$/,
    icon: "fa-discord",
  },
  {
    pattern: /^discord\.gg$/,
    icon: "fa-discord",
  },
  // Mastodon
  {
    pattern: /^mastodon\.social$/,
    icon: "fa-mastodon",
  },
  {
    pattern: /^mastodon\.cloud$/,
    icon: "fa-mastodon",
  },
  // YouTube
  {
    pattern: /^youtube\.com$/,
    icon: "fa-youtube",
  },
  {
    pattern: /^youtu\.be$/,
    icon: "fa-youtube",
  },
  // SoundCloud
  {
    pattern: /^soundcloud\.com$/,
    icon: "fa-soundcloud",
  },
  // Twitch
  {
    pattern: /^twitch\.tv$/,
    icon: "fa-twitch",
  },
  // pixiv
  {
    pattern: /^pixiv\.net$/,
    icon: "fa-pixiv",
  },
  // Instagram
  {
    pattern: /^instagram\.com$/,
    icon: "fa-instagram",
  },
  // Threads
  {
    pattern: /^threads\.net$/,
    icon: "fa-threads",
  },
];

const InferredIconLink = ({ href, display, className }: Props) => {
  const host = new URL(href).host;
  if (host) {
    const brand = BRAND_LINKS.find((brand) => brand.pattern.test(host));
    if (brand) {
      return (
        <Hyperlink
          className={classnames("block items-center", className)}
          href={href}
        >
          <i className={classnames("fa-fw fa-brands mr-1", brand.icon)} />
          {display ?? host}
        </Hyperlink>
      );
    }
  }

  return (
    <Hyperlink
      className={classnames("block items-center", className)}
      href={href}
    >
      <i className={classnames("fa-fw fa-regular fa-link mr-1")} />
      {display ?? href}
    </Hyperlink>
  );
};

export { InferredIconLink };
