import ACL from '../util/async-load'

export default [
    {
        name: '测试Demo',
        path: '/home',
        component: ACL(() => import('../pages/Home'))
    }
]