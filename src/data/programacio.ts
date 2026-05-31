export type ProgramacioSection = "tallers" | "xarrades";

export interface ProgramacioEntry {
  section: ProgramacioSection;
  slug: string;
  title: string;
}

export interface ProgramacioDay<T> {
  dia: string;
  elements: T[];
}

export interface ProgramacioTalk {
  slug: string;
  title: string;
  left: string[];
  right: string[];
}

export function slugifyProgramacioTitle(title: string) {
  return title
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-zA-Z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .toLowerCase();
}

export const tallersProgram: ProgramacioDay<ProgramacioEntry>[] = [
  {
    dia: "23",
    elements: [
      { section: "tallers", slug: slugifyProgramacioTitle("Serigrafia Autogestionada"), title: "SERIGRAFIA AUTOGESTIONADA" },
      { section: "tallers", slug: slugifyProgramacioTitle("Feminisme"), title: "FEMINISME" },
      { section: "tallers", slug: slugifyProgramacioTitle("Micro obert"), title: "MICRO OBERT" },
    ],
  },
  {
    dia: "24",
    elements: [
      { section: "tallers", slug: slugifyProgramacioTitle("Mercat de segona mà"), title: "MERCAT DE SEGONA MÀ" },
      { section: "tallers", slug: slugifyProgramacioTitle("Música experimental"), title: "MÚSICA EXPERIMENTAL" },
      { section: "tallers", slug: slugifyProgramacioTitle("Micro obert"), title: "MICRO OBERT" },
    ],
  },
  {
    dia: "25",
    elements: [
      { section: "tallers", slug: slugifyProgramacioTitle("Joies reciclades"), title: "JOIES RECICLADES" },
      { section: "tallers", slug: slugifyProgramacioTitle("Collage analògic i fanzine"), title: "COLLAGE ANALÒGIC I FANZINE" },
      { section: "tallers", slug: slugifyProgramacioTitle("Micro obert"), title: "MICRO OBERT" },
    ],
  },
];

export const xarradesProgram: ProgramacioDay<ProgramacioTalk>[] = [
  {
    dia: "23",
    elements: [
      {
        slug: slugifyProgramacioTitle("Identitat de poble"),
        title: "IDENTITAT DE POBLE",
        left: ["ALEGRIA DE POBLE", "EUGENI ALEMANY"],
        right: ["BELLIDAMEN", "PACO ROCA"],
      },
      {
        slug: slugifyProgramacioTitle("Cultura alternativa i internet"),
        title: "CULTURA ALTERNATIVA I INTERNET",
        left: ["JUNIOR HEALY", "LA PIJA Y LA KINKI"],
        right: ["SOY UNA PRINGADA", "FISIKAMR"],
      },
    ],
  },
  {
    dia: "24",
    elements: [
      {
        slug: slugifyProgramacioTitle("Disseny, art i gràfica"),
        title: "DISSENY, ART I GRÀFICA",
        left: ["GRAFFICA", "MARISA GALLÉN"],
        right: ["SERGIO MEMBRILLAS", "TOT STUDIO"],
      },
    ],
  },
  {
    dia: "25",
    elements: [
      {
        slug: slugifyProgramacioTitle("Feminisme"),
        title: "FEMINISME",
        left: ["ELISABETH BENAVENT", "DANIELA GRANADOS"],
        right: ["INÉS HERNAND", "PAULA BONET"],
      },
    ],
  },
];

export function findProgramacioEntry(section: ProgramacioSection, slug: string) {
  const entries = section === "tallers"
    ? tallersProgram.flatMap((day) => day.elements)
    : xarradesProgram.flatMap((day) => day.elements);

  return entries.find((entry) => entry.slug === slug);
}
