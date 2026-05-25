<script setup lang="ts">
import { ref } from "vue"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const qtyCompleta = ref("0")
const qtyUnDia = ref("0")
const qtyCompletaMerch = ref("0")
</script>

<template>
  <main class="entrades">
    <h1 class="entrades-title">COMPRA LA TEUA ENTRADA PER A ESCLAT 2026</h1>

    <section class="entrades-cards" aria-label="Opciones de entrada">
      <article class="entrades-card">
        <div class="entrades-card-qty" aria-label="Quantitat">
          <Select v-model="qtyCompleta">
            <SelectTrigger class="entrades-qty-trigger" aria-label="Quantitat entrada completa">
              <SelectValue placeholder="0" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem v-for="n in 6" :key="n - 1" :value="String(n - 1)">{{ n - 1 }}</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <header class="entrades-card-header">ESCLAT | ENTRADA COMPLETA</header>
        <p class="entrades-card-text">
          Accés complet als 3 dies del festival, incloent totes les zones indoor i outdoor. Viu l’experiència completa de
          l’esdeveniment. IVA no inclòs.
        </p>
        <div class="entrades-card-price">80€</div>
      </article>
      <article class="entrades-card">
        <div class="entrades-card-qty" aria-label="Quantitat">
          <Select v-model="qtyUnDia">
            <SelectTrigger class="entrades-qty-trigger" aria-label="Quantitat entrada d'un dia">
              <SelectValue placeholder="0" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem v-for="n in 6" :key="n - 1" :value="String(n - 1)">{{ n - 1 }}</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <header class="entrades-card-header">ESCLAT | ENTRADA D&apos;UN DIA</header>
        <p class="entrades-card-text">
          Accés al festival durant 1 dia a triar, amb entrada a totes les zones indoor i outdoor del recinte. IVA no
          inclòs.
        </p>
        <div class="entrades-card-price">30€</div>
      </article>
      <article class="entrades-card">
        <div class="entrades-card-qty" aria-label="Quantitat">
          <Select v-model="qtyCompletaMerch">
            <SelectTrigger class="entrades-qty-trigger" aria-label="Quantitat entrada completa + merch">
              <SelectValue placeholder="0" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem v-for="n in 6" :key="n - 1" :value="String(n - 1)">{{ n - 1 }}</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <header class="entrades-card-header">ESCLAT | ENTRADA COMPLETA + MERCH</header>
        <p class="entrades-card-text">
          Accés complet als 3 dies del festival + pack exclusiu de merchandising oficial. L’experiència més completa per
          a gaudir del festival al màxim. IVA no inclòs.
        </p>
        <div class="entrades-card-price">100€</div>
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
  position: relative;
}

.entrades-card-qty {
  position: absolute;
  right: 0;
  bottom: 0;
  width: auto;
  background-color: #222323;
  padding: 16px 18px;
  min-width: 210px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.entrades-qty-trigger {
  height: auto !important;
  width: auto !important;
  justify-content: center;
  gap: 8px !important;
  font-size: 50px;
  line-height: 0.9;
  color: #ffffff;
  border: 0 !important;
  box-shadow: none !important;
  background: transparent !important;
  padding: 0 !important;
}

.entrades-qty-trigger :deep(svg) {
  color: currentColor;
  opacity: 1 !important;
  width: 30px !important;
  height: 30px !important;
}

.entrades-card-header {
  color: #222323;
  font-size: 28px;
  font-weight: 400;
  letter-spacing: 0.02em;
  margin-top: 12px;
}

.entrades-card-text {
  margin-top: 14px;
  color: #222323;
  font-family: "PP Neue Montreal", system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.35;
}

.entrades-card-price {
  margin-top: auto;
  padding-top: 14px;
  color: #222323;
  font-size: 50px;
  line-height: 0.9;
  letter-spacing: -0.04em;
}
</style>
