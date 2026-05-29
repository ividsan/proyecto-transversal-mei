<script setup lang="ts">
import { computed, ref } from "vue"
import { RouterLink } from "vue-router"

type ProgramSection = "musica" | "tallers" | "xarrades" | "general"
type ProgramDay<T> = {
  dia: string
  elements: T[]
}

const sections = [
  { id: "musica", text: "MÚSICA" },
  { id: "tallers", text: "TALLERS" },
  { id: "xarrades", text: "XARRADES" },
  { id: "general", text: "GENERAL", imatge: "/imagenes/programacio/general.png" },
] as const

const activeSection = ref<ProgramSection>("musica")

const generalImage = computed(() => {
  const section = sections.find((item) => item.id === activeSection.value)
  return section && "imatge" in section ? section.imatge : undefined
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
      { text: "BRIATZONTIFA" },
    ] satisfies ProgramTextItem[],
  },
  {
    dia: "25",
    elements: [
      { text: "AMARAL" },
      { text: "LÁGRIMAS DE SANGRE" },
      { text: "FADES", ruta: "/artista/fades" },
      { text: "LA GOSSA SORDA", ruta: "/artista/la-gossa-sorda" },
      { text: "JIMENA AMARILLO", ruta: "/artista/jimena-amarillo" },
      { text: "ARREAK" },
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
          <a v-for="element in day.elements" :key="element" class="programa-element" href="#">
            {{ element }}
          </a>
        </div>
      </div>
    </section>

    <section v-else-if="activeSection === 'xarrades'" class="programa-graella" aria-label="Programació de xarrades">
      <div v-for="day in xarradesProgram" :key="day.dia" class="programa-dia programa-dia--xarrades">
        <div class="programa-dia-numero">{{ day.dia }}</div>
        <div class="programa-xarrades">
          <article v-for="talk in day.talks" :key="talk.tema" class="programa-xarrada">
            <div class="programa-xarrada-col programa-xarrada-col--left">
              <span class="programa-xarrada-tema">{{ talk.tema }}</span>
              <span v-for="line in talk.left" :key="line" class="programa-xarrada-line">{{ line }}</span>
            </div>
            <div class="programa-xarrada-col programa-xarrada-col--right">
              <span v-for="line in talk.right" :key="line" class="programa-xarrada-line">{{ line }}</span>
            </div>
          </article>
        </div>
      </div>
    </section>

    <img v-else-if="generalImage" class="programacio-imatge" :src="generalImage" alt="" />
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

.programacio-imatge {
  display: block;
  width: min(100%, 1180px);
  height: auto;
  margin: 48px auto 0;
  clip-path: inset(1px);
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
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  border-left: 2px solid #ffffff;
}

.programa-element {
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
  text-transform: uppercase;
  font-size: clamp(18px, 2.6vw, 34px);
  line-height: 1.12;
  font-weight: 400;
  letter-spacing: -0.02em;
}

.programa-xarrada-tema {
  margin-bottom: 0.35em;
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
}
</style>
