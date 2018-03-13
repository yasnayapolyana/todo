import Vue from 'vue'
import Router from 'vue-router'
import Todo from './components/Todo.vue'
// import About from './components/About.vue'

Vue.use(Router)

export default new Router ({
  routes: [
    {
      path: '/',
      name: 'tasks',
      component: Todo
    }
    // ,
    // {
    //   path: '/about',
    //   name: 'about',
    //   component: About
    // }
  ]
})
