import css from "./ProfilePage.module.css";

import { Profile } from "./Profile/Profile";
import { Dialogs } from "./Dialogs/Dialogs";
export const ProfilePage = () => {
  return (
    <div className={css.wraper}>
      <h1>Profil Page</h1>
      <div>
        <Profile />
        <Dialogs />
      </div>
    </div>
  );
};
