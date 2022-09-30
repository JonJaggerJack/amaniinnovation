<template>
  <section
    class="sm:pb-8 transition-transform duration-300 ease-in-out bg-cblack text-white py-16 sm:py-20 px-4 xl:px-0"
  >
    <div class="max-w-2xl mx-auto mb-8">
      <h2 class="text-2xl sm:text-3xl font-extrabold">
        Les avantages de l’eau « AQUA GL »
      </h2>
    </div>

    <div class="max-w-2xl mx-auto bg-opacity-5 p-0 sm:p-0 space-y-8">
      <DisclosureD
        as="div"
        v-slot="{ open }"
        :key="question"
        v-for="question in questions"
      >
        <DisclosureButton
          class="relative pr-12 flex w-full justify-between rounded-lg bg-cgray-100 bg-opacity-5 hover:bg-opacity-10 px-6 py-4 text-left text-sm font-medium text-purple-900 hover:bg-cgra-100 focus:outline-none focus-visible:ring focus-visible:ring-cgreen focus-visible:ring-opacity-5"
        >
          <span class="text-lg font-bold"> {{ question.q }} </span>
          <ChevronUpIcon
            :class="open ? 'rotate-180 transform text-cyellow ' : 'text-cgray-500'"
            class="h-5 w-5 absolute right-4 top-5 sm:top-4 sm:right-6"
          />
        </DisclosureButton>

        <TransitionRoot
          enter="transition-all duration-500 h-0 overflow-y-hidden"
          enter-from="opacity-0 h-0 overflow-y-hidden"
          enter-to="opacity-100 h-[200px] sm:h-[100px] overflow-y-hidden"
          leave="transition-all duration-300 h-0 overflow-y-hidden"
          leave-from="opacity-100 h-[200px] sm:h-[100px] overflow-y-hidden"
          leave-to="opacity-0 h-0 overflow-y-hidden"
        >
          <DisclosurePanel
            class="relative px-6 sm:px-6 mt-6 sm:mt-6 mb-0 sm:mb-0 text-base text-cgray-300"
          >
            <div
              class="absolute left-0 h-full w-1 rounded-md bg-cgray-100 bg-opacity-10"
            ></div>

            {{ question.r }}
          </DisclosurePanel>
        </TransitionRoot>
      </DisclosureD>
    </div>

    <div class="w-full mt-16 sm:mb-12 mx-auto bg-opacity-5 p-0 sm:p-0">
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
                  Franchissez le pas <br class="sm:hidden block" />
                  <mark class="mark1">avec nous</mark>
                </h2>

                <p class="mt-6 text-cgray-800 text-base">
                  Notre équipe d'accueil sera très enchanté de vous recevoir
                </p>

                <div class="mt-6 md:mt-8">
                  <router-link
                    to="/contact"
                    class="max-w-[250px] mx-auto flex justify-center items-center px-6 py-2 text-sm font-bold text-blue-500 transition bg-cblack border-4 border-cblack rounded hover:bg-transparent hover:text-cblack focus:outline-none focus:ring focus:ring-cyellow"
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
                class="hidden sm:hidden absolute top-0 right-0 w-full h-full bg-gradient-to-b from-cblack to-transparent"
              ></div>

              <img
                alt="#"
                src="/assets/img/content/6.jpg"
                class="hidden md:block object-cover w-full h-40 rounded-xl sm:h-56 md:h-full"
              />
            </div>
          </div>
        </div>
      </aside>
    </div>
  </section>
</template>

<script>
import { ref } from "vue";

import { ChevronUpIcon } from "@heroicons/vue/solid";
export default {
  name: "AquaGLS2",
  components: {
    ChevronUpIcon,
  },

  setup() {
    const questions = ref([
      {
        q: "Booster d’énergie",
        r:
          "Notre corps est composé à 70% d’eau. Plus vous buvez d’eau, plus vos performances en matière d’exercice sont améliorées. L’eau potable puriﬁée vous aide à vous déstresser, à vous hydrater et à augmenter votre eﬃcacité. ",
      },
      {
        q: "Hydrate et rend saine votre peau",
        r:
          " L’eau est le meilleur remède pour votre peau, elle vous offre une belle peau et un corps sain. C’est le centre de tout et peut être utilisé de nombreuses façons qui vous soutiennent de l’intérieur.",
      },
      {
        q: "Protège vos reins en vous débarrassant des calculs rénaux",
        r:
          " Les médecins et la science disent que l’eau potable minérale a la capacité de casser les calculs rénaux en deux et de les laisser sortir par l’urine plus rapidement et plus facilement grâce aux ions calcium et magnésium considérés comme agents thérapeutiques",
      },
      {
        q: "Contient des nutriments essentiels",
        r:
          " Vous pouvez survivre sans nourriture pendant des mois, mais sans eau, vous ne pouvez pas. Le médecin vous recommande de boire 7 à 8 verres d’eau par jour pour éviter la fatigue, le stress, les accidents vasculaires cérébraux ou l’épuisement.",
      },
    ]);
    return {
      questions,
    };
  },
};
</script>
