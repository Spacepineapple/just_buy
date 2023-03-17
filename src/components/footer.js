import React from 'react';

function Footer() {
    return (
        <footer>
            <div className="footer-upper">
                <div className="footer-cell">
                    <h4>Just Buy</h4>
                    <p>eCommerce Made Easy</p>
                </div>
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
                        <li className="list-group-item">About Us</li>
                        <li className="list-group-item">FAQ</li>
                        <li className="list-group-item">Terms and Conditions</li>
                    </ul>
                </div>
                <div className="card footer-cell">
                    <div className="card-header">
                        Customer Service
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Contact Us</li>
                        <li className="list-group-item">Shipping and Order Tracking</li>
                        <li className="list-group-item">Returns Policy</li>
                    </ul>
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

