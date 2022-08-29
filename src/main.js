import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";

import { Disclosure, DisclosureButton, DisclosurePanel, TransitionRoot } from "@headlessui/vue";

const app = createApp(App);

app.use(store).use(router).mount("#app");

// eslint-disable-next-line vue/multi-word-component-names
app.component("Popover", Popover);
app.component("PopoverButton", PopoverButton);
app.component("PopoverPanel", PopoverPanel);
app.component("DisclosureD", Disclosure);
app.component("DisclosureButton", DisclosureButton);
app.component("DisclosurePanel", DisclosurePanel);
app.component("TransitionRoot", TransitionRoot);

app.config.globalProperties.$storeState = store.state;
