import { createRouter, createWebHistory } from "vue-router";
import MainPage from "@/pages/MainPage";
import PostsPage from "@/pages/PostsPage";
import AboutPage from "@/pages/AboutPage";
import OnePostPage from "@/pages/OnePostPage";
import PostsPageWithStore from "@/pages/PostsPageWithStore";
import PostPageCompositionApi from "@/pages/PostPageCompositionApi";

const routes = [
  {
    path: "/",
    component: MainPage,
  },
  {
    path: "/posts",
    component: PostsPage,
  },
  {
    path: "/about",
    component: AboutPage,
  },
  {
    path: "/posts/:id",
    component: OnePostPage,
  },
  {
    path: "/store",
    component: PostsPageWithStore,
  },
  {
    path: "/сomposition",
    component: PostPageCompositionApi,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),
});

export default router;
