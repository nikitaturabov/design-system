import Vue from "vue";
import Vuex from "vuex";
import firebase from "firebase/app";
import router from "@/router.js";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		authUser: null,
		error: null,
		currentPage: router.history.current.path,
	},
	mutations: {
		setUser(state, authUser) {
			state.authUser = authUser;
		},
		setError(state, error) {
			state.error = error;
		},
		setPage(state) {
			console.log(router.history.current.path);
			state.currentPage = router.history.current.path;
		},
	},
	actions: {
		signUser(context, data) {
			let [email, password] = data;

			firebase
				.auth()
				.signInWithEmailAndPassword(email, password)
				.then((user) => {
					router.push({ path: "/system" });
					context.commit("setUser", user);
				})
				.catch((error) => context.commit("setError", error.message));
			console.log(router);
		},
		registerUser(context, data) {
			let [email, password] = data;

			firebase
				.auth()
				.createUserWithEmailAndPassword(email, password)
				.then((user) => {
					router.push({ path: "/system" });
					context.commit("setUser", user);
				})
				.catch((error) => context.commit("setError", error.message));
		},

		signOut(context) {
			firebase
				.auth()
				.signOut()
				.then(() => {
					router.push({ path: "/auth" });
					context.commit("setUser", null);
				});
		},
		signWithGoogle(context) {
			const provider = new firebase.auth.GoogleAuthProvider();
			firebase
				.auth()
				.signInWithPopup(provider)
				.then((user) => {
					router.push({ path: "/system" });
					context.commit("setUser", user);
				})
				.catch((error) => context.commit("setError", error.message));
		},
		checkCurrentState(context) {
			firebase.auth().onAuthStateChanged((user) => {
				if (user === null) {
					router.push({ path: "/auth" });
				}
				context.commit("setUser", user);
			});
		},
		changePage(context) {
			context.commit("setPage");
		},
	},
	getters: {
		getUser(state) {
			return state.authUser;
		},
		getError(state) {
			return state.error;
		},
		getCurrentPage(state) {
			return state.currentPage;
		},
	},
});
