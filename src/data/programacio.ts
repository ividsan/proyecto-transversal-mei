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

export interface ProgramacioWorkshopDetail {
  slug: string;
  intro: string;
  description: string;
  when: string;
  place: string;
  duration: string;
  capacity: string;
  level: string;
  materials: string[];
  highlights: string[];
  note: string;
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

export const workshopDetails: ProgramacioWorkshopDetail[] = [
  {
    slug: slugifyProgramacioTitle("Serigrafia Autogestionada"),
    intro: "Una introduccio practica a la serigrafia per entendre el procés complet i endur-te una peça impresa per tu mateixa.",
    description:
      "Explorarem com preparar pantalles, barrejar tintes i imprimir sobre paper o tela amb una metodologia senzilla i col·lectiva. El taller combina demostracio i practica perque cada persona pugui experimentar amb el seu propi disseny.",
    when: "23.10\n12.00-14.00",
    place: "Pati 1",
    duration: "2 hores",
    capacity: "Aforament reduït",
    level: "Sense experiencia previa",
    materials: ["Dissenys o idees prèvies", "Roba que es pugui embrutar", "Ganes de provar i repetir"],
    highlights: ["Tècnica manual i accessible", "Experimentacio amb tintes", "Surt amb una impressio feta per tu"],
    note: "Si no tens cap idea preparada, hi haurà plantilles i materials per improvisar sobre la marxa.",
  },
  {
    slug: slugifyProgramacioTitle("Feminisme"),
    intro: "Un espai segur per pensar, compartir i crear des de la perspectiva feminista.",
    description:
      "A partir de dinamiques participatives, aquest taller obre una conversa sobre cures, imaginaris col·lectius i com portar el feminisme al dia a dia. La proposta prioritza el debat, l'escolta i la creacio compartida.",
    when: "23.10\n16.00-18.00",
    place: "Sala Visual Room",
    duration: "2 hores",
    capacity: "Grup obert",
    level: "Tots els nivells",
    materials: ["Quadern o llibreta", "Retoladors o bolígrafs", "Voluntat de participar"],
    highlights: ["Dinamiques guiades", "Debat obert", "Eines per portar el discurs a l'accio"],
    note: "La sessio esta pensada per sumar veus diverses i construir coneixement des de l'experiencia compartida.",
  },
  {
    slug: slugifyProgramacioTitle("Micro obert"),
    intro: "Un micro obert per pujar a l'escenari, provar material propi o simplement gaudir del que proposa la gent del festival.",
    description:
      "Aquest espai funciona com una invitacio a compartir música, text, performance o qualsevol proposta breu. L'objectiu es generar un ambient proper i espontani on tothom pugui tenir veu.",
    when: "23.10 / 24.10 / 25.10\n02.00-03.00",
    place: "Pati 2",
    duration: "1 hora",
    capacity: "Obert fins omplir l'espai",
    level: "Per a tothom",
    materials: ["La proposta que vulguis compartir", "Instrument o base, si en necessites", "Predisposicio a improvisar"],
    highlights: ["Escenari obert", "Format lliure", "Ambient nocturn i col·lectiu"],
    note: "Si vols participar, vine amb temps per apuntar-te a la llista i preparar la teva intervencio.",
  },
  {
    slug: slugifyProgramacioTitle("Mercat de segona mà"),
    intro: "Un punt de trobada per donar una segona vida a objectes, roba i petites troballes.",
    description:
      "El mercat esta pensat com un espai de circularitat i intercanvi on cada parada explica una historia diferent. Es una bona oportunitat per remenar, descobrir i portar-te a casa alguna cosa amb recorregut.",
    when: "24.10\n12.00-14.00",
    place: "Pati 1",
    duration: "2 hores",
    capacity: "Acces lliure",
    level: "Per a totes les edats",
    materials: ["Moneda o efectiu", "Bossa reutilitzable", "Temps per tafanejar sense presses"],
    highlights: ["Consum responsable", "Intercanvi i reutilitzacio", "Objectes amb historia"],
    note: "Si tens peces per vendre o intercanviar, consulta amb l'organitzacio abans d'instal·lar la parada.",
  },
  {
    slug: slugifyProgramacioTitle("Música experimental"),
    intro: "Un taller per jugar amb el so i descobrir formes noves de crear musica des de l'error i la curiositat.",
    description:
      "Treballarem textures sonores, capes i ritmes poc convencionals per construir una peça col·lectiva. No cal dominar cap instrument: l'important es escoltar, provar i perdre la por a experimentar.",
    when: "24.10\n16.00-18.00",
    place: "Sala Visual Room",
    duration: "2 hores",
    capacity: "Places limitades",
    level: "Sense experiencia necessaria",
    materials: ["Auriculars si en tens", "Petit instrument o objecte sonor", "Curiositat per manipular so"],
    highlights: ["Escolta activa", "Creacio col·lectiva", "Exploracio de sons no convencionals"],
    note: "L'espai es treballara en grup, aixi que totes les aportacions sumen encara que siguin molt petites.",
  },
  {
    slug: slugifyProgramacioTitle("Joies reciclades"),
    intro: "Apren a transformar materials recuperats en peces petites i personals.",
    description:
      "Aquest taller combina disseny manual i reciclatge creatiu per fabricar joies amb vida propia. Treballarem amb peces recuperades, fils i elements diversos per construir accessoris únics i sostenibles.",
    when: "25.10\n12.00-14.00",
    place: "Pati 1",
    duration: "2 hores",
    capacity: "Aforament reduït",
    level: "Tots els nivells",
    materials: ["Peces petites que vulguis reutilitzar", "Tisores", "Tancaments o anelles si en tens"],
    highlights: ["Reutilitzacio creativa", "Disseny de peces pròpies", "Resultat portable"],
    note: "També hi haurà material base a disposicio de les persones participants.",
  },
  {
    slug: slugifyProgramacioTitle("Collage analògic i fanzine"),
    intro: "Un taller visual per construir un relat propi a partir de retalls, textures i autoedició.",
    description:
      "Explorarem el collage com a eina expressiva i el fanzine com a format per donar-li forma. La proposta barreja composicio manual, composicio de pagines i edicio casolana per crear una publicacio petita pero molt personal.",
    when: "25.10\n16.00-18.00",
    place: "Sala Visual Room",
    duration: "2 hores",
    capacity: "Aforament reduït",
    level: "Tots els nivells",
    materials: ["Revistes o imatges per retallar", "Tisores i cola", "Llapis, retoladors o tinta"],
    highlights: ["Autopublicacio", "Collage analogic", "Peces per emportar-se i compartir"],
    note: "Si vols, pots portar imatges o papers que vulguis convertir en una nova narracio visual.",
  },
];

export function findProgramacioEntry(section: ProgramacioSection, slug: string) {
  const entries = section === "tallers"
    ? tallersProgram.flatMap((day) => day.elements)
    : xarradesProgram.flatMap((day) => day.elements);

  return entries.find((entry) => entry.slug === slug);
}

export function getWorkshopDetail(slug: string) {
  return workshopDetails.find((entry) => entry.slug === slug);
}
