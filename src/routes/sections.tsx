import { lazy, Suspense } from 'react';
import { Outlet, Navigate, useRoutes } from 'react-router-dom';

import Box from '@mui/material/Box';

import { AuthLayout } from 'src/layouts/auth';
import { DashboardLayout } from 'src/layouts/dashboard';

import PageLoader from 'src/components/loaders/page-loader';

// ----------------------------------------------------------------------

export const HomePage = lazy(() => import('src/pages/home'));
export const SignInPage = lazy(() => import('src/pages/sign-in'));
export const SignUpPage = lazy(() => import('src/pages/sign-up'));
export const Page404 = lazy(() => import('src/pages/page-not-found'));

// ----------------------------- User Pages --------------------------------
export const UserProfile = lazy(() => import('src/pages/user-profile'));
export const UserCardsShowCase = lazy(() => import('src/pages/user-cards-showcase'));
export const UsersList = lazy(() => import('src/pages/user-list'));
export const UserCreate = lazy(() => import('src/pages/user-create'));
export const UserEdit = lazy(() => import('src/pages/user-edit'));
// ------------------------- Product Pages ---------------------------------
export const ProductPage = lazy(() => import('src/pages/product'));
export const ProductList = lazy(() => import('src/pages/product-list'));
export const ProductCreate = lazy(() => import('src/pages/product-create'));
export const ProductEdit = lazy(() => import('src/pages/product-edit'));

// ----------------------------------------------------------------------

const renderFallback = (
  <Box display="flex" alignItems="center" justifyContent="center" flex="1 1 auto">
    <PageLoader />
  </Box>
);

export function Router() {
  return useRoutes([
    {
      element: (
        <DashboardLayout>
          <Suspense fallback={renderFallback}>
            <Outlet />
          </Suspense>
        </DashboardLayout>
      ),
      children: [
        { element: <HomePage />, index: true },
        { path: '/dashboard/user', element: <UserProfile /> },
        { path: '/dashboard/user/cards', element: <UserCardsShowCase /> },
        { path: '/dashboard/user/list', element: <UsersList /> },
        { path: '/dashboard/user/new', element: <UserCreate /> },
        { path: '/dashboard/user/:id/edit', element: <UserEdit /> },
        { path: '/dashboard/product/:id', element: <ProductPage /> },
        { path: '/dashboard/product/:id/edit', element: <ProductEdit /> },
        { path: '/dashboard/product/new', element: <ProductCreate /> },
        { path: '/dashboard/product', element: <ProductList /> },
      ],
    },
    {
      path: 'sign-in',
      element: (
        <AuthLayout>
          <SignInPage />
        </AuthLayout>
      ),
    },
    {
      path: 'sign-up',
      element: (
        <AuthLayout>
          <SignUpPage />
        </AuthLayout>
      ),
    },
    {
      path: '404',
      element: <Page404 />,
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);
}
