<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import { findProgramacioEntry, type ProgramacioSection } from "@/data/programacio";

const route = useRoute();

const section = computed(() => route.params.section as ProgramacioSection);
const slug = computed(() => String(route.params.slug ?? ""));

const entry = computed(() => findProgramacioEntry(section.value, slug.value));
</script>

<template>
  <main class="programacio-detall">
    <h1 class="programacio-detall-title">
      {{ entry?.title ?? "No trobat" }}
    </h1>
  </main>
</template>

<style scoped>
.programacio-detall {
  min-height: 100vh;
  background: #000000;
  padding: 48px 20px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
}

.programacio-detall-title {
  margin: 0;
  color: #ffffff;
  font-family: "Martian Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
    "Liberation Mono", "Courier New", monospace;
  font-size: clamp(2rem, 4vw, 4rem);
  font-weight: 400;
  font-stretch: semi-expanded;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  text-align: center;
}
</style>
