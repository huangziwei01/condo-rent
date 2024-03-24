const Home = () => import('@/views/home/index.vue')
const Search = () => import('@/views/search/index.vue')
const CondoDetail = () => import('@/views/condoDetail/index.vue')
const News = () => import('@/views/news/index.vue')
const Feedback = () => import('@/views/feedback/index.vue')
const CondoCms = () => import('@/views/cms/condo/condo-cms.vue')
const AddCondo = () => import('@/views/cms/condo/add-condo.vue')
const OrdersCms = () => import('@/views/cms/orders/orders-cms.vue')
const NewsCms = () => import('@/views/cms/news/news-cms.vue')
const FeedbackCms = () => import('@/views/cms/feedback/feedback-cms.vue')
const UserCms = () => import('@/views/cms/user/user-cms.vue')

export default [
  { path: '/', name: 'home', component: Home },
  { path: '/search', name: 'search', component: Search },
  { path: '/condo-detail', name: 'condoDetail', component: CondoDetail },
  { path: '/news', name: 'news', component: News },
  { path: '/feedback', name: 'feedback', component: Feedback },
  { path: '/condo-cms', name: 'condo-cms', component: CondoCms },
  { path: '/add-condo', name: 'add-condo', component: AddCondo },
  { path: '/orders-cms', name: 'orders-cms', component: OrdersCms },
  { path: '/news-cms', name: 'news-cms', component: NewsCms },
  { path: '/feedback-cms', name: 'feedback-cms', component: FeedbackCms },
  { path: '/user-cms', name: 'user-cms', component: UserCms },
  // { path: '/:pathMatch(.*)*', component: NotFound } // 404 路由
]
