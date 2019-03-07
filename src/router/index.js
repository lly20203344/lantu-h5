import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Error404 = () => import('@/error/404.vue')
const Home = () => import('@/components/home/home.vue')
const Index = () => import('@/components/home/index.vue')
const Product = () => import('@/components/product/product.vue')
const User = () => import('@/components/user/user.vue')
const Login = () => import('@/components/login/login.vue')
const Success = () => import('@/components/login/success.vue')
const UserPrivacy = () => import('@/components/login/userPrivacy.vue')
// 次级页面
const SecondaryPage = () => import('@/components/common/secondaryPage.vue')
const Bank = () => import('@/components/bank/bank.vue')
const BindBank = () => import('@/components/bank/bindBank.vue')
const BindBankList = () => import('@/components/bank/bindBankList.vue')
const Setup = () => import('@/components/user/setup.vue')
const Account = () => import('@/components/user/account.vue')
const Message = () => import('@/components/user/message.vue')
const MessageInfo = () => import('@/components/user/messageInfo.vue')


export default new Router({
  routes: [{
      path: '/404',
      name: 'Error404',
      component: Error404
    },
    {
      path: '/',
      name: 'home',
      redirect: '/home',
      component: Home,
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      children: [{
          path: '/home',
          name: 'Index',
          component: Index,
        },
        {
          path: '/product',
          name: 'Product',
          component: Product
        },
        {
          path: '/user',
          name: 'User',
          component: User,
          meta: {
            requireAuth: true
          }
        },
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/success',
      name: 'Success',
      component: Success
    },
    {
      path: '/userPrivacy/:type',
      name: 'UserPrivacy',
      component: UserPrivacy
    },
    {
      path: '/register',
      name: 'register',
      component: Login,
    },
    {
      path: '/secondaryPage',
      name: 'secondaryPage',
      component: SecondaryPage,
      children: [{
          path: '/bank',
          name: 'bank',
          component: Bank,
          children: [{
              path: '/bank/bindbank',
              name: 'bindbank',
              component: BindBank,
            },
            {
              path: '/bank/list',
              name: 'bindBankList',
              component: BindBankList,
            }
          ]
        },
        {
          path: '/setup',
          name: 'setup',
          component: Setup,
        },
        {
          path: '/account',
          name: 'account',
          component: Account,
        },
        {
          path: '/message',
          name: 'message',
          component: Message,
        },
        {
          path: '/messageInfo',
          name: 'messageInfo',
          component: MessageInfo,
        },

      ]
    },

    /**
     * 始终放在最后
     */
    {
      path: '*',
      name: 'Error404',
      component: Error404,
    },
  ]
})
