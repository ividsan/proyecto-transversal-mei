<script lang="ts" setup>
import LogoEsclat from "@/components/logoEsclat.vue";
import ArtistasCarousel from "@/components/ArtistasCarousel.vue";
import HomeWordsBanner from "@/components/HomeWordsBanner.vue";
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
      <img class="home-carousel-image" :src="activeImage" alt="Cartell artista ESCLAT" />
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
          través del soroll compartit. Més que un festival de música, és un open espai on
          concerts, tallers, xarrades i activitats conviuen per crear connexions reals entre
          persones i compartir emocions, idees i experiències.
        </p>

        <p>
          Volem allunyar-nos de l’individualisme i la rapidesa actual per tornar a una manera
          més humana i col·lectiva de viure la cultura. A Esclat, creiem en la música com un
          punt de trobada, un lloc on sentir-se part d’alguna cosa compartida i on totes les
          persones són benvingudes.
        </p>
      </div>
    </section>

    <ArtistasCarousel />
    <HomeWordsBanner />
  </main>
</template>

<style scoped>
.home {
  position: relative;
  min-height: 120vh;
  background: #000000;
  padding-top: 1120px;
  color: #f5f1ea;
}

.home-logo {
  position: absolute;
  top: -690px;
  left: 50%;
  width: min(82rem, 142vw);
  height: auto;
  transform: translateX(-50%);
  pointer-events: none;
}

.home-carousel {
  position: absolute;
  top: 300px;
  left: 50%;
  width: min(92rem, calc(100vw - 48px));
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
  height: 112px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: clamp(1rem, 3vw, 3rem);
  padding: 0 clamp(24px, 5vw, 72px);
  background: #ffffff;
  color: #000000;
  overflow: hidden;
  font-family: "Martian Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
    "Liberation Mono", "Courier New", monospace;
  font-size: clamp(38px, 3vw, 52px);
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
  width: min(100%, 1320px);
  margin-left: auto;
  margin-right: auto;
  padding: 112px 0 56px;
  box-sizing: border-box;
}

.about-heading-row {
  display: flex;
  align-items: baseline;
  gap: 14px;
  width: fit-content;
}

.about-title {
  margin: 0;
  font-family: "Martian Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
    "Liberation Mono", "Courier New", monospace;
  font-size: clamp(1.9rem, 2.4vw, 2.25rem);
  font-weight: 400;
  font-stretch: semi-expanded;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #f7f3eb;
}

.about-title-bar {
  width: clamp(130px, 18vw, 220px);
  height: 1.75em;
  background: #f7f3eb;
  flex-shrink: 0;
  display: inline-block;
}

.about-copy {
  width: 100%;
  margin-top: 32px;
  font-family: "PP Neue Montreal", "Helvetica Neue", Arial, sans-serif;
  font-size: clamp(1.25rem, 1.65vw, 1.6rem);
  line-height: 1.22;
  letter-spacing: 0;
  color: #f4efe8;
  text-align: justify;
  text-justify: inter-word;
  white-space: normal;
  word-break: normal;
  overflow-wrap: normal;
  hyphens: none;
}

.about-copy p {
  margin: 0;
}

.about-copy p + p {
  margin-top: 24px;
}

@media (max-width: 820px) {
  .home {
    padding-top: 940px;
  }

  .home-logo {
    top: -300px;
    width: min(42rem, 150vw);
  }

  .home-carousel {
    top: 260px;
    width: min(20rem, 84vw);
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
    width: 100%;
    padding: 40px 24px 24px;
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
