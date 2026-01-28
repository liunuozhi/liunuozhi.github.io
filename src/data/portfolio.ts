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
    technologies: ["Architectural Design"],
    projectUrl: "https://drive.google.com/file/d/1A_SMowoVq_PRcNNlJUrPZv3P6ndtI-8K/view?usp=sharing",
    imageUrl:
      "https://i.postimg.cc/FRdBH6wx/portfolio-thumbnail.png",
    // codeUrl: "",
  },
];
