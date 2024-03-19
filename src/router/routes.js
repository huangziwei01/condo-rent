import Home from '@/views/home/index.vue'
import Search from '@/views/search/index.vue'
import CondoDetail from '@/views/condoDetail/index.vue'
import News from '@/views/news/index.vue'
import Feedback from '@/views/feedback/index.vue'

export default [
  { path: '/', name: 'home', component: Home },
  { path: '/search', name: 'search', component: Search },
  { path: '/condo-detail', name: 'condoDetail', component: CondoDetail },
  { path: '/news', name: 'news', component: News },
  { path: '/feedback', name: 'feedback', component: Feedback },
]
