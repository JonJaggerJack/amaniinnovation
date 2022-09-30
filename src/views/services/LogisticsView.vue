<template>
  <div>
    <!-- Section 1 -->
    <section class="w-full pt-16 pb-0 overflow-hidden bg-cblack bg-cover lg:pb-32">
      <div
        class="max-w-2xl relative mt-[50px] md:mt-[100px] px-4 pb-10 mx-auto space-y-8 text-cwhite md:max-w-2xl xl:px-0 pt-24"
      >
        <nav aria-label="Breadcrumb" class="text-cgray-600 font-semibold -mb-3">
          <ol role="list" class="flex items-center space-x-1 text-sm relative w-full">
            <div class="absolute right-0 top-0">
              <img
                src="/assets/img/content/3.png"
                alt=""
                class="mt-[0px] md:mt-[0px] opacity-5 w-[60px] sm:w-[70px]"
              />
            </div>
            <li>
              <router-link class="block transition-colors hover:text-cgray-200" to="/">
                <span class="sr-only"> Home </span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-4 h-4 hover:text-cgray-200"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
              </router-link>
            </li>

            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-4 h-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </li>

            <li>
              <router-link
                :to="{ name: 'home', hash: '#services' }"
                class="block transition-colors hover:text-cgray-200"
                href="/collections/shirts"
              >
                Services
              </router-link>
            </li>

            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-4 h-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </li>

            <li>
              <router-link
                class="block transition-colors hover:text-cgray-200"
                to="/services/logistics"
              >
                <span class="_link">Amani Logistics</span>
              </router-link>
            </li>
          </ol>
        </nav>
        <h2
          class="text-3xl font-extrabold text-left text-transparent sm:text-3xl md:text-4xl md:text-left bg-clip-text bg-gradient-to-r from-cyellow via-cwhite to-cyellow"
        >
          Amani Logistics
        </h2>
        <div class="pt-8">
          <p class="block text-cgray-200 text-md text-gray-300 sm:text-lg">
            Filiale de Amani Innovation Sarl dirigée par des personnes ayant plusieurs
            années d’expériences dans le domaine de transport
          </p>
          <p class="mt-8 text-cgray-500">
            Caractérisée par un dynamisme et une motivation fondée sur l’innovation
            proposant des solutions modernes et personnalisées dans l’offre d’un full
            support des frets routiers et de services logistiques intègres.
          </p>
        </div>

        <div class="mt-8">
          <button class="group transform hover:scale-[0.97]">
            <router-link
              :to="{ hash: '#logistics' }"
              class="text-cgray-200 flex items-center text-base font-bold"
            >
              <span class="border-b-4 border-cgray-700 group-hover:border-cyellow"
                >Plus d'info</span
              >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="h-6 ml-3 mt-1.5 transform rotate-45 opacity-50 group-hover:opacity-80"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zm-7.518-.267A8.25 8.25 0 1120.25 10.5M8.288 14.212A5.25 5.25 0 1117.25 10.5"
                />
              </svg>
            </router-link>
          </button>
        </div>
      </div>

      <div class="hidden h-32 sm:h-72 lg:block"></div>
      <div
        class="relative w-full h-auto max-w-2xl px-4 mx-auto md:max-w-4xl lg:max-w-4xl lg:px-5"
      >
        <img
          src="/assets/img/content/4_3.png"
          class="bg-cgray-100 bg-opacity-5 rounded-tl-xl rounded-tr-xl py-4 sm:py-8 px-1 sm:px-2 relative w-full transform lg:absolute lg:-mt-64"
        />
      </div>
    </section>
    <LogisticsS1 />
    <LogisticsS2 />
  </div>
</template>

<script>
import LogisticsS1 from "@/views/sections/LogisticsS1.vue";
import LogisticsS2 from "@/views/sections/LogisticsS2.vue";

export default {
  name: "LogisticsView",
  components: { LogisticsS1, LogisticsS2 },
  setup() {},
};
</script>
