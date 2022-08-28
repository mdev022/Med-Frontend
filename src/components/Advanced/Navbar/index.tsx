import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import { logOut } from "../../../utils/functions";
import MainLogo from "../../SvgComponents/MainLogo";
import SearchIcon from "../../SvgComponents/SearchIcon";
import styles from "./index.module.scss";
export const Navbar = () => {
  const[searchText, setSearchText] = useState("");
  const[searchResults, setSearchResults] = useState([]);
  const[loading, setLoading] = useState<boolean>(false);

  const handleSearch = async () => {
    if(searchText){
      setLoading(true);
      setSearchResults([]);
      try {
        const profiles = await fetch(`/api/getProfiles?search=${searchText}`).then(res=> res.json());
        setSearchResults(profiles);
      } catch (error) {
        console.log('error',error);
      } finally{
        setLoading(false);
      }
    }
  };

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
            <div className="dropdown">
              <input
                className={`${styles.navbarSearch} form-control me-2 shadow-sm`}
                type="search"
                placeholder="Search For Doctors"
                onChange={(e)=> setSearchText(e.target.value)}
                aria-label="Search"
              />
              <ul className={`dropdown-menu ${styles.searchDropdown}`} aria-labelledby="navbarDropdown2">
                {
                  searchResults && searchResults.length && !loading ? <>
                    {
                      searchResults.map((profile,index)=> {
                        console.log('profile',profile);
                        return (
                          <li key={index.toString()}>
                            <Image src={profile?.image?.url} width={48} height={48} />
                            <div>
                              <Link className={`dropdown-item`} href={`/profile/${profile?.slug}`}>
                                <h4> {profile?.info_section?.displayName}</h4>
                              </Link>
                              <h6>{profile?.info_section?.specialization}</h6>
                            </div>
                          </li>
                        );
                      })
                    }
                  </> : loading ?  <div className={styles.loaderWrapper}>
                    <div className="spinner-border text-success" role="status">
                    </div>
                  </div> : <></>
                }
              </ul>
            </div>
          
            {/* <button className="btn btn-outline-success dropdown-toggle"
              id="navbarDropdown2"
              role="button"
              onClick={()=> handleSearch()}
              data-bs-toggle="dropdown"
              aria-expanded="false">
              Search
            </button> */}
            <span className={` dropdown-toggle ${styles.searchIcon}`}
              id="navbarDropdown2" data-bs-toggle="dropdown"   onClick={()=> handleSearch()}> <SearchIcon /></span>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
