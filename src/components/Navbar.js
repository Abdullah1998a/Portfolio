import logo from "../assets/logo.png";
import menu from "../assets/menu.svg";
import Links from "./Links";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light">
      <div className="container-md">
        <a className="navbar-brand" href="#home">
          <img src={logo} alt="logo" width="45" height="41"/>
        </a>
      <button className="navbar-toggler rounded shadow-sm" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <img src={menu} width="30" height="30" alt="menu icon"/>
      </button>
      <div className="collapse navbar-collapse w-auto" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto text-center mb-2 mb-lg-0">
          <Links />
        </ul>
      </div>
    </div>
  </nav>
  );
}

export default Navbar;
