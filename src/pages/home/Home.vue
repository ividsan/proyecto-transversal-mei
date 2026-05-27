<script lang="ts" setup>
import { computed, onBeforeUnmount, onMounted, ref } from "vue";

const targetDate = new Date("2026-10-23T00:00:00+02:00");
const now = ref(new Date());

let timerId: number | undefined;

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

onMounted(() => {
  timerId = window.setInterval(() => {
    now.value = new Date();
  }, 1000);
});

onBeforeUnmount(() => {
  if (timerId !== undefined) {
    window.clearInterval(timerId);
  }
});
</script>

<template>
  <main class="home">
    <section class="countdown-strip" aria-label="Cuenta atras para el 23 de octubre de 2026">
      <span class="countdown-label">QUEDEN</span>
      <span class="countdown-value">{{ countdown.days }} DÍES</span>
      <span class="countdown-value">{{ countdown.minutes }} MINUTS</span>
      <span class="countdown-value">{{ countdown.seconds }} SEGONS</span>
    </section>
  </main>
</template>

<style scoped>
.home {
  min-height: 100vh;
  background: #222323;
  padding-top: 650px;
}

.countdown-strip {
  width: 100%;
  min-height: 50px;
  height: 100px;
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
  font-size: clamp(36px, 2.2vw, 40px);
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

@media (max-width: 820px) {
  .countdown-strip {
    justify-content: flex-start;
    gap: 1rem;
    padding-inline: 0.85rem;
    font-size: 0.8rem;
    overflow-x: auto;
    overflow-y: hidden;
    scrollbar-width: none;
  }

  .countdown-strip::-webkit-scrollbar {
    display: none;
  }
}
</style>

