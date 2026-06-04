<script setup lang="ts">
import { onBeforeUnmount, ref } from "vue";

type MerchProduct = {
  id: number;
  name: string;
  description: string;
  price: string;
  image?: string;
  images?: string[];
};

const products: MerchProduct[] = [
  {
    id: 1,
    image: "/merch/totebag.jpg",
    name: "BOSSA TELA ESCLAT",
    description:
      "Bossa de tela reutilitzable amb la imatge del festival. Perfecta per a portar el dia a dia amb tu i recordar l'experiència més enllà del recinte.",
    price: "20€",
  },
  {
    id: 2,
    image: "/merch/tops.jpg",
    name: "TOP ESCLAT",
    description:
      "Top exclusiu amb detalls brillants inspirats en l'estètica del festival. Una peça pensada per a destacar i expressar-te amb llibertat.",
    price: "12€",
  },
  {
    id: 3,
    image: "/merch/tanga.jpg",
    name: "TANGA ESCLAT",
    description:
      "Pack de dues tangues amb dissenys exclusius del festival. Comoditat i estil per a portar l'esperit del festival a qualsevol lloc.",
    price: "6€",
  },
  {
    id: 4,
    image: "/merch/llavero.jpg",
    name: "CLAUER ESCLAT",
    description:
      "Clauer personalitzable amb charms inspirats en l'univers visual del festival. Un record únic per a emportar-te un trosset de l'experiència.",
    price: "4€",
  },
  {
    id: 5,
    image: "/merch/gorra.jpg",
    name: "GORRA ESCLAT",
    description: "Gorra oficial del festival amb brodat exclusiu. Ideal per a protegir-te del sol i completar qualsevol look.",
    price: "8€",
  },
  {
    id: 6,
    image: "/merch/funda.jpg",
    name: "FUNDA ESCLAT",
    description:
      "Funda de mòbil amb disseny exclusiu del festival. Protecció i personalitat en una peça pensada per a acompanyar-te cada dia.",
    price: "6€",
  },
  {
    id: 7,
    images: ["/merch/camiseta-detras.jpg", "/merch/camiseta-delante.jpg"],
    name: "CAMISETA DEL FESTIVAL",
    description:
      "Camiseta de cotó amb el logo del festival i gràfics de gran format. Una peça icònica per a qui vulga portar el festival ben visible.",
    price: "15€",
  },
  {
    id: 8,
    image: "/merch/pegatinas.jpg",
    name: "PEGATINES ESCLAT",
    description:
      "Col·lecció de pegatines exclusives amb dissenys inspirats en la identitat visual del festival. Perfectes per a personalitzar llibretes, portàtils, fundes o qualsevol objecte i portar l’esperit del festival allà on vages.",
    price: "4€",
  },
  {
    id: 9,
    image: "/merch/calzoncillos.jpg",
    name: "CALÇOTETS ESCLAT",
    description:
      "Pack de dos calçotets amb dissenys exclusius del festival. Comoditat i originalitat en una peça imprescindible.",
    price: "6€",
  },
];

const activeImageIndexes = ref<Record<number, number>>({});
const hoverTimers = new Map<number, number>();

function getProductImage(product: MerchProduct) {
  if (product.images && product.images.length > 0) {
    const activeImageIndex = activeImageIndexes.value[product.id] ?? 0;
    return product.images[activeImageIndex] ?? product.images[0];
  }

  return product.image ?? "";
}

function startImageCarousel(product: MerchProduct) {
  if (!product.images || product.images.length < 2) {
    return;
  }

  stopImageCarousel(product.id);

  activeImageIndexes.value = {
    ...activeImageIndexes.value,
    [product.id]: 0,
  };

  const timerId = window.setInterval(() => {
    const currentIndex = activeImageIndexes.value[product.id] ?? 0;
    activeImageIndexes.value = {
      ...activeImageIndexes.value,
      [product.id]: (currentIndex + 1) % product.images!.length,
    };
  }, 1100);

  hoverTimers.set(product.id, timerId);
}

function stopImageCarousel(productId: number) {
  const timerId = hoverTimers.get(productId);

  if (timerId !== undefined) {
    window.clearInterval(timerId);
    hoverTimers.delete(productId);
  }

  activeImageIndexes.value = {
    ...activeImageIndexes.value,
    [productId]: 0,
  };
}

onBeforeUnmount(() => {
  hoverTimers.forEach((timerId) => window.clearInterval(timerId));
  hoverTimers.clear();
});
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
        <figure
          class="product-image-slot"
          @mouseenter="startImageCarousel(product)"
          @mouseleave="stopImageCarousel(product.id)"
        >
          <img class="product-image" :src="getProductImage(product)" :alt="product.name" />
        </figure>
        <div class="product-info">
          <div class="product-text">
            <h2 class="product-name">{{ product.name }}</h2>
            <p class="product-description">{{ product.description }}</p>
          </div>
          <p class="product-price">{{ product.price }}</p>
        </div>
      </article>
    </section>
  </main>
</template>

<style scoped>
.merch-page {
  min-height: 100vh;
  background: #ffffff;
  color: #000000;
  padding: 116px clamp(28px, 7vw, 92px) 240px;
}

.merch-hero {
  width: min(100%, 1120px);
  margin: 0 auto;
  text-align: center;
}

.merch-title {
  margin: 0;
  font-size: clamp(54px, 5.8vw, 96px);
  font-weight: 400;
  line-height: 1;
  letter-spacing: 0.08em;
  text-align: center;
  white-space: nowrap;
}

.merch-intro {
  width: min(100%, 760px);
  margin: 48px auto 0;
  font-family: "PP Neue Montreal", system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif;
  font-size: 15px;
  line-height: 1.15;
  letter-spacing: 0;
  text-align: center;
}

.products-grid {
  width: min(100%, 1120px);
  margin: 140px auto 0;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 120px 28px;
  justify-items: center;
}

.product-card {
  min-width: 0;
  width: 100%;
  max-width: 340px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  transition: transform 0.22s ease, filter 0.22s ease;
  transform-origin: center top;
  position: relative;
}

.product-image-slot {
  width: 100%;
  aspect-ratio: 1 / 1.42;
  margin: 0;
  overflow: hidden;
  background: #ffffff;
  transition: transform 0.22s ease;
  position: relative;
  z-index: 2;
}

.product-image {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transition: transform 0.22s ease, opacity 0.22s ease;
}

.product-info {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 16px;
  align-items: start;
  padding: 14px 12px 12px;
  min-height: 96px;
  background: #ffffff;
  color: #000000;
  transition: background-color 0.22s ease, color 0.22s ease, padding 0.22s ease, min-height 0.22s ease,
    transform 0.22s ease;
  position: relative;
  z-index: 1;
}

.product-text {
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.product-name,
.product-price {
  margin: 0;
  font-size: clamp(14px, 1.2vw, 18px);
  font-weight: 400;
  line-height: 1.1;
  letter-spacing: 0.02em;
}

.product-name {
  max-width: none;
  text-transform: uppercase;
  white-space: normal;
  overflow-wrap: anywhere;
}

.product-description {
  margin: 0;
  font-family: "PP Neue Montreal", system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif;
  font-size: 13px;
  line-height: 1.2;
  max-height: 0;
  opacity: 0;
  overflow: hidden;
  transform: translateY(-4px);
  transition: max-height 0.22s ease, opacity 0.22s ease, transform 0.22s ease, margin 0.22s ease;
}

.product-price {
  white-space: nowrap;
  align-self: start;
}

.product-card:hover,
.product-card:focus-within {
  transform: translateY(-3px);
}

.product-card:hover .product-image-slot,
.product-card:focus-within .product-image-slot {
  transform: scale(1.03);
}

.product-card:hover .product-image,
.product-card:focus-within .product-image {
  transform: scale(1.03);
}

.product-card:hover .product-info,
.product-card:focus-within .product-info {
  background: #000000;
  color: #ffffff;
  min-height: 134px;
  padding: 16px 14px 12px;
  transform: translateY(3px) scaleX(1.017);
  transform-origin: center top;
  margin-left: -2px;
  margin-right: -2px;
}

.product-card:hover .product-description,
.product-card:focus-within .product-description {
  max-height: 110px;
  opacity: 1;
  transform: translateY(0);
}

.product-card:hover .product-name,
.product-card:hover .product-price,
.product-card:focus-within .product-name,
.product-card:focus-within .product-price {
  color: #ffffff;
}

@media (max-width: 900px) {
  .merch-page {
    min-height: 120vh;
    padding: 80px 24px 180px;
  }

  .merch-title {
    font-size: clamp(36px, 9vw, 56px);
    white-space: normal;
  }

  .merch-intro {
    margin-top: 32px;
    font-size: 14px;
  }

  .products-grid {
    margin-top: 84px;
    grid-template-columns: 1fr;
    gap: 72px;
    justify-items: center;
  }

  .product-info {
    padding-inline: 0;
    min-height: auto;
  }

  .product-card {
    width: min(100%, 340px);
  }

  .product-text {
    min-height: auto;
  }

  .product-name,
  .product-price {
    font-size: 14px;
  }

  .product-description {
    font-size: 12px;
  }

  .product-card:hover,
  .product-card:focus-within {
    transform: none;
  }
}
</style>
