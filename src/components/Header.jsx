import logo from "../assets/images/logo.png"
import { NavLink } from "react-router-dom"

const Header = () => {
  return (
    <header className="header">
      <div className="header--content">
        <a href="/">
          <img src={logo} alt="logo Kasa" className="header--content__img" />
        </a>
        <nav className="header--content__link">
          <ul>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "navLinkActive" : "")}
                to={"/"}
              >
                Accueil
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "navLinkActive" : "")}
                to={"/about"}
              >
                A propos
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
