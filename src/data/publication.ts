export interface Publication {
  year: string;
  conference: string;
  title: string;
  authors: string;
  paperUrl?: string;
  codeUrl?: string;
  bibtex?: string;
  tldr?: string;
  imageUrl?: string;
  award?: string;
}

export const publicationData: Publication[] = [
  // If you don't want to show publications, just make the array empty.
  {
    year: "2024",
    conference: "ACADIA",
    title: "Neural Radiance Field for Generative 3D Facade Segmentation",
    authors: "Nuozhi Liu, Immanuel Koh",
    paperUrl: "https://papers.cumincad.org/cgi-bin/works/paper/acadia24_v2_55",
    // codeUrl: "https://github.com/jsmith/scalable-causal-discovery",
    //bibtex: "https://arxiv.org/abs/2409.15476.bib",
    tldr: "Using NeRF to segment building facades in 3D.",
    imageUrl:
      "https://i.postimg.cc/mZdWp3VB/acadia-2024-thumnail.png",
    // if you have an image in public/images, you can use it like this:
    // imageUrl: "/images/publication-image.jpg"
  },
  {
    year: "2022",
    conference: "CAADRIA",
    title: "Machine-reading Places and Spaces: Generative Probabilistic Modelling of Urban Thematic Zones and Contexts",
    authors: "Nuozhi Liu, Immanuel Koh",
    paperUrl: "https://papers.cumincad.org/cgi-bin/works/paper/caadria2022_238",
    tldr: "Discovering urban thematic zones with Instagram and TripAdvisor data.",
    imageUrl: "https://i.postimg.cc/sgvbvvFz/caadria-2022-thumnail.png",
    codeUrl: "https://github.com/liunuozhi/explore-thematic-zones",
  }
];
