<template>
  <div class="relative">
    <NavBar />
    <router-view />
    <FooterView />
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import FooterView from "./components/FooterView.vue";
import { provide } from "vue";
import store from "./store";

export default {
  name: "App",
  components: { NavBar, FooterView },
  setup() {
    provide("store", store);

    return {};
  },
};
</script>
