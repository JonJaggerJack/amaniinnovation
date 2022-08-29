<template>
  <section class="w-full px-4 py-16 bg-cblack text-white xl:px-0">
    <div class="max-w-2xl mx-auto tracking-tighter">
      <h2 class="text-2xl sm:text-3xl font-extrabold sm:leading-[2.5rem]">
        De Dar-es-Salam vers toute la région de la communauté des
        <mark class="mark2">Etats de l’Afrique de l’Est</mark>.
      </h2>

      <div class="mt-8">
        <p class="text-cgray-200">
          Nous fournissons un service sur-mesure en fonction des besoins et exigence de
          chaque client car la satisfaction de nos clients est au cœur de notre quotidien
        </p>

        <p class="mt-10">
          

           <ul class="relative max-w-2xl mx-auto lg:mx-0">
          <li class="flex pl-10 sm:pl-12 mt-5">
            <svg
              class="absolute left-0 w-6 h-6 sm:h-8 sm:w-8 text-cgreen"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span class="text-md text-cgray-300"
              ><span class="font-bold text-cgray-300">Déclaration </span> au port de dar-es-Salam des camions, voitures, conteneurs, etc… <span class="font-bold text-cgray-800">Transport</span>  des conteneurs, de carburants, de cargaisons surdimensionnées</span
            >
          </li>

          <li class="flex pl-10 sm:pl-12 mt-5">
            <svg
              class="absolute left-0 w-6 h-6 sm:h-8 sm:w-8 text-cgreen"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span class="text-md text-cgray-700"
              ><span class="font-bold text-cgray-800">Suivie</span>, traçage, et localisation de cargaisons Escorte et sécurisation des cargaisons.   <span class="font-bold text-cgray-800">Consultance</span>  en logistique : conception de service logistique personnalisé, conseil et recommandation</span
            >
          </li>
        </ul>
        </p>
      </div>

      <div class="mt-8 cursor-grabbing">
        <div class="mb-8">
          <h2 class="text-2xl font-extrabold">Nos itinéraires :</h2>
        </div>
        <Carousel
          :transition="750"
          :itemsToShow="3.95"
          :autoplay="750"
          :pauseAutoplayOnHover="true"
          :wrap-around="true"
          v-if="store.state.windowsW >= 770"
        >
          <Slide v-for="ville in villes" :key="ville">
            <div
              class="text-sm carousel__item sm:w-[150px] py-3 px-5 font-bold overflow-hidden rounded-md bg-cgray-100 bg-opacity-5"
            >
              {{ ville.n }}
            </div>
          </Slide>
        </Carousel>

        <Carousel
          :transition="750"
          :itemsToShow="2.2"
          :autoplay="750"
          :pauseAutoplayOnHover="true"
          :wrap-around="true"
          v-else
        >
          <Slide v-for="ville in villes" :key="ville" class="w-[140px] sm:w-[150px]">
            <div
              class="text-sm mx-2 carousel__item w-full py-3 px-5 font-bold overflow-hidden rounded-md bg-cgray-100 bg-opacity-5"
            >
              {{ ville.n }}
            </div>
          </Slide>
        </Carousel>
      </div>
    </div>

    <div class="w-full mt-16 sm:mb-6 mx-auto bg-opacity-5 p-0 sm:p-0">
      <aside class="max-w-2xl mx-auto">
        <div class="py-0 mx-auto max-w-screen-2xl sm:px-0">
          <div class="grid grid-cols-1 sm:gap-4 md:grid-cols-3 space-y-4 sm:space-y-0">
            <div
              class="w-full relative p-8 col-span-2 bg-cgreen rounded-xl sm:p-16 lg:px-16"
            >
              <div class="-z-0 absolute top-4 sm:top-8 left-16 sm:left-8 opacity-20">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-16 h-16 sm:w-24 sm:h-24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                  />
                </svg>
              </div>
              <div class="z-40 max-w-xl mx-auto text-center">
                <h2 class="text-2xl font-black text-cblack md:text-3xl">
                  Franchissez le pas <br class="sm:hidden block"> <mark class="mark1">avec nous</mark>
                </h2>

                <p class="mt-6 text-cgray-800 text-base">
                  Notre équipe d'accueil sera très enchanté de vous recevoir
                </p>

                <div class="mt-6 md:mt-8">
                  <router-link
                    to="/contact"
                    class="max-w-[200px] mx-auto flex justify-center items-center px-6 py-2 text-sm font-bold text-blue-500 transition bg-cblack border-4 border-cblack rounded hover:bg-transparent hover:text-cblack focus:outline-none focus:ring focus:ring-cyellow"
                  >
                <span class="_linksp"> Nous contacter </span>

                     <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-4 h-4 ml-2 opacity-50 group-hover:opacity-95"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
                  </router-link>
                </div>
              </div>
            </div>

            <div
              class="relative col-span-1 grid grid-cols-1 sm:gap-4 md:grid-cols-1 lg:grid-cols-1"
            >
              <div
                class="absolute left-0 right-0 h-full w-full bg-cblack bg-opacity-50"
              ></div>
              <div
            class="block absolute top-0 right-0 w-full h-full bg-gradient-to-b from-cblack to-transparent"
          ></div>
         
              <img
                alt="#"
                src="/assets/img/content/7.jpg"
                class="object-cover w-full  h-40 rounded-xl sm:h-56 md:h-full"
              />
            </div>
          </div>
        </div>
      </aside>
    </div>
  </section>
</template>

<script>
import { Carousel, Slide } from "vue3-carousel";

import { defineComponent, inject, ref } from "vue";

import "vue3-carousel/dist/carousel.css";

const villes = ref([
  {
    n: "BUKAVU",
    i: "",
  },
  {
    n: "UVIRA",
    i: "",
  },
  {
    n: "GOMA",
    i: "",
  },
  {
    n: "KIGALI",
    i: "",
  },
  {
    n: "KIGALI",
    i: "",
  },
  {
    n: "KAMEMBE",
    i: "",
  },
  {
    n: "BUJUMBURA",
    i: "",
  },
  {
    n: "KASUMBALESA",
    i: "",
  },
  {
    n: "LUBUMBASHI",
    i: "",
  },
  {
    n: "KOLWEZI",
    i: "",
  },
]);
export default defineComponent({
  name: "LogisticsS2",
  components: {
    Carousel,
    Slide,
  },

  setup() {
    const store = inject("store");

    return {
      villes,
      store,
    };
  },
});
</script>

<style scoped>
.carousel__item {
  transform: none !important;
}
.carousel__slide > .carousel__item {
  transform: scale(1);
  opacity: 0.3;
}
.carousel__slide--visible > .carousel__item {
  opacity: 1;
  transform: rotateY(0);
}
.carousel__slide--active > .carousel__item {
  transform: scale(1.1);
}
</style>
