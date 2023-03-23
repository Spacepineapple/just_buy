import React from "react";
import { NavLink } from "react-router-dom";
import "../assets/css/footer.css";

function Footer() {
  return (
    <footer>
      <div className="custom-container">
        <div className="footer-upper">
          <div className="footer-cell footer-header">
            <h4>Just Buy</h4>
            <p>eCommerce Made Easy</p>
          </div>
          <div className="footer-card__container">
            <div className="card footer-cell">
              <div className="card-header">Products</div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <NavLink
                    to="/category/fragrances"
                    end
                    className={({ isActive }) =>
                      isActive ? "link-active" : "nav-link"
                  }
                  >
                    Fragrances
                    </NavLink>
                </li>
                <li className="list-group-item">
                  <NavLink
                  to="/category/furniture"
                  end
                  className={({ isActive }) =>
                    isActive ? "link-active" : "nav-link"
                }
                >
                  Furniture
                  </NavLink>
                </li>
                <li className="list-group-item">
                  <NavLink
                  to="/category/groceries"
                  end
                  className={({ isActive }) =>
                    isActive ? "link-active" : "nav-link"
                }
                >
                  Groceries
                </NavLink>
                </li>
              </ul>
            </div>
            <div className="card footer-cell">
              <div className="card-header">Information</div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <NavLink
                    to="/about"
                    end
                    className={({ isActive }) =>
                      isActive ? "link-active" : "nav-link"
                    }
                  >
                    About Us
                  </NavLink>
                </li>
                <li className="list-group-item">
                  <NavLink
                    to="/faq"
                    end
                    className={({ isActive }) =>
                      isActive ? "link-active" : "nav-link"
                    }
                  >
                    FAQ
                  </NavLink>
                </li>
                <li className="list-group-item">
                  <NavLink
                    to="/terms"
                    end
                    className={({ isActive }) =>
                      isActive ? "link-active" : "nav-link"
                    }
                  >
                    Terms and Conditions
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="card footer-cell">
              <div className="card-header">Customer Service</div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <NavLink
                    to="/contact"
                    end
                    className={({ isActive }) =>
                      isActive ? "link-active" : "nav-link"
                    }
                  >
                    Contact Us
                  </NavLink>
                </li>
                <li className="list-group-item">
                  <NavLink
                    to="/shipping"
                    end
                    className={({ isActive }) =>
                      isActive ? "link-active" : "nav-link"
                    }
                  >
                    Shipping and Order Tracking
                  </NavLink>
                </li>
                <li className="list-group-item">
                  <NavLink
                    to="/returns"
                    end
                    className={({ isActive }) =>
                      isActive ? "link-active" : "nav-link"
                    }
                  >
                    Returns Policy
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-lower">
          <p>Copyright &copy; 2023 Just Buy. All rights reserved</p>
          <p>We accept all major credit cards</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
