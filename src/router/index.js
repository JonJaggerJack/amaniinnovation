import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
	{
		path: "/",
		name: "home",
		component: HomeView
	},
	{
		path: "/about",
		name: "about",
		// route  -- level code-splitting
		// this  -- generates a separate chunk (about.[hash].js) for this route
		// which  -- is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "about" */ "../views/AboutView.vue")
	},
	{
		path: "/contact",
		name: "contact",
		component: () => import(/* webpackChunkName: "contact" */ "../views/ContactView.vue")
	},
	{
		path: "/services",
		name: "services",
		component: () => import(/* webpackChunkName: "services" */ "../views/ServicesView.vue"),
		children: [
			{
				path: "/services/aquagl",
				name: "aquagl",
				component: () => import(/* webpackChunkName: "aquagl" */ "../views/services/AquaGLView.vue")
			},
			{
				path: "/services/logistics",
				name: "logistics",
				component: () => import(/* webpackChunkName: "logistics" */ "../views/services/LogisticsView.vue")
			},
			{
				path: "/:catchAll(.*)",
				name: "NotFound",
				component: () => import(/*webpackChunkName:"NotFound"*/ "../views/NotFound.vue")
			}
		]
	}
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
	scrollBehavior(to, from, savedPosition) {
		// eslint-disable-next-line no-unused-vars
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				if (to.hash) {
					return resolve({ el: to.hash, behavior: "smooth", top: savedPosition + 81 });
				} else if (savedPosition) {
					return resolve(savedPosition);
				} else {
					resolve(document.getElementById("app").scrollIntoView({ behavior: "smooth" }));
				}
			}, 300);
		});
	}
});

export default router;
