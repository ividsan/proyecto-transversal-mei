<script setup lang="ts">
import { computed } from "vue"
import { RouterLink, useRoute } from "vue-router"
import { getArtistBySlug } from "@/data/artists"

const route = useRoute()
const slug = computed(() => String(route.params.slug ?? ""))
const artist = computed(() => getArtistBySlug(slug.value))
</script>

<template>
  <main class="min-h-screen bg-white text-black">
    <section class="mx-auto max-w-6xl bg-white px-6 py-10 sm:px-10 lg:py-14">
      <div v-if="artist" class="space-y-14">
        <div class="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div class="space-y-6">
            <h1 class="text-5xl font-black uppercase tracking-[0.25em] sm:text-6xl">
              {{ artist.name }}
            </h1>
            <div class="h-10 w-48 bg-black"></div>
          </div>

          <div class="artist-bio space-y-6 text-base leading-8 text-black sm:text-lg">
            <p>{{ artist.bio }}</p>
          </div>
        </div>

        <div class="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div class="bg-white">
            <img :src="artist.image" :alt="artist.name" class="h-full w-full object-cover" />
          </div>

          <div class="space-y-6 p-8 sm:p-10">
            <div class="space-y-5">
              <div>
                <p class="detail-label text-black">NOM COMPLET_</p>
                <p class="detail-value mt-3 text-black">
                  {{ artist.fullName }}
                </p>
              </div>

              <div>
                <p class="detail-label text-black">INSTAGRAM_</p>
                <a
                  class="detail-value link-value mt-3 text-black"
                  :href="`https://www.instagram.com/${artist.instagram.replace('@', '')}/`"
                  target="_blank"
                  rel="noreferrer"
                >
                  {{ artist.instagram }}
                </a>
              </div>

              <div>
                <p class="detail-label text-black">SPOTIFY_</p>
                <a
                  class="detail-value link-value mt-3 text-black"
                  :href="`https://open.spotify.com/search/${encodeURIComponent(artist.spotify)}`"
                  target="_blank"
                  rel="noreferrer"
                >
                  {{ artist.spotify }}
                </a>
              </div>
            </div>

            <RouterLink
              to="/"
              class="inline-flex h-11 items-center justify-center border border-black bg-white px-6 text-sm font-semibold uppercase tracking-[0.2em] text-black transition hover:bg-black hover:text-white"
            >
              Tornar
            </RouterLink>
          </div>
        </div>
      </div>

      <div v-else class="flex min-h-[60vh] items-center justify-center border border-black p-10 text-center text-black">
        <div>
          <p class="text-sm uppercase tracking-[0.35em] text-black">Artista no disponible</p>
          <p class="mt-4 text-2xl font-semibold text-black">Aquesta pàgina no existeix.</p>
          <RouterLink
            to="/"
            class="mt-8 inline-flex border border-black bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-black hover:bg-black hover:text-white"
          >
            Tornar a l'inici
          </RouterLink>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.artist-bio {
  font-family: "PP Neue Montreal", system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif;
  max-width: 56rem;
}

.artist-bio p {
  font-size: 1.15rem;
  line-height: 1.9;
}

.detail-label {
  font-size: 1.1rem;
  font-weight: 400;
  letter-spacing: 0.18em;
  text-transform: uppercase;
}

.detail-value {
  font-family: "PP Neue Montreal", system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif;
  font-size: 1.15rem;
  font-weight: 400;
}

.link-value {
  display: inline-block;
  text-decoration: none;
}

.link-value:hover {
  text-decoration: underline;
}

@media (max-width: 640px) {
  .text-5xl {
    font-size: 2.5rem;
  }
}
</style>
