<template>
  <!-- Section 1 -->
  <section id="services" class="w-full bg-cyellow text-cblack">
    <div class="mx-auto max-w-6xl px-4 xl:px-0 py-16 sm:py-20">
      <h2 class="text-center text-3xl font-black sm:text-4xl sm:leading-tight">
        Nos produits et services
      </h2>
      <div class="grid grid-cols-1 lg:grid-cols-2 sm:gap-8 pt-16 sm:pt-12">
        <div class="bg-cblack p-12 text-cwhite text-center rounded-xl">
          <div class="py-0 flex justify-center items-center w-full">
            <img src="/assets/img/content/2.png" alt="" />
          </div>
          <div class="flex justify-center items-center w-full mt-12">
            <router-link
              to="/services/aquagl"
              class="text-2xl sm:text-3xl font-bold hover:underline text-cyellow"
            >
              <span>Aqua GL</span>
            </router-link>
          </div>
        </div>

        <div class="mt-8 sm:mt-0 bg-cblack p-12 text-cwhite text-center rounded-xl">
          <div class="py-0 flex justify-center items-center w-full">
            <div class="mt-[160px]"></div>
          </div>
          <div class="flex justify-center items-center w-full mt-12">
            <router-link
              to="/services/logistics"
              class="text-2xl sm:text-3xl font-bold hover:underline text-cyellow"
            >
              <span>Amani Logistics</span>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "HomeS2",
  setup() {},
};

335660;
</script>
