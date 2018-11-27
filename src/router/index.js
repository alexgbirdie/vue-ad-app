import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Auth/Login'
import Registration from '@/components/Auth/Registration'
import NewAd from '@/components/Ads/NewAd'
import AdList from '@/components/Ads/AdList'
import Ad from '@/components/Ads/Ad'
import Orders from '@/components/User/Orders'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/registration',
      name: 'reg',
      component: Registration
    },
    {
      path: '/new',
      name: 'newAd',
      component: NewAd
    },
    {
      path: '/list',
      name: 'list',
      component: AdList
    },
    {
      path: '/ad/:id',
      name: 'ad',
      props: true,
      component: Ad
    },
    {
      path: '/orders',
      name: 'orders',
      component: Orders
    }
  ],
  mode: 'history'
})
