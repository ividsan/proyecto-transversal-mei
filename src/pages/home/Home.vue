<script lang="ts" setup>


</script>

<template>

<header class="site-header">
  <a class="site-logo" href="#" aria-label="ESCLAT - Inicio">
    <img class="site-logo-img" src="/imagenes/logo-esclat-blanco.png" alt="ESCLAT" />
  </a>
  <nav class="site-nav" aria-label="Navegación principal">
    <a class="site-nav-link site-nav-link--left" href="#">QUÉ SOM</a>
    <a class="site-nav-link" href="#">PROGRAMACIÓ</a>
    <a class="site-nav-link" href="#">ENTRADES</a>
    <a class="site-nav-link site-nav-link--right" href="#">CONTACTE</a>
  </nav>
</header>

<main class="home">
  <div class="home-hero">
    <img class="home-hero-logo" src="/imagenes/logo-esclat-blanco.png" alt="ESCLAT" />
  </div>
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
  justify-self: center;
}

.site-nav-link--left {
  justify-self: start;
}

.site-nav-link--right {
  justify-self: end;
}

.site-nav-link:hover {
  text-decoration: underline;
}

.home {
  min-height: 100vh;
  background-color: #222323;
}

.home-hero {
  padding: 24px 20px 0;
  display: flex;
  justify-content: center;
}

.home-hero-logo {
  width: min(720px, 92vw);
  height: auto;
  display: block;
}
</style>
