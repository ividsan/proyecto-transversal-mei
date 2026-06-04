<script setup lang="ts">
import { computed, onMounted, ref, watch } from "vue"
import { RouterLink, useRoute } from "vue-router"
import { slugifyProgramacioTitle } from "@/data/programacio"

type ProgramSection = "musica" | "tallers" | "xarrades" | "general"
type ProgramDay<T> = {
  dia: string
  elements: T[]
}

const sections = [
  { id: "musica", text: "MÚSICA" },
  { id: "tallers", text: "TALLERS" },
  { id: "xarrades", text: "XARRADES" },
  { id: "general", text: "GENERAL" },
] as const

const route = useRoute()
const activeSection = ref<ProgramSection>("musica")

function normalizeSection(value: unknown): ProgramSection | null {
  return value === "musica" || value === "tallers" || value === "xarrades" || value === "general"
    ? value
    : null
}

function syncSectionFromRoute() {
  const requestedSection = normalizeSection(route.query.section)
  if (requestedSection) {
    activeSection.value = requestedSection
  }
}

watch(
  () => route.query.section,
  () => {
    syncSectionFromRoute()
  },
)

onMounted(() => {
  syncSectionFromRoute()
})

type ProgramTextItem = {
  text: string
  ruta?: string
}

function hasRoute(item: ProgramTextItem): item is ProgramTextItem & { ruta: string } {
  return typeof item.ruta === "string"
}

const musicProgram: ProgramDay<ProgramTextItem>[] = [
  {
    dia: "23",
    elements: [
      { text: "CAROLINA DURANTE", ruta: "/artista/carolina-durante" },
      { text: "JUDELINE", ruta: "/artista/judeline" },
      { text: "ELS CATARRES", ruta: "/artista/els-catarres" },
      { text: "JULIETA", ruta: "/artista/julieta" },
      { text: "SANDRA MONFORT", ruta: "/artista/sandra-monfort" },
      { text: "MALA GESTIÓN", ruta: "/artista/mala-gestion" },
    ] satisfies ProgramTextItem[],
  },
  {
    dia: "24",
    elements: [
      { text: "AMAIA", ruta: "/artista/amaia" },
      { text: "MUSHKAA", ruta: "/artista/mushkaa" },
      { text: "AL·LÈRGIQUES AL POL·LEN", ruta: "/artista/allerqiques-al-pollen" },
      { text: "LA ÉLITE", ruta: "/artista/la-elite" },
      { text: "ZETAK", ruta: "/artista/zetak" },
      { text: "SEN SENRA", ruta: "/artista/sen-senra" },
    ] satisfies ProgramTextItem[],
  },
  {
    dia: "25",
    elements: [
      { text: "AMARAL", ruta: "/artista/amaral" },
      { text: "LÁGRIMAS DE SANGRE", ruta: "/artista/lagrimas-de-sangre" },
      { text: "FADES", ruta: "/artista/fades" },
      { text: "LA GOSSA SORDA", ruta: "/artista/la-gossa-sorda" },
      { text: "JIMENA AMARILLO", ruta: "/artista/jimena-amarillo" },
      { text: "ARREAK", ruta: "/artista/arreak" },
    ] satisfies ProgramTextItem[],
  },
]

const tallersProgram: ProgramDay<string>[] = [
  {
    dia: "23",
    elements: ["SERIGRAFIA AUTOGESTIONADA", "FEMINISME", "MICRO OBERT"],
  },
  {
    dia: "24",
    elements: ["MERCAT DE SEGONA MÀ", "MÚSICA EXPERIMENTAL", "MICRO OBERT"],
  },
  {
    dia: "25",
    elements: ["JOIES RECICLADES", "COLLAGE ANALÒGIC I FANZINE", "MICRO OBERT"],
  },
]

type XarradaTalk = {
  tema: string
  left: string[]
  right: string[]
}

type XarradaDay = {
  dia: string
  talks: XarradaTalk[]
}

function getXarradaParticipants(talk: XarradaTalk) {
  return [...talk.left, ...talk.right]
}

const xarradesProgram: XarradaDay[] = [
  {
    dia: "23",
    talks: [
      {
        tema: "IDENTITAT DE POBLE:",
        left: ["ALEGRIA DE POBLE", "EUGENI ALEMANY"],
        right: ["BELLIDAMEN", "PACO ROCA"],
      },
      {
        tema: "CULTURA ALTERNATIVA I INTERNET:",
        left: ["JUNIOR HEALY", "LA PIJA Y LA KINKI"],
        right: ["SOY UNA PRINGADA", "FISIKAMR"],
      },
    ],
  },
  {
    dia: "24",
    talks: [
      {
        tema: "DISSENY, ART I GRÀFICA:",
        left: ["GRAFFICA", "MARISA GALLÉN"],
        right: ["SERGIO MEMBRILLAS", "TOT STUDIO"],
      },
    ],
  },
  {
    dia: "25",
    talks: [
      {
        tema: "FEMINISME:",
        left: ["ELISABETH BENAVENT", "DANIELA GRANADOS"],
        right: ["INÉS HERNAND", "PAULA BONET"],
      },
    ],
  },
]

type GeneralProgramItem = {
  hora: string
  activitat: string
  espai: string
}

type GeneralProgramDay = {
  id: GeneralDayKey
  numero: string
  dia: string
  items: GeneralProgramItem[]
}

const generalProgram: GeneralProgramDay[] = [
  {
    id: "divendres",
    numero: "23",
    dia: "Viernes 23 de Octubre",
    items: [
      { hora: "12.00-12.45", activitat: "Acte d'inauguració del festival", espai: "Patio 2" },
      { hora: "12.45-14.00", activitat: "Xarrada: Identitat de poble", espai: "Sala La Factoria" },
      { hora: "12.00-14.00", activitat: "Taller de Serigrafia Autogestionada", espai: "Patio 1" },
      { hora: "13.00-14.00", activitat: "Sandra Monfort", espai: "Patio 2" },
      { hora: "15.00-16.00", activitat: "Mala Gestión", espai: "Platea" },
      { hora: "16.00-18.00", activitat: "Collage Analògic i Fanzine", espai: "Visual Room" },
      { hora: "17.00-18.00", activitat: "Julieta", espai: "Patio 2" },
      { hora: "18.30-20.00", activitat: "Xarrada: Cultura alternativa i internet", espai: "Sala La Factoria" },
      { hora: "19.30-20.45", activitat: "Els Catarres", espai: "Platea" },
      { hora: "22.00-23.15", activitat: "Judeline", espai: "Patio 2" },
      { hora: "00.30-02.00", activitat: "Carolina Durante", espai: "Platea" },
      { hora: "02.00-03.00", activitat: "Micro obert", espai: "Patio 2" },
    ],
  },
  {
    id: "dissabte",
    numero: "24",
    dia: "Dissabte 24 d'Octubre",
    items: [
      { hora: "12.00-14.00", activitat: "Mercat de segona mà", espai: "Patio 1" },
      { hora: "13.00-14.00", activitat: "Muska", espai: "Patio 2" },
      { hora: "15.00-16.15", activitat: "La Èlite", espai: "Platea" },
      { hora: "16.00-18.00", activitat: "Taller de música experimental", espai: "Visual Room" },
      { hora: "17.00-18.00", activitat: "Sen Senra", espai: "Patio 2" },
      { hora: "18.00-19.30", activitat: "Xarrada: Disseny, art i gràfica", espai: "Sala Polivalent" },
      { hora: "19.30-20.45", activitat: "Fades", espai: "Platea" },
      { hora: "22.00-23.30", activitat: "Amaia", espai: "Patio 2" },
      { hora: "00.30-02.00", activitat: "Zetak", espai: "Platea" },
      { hora: "02.00-03.00", activitat: "Micro obert", espai: "Patio 2" },
    ],
  },
  {
    id: "diumenge",
    numero: "25",
    dia: "Diumenge 25 d'Octubre",
    items: [
      { hora: "12.00-14.00", activitat: "Taller de joies reciclades", espai: "Patio 1" },
      { hora: "13.00-14.00", activitat: "Al·lèrgiques al Pol·len", espai: "Patio 2" },
      { hora: "15.00-16.15", activitat: "Arreak", espai: "Platea" },
      { hora: "16.00-18.00", activitat: "Taller de feminisme", espai: "Visual Room" },
      { hora: "17.00-18.00", activitat: "Jimena Amarillo", espai: "Patio 2" },
      { hora: "18.00-19.30", activitat: "Xarrada: Feminisme", espai: "Sala La Factoria" },
      { hora: "19.30-20.45", activitat: "La Gossa Sorda", espai: "Platea" },
      { hora: "22.00-23.30", activitat: "Amaral", espai: "Patio 2" },
      { hora: "00.30-02.00", activitat: "Làgrimes de Sang", espai: "Platea" },
      { hora: "02.00-03.00", activitat: "Micro obert", espai: "Patio 2" },
    ],
  },
]

type GeneralDayKey = "divendres" | "dissabte" | "diumenge"

const generalDay = ref<GeneralDayKey>("divendres")

const generalDayButtons = [
  { id: "divendres", label: "DIVENDRES 23" },
  { id: "dissabte", label: "DISSABTE 24" },
  { id: "diumenge", label: "DIUMENGE 25" },
] as const

const generalDayMap: Record<GeneralDayKey, GeneralProgramDay> = {
  divendres: generalProgram[0]!,
  dissabte: generalProgram[1]!,
  diumenge: generalProgram[2]!,
}

const currentGeneralDay = computed<GeneralProgramDay>(
  () => generalDayMap[generalDay.value] ?? generalDayMap.divendres,
)

type GeneralRouteTarget =
  | { name: "programacio-detall"; params: { section: "general" | "tallers" | "xarrades"; slug: string } }
  | { name: "artista-detalle"; params: { slug: string } }

const artistSlugByTitle: Record<string, string> = {
  "AMAIA": "amaia",
  "MUSHKAA": "mushkaa",
  MUSKA: "mushkaa",
  JUDELINE: "judeline",
  "ELS CATARRES": "els-catarres",
  "CAROLINA DURANTE": "carolina-durante",
  JULIETA: "julieta",
  "LA ÉLITE": "la-elite",
  "LA ELITE": "la-elite",
  ZETAK: "zetak",
  FADES: "fades",
  "SANDRA MONFORT": "sandra-monfort",
  "AL·LÈRGIQUES AL POL·LEN": "allerqiques-al-pollen",
  "AL.LÈRGIQUES AL POL·LEN": "allerqiques-al-pollen",
  ARREAK: "arreak",
  "SEN SENRA": "sen-senra",
  AMARAL: "amaral",
  "MALA GESTIÓN": "mala-gestion",
  "LÁGRIMAS DE SANGRE": "lagrimas-de-sangre",
  "LAGRIMAS DE SANGRE": "lagrimas-de-sangre",
}

const generalDetailSlugByTitle: Record<string, string> = {
  "ACTE D'INAUGURACIÓ DEL FESTIVAL": slugifyProgramacioTitle("Acte d'inauguració del festival"),
  "MALA GESTIÓN": "mala-gestion",
  "MERCAT DE SEGONA MÀ": slugifyProgramacioTitle("Mercat de segona mà"),
}

function resolveGeneralActivityRoute(item: GeneralProgramItem): GeneralRouteTarget {
  const title = item.activitat.trim()
  const upperTitle = title.toUpperCase()

  if (upperTitle === "MICRO OBERT") {
    return {
      name: "programacio-detall",
      params: { section: "tallers", slug: slugifyProgramacioTitle("Micro obert") },
    }
  }

  if (upperTitle.startsWith("XARRADA: ")) {
    return {
      name: "programacio-detall",
      params: { section: "xarrades", slug: slugifyProgramacioTitle(title.slice(9)) },
    }
  }

  if (upperTitle.startsWith("TALLER DE ")) {
    return {
      name: "programacio-detall",
      params: { section: "tallers", slug: slugifyProgramacioTitle(title.slice(10)) },
    }
  }

  const artistSlug = artistSlugByTitle[upperTitle]
  if (artistSlug) {
    return {
      name: "artista-detalle",
      params: { slug: artistSlug },
    }
  }

  const generalSlug = generalDetailSlugByTitle[upperTitle]
  if (generalSlug) {
    return {
      name: "programacio-detall",
      params: { section: "general", slug: generalSlug },
    }
  }

  return {
    name: "programacio-detall",
    params: { section: "general", slug: slugifyProgramacioTitle(title) },
  }
}

</script>

<template>
  <main class="programacio min-h-screen bg-black px-5 pb-[90px] pt-[38px] overflow-x-clip max-[720px]:pt-7">
    <div class="programacio-botons flex flex-wrap items-center justify-center gap-[46px] max-[720px]:gap-6">
      <button
        v-for="section in sections"
        :key="section.id"
        class="programacio-boto cursor-pointer border border-[#5b5b5b] bg-transparent px-3 py-[7px] font-[inherit] text-[24px] font-normal leading-none tracking-[0.06em] text-white max-[720px]:px-[9px] max-[720px]:py-[6px] max-[720px]:text-[17px]"
        :class="activeSection === section.id ? 'actiu bg-white text-[#1b1b1b]' : ''"
        type="button"
        @click="activeSection = section.id"
      >
        {{ section.text }}
      </button>
    </div>

    <section
      v-if="activeSection === 'musica'"
      class="programa-graella programa-graella--musica"
      aria-label="Programació de musica"
    >
      <div v-for="day in musicProgram" :key="day.dia" class="programa-dia">
        <div class="programa-dia-numero">{{ day.dia }}</div>
        <div class="programa-elements">
          <template v-for="element in day.elements" :key="element.text">
            <RouterLink v-if="hasRoute(element)" class="programa-element" :to="element.ruta">
              <span class="programa-element-label">{{ element.text }}</span>
            </RouterLink>
            <span v-else class="programa-element">
              <span class="programa-element-label">{{ element.text }}</span>
            </span>
          </template>
        </div>
      </div>
    </section>

    <section v-else-if="activeSection === 'tallers'" class="programa-graella" aria-label="Programació de tallers">
      <div v-for="day in tallersProgram" :key="day.dia" class="programa-dia">
        <div class="programa-dia-numero">{{ day.dia }}</div>
        <div class="programa-elements">
          <RouterLink
            v-for="element in day.elements"
            :key="element"
            class="programa-element"
            :to="{ name: 'programacio-detall', params: { section: 'tallers', slug: slugifyProgramacioTitle(element) } }"
          >
            {{ element }}
          </RouterLink>
        </div>
      </div>
    </section>

    <section v-else-if="activeSection === 'xarrades'" class="programa-graella" aria-label="Programació de xarrades">
      <div v-for="day in xarradesProgram" :key="day.dia" class="programa-dia programa-dia--xarrades">
        <div class="programa-dia-numero">{{ day.dia }}</div>
        <div
          class="programa-xarrades"
          :class="{ 'programa-xarrades--single': day.talks.length === 1 }"
        >
          <RouterLink
            v-for="talk in day.talks"
            :key="talk.tema"
            class="programa-xarrada-link"
            :to="{ name: 'programacio-detall', params: { section: 'xarrades', slug: slugifyProgramacioTitle(talk.tema) } }"
          >
            <article class="programa-xarrada">
              <div class="programa-xarrada-body">
                <h2 class="programa-xarrada-tema">{{ talk.tema }}</h2>

                <div class="programa-xarrada-participants">
                  <span
                    v-for="line in getXarradaParticipants(talk)"
                    :key="line"
                    class="programa-xarrada-line"
                  >
                    {{ line }}
                  </span>
                </div>
              </div>
            </article>
          </RouterLink>
        </div>
      </div>
    </section>

    <section v-else-if="activeSection === 'general'" class="programa-general" aria-label="Programació general">
      <div class="programa-general-subnav flex flex-wrap justify-center gap-[18px] mb-7 max-[720px]:gap-3 max-[720px]:mb-[18px]" aria-label="Dies de general">
        <button
          v-for="button in generalDayButtons"
          :key="button.id"
          class="programacio-boto programacio-boto--sub cursor-pointer border border-[#5b5b5b] bg-transparent px-[10px] py-[6px] font-[inherit] text-[18px] font-normal leading-none tracking-[0.06em] text-white max-[720px]:text-[14px]"
          :class="generalDay === button.id ? 'actiu bg-white text-[#1b1b1b]' : ''"
          type="button"
          @click="generalDay = button.id"
        >
          {{ button.label }}
        </button>
      </div>

      <article class="programa-dia programa-dia--general relative min-h-0">
        <div class="programa-dia-numero">{{ currentGeneralDay.numero }}</div>
        <div class="programa-general-content flex flex-col border-l-2 border-white">
          <div v-if="currentGeneralDay.items.length" class="programa-general-table relative" role="table" :aria-label="currentGeneralDay.dia">
            <div class="programa-general-head relative" role="row">
              <div class="programa-general-cell programa-general-cell--head programa-general-cell--hour" role="columnheader">
                Hora
              </div>
              <div class="programa-general-cell programa-general-cell--head" role="columnheader">Activitat</div>
              <div class="programa-general-cell programa-general-cell--head" role="columnheader">Espai</div>
            </div>

            <div
              v-for="item in currentGeneralDay.items"
              :key="`${item.hora}-${item.activitat}`"
              class="programa-general-row relative"
              role="row"
            >
              <RouterLink
                class="programa-general-cell programa-general-cell--hour programa-general-link"
                role="cell"
                :to="resolveGeneralActivityRoute(item)"
              >
                {{ item.hora }}
              </RouterLink>
              <RouterLink
                class="programa-general-cell programa-general-cell--activity programa-general-link"
                role="cell"
                :to="resolveGeneralActivityRoute(item)"
              >
                <span v-if="item.activitat.startsWith('Xarrada: ')">
                  Xarrada: <em>{{ item.activitat.slice(9) }}</em>
                </span>
                <span v-else>{{ item.activitat }}</span>
              </RouterLink>
              <RouterLink
                class="programa-general-cell programa-general-cell--space programa-general-link"
                role="cell"
                :to="resolveGeneralActivityRoute(item)"
              >
                <span v-if="item.espai.startsWith('Patio ')">
                  Pati&nbsp;{{ item.espai.slice(6) }}
                </span>
                <span v-else>{{ item.espai }}</span>
              </RouterLink>
            </div>
          </div>

          <div v-else class="programa-general-empty">Contingut pendent</div>
        </div>
      </article>
    </section>
  </main>
</template>

<style scoped>
.programacio {
  min-height: 100vh;
  background: #000000;
  padding: 38px 20px 90px;
  overflow-x: clip;
}

.programacio-botons {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 46px;
  flex-wrap: wrap;
}

.programacio-boto {
  border: 1px solid #5b5b5b;
  background: transparent;
  color: #ffffff;
  padding: clamp(4px, 0.8vw, 7px) clamp(5px, 1.2vw, 12px);
  font: inherit;
  font-size: clamp(10px, 2.2vw, 24px);
  font-weight: 400;
  line-height: 1;
  letter-spacing: 0.06em;
  cursor: pointer;
}

.programacio-boto.actiu {
  background: #ffffff;
  border-color: #ffffff;
  color: #1b1b1b;
}

.programa-graella {
  width: min(100%, 1180px);
  margin: 48px auto 0;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  --programa-separator-overhang: clamp(12px, 5vw, 20px);
}

.programa-dia {
  display: grid;
  grid-template-columns: minmax(170px, 0.48fr) minmax(0, 1fr);
  min-height: 250px;
  position: relative;
}

.programa-dia:last-child {
  border-bottom: 2px solid #ffffff;
}

.programa-dia.programa-dia--general {
  border-bottom: 0;
}

.programa-dia::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: #ffffff;
  pointer-events: none;
}

.programa-dia-numero {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  padding-top: 34px;
  color: #ffffff;
  font-size: clamp(56px, 7vw, 92px);
  line-height: 0.78;
  font-weight: 400;
  letter-spacing: -0.06em;
}

.programa-elements {
  display: grid;
  grid-template-rows: repeat(3, minmax(0, 1fr));
  align-items: stretch;
  width: 100%;
  height: 100%;
  border-left: 2px solid #ffffff;
}

.programa-element {
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 0;
  box-sizing: border-box;
  position: relative;
  color: #ffffff;
  text-decoration: none;
  text-transform: uppercase;
  font-size: clamp(18px, 2.6vw, 34px);
  line-height: 1.05;
  font-weight: 400;
  letter-spacing: -0.02em;
  padding: 16px clamp(18px, 3vw, 42px) 16px clamp(34px, 5vw, 82px);
  border-bottom: 2px solid #ffffff;
}

.programa-element:last-child {
  border-bottom: 0;
}

.programa-element:hover {
  background: #ffffff;
  color: #000000;
}

.programa-graella--musica .programa-dia {
  min-height: clamp(420px, 40vw, 560px);
}

.programa-graella--musica .programa-elements {
  grid-template-rows: repeat(6, minmax(0, 1fr));
}

.programa-dia--xarrades {
  min-height: 0;
}

.programa-xarrades {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  align-self: stretch;
  border-left: 2px solid #ffffff;
}

.programa-xarrades--single {
  justify-content: flex-start;
}

.programa-xarrades--single .programa-xarrada + .programa-xarrada {
  border-top: 2px solid #ffffff;
}

.programa-xarrades--single .programa-xarrada {
  padding-top: 22px;
  padding-bottom: 22px;
}

.programa-xarrada-link {
  display: flex;
  width: 100%;
  align-self: stretch;
  position: relative;
  isolation: isolate;
  color: inherit;
  text-decoration: none;
}

.programa-xarrada-link:hover {
  background: #ffffff;
}

.programa-xarrada-link::before {
  content: "";
  position: absolute;
  inset: 0 calc(var(--programa-separator-overhang) * -1) 0 0;
  background: transparent;
  pointer-events: none;
  z-index: -1;
}

.programa-xarrada-link:hover::before {
  background: #ffffff;
}

.programa-xarrada-link:hover .programa-xarrada-tema,
.programa-xarrada-link:hover .programa-xarrada-line {
  color: #000000;
}

.programa-xarrada {
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  width: 100%;
  box-sizing: border-box;
  padding: 22px clamp(18px, 3vw, 42px) 22px clamp(34px, 5vw, 82px);
}

.programa-xarrada + .programa-xarrada {
  border-top: 2px solid #ffffff;
}

.programa-xarrada-body {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.programa-xarrada-tema,
.programa-xarrada-line {
  display: block;
  color: #ffffff;
  text-decoration: none;
  text-transform: uppercase;
  font-size: clamp(18px, 2.6vw, 34px);
  line-height: 1.12;
  font-weight: 400;
  letter-spacing: -0.02em;
}

.programa-xarrada-tema {
  margin: 0;
  width: 100%;
  white-space: nowrap;
}

.programa-xarrada-participants {
  display: flex;
  flex-direction: column;
  gap: 6px;
  align-items: flex-start;
}

.programa-general {
  width: min(100%, 1360px);
  margin: 48px auto 0;
  color: #ffffff;
  --programa-general-overhang: clamp(12px, 5vw, 20px);
}

.programa-dia--general {
  min-height: auto;
}

.programa-dia--general::before {
  right: 0;
}

.programa-dia--general::after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 1px;
  background: #ffffff;
  pointer-events: none;
}

.programa-general-content {
  display: flex;
  flex-direction: column;
  border-left: 2px solid #ffffff;
}

.programa-general-subnav {
  display: flex;
  justify-content: center;
  gap: 18px;
  flex-wrap: wrap;
  margin-bottom: 28px;
}

.programacio-boto--sub {
  padding: 6px 10px;
  font-size: 18px;
}

.programa-general-table {
  position: relative;
}

.programa-general-head,
.programa-general-row {
  display: grid;
  grid-template-columns: minmax(100px, 0.55fr) minmax(0, 1.5fr) minmax(100px, 1.2fr);
  column-gap: clamp(10px, 3vw, 50px);
}

.programa-general-head {
  position: relative;
  margin-left: 0;
}

.programa-general-head::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: -20px;
  height: 1px;
  background: #ffffff;
  pointer-events: none;
}

.programa-general-row {
  position: relative;
}

.programa-general-cell {
  padding: 10px clamp(6px, 1vw, 24px) 10px clamp(8px, 1.8vw, 48px);
  color: #ffffff;
  font-family: "PP Neue Montreal", system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif;
  font-size: clamp(13px, 1.5vw, 24px);
  line-height: 1.1;
  font-weight: 400;
  letter-spacing: -0.01em;
}

.programa-general-cell--head {
  padding-top: 10px;
  padding-bottom: 10px;
  font-family: "Martian Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
    "Liberation Mono", "Courier New", monospace;
  font-size: clamp(12px, 1.1vw, 18px);
  letter-spacing: 0.03em;
  text-transform: uppercase;
}

.programa-general-cell--hour {
  white-space: nowrap;
  padding-left: clamp(18px, 2.3vw, 40px);
}

.programa-general-cell--activity {
  white-space: nowrap;
}

.programa-general-link {
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 100%;
  box-sizing: border-box;
  color: inherit;
  text-decoration: none;
  cursor: pointer;
}

.programa-general-link:hover {
  background: #ffffff;
  color: #000000;
}

.programa-general-link:hover em {
  color: #000000;
}

.programa-general-row:hover .programa-general-link {
  background: #ffffff;
  color: #000000;
}

.programa-general-row:hover .programa-general-cell {
  position: relative;
  z-index: 1;
  color: #000000;
}

.programa-general-row:hover .programa-general-link em {
  color: #000000;
}

.programa-general-row:hover {
  background: #ffffff;
}

.programa-general-row:hover::before {
  content: "";
  position: absolute;
  inset: 0 calc(var(--programa-general-overhang) * -1) 0 0;
  background: #ffffff;
  z-index: 0;
  pointer-events: none;
}

.programa-general-cell em {
  font-style: italic;
}

.programa-general-cell--space {
  white-space: nowrap;
}

.programa-general-head > .programa-general-cell:nth-child(3),
.programa-general-row > .programa-general-cell:nth-child(3) {
  padding-left: 0;
}

.programa-general-empty {
  position: relative;
  padding: 22px clamp(18px, 3vw, 42px) 22px clamp(34px, 5vw, 82px);
  font-family: "PP Neue Montreal", system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif;
  font-size: clamp(16px, 1.8vw, 28px);
  color: #ffffff;
}

.programa-general-head::after,
.programa-general-row::after,
.programa-general-empty::before,
.programa-general-empty::after,
.programa-general-row:last-child::after {
  content: "";
  position: absolute;
  left: 0;
  right: calc(var(--programa-general-overhang) * -1);
  height: 1px;
  background: #ffffff;
  pointer-events: none;
}

.programa-general-empty::before {
  top: 0;
}

.programa-general-empty::after {
  bottom: 0;
}

.programa-general-head::after,
.programa-general-row::after {
  bottom: 0;
}

@media (max-width: 720px) {
  .programacio {
    padding-top: 28px;
  }

  .programacio-botons {
    gap: clamp(6px, 2vw, 24px);
  }

  .programa-graella {
    margin-top: 36px;
  }

  .programa-dia {
    grid-template-columns: 76px minmax(0, 1fr);
    min-height: 170px;
  }

  .programa-dia-numero {
    padding-top: 22px;
    font-size: 34px;
  }

  .programa-element {
    font-size: clamp(11px, 3.5vw, 22px);
    padding: 10px 10px 10px 14px;
    letter-spacing: -0.02em;
    white-space: normal;
    overflow-wrap: anywhere;
  }

  .programa-dia--xarrades {
    min-height: 0;
  }

  .programa-xarrades {
    gap: 32px;
  }

  .programa-xarrada {
    padding: 14px 12px 14px 18px;
  }

  .programa-xarrada-tema,
  .programa-xarrada-line {
    font-size: clamp(14px, 4.8vw, 22px);
    line-height: 1.16;
    white-space: normal;
    overflow-wrap: anywhere;
  }

  .programa-xarrada-participants {
    gap: 4px;
  }

  .programa-general {
    margin-top: 36px;
  }

  .programa-general-subnav {
    gap: clamp(6px, 2vw, 12px);
    margin-bottom: 18px;
  }

  .programacio-boto--sub {
    padding: clamp(4px, 0.8vw, 6px) clamp(5px, 1vw, 9px);
    font-size: clamp(10px, 2vw, 14px);
  }

  .programa-general-head,
  .programa-general-row {
    grid-template-columns: minmax(100px, 0.95fr) minmax(0, 1.9fr) minmax(100px, 0.95fr);
    column-gap: 14px;
  }

  .programa-general-cell {
    padding: 16px 0;
    font-size: 16px;
  }

  .programa-general-cell--hour {
    padding-left: 16px;
  }

  .programa-general-cell--head {
    padding-top: 13px;
    padding-bottom: 13px;
    font-size: 14px;
  }

  .programa-general-cell--hour {
    min-width: 92px;
  }

  .programa-general-cell--activity,
  .programa-general-cell--space {
    white-space: normal;
    overflow-wrap: anywhere;
  }

  .programa-general-empty {
    padding: 16px 10px 16px 18px;
    font-size: 14px;
  }

  .programa-general-head::after,
  .programa-general-row::after,
  .programa-general-empty::before,
  .programa-general-empty::after,
  .programa-general-row:last-child::after {
    right: 14px;
  }

  .programa-general-head::before {
    right: 14px;
  }

  .programa-general-row:hover::before {
    inset: 0 14px 0 0;
  }
}

@media (max-width: 1100px) and (min-width: 721px) {
  .programa-general-head,
  .programa-general-row {
    grid-template-columns: minmax(94px, 0.8fr) minmax(0, 1.75fr) minmax(94px, 0.8fr);
    column-gap: 10px;
  }

  .programa-general-cell {
    padding-top: 14px;
    padding-bottom: 14px;
    font-size: 14px;
  }

  .programa-general-cell--hour {
    padding-left: 14px;
    min-width: 94px;
  }

  .programa-general-cell--head {
    font-size: 13px;
  }
}
</style>
