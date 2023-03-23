import React, {useEffect, useState} from 'react';
import Login from "./pages/Login";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import "../assets/css/navbar.css";

function NavBar() {
  //Get the live size of the cart from the store and update it when store state changes
  const cartCount = useSelector(state => state.products.length);
  //Create state handler for hamburger menu
  const [burgerOpen, setBurgerOpen] = useState(false);

  return (
    <>
    <nav className="navbar navbar-expand-lg">
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarTogglerDemo03"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
        //Toggle the hamburger menu on click
        onClick={() => setBurgerOpen((status) => !status)}
      >
        <span className="navbar-toggler-icon"></span> 
      </button>
      <a className="logo nav-bar-brand">JustBuy</a>
      <div
        className="collapse navbar-collapse all-links"
        id="navbarTogglerDemo03"
      >
        <div  className="navbar-nav">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? "link-active" : "nav-link"
            }
          >
            
          </NavLink>
        </div>
        <div className="nav-bar-nav nav-links__middle">
          <ul className="nav-bar-nav mx-auto mr-auto mt-2 mt-lg-0 justify-content-start">
            <li className="nav-item active">
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/shop"
                end
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Shop
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/about"
                end
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/contact"
                end
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="nav-links__right">
          <ul className=" justify-content-end">
            <li className=" dropdown">
              <a
                className="nav-link dopdown-toggle"
                href="#"
                id="navbardrop"
                data-bs-toggle="dropdown"
              >
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-search"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
              </a>
              <div className="dropdown-menu">
                <input
                  className="dropdown-item form-control mr-sm-2"
                  type="text"
                  placeholder="Search"
                ></input>
              </div>
            </li>
            <li className="nav-item">
              <NavLink 
                to="/checkout" 
                end
                className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-cart4"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                </svg>
                <sup>
                  <span className="badge rounded-pill badge-notification bg-danger">
                  {`${cartCount}`}
                  </span>
                </sup>
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle sign-in"
                href="#"
                data-bs-toggle="dropdown"
              >
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-person-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                </svg>
                <p>Sign in</p>
              </a>
              <Login></Login>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div id="burger-links" className={burgerOpen ? "visible-burger" :  "invisible-burger"}>
      <ul id="burger-list">
        <li className="page-link">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? "link-active" : "nav-link"
            }
        >
            <p className="logo">JustBuy</p>
          </NavLink>
        </li>
        <li className="nav-item active">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/shop"
            end
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Shop
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/about"
            end
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            About
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/contact"
            end
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Contact
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/checkout"
            end
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Checkout
          </NavLink>
        </li>
      </ul>
    </div>
  </>);
}

export default NavBar;