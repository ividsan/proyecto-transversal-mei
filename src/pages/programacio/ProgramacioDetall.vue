<script setup lang="ts">
import { computed } from "vue";
import { RouterLink, useRoute } from "vue-router";
import {
  findProgramacioEntry,
  getWorkshopDetail,
  getTalkDetail,
  type ProgramacioTalk,
  type ProgramacioSection,
} from "@/data/programacio";

const route = useRoute();

const section = computed(() => route.params.section as ProgramacioSection);
const slug = computed(() => String(route.params.slug ?? ""));

const entry = computed(() => findProgramacioEntry(section.value, slug.value));
const workshopDetail = computed(() => getWorkshopDetail(slug.value));
const talkDetail = computed(() => getTalkDetail(slug.value));
const talkEntry = computed<ProgramacioTalk | null>(() => {
  return entry.value && "left" in entry.value ? entry.value : null;
});
const backSection = computed(() => (section.value === "xarrades" ? "xarrades" : "tallers"));
const talkParticipants = computed(() => {
  if (!talkEntry.value) {
    return [];
  }

  return [...talkEntry.value.left, ...talkEntry.value.right];
});
</script>

<template>
  <main class="programacio-detall">
    <section v-if="entry && section === 'tallers'" class="programacio-detall-card">
      <h1 class="programacio-detall-title">{{ entry.title }}</h1>

      <p class="programacio-detall-intro">
        {{ workshopDetail?.intro ?? "Aquest taller forma part de la programació del festival." }}
      </p>

      <div class="programacio-detall-meta">
        <div class="programacio-meta-item">
          <span class="programacio-meta-label">Horari</span>
          <span class="programacio-meta-value">{{ workshopDetail?.when ?? "Pendent de definir" }}</span>
        </div>
        <div class="programacio-meta-item">
          <span class="programacio-meta-label">Lloc</span>
          <span class="programacio-meta-value">{{ workshopDetail?.place ?? "Pendent de definir" }}</span>
        </div>
        <div class="programacio-meta-item">
          <span class="programacio-meta-label">Durada</span>
          <span class="programacio-meta-value">{{ workshopDetail?.duration ?? "Pendent de definir" }}</span>
        </div>
        <div class="programacio-meta-item">
          <span class="programacio-meta-label">Places</span>
          <span class="programacio-meta-value">{{ workshopDetail?.capacity ?? "Pendent de definir" }}</span>
        </div>
        <div class="programacio-meta-item">
          <span class="programacio-meta-label">Nivell</span>
          <span class="programacio-meta-value">{{ workshopDetail?.level ?? "Pendent de definir" }}</span>
        </div>
      </div>

      <div class="programacio-detall-grid">
        <article class="programacio-detall-panel programacio-detall-panel--wide">
          <p class="programacio-detall-panel-title">Què farem</p>
          <p class="programacio-detall-panel-copy">
            {{ workshopDetail?.description ?? "Ben aviat compartirem més informació sobre aquest taller." }}
          </p>
        </article>

        <article class="programacio-detall-panel">
          <p class="programacio-detall-panel-title">Material recomanat</p>
          <ul class="programacio-detall-list">
            <li
              v-for="item in workshopDetail?.materials ?? []"
              :key="item"
              class="programacio-detall-list-item"
            >
              {{ item }}
            </li>
          </ul>
        </article>

        <article class="programacio-detall-panel">
          <p class="programacio-detall-panel-title">Punts clau</p>
          <ul class="programacio-detall-list">
            <li
              v-for="item in workshopDetail?.highlights ?? []"
              :key="item"
              class="programacio-detall-list-item"
            >
              {{ item }}
            </li>
          </ul>
        </article>

        <article class="programacio-detall-panel programacio-detall-panel--wide">
          <p class="programacio-detall-panel-title">Nota</p>
          <p class="programacio-detall-panel-copy">
            {{ workshopDetail?.note ?? "Consulta el programa general per veure l'horari complet." }}
          </p>
        </article>
      </div>

      <RouterLink :to="{ path: '/programacio', query: { section: backSection } }" class="programacio-detall-back">
        Tornar al programa
      </RouterLink>
    </section>

    <section v-else-if="talkEntry" class="programacio-detall-card">
      <h1 class="programacio-detall-title">{{ talkEntry.title }}</h1>

      <p class="programacio-detall-intro">
        {{ talkDetail?.intro ?? "Aquesta xarrada forma part de la programació del festival." }}
      </p>

      <div class="programacio-detall-meta">
        <div class="programacio-meta-item">
          <span class="programacio-meta-label">Horari</span>
          <span class="programacio-meta-value">{{ talkDetail?.when ?? "Pendent de definir" }}</span>
        </div>
        <div class="programacio-meta-item">
          <span class="programacio-meta-label">Lloc</span>
          <span class="programacio-meta-value">{{ talkDetail?.place ?? "Pendent de definir" }}</span>
        </div>
        <div class="programacio-meta-item">
          <span class="programacio-meta-label">Durada</span>
          <span class="programacio-meta-value">{{ talkDetail?.duration ?? "Pendent de definir" }}</span>
        </div>
        <div class="programacio-meta-item">
          <span class="programacio-meta-label">Format</span>
          <span class="programacio-meta-value">{{ talkDetail?.format ?? "Pendent de definir" }}</span>
        </div>
      </div>

      <div class="programacio-detall-grid">
        <article class="programacio-detall-panel programacio-detall-panel--wide">
          <p class="programacio-detall-panel-title">¿Què es parlarà?</p>
          <p class="programacio-detall-panel-copy">
            {{ talkDetail?.description ?? "Ben aviat compartirem més informació sobre aquesta xarrada." }}
          </p>
        </article>

        <article class="programacio-detall-panel">
          <p class="programacio-detall-panel-title">Participants</p>
          <ul class="programacio-detall-list">
            <li v-for="item in talkParticipants" :key="item" class="programacio-detall-list-item">
              {{ item }}
            </li>
          </ul>
        </article>

        <article class="programacio-detall-panel">
          <p class="programacio-detall-panel-title">Temes</p>
          <ul class="programacio-detall-list">
            <li v-for="item in talkDetail?.topics ?? []" :key="item" class="programacio-detall-list-item">
              {{ item }}
            </li>
          </ul>
        </article>

        <article class="programacio-detall-panel programacio-detall-panel--wide">
          <p class="programacio-detall-panel-title">Nota</p>
          <p class="programacio-detall-panel-copy">
            {{ talkDetail?.note ?? "Consulta el programa general per veure l'horari complet." }}
          </p>
        </article>
      </div>

      <RouterLink :to="{ path: '/programacio', query: { section: 'xarrades' } }" class="programacio-detall-back">
        Tornar al programa
      </RouterLink>
    </section>

    <section v-else class="programacio-detall-card programacio-detall-card--empty">
      <p class="programacio-detall-kicker">NO TROBAT</p>
      <h1 class="programacio-detall-title">Aquesta activitat no existeix</h1>
      <RouterLink :to="{ path: '/programacio', query: { section: backSection } }" class="programacio-detall-back">
        Tornar al programa
      </RouterLink>
    </section>
  </main>
</template>

<style scoped>
.programacio-detall {
  min-height: 100vh;
  background: #000000;
  padding: 48px 20px 72px;
  display: flex;
  align-items: stretch;
  justify-content: center;
}

.programacio-detall-card {
  width: min(100%, 1320px);
  display: flex;
  flex-direction: column;
  gap: 20px;
  color: #ffffff;
}

.programacio-detall-card--empty {
  min-height: 48vh;
  justify-content: center;
}

.programacio-detall-kicker {
  margin: 0;
  font-family: "Martian Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
    "Liberation Mono", "Courier New", monospace;
  font-size: 0.9rem;
  letter-spacing: 0.24em;
  text-transform: uppercase;
  color: #ffffff;
}

.programacio-meta-label,
.programacio-detall-panel-title {
  margin: 0;
  font-family: "Martian Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
    "Liberation Mono", "Courier New", monospace;
  font-size: 1rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #ffffff;
}

.programacio-detall-title {
  margin: 0;
  color: #ffffff;
  font-family: "Martian Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
    "Liberation Mono", "Courier New", monospace;
  font-size: clamp(2rem, 4.2vw, 4.6rem);
  font-weight: 400;
  font-stretch: semi-expanded;
  letter-spacing: -0.05em;
  text-transform: uppercase;
  text-wrap: balance;
  white-space: nowrap;
}

.programacio-detall-intro {
  margin: 0;
  max-width: 100%;
  font-family: "PP Neue Montreal", "Helvetica Neue", Arial, sans-serif;
  font-size: clamp(1.25rem, 1.65vw, 1.6rem);
  line-height: 1.34;
  color: #ffffff;
  white-space: nowrap;
}

.programacio-detall-meta {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 20px;
}

.programacio-meta-item,
.programacio-detall-panel {
  border: 1px solid #ffffff;
  background: transparent;
}

.programacio-meta-item {
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 12px 14px 14px;
}

.programacio-meta-value {
  font-family: "PP Neue Montreal", "Helvetica Neue", Arial, sans-serif;
  font-size: clamp(1.25rem, 1.65vw, 1.6rem);
  line-height: 1.28;
  color: #ffffff;
  white-space: pre-line;
}

.programacio-detall-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 20px;
}

.programacio-detall-panel {
  padding: 14px 14px 16px;
  min-height: 100%;
}

.programacio-detall-panel--wide {
  grid-column: 1 / -1;
}

.programacio-detall-panel-copy {
  margin: 0;
  font-family: "PP Neue Montreal", "Helvetica Neue", Arial, sans-serif;
  font-size: clamp(1.25rem, 1.65vw, 1.6rem);
  line-height: 1.48;
  color: #ffffff;
}

.programacio-detall-list {
  margin: 0;
  padding-left: 0;
  list-style: none;
  display: grid;
  gap: 8px;
}

.programacio-detall-list-item {
  font-family: "PP Neue Montreal", "Helvetica Neue", Arial, sans-serif;
  font-size: clamp(1.25rem, 1.65vw, 1.6rem);
  line-height: 1.38;
  color: #ffffff;
}

.programacio-detall-back {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  min-height: 48px;
  padding: 12px 18px;
  border: 1px solid #ffffff;
  color: #ffffff;
  text-decoration: none;
  font-family: "Martian Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
    "Liberation Mono", "Courier New", monospace;
  font-size: 1.05rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.programacio-detall-back:hover {
  background: #ffffff;
  color: #000000;
}

@media (max-width: 960px) {
  .programacio-detall-meta {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 720px) {
  .programacio-detall {
    padding-top: 28px;
    padding-bottom: 56px;
  }

  .programacio-detall-card {
    gap: 16px;
  }

  .programacio-detall-title {
    font-size: clamp(1.9rem, 9vw, 3rem);
    letter-spacing: -0.06em;
    white-space: normal;
  }

  .programacio-detall-intro {
    font-size: 1.15rem;
    white-space: normal;
  }

  .programacio-detall-meta,
  .programacio-detall-grid {
    grid-template-columns: 1fr;
  }

  .programacio-meta-item,
  .programacio-detall-panel {
    padding: 12px 12px 14px;
  }

  .programacio-detall-back {
    min-height: 42px;
    padding: 10px 14px;
    font-size: 0.92rem;
  }
}
</style>
