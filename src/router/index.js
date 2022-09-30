import { createRouter, createWebHistory } from "vue-router";
import CountriesList from "../components/CountriesList.vue";
import CountriesDetails from "../components/CountriesDetails.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior() {
    document.getElementById("app").scrollIntoView();
  },
  routes: [
    {
      path: "/",
      name: "Countries List",
      component: CountriesList,
      children: [
        {
          path: "/country/:alpha3Code",
          name: "Country Details",
          component: CountriesDetails,
        },
      ],
    },
    // {
    //   path: "/list",
    //   name: "list",
    //   component: () => import("../components/CountriesList.vue"),
    // },
  ],
});

export default router;
