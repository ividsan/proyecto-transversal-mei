<script setup lang="ts">
import { computed, ref } from "vue"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const qtyCompleta = ref("0")
const qtyUnDia = ref("0")
const qtyCompletaMerch = ref("0")

const totalEuros = computed(() => {
  const completa = Number(qtyCompleta.value) || 0
  const unDia = Number(qtyUnDia.value) || 0
  const completaMerch = Number(qtyCompletaMerch.value) || 0

  return completa * 80 + unDia * 30 + completaMerch * 100
})

const totalLabel = computed(() => `${totalEuros.value.toFixed(2)}€`)
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
            <SelectContent class="entrades-select-content !rounded-none !w-full">
              <SelectItem
                v-for="n in 6"
                :key="n - 1"
                :value="String(n - 1)"
                class="entrades-select-item !rounded-none"
              >
                {{ n - 1 }}
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
        <header class="entrades-card-header">ESCLAT | ENTRADA COMPLETA</header>
        <p class="entrades-card-text">
          Accés complet als 3 dies del festival, incloent totes les zones indoor i outdoor. Viu l’experiència completa de
          l’esdeveniment. IVA no inclòs.
        </p>
        <div class="entrades-card-price">0€</div>
      </article>
      <article class="entrades-card">
        <div class="entrades-card-qty" aria-label="Quantitat">
          <Select v-model="qtyUnDia">
            <SelectTrigger class="entrades-qty-trigger" aria-label="Quantitat entrada d'un dia">
              <SelectValue placeholder="0" />
            </SelectTrigger>
            <SelectContent class="entrades-select-content !rounded-none !w-full">
              <SelectItem
                v-for="n in 6"
                :key="n - 1"
                :value="String(n - 1)"
                class="entrades-select-item !rounded-none"
              >
                {{ n - 1 }}
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
        <header class="entrades-card-header">ESCLAT | ENTRADA COMPLETA + MERCH</header>
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
            <SelectContent class="entrades-select-content !rounded-none !w-full">
              <SelectItem
                v-for="n in 6"
                :key="n - 1"
                :value="String(n - 1)"
                class="entrades-select-item !rounded-none"
              >
                {{ n - 1 }}
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
        <header class="entrades-card-header">ESCLAT | ENTRADA COMPLETA + MERCH + ACCÉS PRIORITARI</header>
        <p class="entrades-card-text">
          Accés complet als 3 dies del festival + pack exclusiu de merchandising oficial. L’experiència més completa per
          a gaudir del festival al màxim. IVA no inclòs.
        </p>
        <div class="entrades-card-price">40€</div>
      </article>
    </section>

    <RouterLink class="entrades-merch-link" to="/merch">
      MÉS INFORMACIÓ SOBRE EL NOSTRE MERCH
    </RouterLink>

    <aside class="entrades-total" aria-label="Resum de compra">
      <span class="entrades-total-label">TOTAL</span>
      <span class="entrades-total-value">{{ totalLabel }}</span>
      <button class="entrades-total-cta" type="button">CONTINUAR</button>
    </aside>
  </main>
</template>

<style scoped>
.entrades {
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 76px);
  background-color: #000000;
  padding: 64px clamp(24px, 5vw, 72px) 0;
}

.entrades-title {
  color: #ffffff;
  font-size: 40px;
  font-weight: 400;
  letter-spacing: 0.02em;
  text-align: center;
  width: fit-content;
  max-width: none;
  margin: 0 auto;
  white-space: nowrap;
}

.entrades-cards {
  width: min(100%, 1320px);
  margin: 36px auto 0;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 36px;
}

.entrades-card {
  min-height: 390px;
  background: #ffffff;
  padding: 22px;
  display: flex;
  flex-direction: column;
  position: relative;
}

.entrades-card-qty {
  position: absolute;
  right: 0;
  bottom: 0;
  width: auto;
  background-color: transparent;
  min-width: 220px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.entrades-qty-trigger {
  height: auto !important;
  width: 220px !important;
  justify-content: center;
  gap: 8px !important;
  font-size: 56px;
  line-height: 0.9;
  color: #ffffff;
  border: 0 !important;
  box-shadow: none !important;
  background: #000000 !important;
  padding: 18px 20px !important;
  box-sizing: border-box;
  border-radius: 0 !important;
}

.entrades-qty-trigger :deep(svg) {
  color: currentColor;
  opacity: 1 !important;
  width: 30px !important;
  height: 30px !important;
}

.entrades :deep(.entrades-select-content) {
  border-radius: 0 !important;
  width: 220px !important;
  min-width: 220px !important;
}

.entrades :deep(.entrades-select-item) {
  border-radius: 0 !important;
}

.entrades-card-header {
  color: #000000;
  font-size: 30px;
  font-weight: 400;
  letter-spacing: 0.02em;
  margin-top: 12px;
  line-height: 1.08;
}

.entrades-card-text {
  margin-top: 18px;
  color: #000000;
  font-family: "PP Neue Montreal", system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif;
  font-size: 18px;
  line-height: 1.4;
}

.entrades-card-price {
  margin-top: auto;
  padding-top: 18px;
  color: #000000;
  font-size: 56px;
  line-height: 0.9;
  letter-spacing: -0.04em;
}

.entrades-merch-link {
  width: fit-content;
  margin: 44px 0 0;
  color: #ffffff;
  border: 1px solid #ffffff;
  padding: 20px 28px;
  text-decoration: none;
  text-align: center;
  font-size: 20px;
  letter-spacing: 0.03em;
  text-transform: uppercase;
}

.entrades-merch-link:hover {
  background: #ffffff;
  color: #000000;
}

.entrades-total {
  position: relative;
  left: auto;
  right: auto;
  bottom: auto;
  transform: none;
  background: #ffffff;
  color: #000000;
  padding: 26px 28px;
  width: min(calc(100% - 48px), 720px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 50;
  margin: 48px calc(clamp(24px, 5vw, 72px) * -1) 0 auto;
  margin-bottom: -1px;
}

.entrades-total-label {
  font-size: 32px;
  font-weight: 400;
  letter-spacing: 0.02em;
}

.entrades-total-value {
  font-size: 32px;
  font-weight: 400;
  letter-spacing: 0.02em;
}

.entrades-total-cta {
  border: 0;
  background: transparent;
  color: #000000;
  font-size: 32px;
  font-weight: 400;
  letter-spacing: 0.02em;
  cursor: pointer;
  padding: 0;
}

.entrades-total-cta:hover {
  text-decoration: underline;
}

@media (max-width: 1050px) {
  .entrades-cards {
    grid-template-columns: 1fr;
    max-width: 620px;
  }
}

@media (max-width: 640px) {
  .entrades {
    padding: 42px 20px 0;
  }

  .entrades-title {
    font-size: 34px;
  }

  .entrades-card {
    min-height: 360px;
  }

  .entrades-card-header {
    font-size: 26px;
  }

  .entrades-card-text {
    font-size: 16px;
  }

  .entrades-merch-link {
    width: 100%;
    margin-top: 24px;
    padding: 14px 16px;
    font-size: 15px;
  }

  .entrades-total {
    width: 100%;
    padding: 20px;
    flex-wrap: wrap;
    gap: 12px 20px;
    margin: 40px 0 0;
  }

  .entrades-total-label,
  .entrades-total-value,
  .entrades-total-cta {
    font-size: 26px;
  }
}
</style>
