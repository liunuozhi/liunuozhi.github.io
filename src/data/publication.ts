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
    paperUrl: "https://drive.google.com/file/d/1DqM3bfcn-lnr3C_aJmYYrpA5nxbUZnVC/view?usp=drive_link",
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
    conference: "CAADRIA 2022",
    title: "Machine-reading Places and Spaces: Generative Probabilistic Modelling of Urban Thematic Zones and Contexts",
    authors: "Nuozhi Liu, Immanuel Koh",
    paperUrl: "https://d1wqtxts1xzle7.cloudfront.net/107768361/caadria2022_238-libre.pdf?1700834360=&response-content-disposition=inline%3B+filename%3DMachine_Reading_Places_and_amp_Spaces_Ge.pdf&Expires=1742021641&Signature=M7DzWNjm4Rtq1LziNYyycfAVBbtt5WHuKNTYUQjfMBN1Gyf~0KMB0oTB8aD6XVorIKY019Vb8nLxRfpq~QtRhmfWbeodCrqY4jwgP3m4GwMq~rQLGaOq7JavowM4hhwfLe~S6XPYhWH01HFV0Jw7Is7HTrggM1-8I3oAa0VLz7dB3rWAKZCEQK2cyCoUQ~5ZXIWsF-qUzywYJifUdOhbR3X~5jA0KLSRdfJw97cZ9a6koh-m6OwOklGH0WoWVNOlLkvtSrWaqTfAB9M36mylT18R2zMwx4e9Unbpy1LZr3J~mrmE44B7asMNmY--eqAU3Cu9V3P3FLlArZWqDNEtUQ__&Key-Pair-Id=APKAJLOHF5GGSLRBV4ZA",
    tldr: "Discovering urban thematic zones with Instagram and TripAdvisor data.",
    imageUrl: "https://i.postimg.cc/sgvbvvFz/caadria-2022-thumnail.png",
    codeUrl: "https://github.com/liunuozhi/explore-thematic-zones",
  }
];
