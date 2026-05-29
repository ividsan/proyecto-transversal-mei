<script setup lang="ts">
const leftLinks = [
  {
    label: "INSTAGRAM_ @festival.esclat",
    href: "https://www.instagram.com/festival.esclat/",
    external: true,
  },
  {
    label: "CORREU ELECTRÒNIC_ FESTIVAL.ESCLAT@GMAIL.COM",
    href: "mailto:festival.esclat@gmail.com",
  },
  {
    label: "DIRECCIÓ_ JOAN VERDAGUER, PORTA 16, 46024 VALÈNCIA",
    href: "https://www.google.com/maps/search/?api=1&query=Joan+Verdaguer,+Porta+16,+46024+Val%C3%A8ncia",
    external: true,
  },
  {
    label: "NÚMERO DE TELÈFON_ +34 696 696 696",
    href: "tel:+34696696696",
  },
]

const rightLinks = [
  {
    label: "POLÍTICA DE PRIVACITAT",
    href: "/",
  },
  {
    label: "POLÍTICA DE COOKIES",
    href: "/",
  },
  {
    label: "TOTS DELS DRETS RESERVATS",
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
            class="block w-fit text-[clamp(13px,1.2vw,18px)] leading-[1.35] font-normal uppercase tracking-[0.015em] [font-stretch:semi-expanded] decoration-transparent decoration-1 underline-offset-4 transition-[text-decoration-color,text-underline-offset] hover:underline hover:decoration-black focus-visible:underline focus-visible:decoration-black active:underline active:decoration-black"
            :target="item.external ? '_blank' : undefined"
            :rel="item.external ? 'noreferrer noopener' : undefined"
          >
            {{ item.label }}
          </a>
        </div>

        <div class="space-y-3 lg:justify-self-end">
          <a
            v-for="item in rightLinks"
            :key="item.label"
            :href="item.href"
            class="block w-fit text-[clamp(13px,1.2vw,18px)] leading-[1.35] font-normal uppercase tracking-[0.015em] [font-stretch:semi-expanded] decoration-transparent decoration-1 underline-offset-4 transition-[text-decoration-color,text-underline-offset] hover:underline hover:decoration-black focus-visible:underline focus-visible:decoration-black active:underline active:decoration-black lg:ml-auto"
            :target="item.external ? '_blank' : undefined"
            :rel="item.external ? 'noreferrer noopener' : undefined"
          >
            {{ item.label }}
          </a>
        </div>
      </div>

      <div class="my-10 h-px w-full bg-black/90" aria-hidden="true"></div>

      <div class="grid gap-4 lg:grid-cols-2 lg:items-start">
        <p class="text-[clamp(13px,1.2vw,18px)] font-normal uppercase tracking-[0.015em] [font-stretch:semi-expanded]">
          ORGANITZA_
        </p>
        <p class="text-[clamp(13px,1.2vw,18px)] font-normal uppercase tracking-[0.015em] [font-stretch:semi-expanded] lg:justify-self-end">
          COL·LABORA_
        </p>

        <img
          class="mt-1 w-full max-w-[1280px] select-none object-contain lg:col-span-2"
          src="/iconos/Logos_footer.png"
          alt="Logos de organitza i col·labora"
          loading="lazy"
        />
      </div>
    </div>
  </footer>
</template>
