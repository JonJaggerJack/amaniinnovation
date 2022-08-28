<template>
  <div id="#about" class="about">
    <!-- Section 1 -->
    <section class="bg-cblack text-white relative w-full overflow-hidden bg-yellow-50">
      <div
        class="absolute z-10 top-0 right-0 w-full h-full bg-cblack bg-opacity-80"
      ></div>
      <div
        class="absolute top-0 left-0 z-10 hidden mt-20 -ml-32 scale-110 blur-xl opacity-70 2xl:block"
      >
        <div
          class="w-64 h-64 rounded-full bg-cgreen bg-opacity-10 backdrop-blur-md"
        ></div>
      </div>
      <div
        class="relative z-20 flex items-center justify-center max-w-6xl px-4 xl:px-0 py-16 mx-auto md:justify-start md:py-24"
      >
        <div class="mt-32 relative z-20 flex flex-col items-start max-w-xl space-y-8">
          <p class="text-xs font-semibold tracking-wide uppercase text-cgreen w-full">
            <span
              class="sm:text-left text-center flex justify-center items-center sm:items-start sm:justify-start"
            >
              A propos de nous
            </span>
          </p>
          <h1
            class="text-3xl w-full sm:text-left text-center sm:text-5xl font-black sm:leading-tight"
          >
            <div class="justify-center items-center sm:items-start sm:justify-start">
              Amani Innovation <br class="sm:hidden" />
              Sarl pour le
              <span
                class="text-transparent bg-clip-text bg-gradient-to-r from-cyellow via-cwhite to-cyellow"
              >
                developpement
              </span>
            </div>
          </h1>
          <p class="text-cwhite font-medium text-center sm:text-left">
            Une société née des initiatives pour l’émergence et la croissance dans le
            domaine de l’eau, énergie, transport, agroalimentaire en général et immobilier
            au sein de la ville de Bukavu
          </p>
          <button
            class="transform hover:scale-[0.95] flex w-full sm:w-auto justify-start"
          >
            <router-link
              to="/about"
              class="ring-4 flexc ring-transparent hover:ring-cgreen border-cyellow group font-bold text-base flex w-full sm:w-auto justify-start items-center px-6 py-3 mt-8 text-cyellow bg-cgreen bg-opacity-10 rounded-md"
            >
              <svg
                class="w-6 h-6 mr-3 text-cgreen opacity-50 group-hover:opacity-95"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                  clip-rule="evenodd"
                ></path>
              </svg>

              <span class="font-bold group-hover:underline">Decouvrez-nous </span>
              <span class="smalls">
                <span class="mx-2">-</span>
                <span class="font-light"> en vidéo</span></span
              >
            </router-link>
          </button>
        </div>
      </div>
      <div class="absolute z-0 top-0 right-0 w-1/3 h-full md:block">
        <div class="relative h-full w-full">
          <div
            class="absolute top-0 right-0 w-full h-full bg-gradient-to-b from-cblack to-transparent"
          ></div>
          <div
            class="absolute top-0 right-0 w-full h-full bg-gradient-to-r from-cblack to-transparent"
          ></div>
          <img class="object-cover w-full h-full" src="/assets/img/content/6.jpg" />
        </div>
      </div>
    </section>
    <AboutS1 />
  </div>
</template>

<script>
import AboutS1 from "./sections/AboutS1.vue";

export default {
  name: "AboutView",
  components: {
    AboutS1,
  },
  setup() {},
};
</script>
