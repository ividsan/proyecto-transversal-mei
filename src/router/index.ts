import Home from "@/pages/home/Home.vue";
import Entrades from "@/pages/entrades/Entrades.vue";
import QueSom from "@/pages/que-som/QueSom.vue";
import Programacio from "@/pages/programacio/Programacio.vue";
import Contacte from "@/pages/contacte/Contacte.vue";
import Merch from "@/pages/merch/Merch.vue";
import ArtistaDetalle from "@/pages/ArtistaDetalle.vue";
import { createRouter, createWebHashHistory } from "vue-router";

export const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),

  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    }

    return { top: 0 };
  },

  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/que-som",
      name: "que-som",
      component: QueSom,
    },
    {
      path: "/programacio",
      name: "programacio",
      component: Programacio,
    },
    {
      path: "/artista/:slug",
      name: "artista-detalle",
      component: ArtistaDetalle,
      props: true,
    },
    {
      path: "/entrades",
      name: "entrades",
      component: Entrades,
    },
    {
      path: "/contacte",
      name: "contacte",
      component: Contacte,
    },
    {
      path: "/merch",
      name: "merch",
      component: Merch,
    },
    {
      path: "/:patchMatch(.*)",
      redirect: "/",
    },
  ],
});
