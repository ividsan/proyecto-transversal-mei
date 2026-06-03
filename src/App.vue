<script setup lang="ts">
import { computed } from "vue"
import { RouterLink, RouterView, useRoute } from "vue-router"
import SiteFooter from "@/components/SiteFooter.vue"

const route = useRoute()
const isLightHeader = computed(() => route.name === "contacte" || route.name === "merch" || route.name === "artista-detalle")
const isQueSomActive = computed(() => route.path === "/" && route.hash === "#que-som")
</script>

<template>
  <div class="app-shell">
    <header class="site-header" :class="{ 'site-header--light': isLightHeader }">
      <RouterLink class="site-logo" to="/" aria-label="ESCLAT - Inicio">
        <img class="site-logo-img" src="/imagenes/logo-esclat-blanco.png" alt="ESCLAT" />
      </RouterLink>

      <nav class="site-nav" aria-label="Navegación principal">
        <RouterLink
          class="site-nav-link site-nav-link--left"
          :class="{ 'is-active': isQueSomActive }"
          :to="{ path: '/', hash: '#que-som' }"
        >
          QUÉ SOM
        </RouterLink>
        <RouterLink class="site-nav-link" to="/dubtes" exact-active-class="is-active">DUBTES</RouterLink>
        <RouterLink class="site-nav-link" to="/programacio" exact-active-class="is-active">PROGRAMACIÓ</RouterLink>
        <RouterLink class="site-nav-link" to="/entrades" exact-active-class="is-active">ENTRADES</RouterLink>
        <RouterLink class="site-nav-link site-nav-link--right" to="/contacte" exact-active-class="is-active">
          CONTACTE
        </RouterLink>
      </nav>
    </header>

    <main class="app-main">
      <RouterView />
    </main>

    <SiteFooter />
  </div>
</template>

<style scoped>
.app-shell {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
}

.site-header {
  position: relative;
  z-index: 100;
  background-color: #000000;
  padding: 16px 20px;
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  column-gap: clamp(28px, 4vw, 56px);
}

.site-logo {
  display: inline-flex;
  align-items: center;
  flex: 0 0 auto;
}

.site-logo-img {
  height: 44px;
  width: auto;
  display: block;
}

.site-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: clamp(12px, 2vw, 28px);
  width: 100%;
  min-width: 0;
  flex-wrap: wrap;
  row-gap: 8px;
}

.site-nav-link {
  color: #ffffff;
  text-decoration: none;
  letter-spacing: 0.02em;
  white-space: nowrap;
  font-size: clamp(12px, 1vw, 14px);
  font-weight: 400;
  flex: 0 0 auto;
  line-height: 1.1;
}

.site-nav-link:hover {
  font-weight: 700;
}

.site-nav-link.is-active {
  font-weight: 700;
}

.site-header.site-header--light {
  background-color: #ffffff;
}

.site-header.site-header--light .site-nav-link {
  color: #000000;
}

.site-header.site-header--light .site-logo-img {
  filter: invert(1);
}

@media (max-width: 900px) {
  .site-header {
    grid-template-columns: 1fr;
    justify-items: center;
    row-gap: 12px;
    padding: 14px 16px 12px;
  }

  .site-nav {
    justify-content: center;
    width: 100%;
  }
}

@media (max-width: 620px) {
  .site-header {
    padding: 12px 12px 10px;
  }

  .site-logo-img {
    height: 32px;
  }

  .site-nav {
    gap: 8px 14px;
  }

  .site-nav-link {
    font-size: 11px;
    letter-spacing: 0.01em;
  }
}

.app-main {
  flex: 1 0 auto;
}
</style>
