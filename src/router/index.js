import VueRouter from "vue-router";
import Home from "../pages/Home.vue";
import TicketsService from "../pages/TicketsService.vue";
import OnlineText from "../pages/HomeComponents/OnlineText.vue";
import Exotics from "../pages/Exotics.vue";
import NewsPosts from "../pages/NewsPosts.vue"
const router = new VueRouter({
  routes: [
    {
      path: "/",
      redirect: "/home",
      meta: { title: "Home" },
    },
    {
      name: "home",
      path: "/home",
      component: Home,
      meta: { title: "Home" },
      children: [
        {
          name: "onlineText",
          path: "onlineText/:id/:VN/:CN/:DT/:CMN/:model",
          component: OnlineText,
          meta: { title: "Home" },
          props($route) {
            return {
              id: $route.params.id,
              VN: $route.params.VN,
              CN: $route.params.CN,
              DT: $route.params.DT,
              CMN: $route.params.CMN,
              model: $route.params.model,
            };
          },
        },
      ],
    },
    {
      name: "ticketsservice",
      path: "/ticketsservice",
      component: TicketsService,
      meta: { title: "TicketsService" },
    },
    {
      name: "exotics",
      path: "/exotics",
      component: Exotics,
      meta: { title: "Exotics" },
    },
    {
      name: "newsPosts",
      path: "/newsPosts",
      component: NewsPosts,
      meta: { title: "NewsPosts" },
    }
  ],
});
router.afterEach((to, from) => {
  if (to.meta.title) {
    document.title = to.meta.title; //修改网页的title
  } else {
    document.title = "Vue Router Demo"; //修改网页的title
  }
});
export default router;
