<script setup lang="ts">
import { Instagram, Mail, MapPin, Phone } from "lucide-vue-next"

const leftLinks = [
  {
    label: "INSTAGRAM_ @festival.esclat",
    href: "https://www.instagram.com/festival.esclat/",
    external: true,
    icon: Instagram,
  },
  {
    label: "CORREU ELECTRÒNIC_ FESTIVAL.ESCLAT@GMAIL.COM",
    href: "mailto:festival.esclat@gmail.com",
    icon: Mail,
  },
  {
    label: "DIRECCIÓ_ JOAN VERDAGUER, PORTA 16, 46024 VALÈNCIA",
    href: "https://www.google.com/maps/search/?api=1&query=Joan+Verdaguer,+Porta+16,+46024+Val%C3%A8ncia",
    external: true,
    icon: MapPin,
  },
  {
    label: "NÚMERO DE TELÈFON_ +34 696 696 696",
    href: "tel:+34696696696",
    icon: Phone,
  },
]

const rightLinks = [
  {
    label: "NORMES DEL FESTIVAL",
    to: "/normes-del-festival",
  },
  {
    label: "POLÍTICA DE PRIVACITAT",
    href: "/",
  },
  {
    label: "TOTS ELS DRETS RESERVATS",
    href: "/",
  },
  {
    label: "ESCOLTA_SPOTIFY",
    href: "https://open.spotify.com/search/esclat",
    external: true,
  },
]
</script>

<template>
  <footer class="border-t border-black bg-white text-black">
    <div class="mx-auto w-full max-w-7xl px-6 py-12 sm:px-8 lg:px-10 lg:py-14">
      <div class="grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(280px,0.75fr)] lg:gap-12">
        <div class="space-y-3">
          <a
            v-for="item in leftLinks"
            :key="item.label"
            :href="item.href"
            class="block w-fit text-[clamp(13px,1.2vw,18px)] leading-[1.35] font-normal uppercase tracking-[0.015em] [font-stretch:semi-expanded] decoration-transparent decoration-1 underline-offset-4 transition-[text-decoration-color,text-underline-offset] hover:underline hover:decoration-black focus-visible:underline focus-visible:decoration-black active:underline active:decoration-black max-[640px]:inline-flex max-[640px]:h-11 max-[640px]:w-11 max-[640px]:items-center max-[640px]:justify-center"
            :target="item.external ? '_blank' : undefined"
            :rel="item.external ? 'noreferrer noopener' : undefined"
          >
            <component
              :is="item.icon"
              class="hidden h-5 w-5 stroke-[1.9] max-[640px]:block"
              aria-hidden="true"
            />
            <span class="hidden sm:inline">{{ item.label }}</span>
            <span class="sr-only">{{ item.label }}</span>
          </a>
        </div>

        <div class="space-y-3 lg:justify-self-end">
          <template v-for="item in rightLinks" :key="item.label">
            <RouterLink
              v-if="item.to"
              :to="item.to"
              class="block w-fit text-[clamp(13px,1.2vw,18px)] leading-[1.35] font-normal uppercase tracking-[0.015em] [font-stretch:semi-expanded] decoration-transparent decoration-1 underline-offset-4 transition-[text-decoration-color,text-underline-offset] hover:underline hover:decoration-black focus-visible:underline focus-visible:decoration-black active:underline active:decoration-black lg:ml-auto"
            >
              {{ item.label }}
            </RouterLink>
            <a
              v-else
              :href="item.href"
              class="block w-fit text-[clamp(13px,1.2vw,18px)] leading-[1.35] font-normal uppercase tracking-[0.015em] [font-stretch:semi-expanded] decoration-transparent decoration-1 underline-offset-4 transition-[text-decoration-color,text-underline-offset] hover:underline hover:decoration-black focus-visible:underline focus-visible:decoration-black active:underline active:decoration-black lg:ml-auto"
              :target="item.external ? '_blank' : undefined"
              :rel="item.external ? 'noreferrer noopener' : undefined"
            >
              {{ item.label }}
            </a>
          </template>
        </div>
      </div>

      <div class="my-10 h-px w-full bg-black/90" aria-hidden="true"></div>

      <div class="grid grid-cols-2 items-start gap-4 max-[640px]:gap-x-3 max-[640px]:gap-y-2">
        <p class="m-0 text-[clamp(13px,1.2vw,18px)] font-normal uppercase tracking-[0.015em] [font-stretch:semi-expanded]">
          ORGANITZA_
        </p>
        <p class="m-0 justify-self-end text-right text-[clamp(13px,1.2vw,18px)] font-normal uppercase tracking-[0.015em] [font-stretch:semi-expanded]">
          COL·LABORA_
        </p>

        <img
          class="col-span-2 mt-1 w-full max-w-[1280px] select-none object-contain"
          src="/iconos/Logos_footer.png"
          alt="Logos de organitza i col·labora"
          loading="lazy"
        />
      </div>
    </div>
  </footer>
</template>
