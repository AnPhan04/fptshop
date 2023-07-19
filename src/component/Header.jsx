import { NavLink } from "react-router-dom";
import "../App.css";
const Header = () => {
  return (
    <div className="header" style={{ background: "#cd1818" }}>
      <nav className="navbar navbar-expand-lg navbar-light">
        <NavLink className="navbar-brand" to="/">
          <img alt="logo" src="logofptshop.png" style={{ width: "150px" }} />
        </NavLink>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <NavLink
                className="nav-link"
                to="/phone"
                style={{ color: "white" }}
              >
                Điện thoại
              </NavLink>
            </li>
            <li class="nav-item active">
              <NavLink
                className="nav-link"
                to="/laptop"
                style={{ color: "white" }}
              >
                Laptop
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
