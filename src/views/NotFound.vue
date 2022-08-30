<template>
  <div class="min-h-screen flex justify-center bg-cblack text-white">
    <section class="relative z-10 h-full">
      <div class="flex -mx-4 h-full">
        <div class="w-full px-4 my-[65%]">
          <div class="mx-auto px-4 max-w-[400px] text-center">
            <h2
              class="font-bold text-white mb-2 text-[50px] sm:text-[80px] md:text-[100px] leading-none"
            >
              <mark class="mark2"> 404 </mark>
            </h2>
            <h4
              class="mt-10 font-bold text-cgray-200 text-[18px] sm:text-[22px] leading-tight mb-3"
            >
              Oups ! Cette page n'existe pas
            </h4>
            <p class="text-lg text-cgray-500 mb-8 mt-8">
              Si vous êtes sur du lien, c'est que le document été supprimé.
            </p>
            <div>
              <button class="group transform hover:scale-[0.97]">
                <router-link to="/" class="flex items-center text-base font-bold">
                  <span class="border-b-4 border-cgray-700 group-hover:border-cyellow"
                    >Retourner à la racine</span
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
        </div>
      </div>
    </section>
  </div>
</template>
