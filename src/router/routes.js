import Home from '@/views/home/index.vue'
import WholeRent from '@/views/whole-rent/index.vue'
import SharedRent from '@/views/shared-rent/index.vue'
import CondoDetail from '@/views/CondoDetail/index.vue'
import News from '@/views/news/index.vue'
import Feedback from '@/views/feedback/index.vue'

export default [
  { path: '/', name: 'home', component: Home },
  { path: '/whole-rent', name: 'whole-rent', component: WholeRent },
  { path: '/shared-rent', name: 'shared-rent', component: SharedRent },
  { path: '/condoDetail', name: 'condoDetail', component: CondoDetail },
  { path: '/news', name: 'news', component: News },
  { path: '/feedback', name: 'feedback', component: Feedback }
]
