import Vue from 'vue'
import Router from 'vue-router'

/* import Home from '../components/Home'
import HomeNews from '../components/HomeNews'
import HomeMessage from '../components/HomeMessage'
import About from '../components/About'
import User from '../components/User' */

const Home = () => import('../components/Home')
const HomeNews = () => import('../components/HomeNews')
const HomeMessage = () => import('../components/HomeMessage')
const About = () => import('../components/About')
const User = () => import('../components/User')
const Profile = () => import('../components/Profile')
// 1.安装插件
Vue.use(Router)

const routes= [
  {
    path: '/',
    redirect:'/home'
  },
  {
    path:'/home',
    component:Home,
    meta: {
      title: '首页'
    },
    children:[
      {
        path: '/',
        redirect: 'news'
      },
      {
        path:'news',
        component: HomeNews
      },
      {
        path: 'message',
        component: HomeMessage
      }
    ]
  },
  {
    path: '/about',
    component: About,
    meta:{
      title:'关于'
    }
  },
  {
    path: '/user/:id',
    component: User,
    meta: {
      title: '用户'
    }
  },
  {
    path: '/profile',
    component: Profile,
    meta: {
      title: '档案'
    }
  },
]

// 2.创建对象 导出对象
const router = new Router({
  // 配置路由和组件之间的映射关系
  routes,
  mode:'history',
  linkActiveClass:'active'
})

router.beforeEach((to, from, next) => {
  document.title = to.matched[0].meta.title
  next()
})


export default router


