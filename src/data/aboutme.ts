export interface AboutMe {
  name: string;
  title: string;
  institution: string;
  description: string;
  email: string;
  imageUrl?: string;
  blogUrl?: string;
  cvUrl?: string;
  googleScholarUrl?: string;
  twitterUsername?: string;
  githubUsername?: string;
  linkedinUsername?: string;
  funDescription?: string; // Gets placed in the left sidebar
  secretDescription?: string; // Gets placed in the bottom
  altName?: string;
  institutionUrl?: string;
}

export const aboutMe: AboutMe = {
  name: "Liu Nuozhi",
  title: "Research Associate",
  institution: "Singapore University of Technology and Design",
  // Note that links work in the description
  description:
  "I am a Research Associate at <a href='https://artificial-architecture.ai/'>Artificial Architectural Lab</a>, supervised by <a href='https://www.sutd.edu.sg/profile/immanuel-koh'>Prof. Immanuel Koh</a>, at the <a href='http://www.sutd.edu.sg'>Singapore University of Technology and Design (SUTD)</a>. My research interests include urban data analysis, generative design, and 3D deep learning.",
  email: "rliunz1995@gmail.com",
  imageUrl:
    "https://i.postimg.cc/Bb0GcwmB/DSC-3349.jpg",
  googleScholarUrl: "https://scholar.google.com/citations?user=oc15mp0AAAAJ",
  githubUsername: "liunuozhi",
  linkedinUsername: "nuozhi-liu-595248120",
  // linkedinUsername: "janesmith",
  // twitterUsername: "janesmith",
  // blogUrl: "https://",
  // cvUrl: "https://",
  institutionUrl: "https://www.sutd.edu.sg",
  // altName: "",
  // secretDescription: "I like dogs.",
};
