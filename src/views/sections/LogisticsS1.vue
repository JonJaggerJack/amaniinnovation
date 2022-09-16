<template>
  <!-- Section 1 -->
  <section id="logistics" class="w-full px-4 py-16 bg-white xl:px-0">
    <div class="max-w-2xl mx-auto tracking-tighter">
      <h2 class="text-2xl font-extrabold sm:leading-[2.5rem] text-black md:text-[35px]">
        Une importante <mark class="mark1">ﬂotte de véhicules</mark> sur les routes
        congolaises et africaines
      </h2>

      <p class="text-lg mt-6 text-cgray-800">
        Pour livrer les marchandises directement aux entrepôts des entreprises clientes
        sous vigilance d’un personnel expert qui grâce au système satellite GPS, est
        capable de surveiller, tracer, et communiquer avec nos chauffeurs 24h⁄24
      </p>

      <div class="mt-8">
        <DisclosureD as="div" v-slot="{ open }">
          <div
            :class="open ? 'p-4 rounded-xl  sm:p-8 bg-cgray-100 bg-opacity-70' : 'p-0'"
          >
            <DisclosureButton
              class="relative pr-0 flex w-full justify-between rounded-lg bg-cgray-100 bg-opacity-5 hover:bg-opacity-10 text-left text-sm font-medium text-purple-900 hover:bg-cgra-100 focus:outline-none focus-visible:ring focus-visible:ring-cgreen focus-visible:ring-opacity-5"
            >
              <button class="transform hover:scale-[0.97]">
                <div class="flex items-center text-base font-bold">
                  <span class="border-b-2 border-black">
                    <span v-if="open" class="text-cgray-700"> Lire moins </span>
                    <span v-else class="text-cgray-800">Lire plus d'infos</span>
                  </span>
                  <svg
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    class="h-6 ml-3 mt-1.5 opacity-50"
                    :class="
                      open
                        ? 'transform -rotate-45  text-cyellow '
                        : 'transform rotate-45 text-cgray-500'
                    "
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
              </button>
            </DisclosureButton>

            <TransitionRoot
              enter="transition-all duration-500 h-0 overflow-y-hidden"
              enter-from="opacity-0 h-0 overflow-y-hidden"
              enter-to="opacity-100 h-[200px] sm:h-[170px] overflow-y-hidden"
              leave="transition-all duration-300 h-0 overflow-y-hidden"
              leave-from="opacity-100 h-[200px] sm:h-[170px] overflow-y-hidden"
              leave-to="opacity-0 h-0 overflow-y-hidden"
            >
              <DisclosurePanel
                class="relative mt-6 sm:mt-6 mb-0 sm:mb-0 text-base text-cgray-500"
              >
                <div
                  class="absolute left-0 h-full w-1 rounded-md bg-cgray-100 bg-opacity-10"
                ></div>

                <p class="text-cgray-800">
                  Notre ﬂotte est composée de remorques des types les plus variés
                  (carrosseries, bâches, bennes, etc.) pour
                  <span class="font-bold"> la satisfaction maximale</span> de chaque
                  besoin de nos clients.
                </p>

                <p class="mt-6 text-cgray-700">
                  Des investissements continus sont promus par AMANI LOGISTIQUE S.a.r.l
                  aﬁn de renouveler la ﬂotte et de toujours disposer de véhicules
                  compétitifs, également équipés de tout le confort pour le bien-être du
                  conducteur.
                </p>
              </DisclosurePanel>
            </TransitionRoot>
          </div>
        </DisclosureD>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "LogisticsS1",
  components: {},
};
</script>
