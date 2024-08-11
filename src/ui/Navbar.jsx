import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav>
      <Link to="/">
        <img src="./logo.png" alt="logo" />
      </Link>
    </nav>
  );
}

export default Navbar;
