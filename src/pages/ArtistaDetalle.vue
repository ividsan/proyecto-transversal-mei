<script setup lang="ts">
import { computed } from "vue";
import { RouterLink, useRoute } from "vue-router";

const route = useRoute();
const slug = computed(() => String(route.params.slug ?? ""));
const isMushkaa = computed(() => slug.value === "mushkaa");
</script>

<template>
  <main class="min-h-screen bg-white text-black">
    <section class="mx-auto max-w-6xl px-6 py-10 sm:px-10 lg:py-14 bg-white">
      <div v-if="isMushkaa" class="space-y-14">
        <div class="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div class="space-y-6">
            <h1 class="text-5xl font-black uppercase tracking-[0.25em] sm:text-6xl">
              MUSHKAA
            </h1>
            <div class="h-10 w-48 bg-black"></div>
          </div>

          <div class="space-y-6 text-base leading-8 text-black sm:text-lg">
            <p>
              Mushkaa és una de les veus emergents més destacades de l’escena urbana actual.
              Amb un estil fresc que barreja pop, reggaeton i sons electrònics, les seves
              cançons connecten amb una nova generació gràcies a lletres sinceres, energia i una
              personalitat única damunt de l’escenari.
            </p>
            <p>
              Els seus directes destaquen per l’actitud, el ritme i una connexió molt especial
              amb el públic.
            </p>
          </div>
        </div>

        <div class="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div class="bg-white">
            <img
              src="/artistesHome/mushkaEditada.png"
              alt="Mushkaa"
              class="h-full w-full object-cover"
            />
          </div>

          <div class="space-y-6 p-8 sm:p-10">
            <div class="space-y-5">
              <div>
                <p class="text-xs uppercase tracking-[0.4em] text-black">NOM COMPLET_</p>
                <p class="mt-3 text-lg font-semibold uppercase tracking-[0.12em] text-black">
                  Maria Isabel Rocío Torres
                </p>
              </div>

              <div>
                <p class="text-xs uppercase tracking-[0.4em] text-black">INSTAGRAM_</p>
                <p class="mt-3 text-lg font-semibold uppercase tracking-[0.12em] text-black">
                  @rochoos
                </p>
              </div>

              <div>
                <p class="text-xs uppercase tracking-[0.4em] text-black">SPOTIFY_</p>
                <p class="mt-3 text-lg font-semibold uppercase tracking-[0.12em] text-black">
                  @rochitopouchito
                </p>
              </div>
            </div>

            <RouterLink
              to="/"
              class="inline-flex h-11 items-center justify-center border border-black bg-white px-6 text-sm font-semibold uppercase tracking-[0.2em] text-black transition hover:bg-slate-100"
            >
              Tornar
            </RouterLink>
          </div>
        </div>
      </div>

      <div v-else class="flex min-h-[60vh] items-center justify-center border border-black p-10 text-center text-black">
        <div>
          <p class="text-sm uppercase tracking-[0.35em] text-black">Artista no disponible</p>
          <p class="mt-4 text-2xl font-semibold text-black">Aquesta pàgina està reservada per a Mushkaa.</p>
          <RouterLink
            to="/"
            class="mt-8 inline-flex border border-black bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-black hover:bg-slate-100"
          >
            Tornar a l'inici
          </RouterLink>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
@media (max-width: 640px) {
  .text-5xl {
    font-size: 2.5rem;
  }
}
</style>
