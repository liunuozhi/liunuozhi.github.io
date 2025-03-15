export interface Education {
  year: string;
  institution: string;
  degree: string;
  advisor?: string;
  thesis?: string;
  thesisUrl?: string;
}

export const educationData: Education[] = [
  // If you don't want to show education, just make the array empty.
  {
    year: "2019—2020",
    institution: "Singapore University of Technology and Design",
    degree: "Master of Science in Urban Science, Policy and Planning",
    // advisor: "",
  },
  {
    year: "2013—2018",
    institution: "Taiwan Feng Chia University",
    degree: "Bachelor of Architecture",
    // thesis: "",
    // Optional links to thesis
    // thesisUrl: "https://dspace.mit.edu/handle/1721.1/149111"
  },
];
