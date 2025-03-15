export interface Experience {
  date: string;
  title: string;
  company: string;
  description?: string;
  advisor?: string;
  manager?: string;
  companyUrl?: string;
}

export const experienceData: Experience[] = [
  {
    date: "Nov 2022 - Present",
    title: "Research Asscoiate",
    company: "Singapore University of Technology and Design",
    description:
      "Conduct research in generative architecture and 3D AI models, focusing on NeRF, 3D Gaussian Splatting, and related techniques.",
    // advisor: "Peter Wang",
    // companyUrl: "https://deepmind.com",
  },
  {
    date: "Nov 2020 - Oct 2022",
    title: "Senior Research Assisstant",
    company: "Singapore University of Technology and Design",
    description:
      "Develop computational design tools and interactive applications using ReactJS and DeckGL.",
    // manager: "Elise Brown",
    // companyUrl: "https://google.com",
  },
];
