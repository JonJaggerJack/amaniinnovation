<template>
  <!-- Section 1 -->
  <!-- <section id="services" class="w-full bg-cyellow text-cblack">
    <div class="mx-auto max-w-6xl px-4 xl:px-0 py-16 sm:py-20">
      <h2 class="text-center text-3xl font-black sm:text-4xl sm:leading-tight">
        Nos produits et services
      </h2>
      <div class="grid grid-cols-1 lg:grid-cols-2 sm:gap-8 pt-16 sm:pt-12">
        <div class="bg-cblack p-12 text-cwhite text-center rounded-xl">
          <div class="py-0 flex justify-center items-center w-full">
            <img src="/assets/img/content/2.png" alt="" />
          </div>
          <div class="flex justify-center items-center w-full mt-12">
            <router-link
              to="/services/aquagl"
              class="text-2xl sm:text-3xl font-bold hover:underline text-cyellow"
            >
              <span>Aqua GL</span>
            </router-link>
          </div>
        </div>

        <div class="mt-8 sm:mt-0 bg-cblack p-12 text-cwhite text-center rounded-xl">
          <div class="py-0 flex justify-center items-center w-full">
            <div class="mt-[160px]"></div>
          </div>
          <div class="flex justify-center items-center w-full mt-12">
            <router-link
              to="/services/logistics"
              class="text-2xl sm:text-3xl font-bold hover:underline text-cyellow"
            >
              <span>Amani Logistics</span>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section> -->

  <!-- Section 1 -->
  <section
    id="services"
    class="w-full bg-gradient-to-b from-cblack via-cblack to-[#335660] text-white"
  >
    <div class="mx-auto max-w-6xl px-4 sm:px-0 py-16 sm:py-20">
      <p class="text-center text-xs font-semibold tracking-wide uppercase text-cgreen">
        Produits & services
      </p>
      <h2 class="text-center text-2xl font-black sm:text-4xl mt-7 sm:leading-tight">
        Nos produits et services
      </h2>
      <div class="grid grid-cols-1 lg:grid-cols-2 md:gap-8 sm:pt-12">
        <!-- Box 1 -->
        <!-- Box 3 -->
        <div class="overflow-hidden text-center bg-gray-50">
          <div class="px-0 pt-16 pb-4 md:px-5 md:py-5 relative">
            <div class="absolute bottom-0 sm:bottom-0 left-0 opacity-5">
              <span class="text-[140px] sm:text-[150px] font-black">
                <img
                  src="/assets/img/content/3.png"
                  alt=""
                  class="w-[70px] sm:w-[100px] mr-4 -z-0"
                />
              </span>
            </div>
            <h2
              class="text-xl sm:text-xl font-extrabold mb-8 flex justify-center items-center"
            >
              <span>
                <img
                  src="/assets/img/content/3.png"
                  alt=""
                  class="w-[15px] sm:w-[20px] mr-3"
              /></span>
              Amani Logistics
            </h2>
            <p class="text-base text-cgray-300 max-w-[200px] flex justify-center mx-auto">
              Fret routier et sercives logistiques int??gres
            </p>
            <div class="flex items-center justify-center my-8 flex-row sm:space-x-5">
              <router-link
                to="/services/logistics"
                class="z-40 flex items-center w-auto mx-auto text-md leading-tight text-center text-cyellow font-bold hover:underline sm:mx-0"
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
            <img src="/assets/img/content/4_3.png" class="w-full" />
          </div>
        </div>
        <div class="overflow-hidden text-center bg-black">
          <div class="px-0 pt-16 pb-4 md:px-5 md:py-5 relative">
            <div class="absolute bottom-0 sm:bottom-0 left-0 opacity-5 -z-0">
              <span class="text-[140px] sm:text-[220px] font-black">
                <img
                  src="/assets/img/content/2.png"
                  alt=""
                  class="w-[100px] sm:w-[130px] mr-4"
                />
              </span>
            </div>
            <h2
              class="text-xl sm:text-xl font-extrabold mb-8 flex justify-center items-center"
            >
              <span>
                <img
                  src="/assets/img/content/2.png"
                  alt=""
                  class="w-[20px] sm:w-[30px] mr-3"
              /></span>
              Aqua GL
            </h2>
            <p class="text-base text-cgray-300 max-w-[200px] flex justify-center mx-auto">
              Filtration naturelle de l'eau de bonne qualit??
            </p>
            <div class="flex items-center justify-center my-8 flex-row sm:space-x-5">
              <router-link
                to="/services/aquagl"
                class="z-40 flex items-center w-auto mx-auto text-md leading-tight text-center text-cyellow font-bold hover:underline sm:mx-0"
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
