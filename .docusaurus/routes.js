import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/start',
    component: ComponentCreator('/start', 'dea'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', '346'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', '08f'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/contributing',
        component: ComponentCreator('/docs/contributing', '2c4'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/related',
        component: ComponentCreator('/docs/related', 'cb6'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/tips',
        component: ComponentCreator('/docs/tips', 'cff'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/portals/azure',
        component: ComponentCreator('/portals/azure', 'b96'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/portals/azuread',
        component: ComponentCreator('/portals/azuread', 'fdd'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/portals/defender',
        component: ComponentCreator('/portals/defender', '585'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/portals/intune',
        component: ComponentCreator('/portals/intune', '4fb'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/portals/m365',
        component: ComponentCreator('/portals/m365', 'e6a'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/portals/mypages',
        component: ComponentCreator('/portals/mypages', '58d'),
        exact: true,
        sidebar: "docs"
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
