<script setup lang="ts">
import { ref } from "vue";

const faqs = [
  {
    kind: "arrival",
    question: "COM ARRIBAR AL FESTIVAL?",
  },
  {
    question: "Com accedisc al festival?",
    answer:
      "L'accés al festival es farà mitjançant el codi QR que rebràs amb la confirmació de la teua entrada. En arribar al recinte, el personal validarà el teu QR i se't col·locarà una polsera identificativa.",
  },
  {
    question: "Puc eixir i tornar a entrar?",
    answer:
      "Sí. La polsera que rebràs en accedir al festival et permetrà entrar i eixir del recinte durant la jornada. És important conservar-la en bon estat i portar-la visible en tot moment.",
  },
  {
    question: "Hi ha zona d'acampada?",
    answer:
      "No. El festival no disposa de zona d'acampada ni d'espais habilitats per a pernoctar.",
  },
  {
    question: "On puc comprar el merch oficial del festival?",
    answer:
      "El punt de venda de merch oficial es trobarà en un dels estands del pati del festival, al costat de la zona de food trucks.",
  },
  {
    question: "Hi haurà menjar i beguda dins del recinte?",
    answer:
      "Sí. El festival comptarà amb una zona de food trucks amb diferents opcions gastronòmiques i de beguda.",
  },
  {
    question: "Hi haurà opcions per a persones amb intoleràncies o dietes específiques?",
    answer:
      "Sí. Alguns dels punts de restauració oferiran opcions vegetarianes, veganes i adaptades a diferents necessitats alimentàries.",
  },
  {
    question: "Es podrà pagar amb targeta?",
    answer:
      "Sí. La majoria dels estands acceptaran pagaments amb targeta, tot i que es recomana portar algun mètode de pagament alternatiu per si hi haguera incidències puntuals.",
  },
  {
    question: "Què passa si perd la meua entrada?",
    answer:
      "Si no trobes el correu amb la teua entrada, revisa la carpeta de correu brossa. Si el problema continua, posa't en contacte amb l'organització abans de l'esdeveniment.",
  },
  {
    question: "Puc entrar amb menjar o beguda de fora?",
    answer:
      "No es permetrà l'entrada de menjar ni beguda de l'exterior, excepte en casos justificats per motius mèdics o necessitats especials.",
  },
  {
    question: "Hi haurà servei d'assistència o punt d'informació?",
    answer:
      "Sí. Durant tot el festival hi haurà un punt d'informació on podràs resoldre dubtes, consultar activitats o comunicar qualsevol incidència.",
  },
  {
    question: "El festival és accessible?",
    answer:
      "Sí. Treballem perquè el festival siga un espai accessible i inclusiu per a totes les persones. Si tens alguna necessitat específica, et recomanem contactar amb l'organització amb antelació.",
  },
  {
    question: "Què he de fer si perd algun objecte?",
    answer:
      "Els objectes trobats es dipositaran al punt d'informació. Si has perdut alguna cosa, adreça't allí perquè puguen ajudar-te.",
  },
  {
    question: "Es poden fer fotografies i vídeos?",
    answer:
      "Sí. Les persones assistents poden fer fotografies i vídeos per a ús personal, sempre respectant la privacitat i el consentiment de les altres persones assistents.",
  },
  {
    question: "Què passa si plou?",
    answer:
      "El festival es mantindrà sempre que les condicions meteorològiques ho permeten i no comprometen la seguretat de les persones assistents. Qualsevol canvi important serà comunicat pels canals oficials del festival.",
  },
];

const openIndex = ref<number | null>(null);

function toggleFaq(index: number) {
  openIndex.value = openIndex.value === index ? null : index;
}
</script>

<template>
  <main class="page">
    <section class="faq-shell" aria-labelledby="dubtes-title">
      <h1 id="dubtes-title" class="page-title">DUBTES FREQÜENTS</h1>

      <div class="faq-list">
        <article v-for="(faq, index) in faqs" :key="faq.question" class="faq-item">
          <button
            class="faq-trigger"
            type="button"
            :aria-expanded="openIndex === index"
            @click="toggleFaq(index)"
          >
            <span class="faq-question">{{ faq.question }}</span>
            <span class="faq-icon" aria-hidden="true">{{ openIndex === index ? "−" : "+" }}</span>
          </button>

          <div v-show="openIndex === index" class="faq-panel">
            <template v-if="faq.kind === 'arrival'">
              <div class="arrival-panel">
                <div class="arrival-copy">
                  <p class="arrival-text">
                    El festival se celebra a Las Naves, al barri de Poblats Marítims de València. La ubicació exacta és
                    Carrer de Joan Verdeguer, 16, 46024 València.
                  </p>

                  <ul class="arrival-list">
                    <li><strong>ADREÇA:</strong> Carrer de Joan Verdeguer, 16, 46024 València</li>
                    <li><strong>RECOMANACIÓ:</strong> Arriba amb antelació per evitar cues i facilitar l'accés.</li>
                    <li><strong>TRANSPORT:</strong> Prioritza transport públic o desplaçament compartit sempre que pugues.</li>
                    <li><strong>ABANS DE VINDRE:</strong> Revisa el trajecte i l'estat del trànsit el mateix dia.</li>
                  </ul>

                  <a
                    class="arrival-link"
                    href="https://www.google.com/maps/search/?api=1&query=Carrer%20de%20Joan%20Verdeguer%2C%2016%2C%2046024%20Val%C3%A8ncia"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Obrir a Google Maps
                  </a>
                </div>

                <div class="arrival-map" aria-label="Mapa de Las Naves, València">
                  <iframe
                    title="Mapa de Las Naves, València"
                    src="https://www.google.com/maps?q=Carrer%20de%20Joan%20Verdeguer%2C%2016%2C%2046024%20Val%C3%A8ncia&output=embed"
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </template>
            <template v-else>
              <p class="faq-answer">{{ faq.answer }}</p>
            </template>
          </div>
        </article>
      </div>
    </section>
  </main>
</template>

<style scoped>
.page {
  position: relative;
  min-height: 100vh;
  background-color: #000000;
  padding: 64px clamp(20px, 4vw, 72px) 96px;
}

.faq-shell {
  position: relative;
  width: min(100%, 980px);
  margin: 0 auto;
  z-index: 1;
}

.page-title {
  position: relative;
  z-index: 2;
  color: #ffffff;
  font-family: "Martian Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
    "Liberation Mono", "Courier New", monospace;
  font-size: clamp(2rem, 3vw, 3.25rem);
  font-weight: 400;
  font-stretch: semi-expanded;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  margin: 0;
}

.faq-list {
  margin-top: 40px;
  display: grid;
  gap: 16px;
  position: relative;
  z-index: 2;
}

.faq-item {
  border: 1px solid #f7f3eb;
  background: rgba(255, 255, 255, 0.03);
}

.faq-trigger {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding: 22px 24px;
  background: transparent;
  border: 0;
  color: #ffffff;
  text-align: left;
  cursor: pointer;
}

.faq-question {
  font-family: "Martian Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
    "Liberation Mono", "Courier New", monospace;
  font-size: clamp(1rem, 1.4vw, 1.3rem);
  font-weight: 400;
  font-stretch: semi-expanded;
  letter-spacing: 0.03em;
  text-transform: uppercase;
}

.faq-icon {
  font-size: 1.6rem;
  line-height: 1;
  flex: 0 0 auto;
}

.faq-panel {
  padding: 0 24px 22px;
}

.faq-answer {
  margin: 0;
  color: #f4efe8;
  font-family: "PP Neue Montreal", system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif;
  font-size: 1.05rem;
  line-height: 1.5;
}

.arrival-panel {
  display: grid;
  grid-template-columns: minmax(0, 1.05fr) minmax(0, 0.95fr);
  gap: 20px;
  align-items: stretch;
}

.arrival-copy {
  display: flex;
  flex-direction: column;
  gap: 14px;
  height: 100%;
}

.arrival-title {
  margin: 0;
  color: #ffffff;
  font-family: "Martian Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
    "Liberation Mono", "Courier New", monospace;
  font-size: clamp(1.2rem, 1.9vw, 1.8rem);
  font-weight: 400;
  font-stretch: semi-expanded;
  letter-spacing: 0.02em;
  text-transform: uppercase;
}

.arrival-text {
  margin: 0;
  color: #f4efe8;
  font-family: "PP Neue Montreal", system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif;
  font-size: 1.02rem;
  line-height: 1.6;
}

.arrival-list {
  margin: 0;
  padding-left: 0;
  list-style: none;
  display: grid;
  gap: 10px;
  color: #f4efe8;
  font-family: "PP Neue Montreal", system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif;
  font-size: 1rem;
  line-height: 1.5;
}

.arrival-list li {
  text-align: left;
}

.arrival-link {
  align-self: flex-start;
  margin-top: auto;
  border: 1px solid #f7f3eb;
  color: #ffffff;
  text-decoration: none;
  padding: 10px 14px;
  font-family: "Martian Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
    "Liberation Mono", "Courier New", monospace;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  transition: background-color 0.2s ease, color 0.2s ease;
}

.arrival-link:hover {
  background: #ffffff;
  color: #000000;
}

.arrival-map {
  min-height: 320px;
  border: 1px solid #f7f3eb;
  background: #111111;
  overflow: hidden;
}

.arrival-map iframe {
  display: block;
  width: 100%;
  height: 100%;
  min-height: 320px;
  border: 0;
}

@media (max-width: 640px) {
  .page {
    padding: 42px 20px 72px;
  }

  .faq-list {
    margin-top: 28px;
  }

  .faq-trigger {
    padding: 18px 16px;
  }

  .faq-panel {
    padding: 0 16px 18px;
  }

  .arrival-panel {
    grid-template-columns: 1fr;
  }

  .arrival-map,
  .arrival-map iframe {
    min-height: 260px;
  }
}
</style>
