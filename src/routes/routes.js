import EditProfile from "../pages/EditProfile";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import RegisterPage from "../pages/RegisterPage";
import PageProtected from "./protected";

const routes = [
  {
    path: "/",
    element: (
      <PageProtected needLogin={true}>
        <Home />
      </PageProtected>
    ),
  },

  {
    path: "/login",
    element: (
      <PageProtected guestOnly={true}>
        <Login />
      </PageProtected>
    ),
  },

  {
    path: "/register",
    element: (
      <PageProtected guestOnly={true}>
        <RegisterPage />
      </PageProtected>
    ),
  },

  {
    // hanya untuk semantik id khusus id, slug bisa untuk apapun
    path: "/:slug",
    element: (
      <PageProtected needLogin={true} guestOnly={false}>
        <Profile />
      </PageProtected>
    ),
  },

  {
    path: "/account/edit",
    element: (
      <PageProtected needLogin={true}>
        <EditProfile />,
      </PageProtected>
    ),
  },

  // {
  //   path: "/*",
  //   element: <Home />,
  // },
];

export default routes;
