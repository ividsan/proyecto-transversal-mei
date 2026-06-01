<script setup lang="ts">
import { ref } from "vue";

const rules = [
  {
    number: "01",
    title: "Convivència i respecte",
    points: [
      "Totes les persones són benvingudes. No es toleraran actituds discriminatòries, ofensives o d’assetjament per motius de gènere, orientació sexual, identitat, origen, religió, edat o qualsevol altra condició personal.",
      "Tracta les altres persones amb respecte, empatia i consideració.",
      "Respecta els límits i el consentiment de les altres persones en tot moment.",
    ],
  },
  {
    number: "02",
    title: "Comunitat i col·laboració",
    points: [
      "Aquest festival es construeix entre totes i tots. Fomenta l’ajuda mútua, la cooperació i el bon ambient.",
      "Cuida els espais comuns i fes un ús responsable de les instal·lacions i dels materials compartits.",
      "Si detectes algun problema o una persona que necessita suport, informa l’organització o ofereix ajuda sempre que siga possible.",
    ],
  },
  {
    number: "03",
    title: "Cura de l’entorn",
    points: [
      "Mantín el recinte net i utilitza els punts de reciclatge habilitats.",
      "Evita generar residus innecessaris i prioritza les opcions reutilitzables.",
      "Respecta tant els espais del festival com l’entorn que l’acull.",
    ],
  },
  {
    number: "04",
    title: "Seguretat i benestar",
    points: [
      "Segueix en tot moment les indicacions de l’organització i del personal del festival.",
      "En cas d’emergència, mantín la calma i dirigix-te als punts indicats.",
      "Qualsevol comportament que pose en risc la seguretat pròpia o la d’altres persones podrà comportar l’expulsió del recinte.",
    ],
  },
  {
    number: "05",
    title: "Participació responsable",
    points: [
      "Gaudix del festival des del respecte i la convivència.",
      "Contribuïx a crear una experiència positiva, inclusiva i enriquidora per a tota la comunitat.",
      "Recorda que cada acció individual té un impacte en el benestar col·lectiu.",
    ],
  },
];

const openIndexes = ref<number[]>([0]);

function toggleRule(index: number) {
  if (openIndexes.value.includes(index)) {
    openIndexes.value = openIndexes.value.filter((openIndex) => openIndex !== index);
    return;
  }

  openIndexes.value = [...openIndexes.value, index];
}
</script>

<template>
  <main class="normes-page">
    <section class="normes-shell">
      <header class="normes-hero">
        <p class="normes-kicker">Informació general</p>
        <h1 class="normes-title">NORMES DEL FESTIVAL</h1>
        <p class="normes-lead">
          Volem que l’experiència siga segura, respectuosa i compartida. Aquestes normes ens ajuden a
          cuidar-nos entre totes i tots.
        </p>
      </header>

      <div class="normes-grid">
        <article v-for="(rule, index) in rules" :key="rule.number" class="norma-card">
          <div class="norma-number-column" aria-hidden="true">
            <span class="norma-number">{{ rule.number }}</span>
          </div>
          <button
            class="norma-trigger"
            type="button"
            :aria-expanded="openIndexes.includes(index)"
            @click="toggleRule(index)"
          >
            <span class="norma-header">
              <span class="norma-title">{{ rule.title }}</span>
              <span class="norma-icon" aria-hidden="true">{{ openIndexes.includes(index) ? "−" : "+" }}</span>
            </span>
          </button>

          <div v-show="openIndexes.includes(index)" class="norma-content">
            <ul class="norma-list">
              <li v-for="point in rule.points" :key="point" class="norma-point">
                {{ point }}
              </li>
            </ul>
          </div>
        </article>
      </div>

      <section class="commitment">
        <h2 class="commitment-title">El nostre compromís</h2>
        <p class="commitment-text">
          Creiem en un festival basat en la inclusió, la col·lectivitat i el suport mutu. Volem que siga
          un espai on compartir, aprendre i celebrar juntes i junts des del respecte, la diversitat i la
          cura comuna.
        </p>
      </section>
    </section>
  </main>
</template>

<style scoped>
.normes-page {
  min-height: 100vh;
  background: #000000;
  color: #ffffff;
  padding: clamp(56px, 6vw, 92px) clamp(28px, 6vw, 104px) 110px;
}

.normes-shell {
  width: min(100%, 1060px);
  margin: 0 auto;
}

.normes-hero {
  display: grid;
  gap: 18px;
  margin-bottom: 52px;
}

.normes-kicker {
  margin: 0;
  font-family: "PP Neue Montreal", system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif;
  font-size: clamp(0.9rem, 1vw, 1.1rem);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: rgba(255, 255, 255, 0.72);
}

.normes-title {
  margin: 0;
  font-family: "Martian Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
    "Liberation Mono", "Courier New", monospace;
  font-size: clamp(2.2rem, 4vw, 4.8rem);
  line-height: 0.92;
  font-weight: 400;
  font-stretch: semi-expanded;
  letter-spacing: -0.06em;
  text-transform: uppercase;
}

.normes-lead {
  max-width: 760px;
  margin: 0;
  font-family: "PP Neue Montreal", system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif;
  font-size: clamp(1rem, 1.35vw, 1.28rem);
  line-height: 1.45;
  color: rgba(255, 255, 255, 0.84);
}

.normes-grid {
  display: grid;
  gap: 24px;
}

.norma-card {
  display: grid;
  grid-template-columns: minmax(96px, 0.24fr) minmax(0, 1fr);
  border: 2px solid rgba(255, 255, 255, 0.9);
  background: rgba(255, 255, 255, 0.02);
}

.norma-number-column {
  grid-column: 1;
  grid-row: 1 / span 2;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 26px 0 26px 26px;
  border-right: 2px solid rgba(255, 255, 255, 0.9);
}

.norma-number {
  font-family: "Martian Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
    "Liberation Mono", "Courier New", monospace;
  font-size: clamp(1.5rem, 2.1vw, 2.3rem);
  line-height: 1;
  font-weight: 400;
  letter-spacing: -0.06em;
}

.norma-trigger {
  grid-column: 2;
  width: 100%;
  padding: 0;
  border: 0;
  background: transparent;
  color: inherit;
  text-align: left;
  cursor: pointer;
}

.norma-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding: 28px clamp(22px, 3vw, 42px) 28px clamp(22px, 3vw, 42px);
}

.norma-content {
  grid-column: 2;
  display: grid;
  padding-bottom: 28px;
}

.norma-title {
  margin: 0;
  font-family: "Martian Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
    "Liberation Mono", "Courier New", monospace;
  font-size: clamp(1.15rem, 1.7vw, 1.8rem);
  line-height: 1.12;
  font-weight: 400;
  font-stretch: semi-expanded;
  letter-spacing: -0.04em;
  text-transform: uppercase;
}

.norma-icon {
  flex: 0 0 auto;
  font-family: "Martian Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
    "Liberation Mono", "Courier New", monospace;
  font-size: clamp(1.4rem, 2vw, 2rem);
  line-height: 1;
}

.norma-list {
  grid-column: 2;
  margin: 0;
  padding: 0 clamp(22px, 3vw, 42px) 0 clamp(22px, 3vw, 42px);
  display: grid;
  gap: 12px;
}

.norma-point {
  font-family: "PP Neue Montreal", system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif;
  font-size: clamp(1rem, 1.25vw, 1.2rem);
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.92);
}

.commitment {
  margin-top: 44px;
  padding-top: 28px;
  border-top: 2px solid rgba(255, 255, 255, 0.9);
  display: grid;
  gap: 14px;
}

.commitment-title {
  margin: 0;
  font-family: "Martian Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
    "Liberation Mono", "Courier New", monospace;
  font-size: clamp(1.05rem, 1.5vw, 1.45rem);
  line-height: 1;
  font-weight: 400;
  font-stretch: semi-expanded;
  letter-spacing: -0.03em;
  text-transform: uppercase;
}

.commitment-text {
  max-width: 900px;
  margin: 0;
  font-family: "PP Neue Montreal", system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif;
  font-size: clamp(1rem, 1.28vw, 1.22rem);
  line-height: 1.62;
  color: rgba(255, 255, 255, 0.88);
}

@media (max-width: 768px) {
  .normes-page {
    padding: 36px 20px 72px;
  }

  .normes-hero {
    margin-bottom: 32px;
  }

  .norma-card {
    grid-template-columns: 68px minmax(0, 1fr);
  }

  .norma-number-column {
    padding: 18px 0 18px 16px;
  }

  .norma-header {
    padding: 20px 16px 20px 16px;
    gap: 16px;
  }

  .norma-content {
    grid-column: 2;
    padding-bottom: 20px;
  }

  .norma-list {
    padding: 0 16px 0 16px;
  }

  .commitment {
    margin-top: 32px;
  }
}
</style>
