import React from 'react';
import { NavLink } from 'react-router-dom';


function Footer() {
    return (
        <footer>
            <div className="footer-upper">
                <div className="footer-cell">
                    <h4>Just Buy</h4>
                    <p>eCommerce Made Easy</p>
                </div>
                <div className="footer-cards">
                    <div className="card footer-cell">
                        <div className="card-header">
                            Products
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Category One</li>
                            <li className="list-group-item">Category Two</li>
                            <li className="list-group-item">Category Three</li>
                        </ul>
                    </div>
                    <div className="card footer-cell">
                        <div className="card-header">
                            Information
                        </div>
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
                        <div className="card-header">
                            Customer Service
                        </div>
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
                <p>&copy; Just Buy</p>
                <p>We accept all major credit cards</p>
                <p>Back to Top</p>
            </div>
        </footer>
    );
}

export default Footer;

