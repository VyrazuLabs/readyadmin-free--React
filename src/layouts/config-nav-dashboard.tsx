import { SvgColor } from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name: string) => (
  <SvgColor width="90%" height="90%" src={`/assets/icons/navbar/${name}.svg`} />
);

export const navData = [
  {
    title: 'Dashboard',
    path: '/',
    icon: icon('dashboard'),
    hasSubMenu: false,
    subMenu: [],
  },
  {
    title: 'Sign In',
    path: '/sign-in',
    icon: icon('sign-in'),
    hasSubMenu: false,
    subMenu: [],
  },
  {
    title: 'Sign Up',
    path: '/sign-up',
    icon: icon('sign-up'),
    hasSubMenu: false,
    subMenu: [],
  },
  {
    title: 'Not found',
    path: '/404',
    icon: icon('not-found'),
    hasSubMenu: false,
    subMenu: [],
  },
  {
    title: 'User',
    path: '/user',
    icon: icon('user'),
    info: 'material-symbols:chevron-right',
    hasSubMenu: true,
    subMenu: [
      {
        title: 'Profile',
        path: '/dashboard/user',
        icon: icon('profile'),
      },
      {
        title: 'Cards',
        path: '/dashboard/user/cards',
        icon: icon('card'),
      },
      {
        title: 'List',
        path: '/dashboard/user/list',
        icon: icon('list'),
      },
      {
        title: 'Create',
        path: '/dashboard/user/new',
        icon: icon('create'),
      },
      {
        title: 'Edit',
        path: '/dashboard/user/:id/edit',
        icon: icon('edit'),
      },
    ],
  },
  {
    title: 'Product',
    path: '/product',
    icon: icon('product'),
    info: 'material-symbols:chevron-right',
    hasSubMenu: true,
    subMenu: [
      {
        title: 'List',
        path: '/dashboard/product',
        icon: icon('list'),
      },
      {
        title: 'Detail',
        path: '/dashboard/product/:id',
        icon: icon('details'),
      },
      {
        title: 'Create',
        path: '/dashboard/product/new',
        icon: icon('create'),
      },
      {
        title: 'Edit',
        path: '/dashboard/product/:id/edit',
        icon: icon('edit'),
      },
    ],
  },
];
