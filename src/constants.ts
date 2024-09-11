export interface Project {
  name: string;
  description: string;
  url: string;
  image: string;
  stack: string;
}

export const Projects: Project[] = [
  {
    name: "iConnectED",
    description:
      "A learning platform that engages students wherever they want to work",
    url: "https://iconnected.app",
    stack: "Angular/Tailwind",
    image: "/projects/indigifriends.png",
  },
  {
    name: "IndigiFriends",
    description: "A social media platform for the Indigenous peoples of Canada",
    url: "https://www.indigenousfriends.org",
    stack: "Ionic/Angular/Parse",
    image: "/projects/indigifriends.png",
  },
  {
    name: "readl8r",
    description: "A no-nonsense read later service",
    url: "https://github.com/jacob-shuman/readl8r",
    stack: "SvelteKit/Tailwind/Kysely/SQLite",
    image: "/projects/readl8r.svg",
  },
  {
    name: "ephemurl",
    description: "A collection of FOSS tools and games",
    url: "https://ephm.app",
    stack: "Astro/Svelte/Tailwind/Cloudflare",
    image: "/projects/ephemurl-site.svg",
  },
  {
    name: "ephemurl counter",
    description: "An ephemurl app for tracking a single digit",
    url: "https://counter.ephm.app",
    stack: "Astro/Svelte/Tailwind/Cloudflare",
    image: "/projects/ephemurl-counter.svg",
  },
  {
    name: "ephemurl dice",
    description: "An ephemurl app for tracking dice rolls",
    url: "https://dice.ephm.app",
    stack: "Astro/Svelte/Tailwind/Cloudflare",
    image: "/projects/ephemurl-dice.svg",
  },
  {
    name: "Christine's Creations",
    description:
      "Business homepage for a talented cake decorator. (Client project)",
    url: "https://christinescreations.ca/",
    stack: "Deno/Fresh/Tailwind",
    image: "/projects/christines-creations.svg",
  },
  {
    name: "static_lists",
    description:
      "A collection of string/number lists that i've collected over the years",
    url: "https://static-lists.netlify.app",
    stack: "Astro/React/Tailwind",
    image: "/projects/static_lists.svg",
  },
  {
    name: "Countdown",
    description:
      "A re-creation of the death clock from the 2019 movie Countdown",
    url: "https://countdown.jacob-shuman.ca/",
    stack: "Next.js/Tailwind",
    image: "/projects/countdown.svg",
  },
  {
    name: "Pomodoro",
    description: "A clean web-based timer using the pomodoro technique",
    url: "https://github.com/jacob-shuman/pomodoro",
    stack: "Next.js/Tailwind",
    image: "/projects/pomodoro.svg",
  },
];
