<script setup lang="ts">
import { computed, ref } from "vue"
import { RouterLink } from "vue-router"
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

const activeSection = ref<ProgramSection>("musica")

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
      { text: "MALA GESTIÓ", ruta: "/artista/mala-gestion" },
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
      { hora: "12:00 – 12:45", activitat: "Acte d'inauguració del festival", espai: "Patio 2" },
      { hora: "12:45 – 14:00", activitat: "Xarrada: Identitat de poble", espai: "Sala La Factoria" },
      { hora: "12:00 – 14:00", activitat: "Taller de Serigrafia Autogestionada", espai: "Patio 1" },
      { hora: "13:00 – 14:00", activitat: "Sandra Monfort", espai: "Patio 2" },
      { hora: "15:00 – 16:00", activitat: "Nerve Agent", espai: "Platea" },
      { hora: "16:00 – 18:00", activitat: "Collage Analògic i Fanzine", espai: "Visual Room" },
      { hora: "17:00 – 18:00", activitat: "Julieta", espai: "Patio 2" },
      { hora: "18:30 – 20:00", activitat: "Xarrada: Cultura alternativa i internet", espai: "Sala La Factoria" },
      { hora: "19:30 – 20:45", activitat: "Els Catarres", espai: "Platea" },
      { hora: "22:00 – 23:15", activitat: "Judeline", espai: "Patio 2" },
      { hora: "00:30 – 02:00", activitat: "Carolina Durante", espai: "Platea" },
      { hora: "02:00 – 03:00", activitat: "Micro obert", espai: "Patio 2" },
    ],
  },
  {
    id: "dissabte",
    numero: "24",
    dia: "Dissabte 24 d'Octubre",
    items: [
      { hora: "12:00 – 14:00", activitat: "Mercat de segona mà", espai: "Patio 1" },
      { hora: "13:00 – 14:00", activitat: "Muska", espai: "Patio 2" },
      { hora: "15:00 – 16:15", activitat: "La Èlite", espai: "Platea" },
      { hora: "16:00 – 18:00", activitat: "Taller de música experimental", espai: "Visual Room" },
      { hora: "17:00 – 18:00", activitat: "Sen Senra", espai: "Patio 2" },
      { hora: "18:00 – 19:30", activitat: "Xarrada: Disseny, art i gràfica", espai: "Sala Polivalent" },
      { hora: "19:30 – 20:45", activitat: "Fades", espai: "Platea" },
      { hora: "22:00 – 23:30", activitat: "Amaia", espai: "Patio 2" },
      { hora: "00:30 – 02:00", activitat: "Zetak", espai: "Platea" },
      { hora: "02:00 – 03:00", activitat: "Micro obert", espai: "Patio 2" },
    ],
  },
  {
    id: "diumenge",
    numero: "25",
    dia: "Diumenge 25 d'Octubre",
    items: [
      { hora: "12:00 – 14:00", activitat: "Taller de joies reciclades", espai: "Patio 1" },
      { hora: "13:00 – 14:00", activitat: "Al·lèrgiques al Pol·len", espai: "Patio 2" },
      { hora: "15:00 – 16:15", activitat: "Arreak", espai: "Platea" },
      { hora: "16:00 – 18:00", activitat: "Taller de feminisme", espai: "Visual Room" },
      { hora: "17:00 – 18:00", activitat: "Jimena Amarillo", espai: "Patio 2" },
      { hora: "18:00 – 19:30", activitat: "Xarrada: Feminisme", espai: "Sala La Factoria" },
      { hora: "19:30 – 20:45", activitat: "La Gossa Sorda", espai: "Platea" },
      { hora: "22:00 – 23:30", activitat: "Amaral", espai: "Patio 2" },
      { hora: "00:30 – 02:00", activitat: "Làgrimes de Sang", espai: "Platea" },
      { hora: "02:00 – 03:00", activitat: "Micro obert", espai: "Patio 2" },
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

</script>

<template>
  <main class="programacio">
    <div class="programacio-botons">
      <button
        v-for="section in sections"
        :key="section.id"
        class="programacio-boto"
        :class="{ actiu: activeSection === section.id }"
        type="button"
        @click="activeSection = section.id"
      >
        {{ section.text }}
      </button>
    </div>

    <section v-if="activeSection === 'musica'" class="programa-graella" aria-label="Programació de musica">
      <div v-for="day in musicProgram" :key="day.dia" class="programa-dia">
        <div class="programa-dia-numero">{{ day.dia }}</div>
        <div class="programa-elements">
          <template v-for="element in day.elements" :key="element.text">
            <RouterLink v-if="hasRoute(element)" class="programa-element" :to="element.ruta">
              {{ element.text }}
            </RouterLink>
            <span v-else class="programa-element">{{ element.text }}</span>
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
        <div class="programa-xarrades">
          <article v-for="talk in day.talks" :key="talk.tema" class="programa-xarrada">
            <div class="programa-xarrada-col programa-xarrada-col--left">
              <RouterLink
                class="programa-xarrada-tema"
                :to="{ name: 'programacio-detall', params: { section: 'xarrades', slug: slugifyProgramacioTitle(talk.tema) } }"
              >
                {{ talk.tema }}
              </RouterLink>
              <span v-for="line in talk.left" :key="line" class="programa-xarrada-line">{{ line }}</span>
            </div>
            <div class="programa-xarrada-col programa-xarrada-col--right">
              <span v-for="line in talk.right" :key="line" class="programa-xarrada-line">{{ line }}</span>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section v-else-if="activeSection === 'general'" class="programa-general" aria-label="Programació general">
      <div class="programa-general-subnav" aria-label="Dies de general">
        <button
          v-for="button in generalDayButtons"
          :key="button.id"
          class="programacio-boto programacio-boto--sub"
          :class="{ actiu: generalDay === button.id }"
          type="button"
          @click="generalDay = button.id"
        >
          {{ button.label }}
        </button>
      </div>

      <article class="programa-dia programa-dia--general">
        <div class="programa-dia-numero">{{ currentGeneralDay.numero }}</div>
        <div class="programa-general-content">
          <div v-if="currentGeneralDay.items.length" class="programa-general-table" role="table" :aria-label="currentGeneralDay.dia">
            <div class="programa-general-head" role="row">
              <div class="programa-general-cell programa-general-cell--head" role="columnheader">Hora</div>
              <div class="programa-general-cell programa-general-cell--head" role="columnheader">Activitat</div>
              <div class="programa-general-cell programa-general-cell--head" role="columnheader">Espai</div>
            </div>

            <div
              v-for="item in currentGeneralDay.items"
              :key="`${item.hora}-${item.activitat}`"
              class="programa-general-row"
              role="row"
            >
              <div class="programa-general-cell" role="cell">{{ item.hora }}</div>
              <div class="programa-general-cell" role="cell">
                <span v-if="item.activitat.startsWith('Xarrada: ')">
                  Xarrada: <em>{{ item.activitat.slice(9) }}</em>
                </span>
                <span v-else>{{ item.activitat }}</span>
              </div>
              <div class="programa-general-cell programa-general-cell--space" role="cell">
                <span v-if="item.espai.startsWith('Patio ')">
                  Pati&nbsp;{{ item.espai.slice(6) }}
                </span>
                <span v-else>{{ item.espai }}</span>
              </div>
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
  padding: 7px 12px;
  font: inherit;
  font-size: 24px;
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
}

.programa-dia {
  display: grid;
  grid-template-columns: minmax(170px, 0.48fr) minmax(0, 1fr);
  min-height: 250px;
  border-top: 2px solid #ffffff;
}

.programa-dia:last-child {
  border-bottom: 2px solid #ffffff;
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

.programa-dia--xarrades {
  min-height: 360px;
}

.programa-xarrades {
  display: flex;
  flex-direction: column;
  gap: 48px;
  border-left: 2px solid #ffffff;
}

.programa-xarrada {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(240px, 0.8fr);
  column-gap: 44px;
  align-items: start;
  padding: 22px clamp(18px, 3vw, 42px) 22px clamp(34px, 5vw, 82px);
}

.programa-xarrada + .programa-xarrada {
  border-top: 2px solid #ffffff;
}

.programa-xarrada-col {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.programa-xarrada-col--right {
  align-items: flex-end;
  text-align: right;
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
  margin-bottom: 0.35em;
  width: 100%;
}

.programa-xarrada-tema:hover {
  background: #ffffff;
  color: #000000;
}

.programa-general {
  width: min(100%, 1180px);
  margin: 48px auto 0;
  color: #ffffff;
}

.programa-dia--general {
  min-height: auto;
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
  border-top: 2px solid #ffffff;
  border-bottom: 2px solid #ffffff;
}

.programa-general-head,
.programa-general-row {
  display: grid;
  grid-template-columns: minmax(180px, 0.85fr) minmax(0, 1.6fr) minmax(160px, 0.7fr);
}

.programa-general-head {
  border-bottom: 2px solid #ffffff;
}

.programa-general-row {
  border-bottom: 2px solid #ffffff;
}

.programa-general-row:last-child {
  border-bottom: 0;
}

.programa-general-cell {
  padding: 16px clamp(18px, 3vw, 42px) 16px clamp(34px, 5vw, 82px);
  color: #ffffff;
  font-family: "PP Neue Montreal", system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif;
  font-size: clamp(16px, 1.8vw, 28px);
  line-height: 1.12;
  font-weight: 400;
  letter-spacing: -0.01em;
}

.programa-general-cell--head {
  padding-top: 14px;
  padding-bottom: 14px;
  font-family: "Martian Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
    "Liberation Mono", "Courier New", monospace;
  font-size: clamp(15px, 1.4vw, 22px);
  letter-spacing: 0.03em;
  text-transform: uppercase;
}

.programa-general-cell em {
  font-style: italic;
}

.programa-general-cell--space {
  white-space: nowrap;
}

.programa-general-empty {
  border-top: 2px solid #ffffff;
  border-bottom: 2px solid #ffffff;
  padding: 22px clamp(18px, 3vw, 42px) 22px clamp(34px, 5vw, 82px);
  font-family: "PP Neue Montreal", system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif;
  font-size: clamp(16px, 1.8vw, 28px);
  color: #ffffff;
}

@media (max-width: 720px) {
  .programacio {
    padding-top: 28px;
  }

  .programacio-botons {
    gap: 24px;
  }

  .programacio-boto {
    padding: 6px 9px;
    font-size: 17px;
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
    font-size: clamp(14px, 4.8vw, 22px);
    padding: 12px 12px 12px 18px;
    letter-spacing: -0.02em;
  }

  .programa-dia--xarrades {
    min-height: 280px;
  }

  .programa-xarrades {
    gap: 32px;
  }

  .programa-xarrada {
    grid-template-columns: minmax(0, 1fr) minmax(130px, 0.58fr);
    column-gap: 18px;
    padding: 14px 12px 14px 18px;
  }

  .programa-xarrada-tema,
  .programa-xarrada-line {
    font-size: clamp(14px, 4.8vw, 22px);
    line-height: 1.16;
  }

  .programa-general {
    margin-top: 36px;
  }

  .programa-general-subnav {
    gap: 12px;
    margin-bottom: 18px;
  }

  .programacio-boto--sub {
    font-size: 14px;
  }

  .programa-general-head,
  .programa-general-row {
    grid-template-columns: 84px minmax(0, 1fr) 92px;
  }

  .programa-general-cell {
    padding: 12px 10px 12px 18px;
    font-size: 14px;
  }

  .programa-general-cell--head {
    padding-top: 12px;
    padding-bottom: 12px;
    font-size: 13px;
  }

  .programa-general-empty {
    padding: 16px 10px 16px 18px;
    font-size: 14px;
  }
}
</style>
