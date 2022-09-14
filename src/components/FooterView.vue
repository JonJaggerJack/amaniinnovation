<template>
  <div id="footer" class="w-full">
    <footer class="bg-gray-100">
      <div class="sm:flex sm:justify-between max-w-6xl px-4 py-16 mx-auto xl:px-0">
        <div>
          <div class="flex justify-start items-center">
            <router-link to="/"
              ><img
                src="/assets/img/logo/logo_b.png"
                alt="IRAGI SOLUTIONS"
                class="-mt-0 -f-smal-logo w-[90px] sm:w-[100px] sm:block saturate-50 opacity-90"
            /></router-link>

            <span
              class="sm:hidden block text-xl text-cgray-700 font-bold ml-4 border-l-4 border-cgray-300 pl-4"
            >
              <router-link to="/contact" class="flex items-center text-base font-bold">
                <span
                  class="border-b-2 border-cgray-700 border-opacity-30 group-hover:border-cyellow"
                  >Nous contacter</span
                >

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="h-4 ml-3 mt-1.5 transform -rotate-[20deg] group-hover:rotate-[45deg] opacity-50 group-hover:opacity-80"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                  />
                </svg>
              </router-link>
            </span>

            <span
              class="hidden sm:block text-xl text-cgray-700 font-bold ml-4 border-l-4 border-cgray-300 pl-4"
            >
              Au delà de vos limite
            </span>
          </div>
        </div>
        <div
          class="flex justify-start sm:ml-4 mt-8 sm:mt-0 space-x-0 sm:space-x-8 items-center"
        >
          <div class="hidden">
            <span class="text-md">Nos réseau sociaux </span>
          </div>
          <ul class="flex justify-start mt-0 space-x-5 sm:space-x-6">
            <li class="transform hover:scale-125">
              <a
                href="#_"
                rel="noopener noreferrer"
                class="text-gray-700 transition hover:text-gray-700/75"
              >
                <span class="sr-only">Facebook</span>
                <img src=" /assets/img/logo/fb.svg" class="w-5 h-5" alt="" />
              </a>
            </li>

            <li class="transform hover:scale-125">
              <a
                href="#_"
                rel="noopener noreferrer"
                class="text-gray-700 transition hover:text-gray-700/75"
              >
                <span class="sr-only">Instagram</span>
                <img src=" /assets/img/logo/insta.svg" class="w-5 h-5" alt="" />
              </a>
            </li>

            <li class="transform hover:scale-125">
              <a
                href="#_"
                rel="noopener noreferrer"
                class="text-gray-700 transition hover:text-gray-700/75"
              >
                <span class="sr-only">Twitter</span>
                <img src=" /assets/img/logo/tw.svg" class="w-5 h-5" alt="" />
              </a>
            </li>

            <li class="transform hover:scale-125">
              <a
                href="#_"
                rel="noopener noreferrer"
                class="text-gray-700 transition hover:text-gray-700/75"
              >
                <span class="sr-only">LinkedIn</span>
                <img src=" /assets/img/logo/in.svg" class="w-5 h-5" alt="" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>

    <section class="bg-cgray-100 bg-opacity-70">
      <div class="relative max-w-6xl mx-auto px-4 xl:px-0 py-4">
        <div class="absolute -top-4 right-4 xl:right-0">
          <button
            @click="backToTop()"
            class="text-cblack btn bg-cyellow p-1.5 sm:p-2 rounded-lg animate-bounce"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M5 15l7-7 7 7"
              ></path>
            </svg>
          </button>
        </div>
        <div class="mt-0">
          <p class="leading-5">
            <span class="text- text-cgray-700 text-xs">
              © Copyright 2022 Amani Innovation. All Rights Reserved. Designed by
              <span class="font-bold underline text-cgreen"
                ><a
                  href="https://www.sighteddesign.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  >Sighted Design</a
                ></span
              >
            </span>
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { inject } from "vue";

export default {
  name: "FooterView",
  computed: {},
  setup() {
    const store = inject("store");

    function backToTop() {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });

      console.log(store.state.scrollPosition);
    }
    return {
      store,
      backToTop,
    };
  },
};
</script>
