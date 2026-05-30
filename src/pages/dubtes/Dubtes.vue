<script setup lang="ts">
import { ref } from "vue";

const faqs = [
  {
    question: "COM ACCEDIR AL FESTIVAL?",
    answer:
      "Text de prova. Ací anirà la resposta definitiva sobre com arribar i entrar al festival.",
  },
  {
    question: "NORMES DEL FESTIVAL",
    answer:
      "Text de prova. Ací anirà la resposta definitiva amb les normes i recomanacions del festival.",
  },
  {
    question: "ON ES COMPRA EL MERCH?",
    answer:
      "Text de prova. Ací anirà la resposta definitiva sobre on i com comprar el merch.",
  },
  {
    question: "HI HA ZONA D'ACAMPADA?",
    answer:
      "Text de prova. Ací anirà la resposta definitiva sobre una altra pregunta freqüent del festival.",
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
            <p class="faq-answer">{{ faq.answer }}</p>
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
}
</style>
