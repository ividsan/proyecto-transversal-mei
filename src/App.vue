<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <header class="site-header">
    <RouterLink class="site-logo" to="/" aria-label="ESCLAT - Inicio">
      <img class="site-logo-img" src="/imagenes/logo-esclat-blanco.png" alt="ESCLAT" />
    </RouterLink>

    <nav class="site-nav" aria-label="Navegación principal">
      <RouterLink class="site-nav-link site-nav-link--left" to="/que-som" exact-active-class="is-active">
        QUÉ SOM
      </RouterLink>
      <RouterLink class="site-nav-link" to="/programacio" exact-active-class="is-active">PROGRAMACIÓ</RouterLink>
      <RouterLink class="site-nav-link" to="/entrades" exact-active-class="is-active">ENTRADES</RouterLink>
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
  background-color: #222323;
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
  grid-template-columns: repeat(4, 1fr);
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
</style>
