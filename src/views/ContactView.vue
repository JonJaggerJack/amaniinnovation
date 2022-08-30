<template>
  <div id="contact" class="contat">
    <section class="bg-cblack py-20 overflow-hidden sm:py-24 text-white relative">
      <div
        class="z-10 absolute top-0 right-0 sm:left-24 bottom-[350px] sm:bottom-0 w-full h-full bg-gradient-to-t sm:bg-gradient-to-r from-cblack via-transparent to-transparent"
      ></div>
      <div class="max-w-6xl mx-auto px-4 xl:px-0 relative">
        <div
          class="absolute z-0 w-full right-4 sm:right-0 left-4 sm:left-16 bottom-[350px] sm:top-0"
        >
          <img src="/assets/img/content/map/1.png" class="w-[100%] sm:w-[100%]" alt="" />
        </div>
        <div class="z-10 relative mt-[200px] sm:mt-[300px]">
          <div class="max max-w-lg">
            <p
              class="text-xs mb-6 font-semibold tracking-wide uppercase text-cgreen w-full"
            >
              <span class="text-left"> Infos de Contact </span>
            </p>
            <h1 class="text-left text-3xl sm:text-5xl sm:leading-tight">
              Entrez en contact
              <br class="sm:hidden block" />
              <span
                class="text-transparent bg-clip-text bg-gradient-to-r from-cyellow via-cwhite to-cyellow"
                >avec nous</span
              >
            </h1>
            <p class="mt-12 text-cgray-300 text-lg">
              Que vous soyez une personne morale ou une entreprise, et que vous ayez des
              préocupations sur nos produit et services.
            </p>
          </div>
        </div>
      </div>
    </section>
    <ContactS1 />
  </div>
</template>

<script>
import ContactS1 from "./sections/ContactS1.vue";

export default {
  name: "ContactView",
  components: {
    ContactS1,
  },
  setup() {},
};
</script>
