import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/views/layout/index.vue'
import Manage from '@/views/manage/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Layout,
      beforeEnter(to, from ,next){
        if (window.localStorage.getItem('token')){
          next('/home')
        }else{
          next()
        }
      }
    },
    {
      path: '/home',
      component: Manage
    },
    

  ]
})

// 路由守卫
router.beforeEach((to, from, next)=>{
  let isValid = false
  if (window.localStorage.getItem('token') != null){
    isValid = true
  }else{
    isValid = false
  }

  // 如果token不为空或地址为layout时 下一个 否则一直是layout.
  // 该表达式从左往右计算，假设isValid为false，那么它会判断右式是否为真.
  // 因为layout的下一个地址是它自己，所以会成为一个条件锁。
  // 当isValid为真，那么后面的条件也不会去判断了.
  if (isValid || to.path === '/'){
    next()
  }else{
    next('/')
  }
})

export default router
