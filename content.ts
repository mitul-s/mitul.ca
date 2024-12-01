export const experiences = [
  {
    company: "Vercel",
    role: "Design Engineer",
    range: "Today",
    description: "Building for the future of the web while doing my best work",
    skills: ["Next.js", "TypeScript", "TailwindCSS", "Contentful"],
  },
  {
    company: "Compound",
    role: "Software Engineer",
    link: "https://compoundplanning.com/?ref=mitulca",
    range: "2022 - 2023",
    description:
      "Built charting components, rebuilt the app navigation and worked on improving UX for advisors to thrive in supporting clients",
    skills: ["React", "TypeScript", "Redux", "CSS-in-JS", "Next.js"],
  },
  {
    company: "Composer",
    link: "https://composer.trade/?ref=mitulca",
    role: "Design Engineer",
    range: "2021 - 2022",
    description:
      "As an early employee, I built out over 90% of the application UI and a scalable and accessible component library",
    skills: ["React", "ClojureScript", "TailwindCSS", "Contentful", "Next.js"],
  },
  {
    company: "Hypercontext",
    role: "Product Analyst",
    range: "2019 - 2020",
    description:
      "Designed growth experiments to convert users from free to paid, built the sales operations and email-marketing playbook from the ground up",
  },
  {
    company: "Uber",
    role: "Operations Intern",
    range: "2018",
    description:
      "Led competitive research for Canada and supported the launch of 30 cities in 1 day through building courier acquisition campaigns",
  },
];

export const Status = {
  none: "none",
  progress: "progress",
  completed: "completed",
} as const;

export const photos = [
  {
    src: "/images/daniel.jpg",
    alt: "R&B artist Daniel Caesar performing at the Scotiabank Arena in Toronto, Canada",
  },
  {
    src: "/images/maggie.jpg",
    alt: "Indie artist Maggie Rogers performing at the Budweiser Stage in Toronto, Canada",
  },
  {
    src: "/images/toronto.jpg",
    alt: "A photo of the CN Tower in Toronto above the clouds with blue skies behind it",
  },
  {
    src: "/images/nyc.jpg",
    alt: "A classic photo of the New York City skyline taken at dusk from the Top of the Rock",
  },
  {
    src: "/images/banff-2.jpg",
    alt: "",
  },
  {
    src: "/images/banff.jpg",
    alt: "",
  },
];

export const bucketList = [
  {
    item: "Travel the world",
    status: Status.progress,
  },
  {
    item: "Visit Iceland",
    status: Status.none,
  },
  {
    item: "Do a backflip in every contintent",
    status: Status.none,
  },
  {
    item: "Go skydiving",
    status: Status.completed,
  },
  {
    item: "Solo backpack across Europe",
    status: Status.completed,
  },
  {
    item: "Photograph an artist at the MSG",
    status: Status.none,
  },
  {
    item: "Open a restaurant",
    status: Status.none,
  },
  {
    item: "Drive across North America",
    status: Status.none,
  },
  {
    item: "Live in New York City",
    status: Status.none,
  },
  {
    item: "Do a month+ long hike",
    status: Status.none,
  },
  {
    item: "Go on tour with an artist",
    status: Status.none,
  },
  {
    item: "Climb a large mountain",
    status: Status.completed,
  },
  {
    item: "Help my parents retire",
    status: Status.progress,
  },
  {
    item: "Roadtrip with strangers",
    status: Status.completed,
  },
  {
    item: "Host a photo gallery",
    status: Status.progress,
  },
];

export const beliefs = [
  "Seek discomfort",
  "Do difficult things as they are the most rewarding",
  "Anything is possible with discipline",
];
