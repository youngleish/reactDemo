import ACL from '../util/AsyncLoad'

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
    },
    {
        name: 'contextPage',
        path: '/contextPage',
        component: ACL(() => import('../pages/ContextPage'))
    },
    {
        name: 'compositionPage',
        path: '/compositionPage',
        component: ACL(() => import('../pages/CompositionPage'))
    },
    {
        name: 'hocPage',
        path: '/hocPage',
        component: ACL(() => import('../pages/HocPage'))
    },
    {
        name: 'refPage',
        path: '/refPage',
        component: ACL(() => import('../pages/RefPage')) 
    },
    {
        name: 'renderProp',
        path: '/renderProp',
        component: ACL(() => import('../pages/RenderPropPage')) 
    },
    {
        name: 'hookPage',
        path: '/hookPage',
        component: ACL(() => import('../pages/HookPage')) 
    }
]