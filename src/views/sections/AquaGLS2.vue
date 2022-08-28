<template>
  <section class="bg-cblack text-white py-16 sm:py-20 pb-16 px-4 xl:px-0">
    <div class="max-w-2xl mx-auto mb-8">
      <h2 class="text-2xl sm:text-3xl font-extrabold">
        Les avantages de l’eau « AQUA GL »
      </h2>
    </div>

    <div class="max-w-2xl mx-auto bg-opacity-5 p-0 sm:p-0 space-y-8">
      <Disclosure
        as="div"
        v-slot="{ open }"
        :key="question"
        v-for="question in questions"
      >
        <DisclosureButton
          class="flex w-full justify-between rounded-lg bg-cgreen bg-opacity-10 px-6 py-4 text-left text-sm font-medium text-purple-900 hover:bg-cgra-100 focus:outline-none focus-visible:ring focus-visible:ring-cgreen focus-visible:ring-opacity-5"
        >
          <span> {{ question.q }} </span>
          <ChevronUpIcon
            :class="open ? 'rotate-180 transform' : ''"
            class="h-5 w-5 text-purple-500"
          />
        </DisclosureButton>
        <DisclosurePanel
          class="relative transition-all duration-300 tooglea px-6 sm:px-6 mt-6 sm:mt-6 mb-0 sm:mb-0 text-sm text-cgray-500"
        >
          <div
            class="absolute left-0 h-full w-1 rounded-md bg-cgray-100 bg-opacity-10"
          ></div>
          {{ question.r }}
        </DisclosurePanel>
      </Disclosure>
    </div>
  </section>
</template>

<script>
import { ref } from "vue";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { ChevronUpIcon } from "@heroicons/vue/solid";
export default {
  name: "AquaGLS2",
  components: {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    ChevronUpIcon,
  },

  setup() {
    const questions = ref([
      {
        q: "Booster d’énergie",
        r:
          "Notre corps est composé à 70% d’eau. Plus vous buvez d’eau, plus vos performances en matière d’exercice sont améliorées. L’eau potable puriﬁée vous aide à vous déstresser, à vous hydrater et à augmenter votre eﬃcacité. ",
      },
      {
        q: "Hydrate et rend saine votre peau",
        r:
          " L’eau est le meilleur remède pour votre peau, elle vous offre une belle peau et un corps sain. C’est le centre de tout et peut être utilisé de nombreuses façons qui vous soutiennent de l’intérieur.",
      },
    ]);
    return {
      questions,
    };
  },
};
</script>
