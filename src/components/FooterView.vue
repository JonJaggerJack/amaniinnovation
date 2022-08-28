<template>
  <div id="footer" class="w-full">
    <section class="asFooter">
      <div class="max-w-6xl mx-auto px-4 xl:px-0 sm:py-16 py-16">
        <div class="grid md:grid-cols-4 w-full">
          <div class="col-span-2 sm:flex sm:justify-between">
            <div class="col-span-1">
              <router-link to="/"
                ><img
                  src="../assets/logo.png"
                  alt="IRAGI SOLUTIONS"
                  class="-mt-4 w-[90px] sm:w-[100px] saturate-50 opacity-50"
              /></router-link>
            </div>
            <div class="col-span-1 sm:mt-0 mt-8">
              <h3 class="font-bold">
                Nos réseaux sociaux <br />
                <p class="h-1 w-6 mt-2 bg-cyellow"></p>
              </h3>
              <ul class="flex justify-left mt-6 space-x-8">
                <li>
                  <a href="http://" target="_blank" rel="noopener noreferrer"
                    ><img
                      src="https://vincejs77.github.io/landing001/public/img/socials/insta.svg"
                      alt=""
                      class="w-[20px] sm:w-[20px]"
                  /></a>
                </li>
                <li>
                  <a href="http://" target="_blank" rel="noopener noreferrer"
                    ><img
                      src="https://vincejs77.github.io/landing001/public/img/socials/tw.svg"
                      alt=""
                      class="w-[20px] sm:w-[20px]"
                  /></a>
                </li>
                <li>
                  <a href="http://" target="_blank" rel="noopener noreferrer"
                    ><img
                      src="https://vincejs77.github.io/landing001/public/img/socials/fb.svg"
                      alt=""
                      class="w-[20px] sm:w-[20px]"
                  /></a>
                </li>
                <li>
                  <a href="http://" target="_blank" rel="noopener noreferrer"
                    ><img
                      src="https://vincejs77.github.io/landing001/public/img/socials/in.svg"
                      alt=""
                      class="w-[20px] sm:w-[20px]"
                  /></a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-span-2 sm:flex sm:justify-between sm:ml-16">
            <div class="d col-span-1 sm:ml-16 sm:mt-0 mt-8">
              <div>
                <h3 class="font-bold">
                  L'Entreprise <br />
                  <p class="h-1 w-6 mt-2 bg-cyellow"></p>
                </h3>
                <ul class="mt-4 space-y-2.5">
                  <li>
                    <router-link to="/about" class="cnav--ul__li">A propos</router-link>
                  </li>

                  <li><router-link to="/faq" class="cnav--ul__li">FAQ</router-link></li>
                  <li>
                    <router-link
                      to="/blog"
                      class="router-link-active router-link-exact-active cnav--ul__li"
                      aria-current="page"
                      >Notre Blog</router-link
                    >
                  </li>
                </ul>
              </div>
            </div>

            <div class="d col-span-1 md:ml-16 sm:mt-0 mt-8 hidden sm:block">
              <div>
                <h3 class="font-bold">
                  Infos de contact <br />
                  <p class="h-1 w-6 mt-2 bg-cyellow"></p>
                </h3>
                <ul class="mt-4 space-y-2">
                  <li>
                    <a href="mailto:email@amaniinovation.com" class="cnav--ul__li"
                      >email@amaniinovation.com</a
                    >
                  </li>
                  <li>
                    <a href="tel:+243 xx xxxx xxx" class="cnav--ul__li"
                      >+243 xx xxxx xxx</a
                    >
                  </li>
                  <li><a href="" class="cnav--ul__li">Bukavu - RDC</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="bg-cgray-100">
      <div class="relative max-w-6xl mx-auto px-4 md:px-0 py-8">
        <div class="absolute -top-4 right-4 sm:right-0">
          <button
            @click="backToTop()"
            class="text-cblack btn bg-cyellow p-2 rounded-lg animate-bounce"
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
          <p>
            <span class="text- text-cgray-800 text-sm">
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
