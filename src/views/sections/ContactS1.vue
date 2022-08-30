<template>
  <section class="pt-16 sm:pt-20">
    <div class="max-w-6xl mx-auto px-4 xl:px-0 relative">
      <div class="lg:flex lg:justify-between">
        <div class="max-w-2xl flex justify-start items-center">
          <div
            class="flex justify-center items-center mr-4 xl:mr-8 p-4 rounded-xl h-[60px] sm:h-[70px] -h text-cgray-700 bg-cgray-100 bg-opacity-70"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="h-6 w-6 sm:w-10 sm:h-10"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zm-7.518-.267A8.25 8.25 0 1120.25 10.5M8.288 14.212A5.25 5.25 0 1117.25 10.5"
              />
            </svg>
          </div>
          <h1 class="text-xl sm:text-3xl font-black sm:leading-tight text-left">
            <span class="hidden sm:block">
              Choisissez un moyen de communication qui vous convient
            </span>
            <span class="sm:hidden block">Choissisez un moyen de communication </span>
          </h1>
        </div>
        <div>
          <div class="mt-8 hidden lg:block">
            <button class="group transform hover:scale-[0.97]">
              <router-link
                :to="{ hash: '#_' }"
                class="flex items-center text-base font-bold"
              >
                <span class="border-b-4 border-cgray-700 group-hover:border-cyellow"
                  >Questions fréquement posées</span
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
      </div>
      <div
        class="bg-cgray-900 overflow-hidden relative text-cwhite pb-[2rem] sm:pb-[1.5rem] p-[1.5rem] sm:p-[3rem] w-full mt-16 rounded-xl"
      >
        <div class="-z-0 absolute bottom-0 right-0 w-1/2 h-full">
          <div class="relative w-full h-full">
            <div
              class="absolute top-0 right-0 w-full h-full bg-gradient-to-b from-cblack to-transparent"
            ></div>
            <div
              class="absolute top-0 right-0 w-full h-full bg-gradient-to-r from-cblack to-transparent"
            ></div>
            <div class="absolute top-0 right-0 w-full h-full bg-cblack opacity-75"></div>
            <img
              src="/assets/img/content/6.jpg"
              class="w-full h-full object-cover"
              alt=""
            />
          </div>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="-z-0 w-36 h-36 opacity-5 top-1/3 md:block hidden absolute left-[450px]"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
          />
        </svg>
        <div class="relative z-10 space-y-12">
          <!-- border-b-4 border-cgray-700 group-hover:border-cyellow -->
          <div class="">
            <h2 class="text-lg sm:text-xl font-bold">Un appel</h2>
            <ul class="mt-6 space-y-4 text-md">
              <li class="group">
                <a
                  href="tel:+24397057507"
                  class="border-b-4 border-cgray-700 group-hover:border-cyellow"
                  >+243 97 057 507</a
                >
              </li>
              <li class="group">
                <a
                  href="tel:+24397057507"
                  class="border-b-4 border-cgray-700 group-hover:border-cyellow"
                  >+243 xxx xxx xxx</a
                >
              </li>
            </ul>
          </div>

          <div class="">
            <h2 class="text-lg sm:text-xl font-bold">Un mail</h2>
            <ul class="mt-6 space-y-4 text-md">
              <li class="group">
                <a
                  href="mailto:mail@ammaniinnov.com"
                  class="border-b-4 border-cgray-700 group-hover:border-cyellow"
                  >mail@ammaniinnov.com</a
                >
              </li>
              <li class="group">
                <a
                  href="mailto:direction@amaniinnov.com"
                  class="border-b-4 border-cgray-700 group-hover:border-cyellow"
                  >direction@amaniinnov.com</a
                >
              </li>
            </ul>
          </div>

          <div class="">
            <h2 class="text-lg sm:text-xl font-bold">Nos bureaux</h2>
            <ul class="mt-6 space-x-4 text-md flex justify-start">
              <li class="group">
                <a
                  href="#_"
                  class="border-b-4 border-cgray-700 group-hover:border-cyellow"
                  >Bukavu</a
                >
              </li>
              <li class="group">
                <a
                  href="#_"
                  class="border-b-4 border-cgray-700 group-hover:border-cyellow"
                  >Goma</a
                >
              </li>
              <li class="group">
                <a
                  href="#_"
                  class="border-b-4 border-cgray-700 group-hover:border-cyellow"
                  >Uvira</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ContactS1",
};
</script>
