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
          <div class="artist-description">
            <p>{{ artist.bio }}</p>
          </div>

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
  min-height: auto;
  background: #ffffff;
  color: #111111;
  padding-bottom: 40px;
}

.artist-sheet {
  max-width: 1280px;
  margin: 0 auto;
  padding: clamp(18px, 3.4vw, 36px) clamp(22px, 4vw, 44px) 0;
  box-sizing: border-box;
  --artist-visual-gap: clamp(12px, 1.4vw, 18px);
}

.artist-hero {
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
  align-items: center;
  column-gap: clamp(22px, 4vw, 46px);
  margin-bottom: var(--artist-visual-gap);
}

.artist-title {
  margin: 0;
  font-family: "Martian Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
    "Liberation Mono", "Courier New", monospace;
  font-size: clamp(2.5rem, 6.2vw, 4.6rem);
  line-height: 0.92;
  font-weight: 400;
  letter-spacing: -0.08em;
  text-transform: uppercase;
}

.artist-title-bar {
  display: block;
  width: 100%;
  height: clamp(1.3rem, 3.8vw, 3rem);
  background: #000000;
  justify-self: stretch;
}

.artist-body {
  display: grid;
  grid-template-columns: minmax(0, 0.95fr) minmax(0, 1.05fr);
  column-gap: clamp(22px, 4vw, 46px);
  align-items: start;
  margin-top: 0;
}

.artist-visuals {
  display: flex;
  flex-direction: column;
  gap: var(--artist-visual-gap);
  grid-column: 1;
}

.artist-tramado {
  display: block;
  width: min(100%, 380px);
  height: auto;
  margin-top: clamp(-170px, -14vw, -120px);
}

.artist-image-wrap {
  margin: 0;
  width: min(100%, 340px);
  max-width: 100%;
  aspect-ratio: 1 / 1;
  margin-top: clamp(-150px, -13vw, -100px);
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
  gap: clamp(14px, 1.8vw, 24px);
  padding-top: 0;
  grid-column: 2;
}

.artist-description {
  margin-bottom: clamp(6px, 0.8vw, 12px);
}

.artist-description p {
  margin: 0;
  max-width: 31ch;
  font-family: "PP Neue Montreal", "Helvetica Neue", Arial, sans-serif;
  font-size: clamp(0.95rem, 1.15vw, 1.12rem);
  line-height: 1.26;
  font-weight: 400;
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
  font-size: clamp(0.92rem, 1.15vw, 1.1rem);
  line-height: 1;
  font-weight: 400;
  letter-spacing: -0.07em;
  text-transform: uppercase;
}

.meta-value {
  margin: 0;
  font-family: "PP Neue Montreal", "Helvetica Neue", Arial, sans-serif;
  font-size: clamp(0.9rem, 1vw, 1.05rem);
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
  width: clamp(92px, 10vw, 120px);
  height: 28px;
  border: 1px solid #bdbdbd;
  background: #ffffff;
  color: #111111;
  text-decoration: none;
  font-family: "Martian Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
    "Liberation Mono", "Courier New", monospace;
  font-size: 0.72rem;
  line-height: 1;
  margin-top: 0;
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

@media (max-width: 720px) {
  .artist-page {
    padding-bottom: 30px;
  }

  .artist-sheet {
    padding: 18px 14px 0;
  }

  .artist-hero,
  .artist-body {
    column-gap: 16px;
    margin-bottom: 16px;
  }

  .artist-hero {
    margin-bottom: var(--artist-visual-gap);
  }

  .artist-body {
    align-items: start;
    margin-top: 0;
  }

  .artist-title-bar {
    height: 1.3rem;
  }

  .artist-title {
    font-size: clamp(2rem, 8vw, 2.8rem);
    letter-spacing: -0.075em;
  }

  .artist-visuals {
    align-items: flex-start;
    width: 100%;
    min-height: 0;
    gap: var(--artist-visual-gap);
  }

  .artist-tramado {
    width: min(100%, 280px);
    margin-top: clamp(-140px, -18vw, -98px);
  }

  .artist-image-wrap {
    width: min(100%, 220px);
    margin-top: clamp(-120px, -16vw, -82px);
  }

  .artist-description p {
    font-size: 0.9rem;
    line-height: 1.25;
  }

  .artist-meta {
    gap: 16px;
    padding-top: 0;
  }

  .meta-label {
    font-size: 0.84rem;
  }

  .meta-value {
    font-size: 0.92rem;
  }

  .back-button {
    margin-top: 2px;
    width: clamp(110px, 34vw, 140px);
  }
}

@media (max-width: 480px) {
  .artist-body {
    margin-top: 0;
  }

  .artist-tramado {
    width: min(100%, 240px);
    margin-top: clamp(-112px, -20vw, -78px);
  }

  .artist-image-wrap {
    width: min(100%, 200px);
    margin-top: clamp(-98px, -18vw, -68px);
  }
}

@media (min-width: 1200px) {
  .artist-image-wrap {
    width: min(100%, 440px);
    margin-top: clamp(-190px, -14vw, -140px);
  }
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
