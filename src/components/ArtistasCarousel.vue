<script setup lang="ts">
import { useRouter } from "vue-router";
import { artists } from "@/data/artists";

const router = useRouter();

function navigateToDetail(slug: string) {
  router.push({ name: "artista-detalle", params: { slug } });
}
</script>

<template>
  <section class="artists-carousel-section" aria-label="Carrusel de Artistas">
    <div class="artists-carousel-header">
      <div class="artists-heading-row">
        <h2 class="artists-carousel-title">CONEIX ALS ARTISTES</h2>
        <span class="artists-title-bar" aria-hidden="true"></span>
      </div>
    </div>

    <div class="carousel-wrapper">
      <div class="carousel-container">
        <div class="carousel-track">
          <div
            v-for="artist in artists"
            :key="artist.slug"
            class="carousel-item"
            role="button"
            tabindex="0"
            @click="navigateToDetail(artist.slug)"
            @keyup.enter="navigateToDetail(artist.slug)"
            :aria-label="`Veure detalls de ${artist.name}`"
          >
            <img
              :src="artist.image"
              :alt="`Artista ${artist.name}`"
              class="artist-image"
              loading="lazy"
            />
            <p class="artist-name">{{ artist.name }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.artists-carousel-section {
  width: 100%;
  padding: 56px clamp(24px, 5vw, 72px);
  background: #000000;
  color: #f5f1ea;
}

.artists-carousel-header {
  width: 100%;
  max-width: 1320px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 32px;
}

.artists-heading-row {
  display: flex;
  align-items: baseline;
  gap: 14px;
  width: 100%;
}

.artists-carousel-title {
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

.artists-title-bar {
  width: clamp(130px, 18vw, 220px);
  height: 1.75em;
  background: #f7f3eb;
  flex-shrink: 0;
  display: inline-block;
}

.carousel-wrapper {
  width: 100%;
  max-width: 1320px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  align-items: center;
  gap: 20px;
  position: relative;
}

.carousel-container {
  flex: 1;
  overflow-x: auto;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.carousel-container::-webkit-scrollbar {
  display: none;
}

.carousel-track {
  display: flex;
  gap: 20px;
  padding: 0;
  min-width: min-content;
}

.carousel-item {
  flex: 0 0 auto;
  width: 320px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  cursor: pointer;
  transition: transform 0.2s ease-out;
}

.carousel-item:hover {
  transform: scale(1.05);
}

.artist-image {
  width: 320px;
  height: 320px;
  object-fit: cover;
  background: #000000;
  border: 1px solid #000000;
}

.artist-name {
  margin: 0;
  font-family: "Martian Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
    "Liberation Mono", "Courier New", monospace;
  font-size: 1.1rem;
  font-weight: 400;
  font-stretch: semi-expanded;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #f7f3eb;
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 320px;
}

.carousel-button,
.carousel-button:hover,
.carousel-button:active {
  display: none;
}

@media (max-width: 768px) {
  .artists-carousel-section {
    padding: 44px 16px;
  }

  .artists-carousel-header {
    margin-bottom: 28px;
  }

  .carousel-wrapper {
    gap: 12px;
  }

  .carousel-item {
    width: 200px;
    height: 200px;
    gap: 8px;
  }

  .artist-image {
    width: 200px;
    height: 200px;
  }

  .artist-name {
    width: 200px;
  }
}

@media (max-width: 480px) {
  .artists-carousel-section {
    padding: 28px 12px;
  }

  .carousel-wrapper {
    gap: 8px;
  }

  .carousel-track {
    gap: 12px;
  }

  .carousel-item {
    width: 140px;
    height: 140px;
    gap: 6px;
  }

  .artist-image {
    width: 140px;
    height: 140px;
  }

  .artist-name {
    width: 140px;
    font-size: 0.7rem;
  }
}
</style>
