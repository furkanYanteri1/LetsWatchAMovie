import Vue from "vue";
import VueRouter from "vue-router";
import searchMovie from "@/components/searchMovie";
import movieDetails from "@/components/movieDetails";
Vue.use(VueRouter);
const routes = [
  {
    path: "/searchMovie/:name",
    name: "SearchMovie",
    props: true,
    component: searchMovie,
  },
  {
    path: "/movie/:id",
    name: "movieDetails",
    props: true,
    component: movieDetails,
  },
];
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});
export default router;
