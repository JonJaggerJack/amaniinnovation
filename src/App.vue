<template>
  <div class="relative">
    <NavBar />

    <div class="min-h-screen">
      <router-view v-slot="{ Component }">
        <FadeInOut entry="center" exit="center" :duration="200" mode="out-in">
          <div class="gs_reveal" :key="$route.path">
            <component :is="Component" />
          </div>
        </FadeInOut>
      </router-view>
    </div>
    <FooterView />
  </div>
</template>

<script>
import gsap from "gsap";

import { defineComponent } from "vue";
import { FadeInOut } from "vue3-transitions";
import { VueScreenSizeMixin } from "vue-screen-size";
import NavBar from "./components/NavBar.vue";
import FooterView from "./components/FooterView.vue";
import { provide } from "vue";
import store from "./store";

import { useRoute } from "vue-router";

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

    runGsap() {
      gsap.set(".follower", { xPercent: -50, yPercent: -50 });
      gsap.set(".cursor", { xPercent: -50, yPercent: -50 });

      var follow = document.querySelector(".follower");
      var cur = document.querySelector(".cursor");
      if (store.state.windowsW < 770) {
        window.addEventListener("mousemove", (e) => {
          gsap.to(cur, 0.2, { x: e.clientX, y: e.clientY });
          gsap.to(follow, 0.9, { x: e.clientX, y: e.clientY });
        });
      }
    },
  },

  mounted() {
    this.$progress.finish();
  },
  created() {
    // eslint-disable-next-line
    this.$progress.start();
    this.$router.beforeEach((to, from, next) => {
      this.$progress.start();
      next();
    });
    // eslint-disable-next-line
    this.$router.afterEach((to, from) => {
      this.$progress.finish();
    });
    this.runGsap();
  },

  beforeMount() {
    this.handleScreen();
    window.addEventListener("resize", this.handleScreen);

    // if (store.state.toggleMenu) {
    //   window.addEventListener("scroll", this.handleScreen);
    // }
  },

  unmounted() {
    this.handleScreen();
    window.removeEventListener("resize", this.handleScreen);
    // if (!store.state.toggleMenu) {
    //   window.removeEventListener("scroll", this.handleScreen);
    // }
  },
  setup() {
    provide("store", store);

    const route = useRoute();

    return {
      route,
    };
  },
});
</script>
