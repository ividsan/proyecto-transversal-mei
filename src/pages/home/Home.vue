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
const trackTitle = "Tomé Café · Carolina Durante";
const trackCover = "/artistesHome/carolinaduranteEditada.png";
const trackSrc = "/audio/tome-cafe-carolina-durante.mp3";

const audioElement = ref<HTMLAudioElement | null>(null);
const isPlaying = ref(false);
const musicPlayerBottom = ref(0);

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

async function toggleTrackPlayback() {
  const audio = audioElement.value;

  if (!audio) {
    return;
  }

  if (audio.paused) {
    try {
      await audio.play();
      isPlaying.value = true;
    } catch {
      isPlaying.value = false;
    }
    return;
  }

  audio.pause();
  isPlaying.value = false;
}

function handleTrackEnded() {
  isPlaying.value = false;
}

function updateMusicPlayerPosition() {
  const footer = document.querySelector("footer");

  if (!footer) {
    musicPlayerBottom.value = 0;
    return;
  }

  const footerRect = footer.getBoundingClientRect();
  musicPlayerBottom.value = Math.max(0, window.innerHeight - footerRect.top);
}

onMounted(() => {
  timerId = window.setInterval(() => {
    now.value = new Date();
  }, 1000);

  window.addEventListener("wheel", handleWindowWheel, { passive: true });
  window.addEventListener("scroll", updateMusicPlayerPosition, { passive: true });
  window.addEventListener("resize", updateMusicPlayerPosition);
  updateMusicPlayerPosition();
});

onBeforeUnmount(() => {
  if (timerId !== undefined) {
    window.clearInterval(timerId);
  }

  window.removeEventListener("wheel", handleWindowWheel);
  window.removeEventListener("scroll", updateMusicPlayerPosition);
  window.removeEventListener("resize", updateMusicPlayerPosition);
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
          través del soroll compartit. Més que un festival de música, és un espai obert on
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

    <section
      class="music-player-shell"
      :style="{ bottom: `${musicPlayerBottom}px` }"
      aria-label="Reproductor de cançó"
    >
      <audio
        ref="audioElement"
        :src="trackSrc"
        preload="metadata"
        @play="isPlaying = true"
        @pause="isPlaying = false"
        @ended="handleTrackEnded"
      ></audio>

      <div class="music-player">
        <img class="music-cover" :src="trackCover" alt="Portada de la cançó" />

        <button
          class="music-play"
          type="button"
          :aria-label="isPlaying ? 'Pausa la cançó' : 'Reprodueix la cançó'"
          @click="toggleTrackPlayback"
        >
          <span class="music-play-icon" aria-hidden="true">{{ isPlaying ? "❚❚" : "▶" }}</span>
        </button>

        <div class="music-copy">
          <p class="music-title">{{ trackTitle }}</p>
          <p class="music-subtitle">ALBUM · ELIGE TU PROPIA AVENTURA</p>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.home {
  position: relative;
  min-height: 120vh;
  background: #000000;
  padding-top: 1120px;
  padding-bottom: 84px;
  color: #f5f1ea;
  overflow-x: clip;
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
  min-height: clamp(88px, 8vw, 112px);
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  align-content: center;
  justify-content: center;
  gap: clamp(0.45rem, 1.4vw, 3rem);
  padding: clamp(0.6rem, 1.25vw, 0.9rem) clamp(16px, 4vw, 72px);
  background: #ffffff;
  color: #000000;
  overflow: hidden;
  font-family: "Martian Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
    "Liberation Mono", "Courier New", monospace;
  font-size: clamp(14px, 3vw, 52px);
  font-weight: 400;
  font-stretch: semi-expanded;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.countdown-label,
.countdown-value {
  flex: 0 0 auto;
  white-space: nowrap;
  line-height: 1;
}

.about-section {
  width: min(calc(100% - clamp(24px, 4vw, 72px) * 2), 1320px);
  margin-left: auto;
  margin-right: auto;
  padding: clamp(64px, 8vw, 112px) 0 clamp(32px, 4vw, 56px);
  box-sizing: border-box;
}

.about-heading-row {
  display: flex;
  align-items: baseline;
  gap: clamp(10px, 1.4vw, 14px);
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

.music-player-shell {
  z-index: 60;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  will-change: bottom;
}

.music-player {
  width: 100%;
  min-height: 72px;
  display: grid;
  grid-template-columns: 62px 56px 1fr;
  align-items: center;
  gap: 14px;
  padding: 10px 16px;
  background: #0b0b0b;
  border-top: 1px solid rgba(255, 255, 255, 0.14);
  box-shadow: 0 -10px 30px rgba(0, 0, 0, 0.28);
}

.music-cover {
  width: 62px;
  height: 62px;
  object-fit: cover;
  display: block;
}

.music-play {
  width: 44px;
  height: 44px;
  border: 1px solid rgba(255, 255, 255, 0.75);
  background: #ffffff;
  color: #000000;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.2s ease, color 0.2s ease;
}

.music-play:hover {
  background: #000000;
  color: #ffffff;
}

.music-play-icon {
  font-size: 1rem;
  line-height: 1;
  transform: translateX(1px);
}

.music-copy {
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.music-title {
  margin: 0;
  color: #ffffff;
  font-family: "PP Neue Montreal", "Helvetica Neue", Arial, sans-serif;
  font-size: clamp(1rem, 1.5vw, 1.35rem);
  line-height: 1.1;
}

.music-subtitle {
  margin: 0;
  color: rgba(255, 255, 255, 0.65);
  font-family: "Martian Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
    "Liberation Mono", "Courier New", monospace;
  font-size: clamp(0.72rem, 1vw, 0.9rem);
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

@media (max-width: 820px) {
  .home {
    padding-top: 500px;
    padding-bottom: 56px;
  }

  .home-logo {
    top: -340px;
    width: min(42rem, 150vw);
  }

  .home-carousel {
    top: 190px;
    width: min(28rem, 92vw);
    gap: 0.5rem;
  }

  .about-title {
    font-size: clamp(1.25rem, 2.4vw, 1.4rem);
  }

  .about-title-bar {
    width: clamp(92px, 20vw, 140px);
    height: clamp(14px, 1.8vw, 18px);
    margin-top: 2px;
  }

  .about-copy {
    font-size: clamp(0.95rem, 1.6vw, 1rem);
  }

  .music-player {
    grid-template-columns: 52px 44px 1fr;
    gap: 10px;
    padding: 8px 10px;
    min-height: 60px;
  }

  .music-cover {
    width: 52px;
    height: 52px;
  }

  .music-play {
    width: 38px;
    height: 38px;
  }
}
</style>
