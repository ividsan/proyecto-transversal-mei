<script setup lang="ts">
const products = Array.from({ length: 6 }, (_, index) => ({
  id: index + 1,
  name: "DESCRIPCIO DE PRODUCTE",
  price: "15€",
}));
</script>

<template>
  <main class="merch-page" aria-label="Merch Esclat">
    <section class="merch-hero" aria-labelledby="merch-title">
      <h1 id="merch-title" class="merch-title">MERCH ESCLAT 2026</h1>
      <p class="merch-intro">
        Uneix-te a la comunitat del festival i sigues el primer a descobrir totes les novetats. Rep descomptes
        exclusius, accés a promocions especials, notícies, anuncis d'artistes i moltes sorpreses més. No et perdes res!
      </p>
    </section>

    <section class="products-grid" aria-label="Productes de merch">
      <article v-for="product in products" :key="product.id" class="product-card">
        <div class="product-image-slot" aria-label="Espai reservat per a imatge"></div>
        <div class="product-info">
          <h2 class="product-name">{{ product.name }}</h2>
          <p class="product-price">{{ product.price }}</p>
        </div>
      </article>
    </section>

    <footer class="merch-footer" aria-label="Esclat">
      <img class="merch-logo" src="/iconos/logo.svg" alt="ESCLAT" />
    </footer>
  </main>
</template>

<style scoped>
.merch-page {
  min-height: 100vh;
  background: #ffffff;
  color: #000000;
  padding: 116px clamp(28px, 7vw, 92px) 96px;
}

.merch-hero {
  width: min(100%, 520px);
  margin: 0 auto;
}

.merch-title {
  margin: 0;
  font-size: 42px;
  font-weight: 400;
  line-height: 1;
  letter-spacing: 0.1em;
  text-align: center;
  white-space: nowrap;
}

.merch-intro {
  margin: 80px 0 0;
  font-family: "PP Neue Montreal", system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif;
  font-size: 17px;
  line-height: 1.15;
  letter-spacing: 0;
}

.products-grid {
  width: min(100%, 1320px);
  margin: 120px auto 0;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 160px 18px;
}

.product-card {
  min-width: 0;
}

.product-image-slot {
  width: 100%;
  aspect-ratio: 1 / 1.42;
  background: #f1f1f1;
}

.product-info {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 16px;
  align-items: start;
  padding: 24px 12px 0;
}

.product-name,
.product-price {
  margin: 0;
  font-size: 22px;
  font-weight: 400;
  line-height: 0.95;
  letter-spacing: 0.04em;
}

.product-name {
  max-width: 260px;
  text-transform: uppercase;
}

.product-price {
  white-space: nowrap;
}

.merch-footer {
  width: min(100%, 1040px);
  margin: 180px auto 0;
}

.merch-logo {
  width: 100%;
  height: auto;
  display: block;
  filter: brightness(0);
}

@media (max-width: 900px) {
  .merch-page {
    padding: 80px 24px 72px;
  }

  .merch-title {
    font-size: 34px;
    white-space: normal;
  }

  .merch-intro {
    margin-top: 48px;
  }

  .products-grid {
    margin-top: 72px;
    grid-template-columns: 1fr;
    gap: 72px;
  }

  .product-info {
    padding-inline: 0;
  }

  .merch-footer {
    margin-top: 96px;
  }
}
</style>
