<script setup lang="ts">
import { computed } from "vue"
import { RouterLink, RouterView, useRoute } from "vue-router"

const route = useRoute()
const isLightHeader = computed(() => route.name === "contacte" || route.name === "merch" || route.name === "artista-detalle")
</script>

<template>
  <header class="site-header" :class="{ 'site-header--light': isLightHeader }">
    <RouterLink class="site-logo" to="/" aria-label="ESCLAT - Inicio">
      <img class="site-logo-img" src="/imagenes/logo-esclat-blanco.png" alt="ESCLAT" />
    </RouterLink>

    <nav class="site-nav" aria-label="NavegaciÃ³n principal">
      <RouterLink class="site-nav-link site-nav-link--left" :to="{ path: '/', hash: '#que-som' }" exact-active-class="is-active">
        QUÉ SOM
      </RouterLink>
      <RouterLink class="site-nav-link" to="/programacio" exact-active-class="is-active">PROGRAMACIÓ</RouterLink>
      <RouterLink class="site-nav-link" to="/entrades" exact-active-class="is-active">ENTRADES</RouterLink>
      <RouterLink class="site-nav-link" to="/merch" exact-active-class="is-active">MERCH</RouterLink>
      <RouterLink class="site-nav-link site-nav-link--right" to="/contacte" exact-active-class="is-active">
        CONTACTE
      </RouterLink>
    </nav>
  </header>

  <main>
    <RouterView />
  </main>
</template>

<style scoped>
.site-header {
  position: relative;
  z-index: 100;
  background-color: #000000;
  padding: 16px 20px;
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  column-gap: 16px;
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
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  align-items: center;
  column-gap: 12px;
}

.site-nav-link {
  color: #ffffff;
  text-decoration: none;
  letter-spacing: 0.02em;
  white-space: nowrap;
  font-size: 14px;
  font-weight: 400;
  justify-self: center;
}

.site-nav-link--left {
  justify-self: start;
}

.site-nav-link--right {
  justify-self: end;
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
</style>

