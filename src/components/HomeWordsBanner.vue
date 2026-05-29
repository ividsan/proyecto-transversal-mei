<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from "vue";

const sectionRef = ref<HTMLElement | null>(null);
const scrollProgress = ref(0);

let rafId: number | undefined;

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

function updateScrollProgress() {
  const section = sectionRef.value;

  if (!section || typeof window === "undefined") {
    return;
  }

  const rect = section.getBoundingClientRect();
  const viewportHeight = window.innerHeight || 1;
  const totalTravel = viewportHeight + rect.height;

  scrollProgress.value = clamp((viewportHeight - rect.top) / totalTravel, 0, 1);
}

function scheduleUpdate() {
  if (rafId !== undefined || typeof window === "undefined") {
    return;
  }

  rafId = window.requestAnimationFrame(() => {
    rafId = undefined;
    updateScrollProgress();
  });
}

const bannerStyles = computed(() => ({
  "--scroll-progress": scrollProgress.value.toFixed(4),
}));

onMounted(() => {
  updateScrollProgress();
  window.addEventListener("scroll", scheduleUpdate, { passive: true });
  window.addEventListener("resize", scheduleUpdate);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", scheduleUpdate);
  window.removeEventListener("resize", scheduleUpdate);

  if (rafId !== undefined) {
    window.cancelAnimationFrame(rafId);
  }
});
</script>

<template>
  <section
    ref="sectionRef"
    class="home-words-section"
    aria-label="Paraules clau del festival"
  >
    <div class="home-words-sticky" :style="bannerStyles">
      <p class="word-line word-line--diversitat">diversitat</p>
      <p class="word-line word-line--cultura">cultura</p>
      <p class="word-line word-line--creacio">creació</p>
    </div>
  </section>
</template>

<style scoped>
.home-words-section {
  position: relative;
  height: 110vh;
  background: #000000;
  overflow: hidden;
}

.home-words-sticky {
  position: sticky;
  top: 0;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: clamp(0.15rem, 1vw, 0.7rem);
  padding: clamp(1.5rem, 4vw, 4rem) 0;
  overflow: hidden;
  --scroll-progress: 0;
}

.word-line {
  margin: 0;
  padding: 0;
  white-space: nowrap;
  line-height: 0.8;
  font-family: "Martian Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
    "Liberation Mono", "Courier New", monospace;
  font-size: clamp(6.6rem, 17.5vw, 17rem);
  font-weight: 400;
  font-stretch: semi-expanded;
  letter-spacing: -0.05em;
  text-transform: uppercase;
  color: #f7f3eb;
  will-change: transform;
}

.word-line--diversitat {
  width: 100vw;
  margin-left: calc(50% - 50vw);
  text-align: left;
  transform: translateX(calc(24vw - (var(--scroll-progress) * 72vw)));
}

.word-line--cultura {
  width: 100vw;
  margin-left: calc(50% - 50vw);
  text-align: left;
  transform: translateX(calc(var(--scroll-progress) * 28vw));
}

.word-line--creacio {
  transform: translateX(calc(44vw - (var(--scroll-progress) * 34vw)));
}

@media (max-width: 820px) {
  .home-words-section {
    height: 95vh;
  }

  .word-line {
    font-size: clamp(4.4rem, 24vw, 8.8rem);
    letter-spacing: -0.04em;
  }

  .word-line--diversitat {
    width: 100vw;
    margin-left: calc(50% - 50vw);
    text-align: left;
    transform: translateX(calc(14vw - (var(--scroll-progress) * 54vw)));
  }

  .word-line--cultura {
    width: 100vw;
    margin-left: calc(50% - 50vw);
    text-align: left;
    transform: translateX(calc(var(--scroll-progress) * 20vw));
  }

  .word-line--creacio {
    transform: translateX(calc(36vw - (var(--scroll-progress) * 26vw)));
  }
}
</style>
