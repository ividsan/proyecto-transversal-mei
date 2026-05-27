<script lang="ts" setup>
import LogoEsclat from "@/components/logoEsclat.vue";
import { computed, onBeforeUnmount, onMounted, ref } from "vue";

const targetDate = new Date("2026-10-23T00:00:00+02:00");
const now = ref(new Date());
const activeSlideIndex = ref(0);
const touchStartY = ref<number | null>(null);

const homeImages = [
  "/fotosHome/amaia.png",
  "/fotosHome/elite.png",
  "/fotosHome/fades.png",
  "/fotosHome/julieta.png",
  "/fotosHome/laGossaSorda.png",
  "/fotosHome/malaGestion.png",
  "/fotosHome/sandraMonfort.png",
  "/fotosHome/zetak.png",
];

let timerId: number | undefined;
let wheelDeltaAccumulator = 0;

const countdown = computed(() => {
  const difference = targetDate.getTime() - now.value.getTime();

  if (difference <= 0) {
    return {
      days: 0,
      minutes: 0,
      seconds: 0,
    };
  }

  const totalSeconds = Math.floor(difference / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const minutes = Math.floor((totalSeconds % 86400) / 60);
  const seconds = totalSeconds % 60;

  return {
    days,
    minutes,
    seconds,
  };
});

const activeImage = computed(() => homeImages[activeSlideIndex.value]);

function goToNextSlide() {
  activeSlideIndex.value = (activeSlideIndex.value + 1) % homeImages.length;
}

function goToPreviousSlide() {
  activeSlideIndex.value = (activeSlideIndex.value - 1 + homeImages.length) % homeImages.length;
}

function handleWindowWheel(event: WheelEvent) {
  wheelDeltaAccumulator += event.deltaY;

  if (wheelDeltaAccumulator >= 120) {
    goToNextSlide();
    wheelDeltaAccumulator = 0;
  }

  if (wheelDeltaAccumulator <= -120) {
    goToPreviousSlide();
    wheelDeltaAccumulator = 0;
  }
}

function handleTouchStart(event: TouchEvent) {
  touchStartY.value = event.touches[0]?.clientY ?? null;
}

function handleTouchEnd(event: TouchEvent) {
  if (touchStartY.value === null) {
    return;
  }

  const touchEndY = event.changedTouches[0]?.clientY ?? touchStartY.value;
  const deltaY = touchStartY.value - touchEndY;

  if (Math.abs(deltaY) > 35) {
    if (deltaY > 0) {
      goToNextSlide();
    } else {
      goToPreviousSlide();
    }
  }

  touchStartY.value = null;
}

onMounted(() => {
  timerId = window.setInterval(() => {
    now.value = new Date();
  }, 1000);

  window.addEventListener("wheel", handleWindowWheel, { passive: true });
});

onBeforeUnmount(() => {
  if (timerId !== undefined) {
    window.clearInterval(timerId);
  }

  window.removeEventListener("wheel", handleWindowWheel);
});
</script>

<template>
  <main class="home">
    <LogoEsclat estilus="home-logo" />

    <section
      class="home-carousel"
      aria-label="Cartell d'artistes destacats"
      @touchstart.passive="handleTouchStart"
      @touchend.passive="handleTouchEnd"
    >
      <img
        class="home-carousel-image"
        :src="activeImage" alt="Cartell artista ESCLAT"
      />
    </section>

    <section class="countdown-strip" aria-label="Cuenta atras para el 23 de octubre de 2026">
      <span class="countdown-label">QUEDEN</span>
      <span class="countdown-value">{{ countdown.days }} DÍES</span>
      <span class="countdown-value">{{ countdown.minutes }} MINUTS</span>
      <span class="countdown-value">{{ countdown.seconds }} SEGONS</span>
    </section>

    <section id="que-som" class="about-section" aria-labelledby="que-som-title">
      <div class="about-heading-row">
        <h1 id="que-som-title" class="about-title">QUÉ SOM</h1>
        <span class="about-title-bar" aria-hidden="true"></span>
      </div>

      <div class="about-copy">
        <p>
          Esclat naix del desig de recuperar el sentiment de comunitat i de pertinença a
          través del soroll compartit. Més que un festival de música, és un open espai on concerts,
          tallers, xarrades i activitats conviuen per crear connexions reals entre persones i
          compartir emocions, idees i experiències.
        </p>

        <p>
          Volem allunyar-nos de l’individualisme i la rapidesa actual per tornar a una manera
          més humana i col·lectiva de viure la cultura. A Esclat, creiem en la música com un
          punt de trobada, un lloc on sentir-se part d’alguna cosa compartida i on totes les
          persones són benvingudes.
        </p>
      </div>
    </section>
  </main>
</template>

<style scoped>
.home {
  position: relative;
  min-height: 550vh;
  background: #222323;
  padding-top: 1300px;
  color: #f5f1ea;
}

.home-logo {
  position: absolute;
  top: -800px;
  left: 50%;
  width: min(100rem, 200vw);
  height: auto;
  transform: translateX(-50%);
}

.home-carousel {
  position: absolute;
  top: 340px;
  left: 50%;
  width: min(115rem, 200vw);
  display: grid;
  gap: 1rem;
  transform: translateX(-50%);
  touch-action: pan-y;
}

.home-carousel-image {
  width: 100%;
  height: auto;
  display: block;
  user-select: none;
}

.countdown-strip {
  
  width: 100%;
  height: 130px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: clamp(1rem, 4vw, 4rem);
  padding: 0 1rem;
  background: #ffffff;
  color: #111111;
  overflow: hidden;
  font-family: "Martian Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
    "Liberation Mono", "Courier New", monospace;
  font-size: clamp(60px, 2.2vw, 65px);
  font-weight: 400;
  font-stretch: semi-expanded;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.countdown-label,
.countdown-value {
  white-space: nowrap;
  line-height: 1;
}

.about-section {
  width: 100%;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding: 140px 24px 80px;
  box-sizing: border-box;
}

.about-heading-row {
  display: flex;
  align-items: baseline;
  gap: 14px;
  width: 100%;
}

.about-title {
  margin: 0;
  font-family: "Martian Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
    "Liberation Mono", "Courier New", monospace;
  font-size: clamp(1.8rem, 3vw, 2.2rem);
  font-weight: 400;
  font-stretch: semi-expanded;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #f7f3eb;
}

.about-title-bar {
  width: clamp(150px, 22vw, 240px);
  height: 2em;
  background: #f7f3eb;
  flex-shrink: 0;
  display: inline-block;
}

.about-copy {
  width: 100%;
  margin-top: 36px;
  font-family: "PP Neue Montreal", "Helvetica Neue", Arial, sans-serif;
  font-size: clamp(1.45rem, 2vw, 1.9rem);
  line-height: 1.16;
  letter-spacing: -0.02em;
  color: #f4efe8;
  text-align: left;
  white-space: normal;
  word-break: normal;
  overflow-wrap: normal;
  hyphens: none;
}

.about-copy p {
  margin: 0;
}

.about-copy p + p {
  margin-top: 30px;
}

@media (max-width: 820px) {
  .home {
    padding-top: 1180px;
  }

  .home-logo {
    top: -360px;
    width: min(52rem, 180vw);
  }

  .home-carousel {
    top: 300px;
    width: min(22rem, 86vw);
    gap: 0.75rem;
  }

  .countdown-strip {
    justify-content: flex-start;
    gap: 1rem;
    padding-inline: 0.85rem;
    font-size: 16px;
    overflow-x: auto;
    overflow-y: hidden;
    scrollbar-width: none;
  }

  .countdown-strip::-webkit-scrollbar {
    display: none;
  }

  .about-section {
    padding: 40px 24px 56px;
  }

  .about-title {
    font-size: 1.4rem;
  }

  .about-title-bar {
    width: min(34vw, 140px);
    height: 18px;
    margin-top: 2px;
  }
  
  .about-copy {
    font-size: 1.15rem;
  }
}
</style>



