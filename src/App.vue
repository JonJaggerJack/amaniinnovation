<template>
  <div class="relative">
    <NavBar />

    <router-view v-slot="{ Component }">
      <FadeInOut entry="center" exit="bottom" :duration="100" mode="out-in">
        <div class="gs_reveal" :key="$route.path">
          <component :is="Component" />
        </div>
      </FadeInOut>
    </router-view>
    <FooterView />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { FadeInOut } from "vue3-transitions";
import { VueScreenSizeMixin } from "vue-screen-size";
import NavBar from "./components/NavBar.vue";
import FooterView from "./components/FooterView.vue";
import { provide } from "vue";
import store from "./store";

export default defineComponent({
  name: "App",
  components: { NavBar, FooterView, FadeInOut },
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
    // window.addEventListener("scroll", this.handleScreen);
  },

  unmounted() {
    this.handleScreen();
    window.removeEventListener("resize", this.handleScreen);
    // window.removeEventListener("scroll", this.handleScreen);
  },
  setup() {
    provide("store", store);
    return {};
  },
});
</script>
