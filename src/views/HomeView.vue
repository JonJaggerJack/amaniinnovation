<template>
  <div class="home">
    <section class="bg-cblack bg-[url('bg/2.jpg')] bg-cover bg-center relative">
      <div class="absolute top-0 right-0 w-full h-full bg-cblack opacity-70"></div>
      <div class="max-w-6xl py-20 md:py-32 mx-auto text-left md:text-center px-4 xl:px-0">
        <div class="relative max-w-4xl">
          <h1
            class="pb-2 mt-[300px] md:mt-[300px] text-3xl font-extrabold text-left text-transparent sm:text-3xl md:text-6xl md:text-left bg-clip-text bg-gradient-to-r from-cyellow via-cwhite to-cyellow"
          >
            Au-delà de vos limites
          </h1>

          <p
            class="mt-8 text-sm text-left text-cwhite sm:text-base md:text-lg md:max-w-xl md:text-left"
          >
            Société née des initiatives pour l’émergence et la croissance dans le domaine
            de l’eau, énergie, transport, agroalimentaire en général et immobilier au sein
            de la ville de Bukavu.
          </p>

          <div class="mt-10">
            <div class="">
              <button
                class="transform hover:scale-[0.97] flex w-auto justify-start btn group whitespace-nowrap items-center text-base font-bold leading-5 text-left text-cblack bg-cyellow rounded-md md:text-md py-2 px-6 md:text-center"
              >
                <router-link to="" class="flex justify-start items-center">
                  En savoir plus

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
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <HomeS1 />
    <HomeS2 />
  </div>
</template>

<script>
// @ is an alias to /src
import HomeS1 from "./sections/HomeS1.vue";
import HomeS2 from "./sections/HomeS2.vue";

export default {
  name: "HomeView",
  components: {
    HomeS1,
    HomeS2,
  },
};
</script>
