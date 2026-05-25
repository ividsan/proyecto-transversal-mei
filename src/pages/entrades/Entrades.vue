<template>
  <main class="entrades">
    <h1 class="entrades-title">COMPRA LA TEUA ENTRADA PER A ESCLAT 2026</h1>

    <section class="entrades-cards" aria-label="Opciones de entrada">
      <article class="entrades-card">
        <header class="entrades-card-header">ESCLAT | ENTRADA COMPLETA</header>
      </article>
      <article class="entrades-card">
        <header class="entrades-card-header">ESCLAT | ENTRADA D&apos;UN DIA</header>
      </article>
      <article class="entrades-card">
        <header class="entrades-card-header">ESCLAT | ENTRADA COMPLETA + MERCH</header>
      </article>
    </section>
  </main>
</template>

<style scoped>
.entrades {
  min-height: 100vh;
  background-color: #222323;
  padding: 24px 20px 0;
}

.entrades-title {
  color: #ffffff;
  font-size: 42px;
  font-weight: 400;
  letter-spacing: 0.02em;
  text-align: center;
}

.entrades-cards {
  margin-top: 28px;
  display: flex;
  justify-content: center;
  gap: 44px;
}

.entrades-card {
  width: 380px;
  height: 360px;
  background: #ffffff;
  padding: 18px;
  display: flex;
  flex-direction: column;
}

.entrades-card-header {
  color: #222323;
  font-size: 28px;
  font-weight: 400;
  letter-spacing: 0.02em;
}
</style>
