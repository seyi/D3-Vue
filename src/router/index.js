import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    return {x: 0, y: 0}
  },
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: resolve => {
        require(['../views/dashboard'], resolve)
      }
    },
    {
      path: '/pie-chart',
      name: 'PieChart',
      component: resolve => {
        require(['../views/pieChartView'], resolve)
      }
    },
    {
      path: '/map-chart',
      name: 'MapChart',
      component: resolve => {
        require(['../views/mapView'], resolve)
      }
    },
    {
      path: '/network-graph',
      name: 'NetworkGraph',
      component: resolve => {
        require(['../views/networkGraphView'], resolve)
      }
    }
  ]
})