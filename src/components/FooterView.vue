<template>
  <div id="footer" class="w-full">
    <footer class="bg-gray-100">
      <div class="flex justify-between max-w-6xl px-4 py-16 mx-auto xl:px-0">
        <div>
          <div class="flex justify-start items-center">
            <router-link to="/"
              ><img
                src="/assets/img/logo/logo_b.png"
                alt="IRAGI SOLUTIONS"
                class="-mt-0 -f-smal-logo w-[90px] sm:w-[100px] sm:block saturate-50 opacity-90"
            /></router-link>

            <span
              class="hidden sm:block text-xl text-cgray-700 font-bold ml-4 border-l-4 border-cgray-300 pl-4"
            >
              Au delà de vos limite
            </span>
          </div>
        </div>
        <div class="flex justify-start ml-4 sm:mt-0 space-x-3 sm:space-x-8 items-center">
          <div class="hidden">
            <span class="text-md">Nos réseau sociaux </span>
          </div>
          <ul class="flex justify-start mt-0 gap-6 md:gap-8">
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
              ></span
            >
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
