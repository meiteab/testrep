import { createRouter, createWebHistory } from 'vue-router'
// import BoardPost from '../views/BoardPost.vue'
import CategoryBoard from "../components/CategoryBoard.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "CategoryBoard",
      component: CategoryBoard,
    },
    // {
    //   path: '/',
    //   name: 'home',
    //   component: HomeView
    // },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // },
    //  {
    //   path: '/',
    //   name: 'BoardPost',
    //   component: BoardPost
    // },
  ]
})

export default router
