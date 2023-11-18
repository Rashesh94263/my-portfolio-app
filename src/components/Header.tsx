import NavLinks from "./NavLinks";
import logo from "../images/logo.png";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <NavLink to="/">
        <img className="logo" src={logo} alt="Rashesh Dobariya' Logo" />
      </NavLink>
      <NavLinks />
    </header>
  );
};

export default Header;
