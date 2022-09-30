import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vue3Progress from "vue3-progress";

const options = {
	position: "fixed",
	color: "none"
};

import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";

import { Disclosure, DisclosureButton, DisclosurePanel, TransitionRoot } from "@headlessui/vue";

const app = createApp(App);

app.use(store);
app.use(router);
// eslint-disable-next-line vue/multi-word-component-names
app.component("Popover", Popover);
app.component("PopoverButton", PopoverButton);
app.component("PopoverPanel", PopoverPanel);
app.component("DisclosureD", Disclosure);
app.component("DisclosureButton", DisclosureButton);
app.component("DisclosurePanel", DisclosurePanel);
app.component("TransitionRoot", TransitionRoot);
app.use(Vue3Progress, options);

app.config.globalProperties.$storeState = store.state;

app.mount("#app");
