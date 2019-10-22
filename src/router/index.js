import ACL from '../util/async-load'

export default [
    {
        name: '测试Demo',
        path: '/',
        component: ACL(() => import('../pages/Home'))
    },
    {
        name: '测试Demo',
        path: '/home',
        component: ACL(() => import('../pages/Home'))
    },
    {
        name: 'jsxPage',
        path: '/jsxPage',
        component: ACL(() => import('../pages/JSXPage'))
    },
    {
        name: 'classComponentPage',
        path: '/classComponentPage',
        component: ACL(() => import('../pages/ClassComponentPage'))
    },
    {
        name: 'lifeCyclePage',
        path: '/lifeCyclePage',
        component: ACL(() => import('../pages/LifeCyclePage'))
    }
]