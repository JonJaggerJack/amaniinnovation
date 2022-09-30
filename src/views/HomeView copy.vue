<template>
  <div class="home">
    <section class="bg-cblack bg-[url('bg/2.jpg')] bg-cover bg-center relative">
      <div class="absolute top-0 right-0 w-full h-full bg-cblack opacity-90"></div>

      <div
        class="max-w-6xl py-20 md:py-24 mx-auto text-left md:text-center px-4 xl:px-0 relative"
      >
        <div
          class="absolute right-1 bottom-20 sm:bottom-28 transform rotate-[230deg] opacity-50"
        >
          <svg
            viewBox="0 0 96 40"
            class="w-[56px] h-[40px] sm:w-[96px] sm:h-[40px] mb-2"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M93.0681 3C72.3063 18.0061 57.7731 25.925 32.2716 21.1435C26.0822 19.983 15.9133 18.8754 10.945 14.459C8.12295 11.9505 3.74946 11.7165 9.24741 9.57834C13.7751 7.81753 20.3406 4.90981 25.2689 4.90981C27.0487 4.90981 9.62202 9.55411 4.26061 10.7455C-2.59384 12.2686 20.5637 33.6269 24.314 37.3771"
              stroke="#66ACBF"
              stroke-width="5"
              stroke-linecap="round"
            />
          </svg>
        </div>
        <div class="relative max-w-4xl">
          <h1
            class="pb-2 leading-normal mt-[300px] md:mt-[300px] text-4xl font-black text-left text-transparent md:text-5xl md:text-left bg-clip-text bg-gradient-to-r from-cyellow via-cwhite to-cyellow"
          >
            Au-delà de vos limites
          </h1>

          <p
            class="mt-8 text-md text-left text-cgray-400 sm:text-base md:text-lg md:max-w-xl md:text-left"
          >
            Société née des initiatives pour l’émergence et la croissance dans le domaine
            de l’eau, énergie, transport, agroalimentaire en général et immobilier au sein
            de la ville de Bukavu.
          </p>

          <div class="mt-10">
            <div class="">
              <button class="transform hover:scale-[0.95] flex w-auto justify-start">
                <router-link
                  to="/about"
                  class="btn font-bold text-base flex w-auto justify-start items-center hover:underline px-6 py-3 mt-4 sm:mt-4 text-cblack bg-cyellow rounded-md"
                >
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

              <!--           
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
              </button> -->
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
  computed() {},
  setup() {},
};
</script>
