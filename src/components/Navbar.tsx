import Logo from "../../public/images/airbnb-logo.svg";

function Navbar() {
  return (
    <nav className="navbar">
      <img className="navbar__logo" src={Logo} alt="airbnb-logo" />
    </nav>
  );
}

export default Navbar;
