<template>
  <!-- Section 1 -->
  <section class="w-full bg-gradient-to-b from-cblack via-cblack to-[#335660] text-white">
    <div class="mx-auto max-w-6xl px-4 sm:px-0 py-16 sm:py-20">
      <p class="text-center text-sm font-semibold tracking-wide uppercase text-cgreen">
        Produits & services
      </p>
      <h2 class="text-center text-2xl font-black sm:text-5xl mt-7 sm:leading-tight">
        Nos produits et services
      </h2>
      <div class="grid grid-cols-1 lg:grid-cols-2 md:gap-8 sm:pt-12">
        <!-- Box 1 -->

        <div class="overflow-hidden text-center bg-black">
          <div class="px-0 pt-16 pb-4 md:px-5 md:py-5 relative">
            <div class="absolute -left-2 top-3 sm:-left-2 sm:-top-16 opacity-5">
              <span class="text-[140px] sm:text-[220px] font-black">1</span>
            </div>
            <h2
              class="text-xl sm:text-2xl font-extrabold mb-8 flex justify-center items-center"
            >
              <span>
                <img
                  src="/assets/img/content/2.png"
                  alt=""
                  class="w-[20px] sm:w-[30px] mr-4"
              /></span>
              Aqua GL
            </h2>
            <p class="text-base text-cwhite max-w-[200px] flex justify-center mx-auto">
              Filtration naturelle de l'eau de bonne qualité
            </p>
            <div class="flex items-center justify-center my-8 flex-row sm:space-x-5">
              <router-link
                to="/services/aquagl"
                class="flex items-center w-auto mx-auto text-md leading-tight text-center text-cyellow font-bold hover:underline sm:mx-0"
              >
                <span>En savoir plus</span>
                <svg
                  class="w-4 transform -rotate-45 h-4 ml-2 opacity-70"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </router-link>
              <router-link
                to="/contact"
                class="flex items-center w-auto mx-auto text-md leading-tight text-center text-cgreen font-semibold hover:underline sm:mx-0"
              >
                <span>Nous contacter</span>
                <svg
                  class="w-4 h-4 ml-2 opacity-70"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
              </router-link>
            </div>
          </div>
          <div class="bg-cwhite bg-opacity-10 rounded-xl">
            <img src="/assets/img/content/5.png" class="w-full" />
          </div>
        </div>

        <!-- Box 3 -->
        <div class="overflow-hidden text-center bg-gray-50">
          <div class="px-0 pt-16 pb-4 md:px-5 md:py-5 relative">
            <div class="absolute -left-2 top-3 sm:-left-2 sm:-top-16 opacity-5">
              <span class="text-[140px] sm:text-[220px] font-black">2</span>
            </div>
            <h2
              class="text-xl sm:text-2xl font-extrabold mb-8 flex justify-center items-center"
            >
              <span>
                <img
                  src="/assets/img/content/3.png"
                  alt=""
                  class="w-[15px] sm:w-[20px] mr-4"
              /></span>
              Amani Logistics
            </h2>
            <p class="text-base text-cwhite max-w-[200px] flex justify-center mx-auto">
              Fret routier et sercves logistiques intègres
            </p>
            <div class="flex items-center justify-center my-8 flex-row sm:space-x-5">
              <router-link
                to="/services/logistics"
                class="flex items-center w-auto mx-auto text-md leading-tight text-center text-cyellow font-bold hover:underline sm:mx-0"
              >
                <span>En savoir plus</span>
                <svg
                  class="w-4 transform -rotate-45 h-4 ml-2 opacity-70"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </router-link>
              <router-link
                to="/contact"
                class="flex items-center w-auto mx-auto text-md leading-tight text-center text-cgreen font-semibold hover:underline sm:mx-0"
              >
                <span>Nous contacter</span>
                <svg
                  class="w-4 h-4 ml-2 opacity-70"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
              </router-link>
            </div>
          </div>

          <div class="bg-cgreen bg-opacity-10 rounded-xl">
            <img src="/assets/img/content/4.png" class="w-full" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "HomeS2",
  setup() {},
};

335660;
</script>
