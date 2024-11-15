import { NavLink } from "react-router-dom";
import stock from "./stock";
import "./Navbar.css";
const Navbar = () => {
  const navBarComponent = stock.map((s) => (
    <NavLink exact to={`/${s}`}>
      {s}
    </NavLink>
  ));

  return (
    <div className="nav-container">
      <NavLink exact to={"/"}>
        Home
      </NavLink>
      {navBarComponent}
    </div>
  );
};

export default Navbar;
