<template>
  <!-- Section 1 -->
  <!-- <section class="w-full bg-cgreen text-cgray-100">
    <div
      class="flex flex-col px-4 xl:px-0 py-20 mx-auto max-w-6xl lg:flex-row lg:space-x-24"
    >
      <div
        class="relative flex flex-col items-center justify-center flex-shrink-0 w-full max-w-2xl sm:py-16 mx-auto rounded-lg lg:w-1/2 lg:mx-0 xl:w-5/12"
      >
        <img
          src="/assets/img/content/1.png"
          alt="Amani Innovation"
          class="w-[200px] sm:w-[300px]"
        />
      </div>
      <div
        class="relative w-full mb-0 lg:text-left sm:text-center lg:w-1/2 xl:w-7/12 lg:mb-0"
      >
        <h2 class="text-cblack text-3xl font-black sm:text-4xl mt-7 sm:leading-tight">
          Notre Vision
        </h2>
        <p class="text-cwhite text-lg lg:max-w-2xl mt-9">
          Fondée par une équipe composée essentiellement des jeunes aux compétences et
          expériences diversiﬁées prenant conscience du chômage élevé exacerbant le niveau
          de pauvreté dans leur milieu et épris par le souci de développement et de faire
          mieux, ont pris la décision de créer cette entreprise ayant pour vision d’œuvrer
          dans des secteurs à impact rapide et intégrateurs, pouvant améliorer
          l’écosystème entrepreneurial et l’environnement socioéconomique en particulier
          au sein de la ville de Bukavu et de ses environs ,de toute la RDC , dans la
          région du grand lacs et en général dans toute l’Afrique.
        </p>
      </div>
    </div>
  </section> -->

  <section class="w-full bg-white">
    <div
      class="flex flex-col px-4 xl:px-0 py-20 mx-auto max-w-6xl lg:flex-row lg:space-x-24"
    >
      <div
        class="relative w-full mb-10 lg:text-left sm:text-center lg:w-1/2 xl:w-7/12 lg:mb-0"
      >
        <p class="text-xs font-semibold tracking-wide uppercase text-cgreen">
          Objectif & vision
        </p>
        <h2 class="text-2xl font-black sm:text-4xl mt-7 sm:leading-tight">
          Oeuvrer dans des secteurs à impact
          <mark class="mark1"> rapide et intégrateurs </mark>
        </h2>
        <p class="text-cgray-800 text-lg lg:max-w-2xl mt-9 mb-8">
          Prenant conscience du chômage élevé exacerbant le niveau de pauvreté en Afrique
          et épris par le souci de développement et de faire mieux :
        </p>
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
            <span class="text-md text-cgray-700"
              ><span class="font-bold text-cgray-800">Amani Innovation </span> a pour
              vision d’œuvrer dans des secteurs à impact rapide et intégrateurs, pouvant
              améliorer l’écosystème entrepreneurial et l’environnement
              socioéconomique</span
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
              ><span class="font-bold text-cgray-800">En particulier</span>
              au sein de la ville de Bukavu et de ses environs, dans toute la RDC. Mais
              aussi dans la région des grands lacs et en général dans toute l’Afrique.
            </span>
          </li>
        </ul>

        <div class="mt-8">
          <button class="transform hover:scale-[0.97]">
            <!-- <router-link
              :to="{ hash: '#services' }"
              class="inline-block hover:underline px-5 py-3 mt-8 text-sm text-white bg-cblack rounded-md hover:bg-gray-800 ring-2 ring-transparent hover:ring-2 hover:ring-offset-2 hover:ring-cblack border-transparent"
            >
              <span class="font-medium">Decouvrez nos services</span> -
              <span class="font-light opacity-50">ici</span>
            </router-link> -->

            <router-link
              :to="{ hash: '#services' }"
              class="flex items-center text-base font-bold"
            >
              <span class="border-b-2 border-black">Découvrez nos services</span>
              <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                class="h-6 ml-3 mt-1.5 transform rotate-45 opacity-50"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </router-link>
          </button>
        </div>
      </div>

      <div
        class="relative flex flex-col items-center justify-center flex-shrink-0 w-full max-w-2xl py-10 sm:py-16 mx-auto bg-cgray-100 bg-opacity-70 rounded-lg lg:w-1/2 lg:mx-0 xl:w-5/12"
      >
        <img
          src="/assets/img/content/1.png"
          alt="Amani Innovation"
          class="w-[200px] sm:w-[300px]"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "HomeS1",
  setup() {},
};
</script>
