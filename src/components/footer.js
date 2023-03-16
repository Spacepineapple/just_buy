import React from 'react';

function Footer() {
    return (
        <footer>
            <div class="footer-upper">
                <div class="footer-cell">
                    <h4>Just Buy</h4>
                    <p>eCommerce Made Easy</p>
                </div>
                <div class="card footer-cell">
                    <div class="card-header">
                        Products
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Category One</li>
                        <li class="list-group-item">Category Two</li>
                        <li class="list-group-item">Category Three</li>
                    </ul>
                </div>
                <div class="card footer-cell">
                    <div class="card-header">
                        Information
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">About Us</li>
                        <li class="list-group-item">FAQ</li>
                        <li class="list-group-item">Terms and Conditions</li>
                    </ul>
                </div>
                <div class="card footer-cell">
                    <div class="card-header">
                        Customer Service
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Contact Us</li>
                        <li class="list-group-item">Shipping and Order Tracking</li>
                        <li class="list-group-item">Returns Policy</li>
                    </ul>
                </div>
            </div>
            <div class="footer-lower">
                <p>&copy; Just Buy</p>
                <p>We accept all major credit cards</p>
                <p>Back to Top</p>
            </div>
        </footer>
    );
}

export default Footer;

