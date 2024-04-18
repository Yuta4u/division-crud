// All components mapping with path for internal routes

import { lazy } from "react"

const Home = lazy(() => import("../pages/protected/Home"))
const Page404 = lazy(() => import("../pages/protected/404"))
const Blank = lazy(() => import("../pages/protected/Blank"))
c

const routes = [
  {
    path: "/home", // the url
    component: Home, // view rendered
  },

  {
    path: "/404",
    component: Page404,
  },
  {
    path: "/blank",
    component: Blank,
  },
]

export default routes
