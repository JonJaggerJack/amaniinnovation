<template>
  <div class="relative">
    <NavBar />
    <router-view />
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import { provide } from "vue";
import store from "./store";

export default {
  name: "App",
  components: { NavBar },
  setup() {
    provide("store", store);

    return {};
  },
};
</script>
