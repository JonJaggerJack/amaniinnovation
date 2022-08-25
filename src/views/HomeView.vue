<template>
  <div class="home bg-cblack bg-[url('bg/2.jpg')] bg-cover bg-center relative">
    <div class="absolute top-0 right-0 w-full h-full bg-cblack opacity-70"></div>
    <div class="max-w-7xl py-32 mx-auto text-left md:text-center">
      <div class="relative max-w-4xl">
        <h1
          class="pb-2 mt-[500px] text-3xl font-extrabold text-left text-transparent sm:text-3xl md:text-6xl md:text-left bg-clip-text bg-gradient-to-r from-cyellow via-cwhite to-cyellow"
        >
          Au-delà de vos limites
        </h1>

        <p
          class="mt-8 text-sm text-left text-cwhite sm:text-base md:text-lg md:max-w-xl md:text-left"
        >
          Société née des initiatives pour l’émergence et la croissance dans le domaine de
          l’eau, énergie, transport, agroalimentaire en général et immobilier au sein de
          la ville de Bukavu.
        </p>
        <button
          class="group flex justify-start rounded-md relative w-full px-12 py-4 mt-8 text-md font-bold leading-5 text-center text-cblack capitalize bg-cyellow md:w-auto md:mx-0"
        >
          En savoir plus
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 ml-4 opacity-50 group-hover:opacity-95"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "HomeView",
  components: {},
};
</script>
