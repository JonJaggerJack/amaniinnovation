import { createStore } from "vuex";
import { ref } from "vue";

export default createStore({
	state: {
		fixedMenu: false,
		toggleMenu: true,
		scrollPosition: ref(0),
		windowsW: ref(null)
	},
	getters: {},
	mutations: {},
	actions: {},
	modules: {}
});
