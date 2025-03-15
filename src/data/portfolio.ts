export interface Portfolio {
  title: string;
  description: string;
  technologies?: string[];
  imageUrl?: string;
  projectUrl?: string;
  codeUrl?: string;
}

export const portfolioData: Portfolio[] = [
  // Example entry
  {
    title: "2013-2019 Design Portfolio",
    description:
      "Architectural design portfolio.",
    technologies: ["Python", "PyTorch", "React"],
    projectUrl: "https://issuu.com/ronnieliu/docs/2019-liunuozhi_portfolio",
    imageUrl:
      "https://i.postimg.cc/FRdBH6wx/portfolio-thumbnail.png",
    // codeUrl: "",
  },
];
