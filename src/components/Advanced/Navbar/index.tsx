import Link from "next/link";
import React from "react";
import useAuth from "../../../hooks/useAuth";
import { logOut } from "../../../utils/functions";
import MainLogo from "../../SvgComponents/MainLogo";
import styles from "./index.module.scss";
export const Navbar = () => {
  const auth = useAuth();
  console.log('auth',auth);
  return (
    <nav className="navbar navbar-expand-lg  p-2 navbar__wrapper">
      <div className="container-fluid">
        <Link className="navbar-brand" href="/">
          <span className={styles.mainLogo}><MainLogo /></span>
        </Link>
        <h4 className={styles.mobileNavbarTitle}>Medinery</h4>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item next-link-item">
              <Link className="nav-link active" aria-current="page" href="/">
                Home
              </Link>
            </li>
            <li className="nav-item next-link-item">
              <Link className="nav-link active" aria-current="page" href="/about">
                About
              </Link>
            </li>
            <li className="nav-item next-link-item">
              <Link className="nav-link active" aria-current="page" href="/contact-us">
                Contact Us
              </Link>
            </li>
            {
              auth?.user && <li className={`nav-item ${styles.dashboardLink}`} >
                <Link href="/user/dashboard">Dashboard</Link>
              </li>
            }
          </ul>
          <form className="d-flex" role="search">
            {
              auth?.user?.first_name ? <li className={`${styles.loginDropdown} nav-item dropdown`}>
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span className={styles.username}>
                  Hi {auth.user.first_name}
                  </span> 
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li onClick={logOut}>
                    <a className="dropdown-item" href="#">
                    Log Out
                    </a>
                  </li>
                  {/* <li>
                    <hr className="dropdown-divider" />
                  </li> */}
                  {/* <li>
                    <a className="dropdown-item" href="#">
                    Something else here
                    </a>
                  </li> */}
                </ul>
              </li> : <Link href="/login">
                <button className="btn btn-outline-secondary mx-2">Login</button>
              </Link>
            }

            <input
              className={`${styles.navbarSearch} form-control me-2 shadow-sm`}
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
