import { createBrowserRouter } from "react-router-dom";
import { ProfilePage } from "../pages/ProfilePage/ProfilePage";
import { Message } from "../pages/Messages/Messages";
import { Music } from "../pages/Music/Music";
import { News } from "../pages/News/News";
import { Settings } from "../pages/Settings/Settings";
import { Home } from "../pages/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,

    children: [
      {
        index: true,
        element: <ProfilePage />,
      },
      {
        path: "/message",
        element: <Message />,
      },
      {
        path: "/music",
        element: <Music />,
      },
      {
        path: "/news",
        element: <News />,
      },
      {
        path: "/settings",
        element: <Settings />,
      },
    ],
  },
]);
