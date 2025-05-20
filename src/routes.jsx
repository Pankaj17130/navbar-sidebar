// src/routes.js
import { lazy } from 'react';

const Home = lazy(() => import('./pages/Home'));
const ProductsPage = lazy(() => import('./pages/ProductsPage'));
const ProductDetail = lazy(() => import('./components/ProductDetail'));
const Cart = lazy(() => import('./pages/Cart'));
const MyOrders = lazy(() => import('./pages/MyOrders'));
const WoodcraftCategories = lazy(() => import('./components/WoodcraftCategories'));
const NotFound = lazy(() => import('./pages/NotFound'));

export const routes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/products',
    element: <ProductsPage />,
  },
  {
    path: '/products/:category',
    element: <ProductsPage />,
  },
  {
    path: '/product/:id',
    element: <ProductDetail />,
  },
  {
    path: '/cart',
    element: <Cart />,
  },
  {
    path: '/orders',
    element: <MyOrders />,
  },
  {
    path: '/collections/*',
    element: <WoodcraftCategories />,
  },
  {
    path: '*',
    element: <NotFound />,
  }
];