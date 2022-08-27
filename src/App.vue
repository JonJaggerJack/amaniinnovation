<template>
  <div class="relative">
    <NavBar />
    <router-view />
    <FooterView />
  </div>
</template>

<script>
import { VueScreenSizeMixin } from "vue-screen-size";
import NavBar from "./components/NavBar.vue";
import FooterView from "./components/FooterView.vue";
import { provide } from "vue";
import store from "./store";

export default {
  name: "App",
  components: { NavBar, FooterView },
  mixins: [VueScreenSizeMixin],

  methods: {
    handleScreen() {
      console.log(this.$vssWidth);
      store.state.windowsW = this.$vssWidth;
      if (this.$vssWidth < 770) {
        store.state.toggleMenu = false;
      } else {
        store.state.toggleMenu = true;
      }
    },
  },

  beforeMount() {
    this.handleScreen();
    window.addEventListener("resize", this.handleScreen);
    window.addEventListener("scroll", this.handleScreen);
    window.addEventListener("mouseover", this.handleScreen);
  },

  unmounted() {
    this.handleScreen();
    window.removeEventListener("resize", this.handleScreen);
    window.removeEventListener("scroll", this.handleScreen);
    window.removeEventListener("mouseover", this.handleScreen);
  },
  setup() {
    provide("store", store);
    return {};
  },
};
</script>
