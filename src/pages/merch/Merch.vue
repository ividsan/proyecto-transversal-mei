<script setup lang="ts">
import { onBeforeUnmount, ref } from "vue"

type MerchProduct = {
  id: number
  name: string
  description: string
  price: string
  image?: string
  images?: string[]
}

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
      "Col·lecció de pegatines exclusives amb dissenys inspirats en la identitat visual del festival. Perfectes per a personalitzar llibretes, portàtils, fundes o qualsevol objecte i portar l'esperit del festival allà on vages.",
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
]

const activeImageIndexes = ref<Record<number, number>>({})
const hoverTimers = new Map<number, number>()

function getProductImage(product: MerchProduct) {
  if (product.images && product.images.length > 0) {
    const activeImageIndex = activeImageIndexes.value[product.id] ?? 0
    return product.images[activeImageIndex] ?? product.images[0]
  }

  return product.image ?? ""
}

function startImageCarousel(product: MerchProduct) {
  if (!product.images || product.images.length < 2) {
    return
  }

  stopImageCarousel(product.id)

  activeImageIndexes.value = {
    ...activeImageIndexes.value,
    [product.id]: 0,
  }

  const timerId = window.setInterval(() => {
    const currentIndex = activeImageIndexes.value[product.id] ?? 0
    activeImageIndexes.value = {
      ...activeImageIndexes.value,
      [product.id]: (currentIndex + 1) % product.images!.length,
    }
  }, 1100)

  hoverTimers.set(product.id, timerId)
}

function stopImageCarousel(productId: number) {
  const timerId = hoverTimers.get(productId)

  if (timerId !== undefined) {
    window.clearInterval(timerId)
    hoverTimers.delete(productId)
  }

  activeImageIndexes.value = {
    ...activeImageIndexes.value,
    [productId]: 0,
  }
}

onBeforeUnmount(() => {
  hoverTimers.forEach((timerId) => window.clearInterval(timerId))
  hoverTimers.clear()
})
</script>

<template>
  <main
    class="min-h-screen bg-white px-[clamp(28px,7vw,92px)] pb-[240px] pt-[116px] text-black max-[900px]:min-h-[120vh] max-[900px]:px-6 max-[900px]:pb-[180px] max-[900px]:pt-20"
    aria-label="Merch Esclat"
  >
    <section class="mx-auto w-full max-w-[1120px] text-center" aria-labelledby="merch-title">
      <h1
        id="merch-title"
        class="m-0 whitespace-nowrap text-center text-[clamp(54px,5.8vw,96px)] font-normal leading-none tracking-[0.08em] max-[900px]:whitespace-normal max-[900px]:text-[clamp(36px,9vw,56px)]"
      >
        MERCH ESCLAT 2026
      </h1>
      <p
        class="mx-auto mt-12 w-full max-w-[760px] text-center font-['PP_Neue_Montreal',system-ui,-apple-system,Segoe_UI,Roboto,Helvetica,Arial,sans-serif] text-[15px] leading-[1.15] max-[900px]:mt-8 max-[900px]:text-[14px]"
      >
        Uneix-te a la comunitat del festival i sigues el primer a descobrir totes les novetats. Rep descomptes
        exclusius, accés a promocions especials, notícies, anuncis d'artistes i moltes sorpreses més. No et perdes res!
      </p>
    </section>

    <section
      class="mx-auto mt-[140px] grid w-full max-w-[1120px] grid-cols-3 justify-items-center gap-x-7 gap-y-[120px] max-[900px]:mt-[84px] max-[900px]:grid-cols-1 max-[900px]:gap-y-[72px]"
      aria-label="Productes de merch"
    >
      <article
        v-for="product in products"
        :key="product.id"
        class="group relative flex w-full max-w-[340px] flex-col items-stretch transition-transform duration-200 ease-out max-[900px]:w-full max-[900px]:max-w-[340px]"
      >
        <figure
          class="relative z-[2] m-0 aspect-[1/1.42] w-full overflow-hidden bg-white transition-transform duration-200 ease-out group-hover:scale-[1.03] group-focus-within:scale-[1.03]"
          @mouseenter="startImageCarousel(product)"
          @mouseleave="stopImageCarousel(product.id)"
        >
          <img
            class="block h-full w-full object-cover object-center transition-transform duration-200 ease-out group-hover:scale-[1.03] group-focus-within:scale-[1.03]"
            :src="getProductImage(product)"
            :alt="product.name"
          />
        </figure>

        <div
          class="relative z-[1] grid min-h-[96px] grid-cols-[minmax(0,1fr)_auto] items-start gap-4 bg-white px-3 pb-3 pt-3 text-black transition-[background-color,color,padding,min-height,transform] duration-200 ease-out group-hover:min-h-[134px] group-hover:-translate-y-[3px] group-hover:scale-x-[1.017] group-hover:bg-black group-hover:px-[14px] group-hover:pt-4 group-focus-within:min-h-[134px] group-focus-within:-translate-y-[3px] group-focus-within:scale-x-[1.017] group-focus-within:bg-black group-focus-within:px-[14px] group-focus-within:pt-4 max-[900px]:min-h-auto max-[900px]:px-0"
        >
          <div class="min-w-0">
            <h2
              class="m-0 max-w-none break-words text-[clamp(14px,1.2vw,18px)] font-normal uppercase leading-[1.1] tracking-[0.02em] group-hover:text-white group-focus-within:text-white max-[900px]:text-[14px]"
            >
              {{ product.name }}
            </h2>
            <p
              class="m-0 overflow-hidden font-['PP_Neue_Montreal',system-ui,-apple-system,Segoe_UI,Roboto,Helvetica,Arial,sans-serif] text-[13px] leading-[1.2] opacity-0 transition-[max-height,opacity,transform,margin] duration-200 ease-out group-hover:mt-1 group-hover:max-h-[110px] group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:mt-1 group-focus-within:max-h-[110px] group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:text-white group-focus-within:text-white max-[900px]:text-[12px]"
            >
              {{ product.description }}
            </p>
          </div>

          <p
            class="m-0 self-start whitespace-nowrap text-[clamp(14px,1.2vw,18px)] font-normal leading-[1.1] tracking-[0.02em] group-hover:text-white group-focus-within:text-white max-[900px]:text-[14px]"
          >
            {{ product.price }}
          </p>
        </div>
      </article>
    </section>
  </main>
</template>
