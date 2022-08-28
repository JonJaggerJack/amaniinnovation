<template>
  <!-- Section 1 -->
  <section class="w-full bg-white xl:px-0">
    <div class="py-16 max-w-6xl mx-auto">
      <div class="flex flex-col px-4 xl:px-0 md:flex-row">
        <div class="w-full pr-5 md:w-10/12 xl:pr-12">
          <h3 class="text-2xl sm:text-3xl font-extrabold sm:leading-[2.5rem]">
            Fondée sur <mark> l’innovation</mark> dans la production et l’offre de ses
            services
          </h3>
        </div>

        <div class="w-full mt-5 md:mt-0 md:w-4/5 md:pl-2">
          <p class="text-base font-normal text-gray-700 md:text-lg">
            Amani Innovation se veut d’accroitre la compétitivité au sein de la province
            et de la ville de Bukavu en s’éloignant de l’amateurisme prédominant sur le
            marché bukavien obstruant le succès et le développement de la ville toute
            entière.
          </p>
        </div>
      </div>

      <div class="mt-16">
        <h1
          class="mb-3 text-2xl sm:text-3xl font-extrabold leading-tight text-center text-gray-900"
        >
          Ils nous ont fait confiance
        </h1>
        <p class="text-lg text-center text-gray-600 max-w-xl mx-auto">
          Nous avons été approuvés et utilisés par certaines des meilleures entreprises du
          secteur.
        </p>
        <div class="flex justify-center items-center w-full">
          <div class="grid grid-cols-2 gap-16 py-16 px-4 mb-0 text-center lg:grid-cols-4">
            <!--<a
              href="https://www.sighteddesign.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
            class="flex items-center justify-center bg-cblack rounded-lg px-6 py-2 space-x-4" 
            <img alt="Sighted Logo" class="block object-contain h-8 lg:h-10" />
            <span class="font-black text-lg text-white leading-6">
                Sighted <br />
                Design
              </span></a>
              
              -->
            <div class="flex items-center justify-center">
              <img
                src="https://www.sighteddesign.com/images/2021/03/26/congo.png"
                alt="congo"
                class="block object-contain h-12 sm:h-16"
              />
            </div>
            <div class="flex items-center justify-center">
              <img
                src="https://www.sighteddesign.com/images/2021/03/26/elizabeth.png"
                alt="elizabeth"
                class="block object-contain h-20 lg:h-20"
              />
            </div>
            <div class="flex items-center justify-center">
              <img
                src="https://www.sighteddesign.com/images/2021/03/26/3tamis.png"
                alt="3tamis"
                class="block object-contain h-20 lg:h-20"
              />
            </div>
            <div class="flex items-center justify-center">
              <img
                src="https://www.sighteddesign.com/images/2021/03/26/bkxplr.png"
                alt="bkxplr"
                class="block object-contain h-20 lg:h-20"
              />
            </div>
          </div>
        </div>
        <div class="flex items-center justify-center w-full ml-2">
          <a href="#" class="flex items-center text-base font-bold">
            <span class="border-b-2 border-black">Devenz notre partenaire</span>
            <svg
              viewBox="0 0 20 20"
              fill="currentColor"
              class="h-6 ml-3 mt-2 transform -rotate-45 opacity-50"
            >
              <path
                fill-rule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AboutS1",
};
</script>
