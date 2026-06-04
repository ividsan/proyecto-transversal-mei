<script setup lang="ts">
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { getArtistBySlug } from "@/data/artists";

const route = useRoute();
const router = useRouter();
const slug = computed(() => String(route.params.slug ?? ""));
const artist = computed(() => getArtistBySlug(slug.value));
const fallbackArtistImage = "/artistesHome/mushkaEditada.png";
const artistImage = computed(() => artist.value?.image ?? fallbackArtistImage);

const instagramHandle = computed(() =>
  artist.value ? artist.value.instagram.replace("@", "") : ""
);

function handleArtistImageError(event: Event) {
  const imageElement = event.target as HTMLImageElement | null;
  if (imageElement) {
    imageElement.src = fallbackArtistImage;
  }
}

function goBack() {
  if (window.history.length > 1) {
    router.back();
    return;
  }

  router.push("/");
}
</script>

<template>
  <main class="artist-page">
    <section v-if="artist" class="artist-sheet">
      <header class="artist-hero">
        <h1 class="artist-title">{{ artist.name }}</h1>
        <span class="artist-title-bar" aria-hidden="true"></span>
      </header>

      <div class="artist-intro">
        <p>{{ artist.bio }}</p>
      </div>

      <section class="artist-body">
        <div class="artist-visuals">
          <img
            src="/iconos/tramadoArtista.svg"
            alt=""
            aria-hidden="true"
            class="artist-tramado"
          />

          <figure class="artist-image-wrap">
            <img
              :src="artistImage"
              :alt="artist.name"
              class="artist-image"
              @error="handleArtistImageError"
            />
          </figure>
        </div>

        <div class="artist-meta">
          <div class="meta-block">
            <p class="meta-label">NOM COMPLET_</p>
            <p class="meta-value">{{ artist.fullName }}</p>
          </div>

          <div class="meta-block">
            <p class="meta-label">INSTAGRAM_</p>
            <a
              class="meta-value meta-link"
              :href="`https://www.instagram.com/${instagramHandle}/`"
              target="_blank"
              rel="noreferrer"
            >
              {{ artist.instagram }}
            </a>
          </div>

          <div class="meta-block">
            <p class="meta-label">SPOTIFY_</p>
            <a
              class="meta-value meta-link"
              :href="`https://open.spotify.com/search/${encodeURIComponent(artist.spotify)}`"
              target="_blank"
              rel="noreferrer"
            >
              {{ artist.spotify }}
            </a>
          </div>

          <button type="button" class="back-button" @click="goBack">Tornar</button>
        </div>
      </section>
    </section>

    <section v-else class="artist-sheet artist-sheet--empty">
      <p class="empty-label">Artista no disponible</p>
      <p class="empty-title">Aquesta pàgina no existeix.</p>
      <button type="button" class="back-button" @click="goBack">Tornar a l'inici</button>
    </section>
  </main>
</template>

<style scoped>
.artist-page {
  min-height: 100vh;
  background: #ffffff;
  color: #111111;
}

.artist-sheet {
  max-width: 1280px;
  margin: 0 auto;
  padding: clamp(20px, 4vw, 54px) clamp(16px, 4vw, 56px) clamp(24px, 5vw, 64px);
  box-sizing: border-box;
}

.artist-hero {
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
  align-items: center;
  column-gap: clamp(14px, 3.2vw, 42px);
  margin-bottom: clamp(18px, 4vw, 72px);
}

.artist-title {
  margin: 0;
  font-family: "Martian Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
    "Liberation Mono", "Courier New", monospace;
  font-size: clamp(1.9rem, 4.8vw, 5.2rem);
  line-height: 0.92;
  font-weight: 400;
  letter-spacing: -0.08em;
  text-transform: uppercase;
}

.artist-title-bar {
  display: block;
  width: 100%;
  height: clamp(1.5rem, 4.2vw, 4.68rem);
  background: #000000;
  justify-self: stretch;
}

.artist-intro {
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
  column-gap: clamp(14px, 3.2vw, 42px);
  margin-bottom: clamp(18px, 4vw, 72px);
}

.artist-intro p {
  grid-column: 2;
  margin: 0;
  max-width: min(39rem, 100%);
  font-family: "PP Neue Montreal", "Helvetica Neue", Arial, sans-serif;
  font-size: clamp(0.92rem, 1.18vw, 1.35rem);
  line-height: 1.34;
  font-weight: 400;
}

.artist-body {
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
  column-gap: clamp(14px, 3.2vw, 42px);
  align-items: start;
}

.artist-visuals {
  display: flex;
  flex-direction: column;
  gap: 0;
  grid-column: 1;
}

.artist-image-wrap {
  margin: 0;
  width: min(100%, clamp(220px, 31vw, 428px));
  max-width: 100%;
  align-self: start;
  aspect-ratio: 1 / 1;
  transform: translateY(clamp(-430px, -32vw, -300px));
}

.artist-tramado {
  display: block;
  width: min(100%, clamp(220px, 31vw, 428px));
  height: auto;
  transform: translateY(clamp(-320px, -24vw, -220px));
}

.artist-image {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(1);
}

.artist-meta {
  display: flex;
  flex-direction: column;
  gap: clamp(20px, 4vw, 72px);
  padding-top: 0;
  grid-column: 2;
}

.meta-block {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.meta-label {
  margin: 0;
  font-family: "Martian Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
    "Liberation Mono", "Courier New", monospace;
  font-size: clamp(0.95rem, 1.35vw, 1.8rem);
  line-height: 1;
  font-weight: 400;
  letter-spacing: -0.07em;
  text-transform: uppercase;
}

.meta-value {
  margin: 0;
  font-family: "PP Neue Montreal", "Helvetica Neue", Arial, sans-serif;
  font-size: clamp(0.9rem, 1.1vw, 1.3rem);
  line-height: 1.2;
  font-weight: 400;
  color: #111111;
}

.meta-link {
  text-decoration: none;
}

.meta-link:hover {
  text-decoration: underline;
}

.back-button {
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  width: clamp(120px, 15vw, 176px);
  height: clamp(34px, 3.2vw, 40px);
  border: 1px solid #bdbdbd;
  background: #ffffff;
  color: #111111;
  text-decoration: none;
  font-family: "Martian Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
    "Liberation Mono", "Courier New", monospace;
  font-size: clamp(0.9rem, 0.98vw, 1.08rem);
  line-height: 1;
  margin-top: clamp(-6px, -0.5vw, -2px);
  padding-left: clamp(8px, 0.8vw, 10px);
  box-sizing: border-box;
}

.back-button:hover {
  background: #f4f4f4;
}

.artist-sheet--empty {
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 14px;
}

.empty-label {
  margin: 0;
  font-family: "Martian Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
    "Liberation Mono", "Courier New", monospace;
  font-size: 0.9rem;
  letter-spacing: 0.25em;
  text-transform: uppercase;
}

.empty-title {
  margin: 0;
  font-family: "PP Neue Montreal", "Helvetica Neue", Arial, sans-serif;
  font-size: 1.5rem;
}
</style>
