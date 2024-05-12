import { NavLink } from "react-router-dom";
export const NavBar = () => {
  return (
    <div>
      <h1>Nav</h1>
      <NavLink to="/">Profile</NavLink>
      <NavLink to="/message">Message</NavLink>
      <NavLink to="/music">Music</NavLink>
      <NavLink to="/news">News</NavLink>
      <NavLink to="/settings">Settings</NavLink>
    </div>
  );
};
