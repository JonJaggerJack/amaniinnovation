<template>
  <div
    :class="[scrollPosition > 100 ? 'fixed bg-white' : 'absolute ', 'navbar']"
    class="w-full left-0 right-0 top-0 z-50"
  >
    <!-- Section 1 $store.state.fixedMenu ?  -->
    <section
      :class="[
        scrollPosition > 100 ? 'pt-0 pb-0' : 'pt-3 pb-3',
        'w-full px-4 bg-tranparent xl:px-8',
      ]"
    >
      <div
        class="absolute z-50 top-0 left-0 w-full h-1 bg-gradient-to-r from-cgreen via-cyellow to-cgreen"
      ></div>
      <nav
        class="relative pt-6 mx-auto pb-6 max-w-7xl md:flex md:justify-between md:items-center"
      >
        <div class="relative z-20 flex items-center justify-between">
          <div>
            <router-link
              class="text-xl font-bold text-gray-800 md:text-2xl hover:text-gray-700"
              to="/"
            >
              <div v-if="scrollPosition < 100">
                <img
                  src="../assets/logo_w.png"
                  alt="Amani Innovation"
                  :class="[
                    scrollPosition > 100 ? 'w-[100px]' : 'w-[100px] md:w-[130px]',
                    'duration-300',
                  ]"
                />
              </div>

              <div v-else>
                <img
                  src="../assets/logo.png"
                  alt="Amani Innovation"
                  :class="[
                    scrollPosition > 100 ? 'w-[100px]' : 'w-[130px]',
                    'duration-300',
                  ]"
                />
              </div>
            </router-link>
          </div>

          <!-- Mobile menu button -->
          <div x-on:click="mobile = !mobile" class="flex md:hidden">
            <button
              type="button"
              :class="[
                scrollPosition > 100 ? 'text-cblack' : ' text-cwhite',
                'hover:text-gray-600 focus:outline-none focus:text-gray-600',
              ]"
              aria-label="toggle menu"
            >
              <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                <path
                  fill-rule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
        <div
          class="left-0 z-10 items-center justify-center w-full font-semibold select-none md:flex lg:absolute"
        >
          <div
            class="flex flex-col justify-center w-full mt-4 space-y-2 md:mt-0 md:flex-row md:space-x-6 lg:space-x-10 xl:space-x-16 md:space-y-0"
          >
            <router-link
              to="/about"
              :class="[
                scrollPosition > 100 ? ' text-cblack' : 'text-cwhite',
                'py-3 hover:text-cyellow hover:underline',
              ]"
              href="#_"
              >À propos</router-link
            >

            <Popover v-slot="{ open }" class="relative py-3">
              <PopoverButton
                :class="open ? '' : 'text-opacity-90'"
                class="relative z-10 flex items-center space-x-1 text-cwhite hover:text-cyellow cursor-pointer lg:space-x-3 focus:outline-none"
              >
                <span
                  :class="[
                    scrollPosition > 100 ? ' text-cblack' : 'text-cwhite',
                    'hover:underline',
                    open ? 'text-cyellow underline' : '',
                  ]"
                  >Services</span
                >
                <ChevronDownIcon
                  :class="[
                    scrollPosition > 100 ? ' text-cblack' : 'text-cwhite',
                    open ? 'text-cyellow ' : 'opacity-50',
                  ]"
                  class="ml-2 h-5 w-5 text-orange-300 transition duration-150 ease-in-out group-hover:text-opacity-80"
                  aria-hidden="true"
                />
              </PopoverButton>

              <transition
                enter-active-class="transition duration-200 ease-out"
                enter-from-class="translate-y-1 opacity-0"
                enter-to-class="translate-y-0 opacity-100"
                leave-active-class="transition duration-150 ease-in"
                leave-from-class="translate-y-0 opacity-100"
                leave-to-class="translate-y-1 opacity-0"
              >
                <PopoverPanel>
                  <div class="relative">
                    <div
                      class="tooltip-top transform rotate-180 shadow-cblack shadow-2xl"
                    ></div>
                    <div
                      class="shadow-cblack shadow-2xl absolute left-0 z-30 w-full p-3 mt-6 -ml-0 space-y-2 overflow-hidden transform bg-white lg:left-1/2 lg:-ml-48 md:w-96 rounded-xl"
                    >
                      <router-link
                        :to="service.link"
                        :key="service"
                        v-for="service in services"
                        class="group block px-4 py-3 pr-0 text-base text-gray-700 cursor-pointer hover:bg-cgray-200 rounded-xl hover:text-gray-800"
                      >
                        <span class="flex items-start space-x-4">
                          <component
                            :is="service.icon"
                            class="flex-shrink-0 mt-1 text-blue-500 text-cgreen w-9 h-9"
                            aria-hidden="true"
                          />
                          <span class="flex flex-col space-y-2">
                            <span class="group-hover:underline">
                              {{ service.name }}
                            </span>
                            <span class="text-sm font-normal text-cgray-900">
                              {{ service.desc }}
                            </span>
                          </span>
                        </span>
                      </router-link>
                    </div>
                  </div>
                </PopoverPanel>
              </transition>
            </Popover>

            <Popover v-slot="{ open }" class="relative py-3">
              <PopoverButton
                :class="open ? '' : 'text-opacity-90'"
                class="relative z-10 flex items-center space-x-1 text-cwhite hover:text-cyellow cursor-pointer lg:space-x-3 focus:outline-none"
              >
                <span
                  :class="[
                    scrollPosition > 100 ? ' text-cblack' : 'text-cwhite',
                    'hover:underline',
                    open ? 'text-cyellow underline' : '',
                  ]"
                  >Ressources</span
                >
                <ChevronDownIcon
                  :class="[
                    scrollPosition > 100 ? ' text-cblack' : 'text-cwhite',
                    open ? 'text-cyellow ' : 'opacity-50',
                  ]"
                  class="ml-2 h-5 w-5 text-orange-300 transition duration-150 ease-in-out group-hover:text-opacity-80"
                  aria-hidden="true"
                />
              </PopoverButton>

              <transition
                enter-active-class="transition duration-200 ease-out"
                enter-from-class="translate-y-1 opacity-0"
                enter-to-class="translate-y-0 opacity-100"
                leave-active-class="transition duration-150 ease-in"
                leave-from-class="translate-y-0 opacity-100"
                leave-to-class="translate-y-1 opacity-0"
              >
                <PopoverPanel>
                  <div class="relative">
                    <div
                      class="tooltip-top transform rotate-180 shadow-cblack shadow-2xl"
                    ></div>
                    <div
                      class="shadow-cblack shadow-2xl absolute left-0 z-30 w-full p-3 mt-6 -ml-0 space-y-2 overflow-hidden transform bg-white lg:-ml-24 lg:left-1/2 md:w-48 rounded-xl"
                    >
                      <router-link
                        to="/faq"
                        class="hover:bg-cgray-200 hover:underline block px-4 py-3 text-sm text-gray-700 capitalize hover:bg-gray-50 rounded-xl hover:text-gray-800"
                      >
                        FAQ
                      </router-link>
                      <router-link
                        to="/blog"
                        class="hover:bg-cgray-200 hover:underline block px-4 py-3 text-sm text-gray-700 capitalize hover:bg-gray-50 rounded-xl hover:text-gray-800"
                      >
                        Notre blog
                      </router-link>
                    </div>
                  </div>
                </PopoverPanel>
              </transition>
            </Popover>
          </div>
        </div>

        <div
          class="relative z-20 flex-col justify-center pr-5 mt-4 space-y-8 md:pr-3 lg:pr-0 md:flex-row md:space-y-0 md:items-center md:space-x-6 md:mt-0"
        >
          <div class="transform hover:scale-[0.97]">
            <router-link
              to="/contact"
              class="btn group whitespace-nowrap flex justify-center items-center w-auto text-base font-bold leading-5 text-left text-cblack capitalize bg-cyellow rounded-md md:text-md py-2 px-6 md:text-center md:mx-0"
            >
              Nous contacter

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
          </div>
        </div>
      </nav>
    </section>
  </div>
</template>

<script>
import { ref, inject, onBeforeMount, onUnmounted } from "vue";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";
import { ChevronDownIcon, OfficeBuildingIcon, TruckIcon } from "@heroicons/vue/solid";

const services = ref([
  {
    link: "/services/aquagl",
    icon: OfficeBuildingIcon,
    name: "Aqua GL",
    desc: "Filtration naturelle de grande qualité",
  },
  {
    link: "/services/logistics",
    icon: TruckIcon,
    name: "Amani Logistics",
    desc: "Frets routiers et de services logistiques intègres",
  },
]);

export default {
  name: "NavBar",
  components: { Popover, PopoverButton, PopoverPanel, ChevronDownIcon },

  setup() {
    const store = inject("store");
    var mobile = "mobile";
    console.log(store.state.fixedMenu);
    var isOpen = ref(true);

    var scrollPosition = ref(0);

    function handleScroll(event) {
      scrollPosition.value = window.scrollY;
      console.log(scrollPosition.value, event);
    }

    onBeforeMount(() => {
      window.addEventListener("scroll", handleScroll);
    });

    onUnmounted(() => {
      window.removeEventListener("scroll", handleScroll);
    });
    return {
      mobile,
      isOpen,
      services,
      handleScroll,
      scrollPosition,
    };
  },
};
</script>
