import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import Project from '../views/Project.vue';
import Resume from '../views/Resume.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/resume",
      name: "resume",
      component: Resume,
    },
    {
      path: "/project",
      name: "project",
      component: Project,
    },
    // {
    //   path: "/contact",
    //   name: "contact",
    //   component: Contact,
    // },
  ],
});

export default router;
