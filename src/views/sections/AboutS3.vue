<template>
  <section class="relative">
    <div
      class="max-w-6xl mx-4 px-4 sm:px-0 sm:mx-auto py-16 sm:py-24 bg-cgray-100 bg-opacity-70 rounded-xl"
    >
      <h1
        class="mb-4 text-2xl sm:text-3xl font-extrabold leading-tight text-center text-gray-900"
      >
        Ils nous ont fait confiance
      </h1>
      <p class="text-base text-cgray-700 text-center text-gray-600 max-w-xl mx-auto">
        Nous avons servis et avons été approuvés par certaines des meilleures entreprises
        de differents secteurs.
      </p>
      <div class="flex justify-center items-center w-full">
        <div class="grid grid-cols-2 gap-16 py-16 mb-0 text-center lg:grid-cols-4">
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
        <button class="group transform hover:scale-[0.97]">
          <router-link :to="{ hash: '#_' }" class="flex items-center text-base font-bold">
            <span class="border-b-4 border-cgray-700 group-hover:border-cyellow"
              >Devenez notre partenaire</span
            >

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="h-6 ml-3 mt-1.5 transform -rotate-[20deg] group-hover:rotate-[45deg] opacity-50 group-hover:opacity-80"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
              />
            </svg>
          </router-link>
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AboutS3",
};
</script>
