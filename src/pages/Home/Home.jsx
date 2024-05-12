import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import { NavBar } from "../../components/Navbar/NavBar";

export const Home = () => {
  return (
    <div>
      <Header />
      <NavBar />
      <Outlet />
    </div>
  );
};
