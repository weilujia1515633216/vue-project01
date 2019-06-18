import FirstView from '../pages/FirstView/FirstView.vue'
import Category from '../pages/Category/Category.vue'
import Classify from '../pages/Classify/Classify.vue'
import ShopCar from '../pages/ShopCar/ShopCar.vue'
import Personal from '../pages/Personal/Personal.vue'

export default[
  {
    path: '/firstView',
    component: FirstView
  },
  
  {
    path: '/classify',
    component: Classify
  },

  {
    path: '/category',
    component: Category
  },

  {
    path: '/shopCar',
    component: ShopCar
  },

  {
    path: '/personal',
    component: Personal
  },

]
