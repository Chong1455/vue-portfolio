import { createRouter, createWebHistory } from "vue-router";

import Home from "./pages/Home.vue";
import About from "./pages/About.vue";
import ProjectsList from "./pages/projects/ProjectsList.vue";
import Contact from "./pages/Contact.vue";
import NotFound from "./pages/NotFound.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Home },
    { path: "/about", component: About },
    { path: "/projects", component: ProjectsList },
    { path: "/contact", component: Contact },
    { path: "/:notFound(.*)", component: NotFound },
  ],
});

export default router;
