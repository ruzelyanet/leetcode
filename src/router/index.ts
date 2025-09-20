import { Router } from '@module/router'
import type { Route } from '@module/router'

const routes: Route[] = [{
    path: '/',
    component: () => import('@page/home')
}, {
    path: '/remove-sub-folder',
    component: () => import('@/units/RemoveSubFolder')
}, {
    path: '/maximum-erasure-value',
    component: () => import('@unit/MaximumErasureValue-1695')
}, {
    path: '/two-sum',
    component: () => import('@unit/TwoSum')
}, {
    path: '/power-of-two',
    component: () => import('@unit/PowerOfTwo-231')
}, {
    path: '/num-of-unplaced-fruits',
    component: () => import('@unit/NumOfUnplacedFruits')
}, {
    path: '/pascals-triangle',
    component: () => import('@unit/PascalsTriangle-118')
}, {
    path: '/count-hill',
    component: () => import('@unit/CountHills')
}, {
    path: '/max-sum',
    component: () => import('@unit/MaxSum')
}, {
    path: '/maximum-69-number',
    component: () => import('@unit/Maximum69Number')
}, {
    path: '/valid-word',
    component: () => import('@unit/ValidWord')
}, {
    path: '/convert-binary-linked-list-to-integer',
    component: () => import('@unit/ConvertBinaryNumberInaLinkedListToInteger')
}, {
    path: '/count-symmetic-integers',
    component: () => import('@unit/CountSymmetricIntegers')
}, {
    path: '/min-operations',
    component: () => import('@unit/MinimumOperationsToMakeArrayValuesEqualToK')
}, {
    path: '/triangle-type',
    component: () => import('@unit/TriangleType')
}]


const router = new Router(routes, '#app')

// router.beforeEach((to, from, next) => {
//   const isLoggedIn = localStorage.getItem('auth') === '1';

//   if (to.path.startsWith('/dashboard') && !isLoggedIn) {
//     next('/login');
//   } else {
//     next();
//   }
// });

export default router