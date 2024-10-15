import { render } from 'solid-js/web';
import { lazy } from "solid-js";
import './App.css';
import { Router,  Route } from "@solidjs/router";

const root = document.getElementById('root');

const routes = [
  {
    path: "/",
    component: lazy(() => import("./pages/index")),
  },
  {
    path: '/forum',
    component: lazy(() => import("./pages/forum")),
  },
  {
    path: '/treads',
    component: lazy(() => import("./pages/[..404]")),
  },
  {
    path: '/auth',
    component: lazy(() => import("./layouts/authLayout")),
    children: [
      {
        path: "login",
        component: lazy(() => import("./pages/auth/login") ), 
      },
      {
        path: "signin",
        component: lazy(() => import("./pages/auth/singup")),
      },
    ],
  },
];

if (root) {
  render(() => (
    <Router>
        {routes.map(route => (
          <Route path={route.path} component={route.component}>
            {route.children && route.children.map(child => (
              <Route path={child.path} component={child.component} />
            ))}
          </Route>
        ))}
    </Router>
  ), root);
}
