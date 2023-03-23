import React from 'react';

function Contact() {
    return (
        <div className="container">
            <h2>Contact Us</h2>
            <p>We love to hear your feedback and we love answering your questions! Check out our FAQ for some of the most common questions we're asked by customers. If you still have a question or you need to get in touch with us, you can use any of the methods below:</p>
            <ul>
                <li>Phone: +8891794797972</li>
                <li>Email: carrier.pigeon@justbuy.buy</li>
                <li>Post: Freepost, JustBuy, 9999 Gumdrop Lane, The Moon, MO00 0ON</li>
            </ul>
            <p>Or alternatively, use our contact form:</p>
            <div className="contact-form">
                <form>
                    <fieldset>
                        <legend>
                            Add User
                        </legend>
                        <div>
                            <label htmlFor="firstName">First Name</label>
                            <input type="text" id="firstName" name="firstName"/>
                        </div>
                        <div>
                            <label htmlFor="lastName">Last Name</label>
                            <input type="text" id="lastName" name="lastName"/>
                        </div>
                        <div>
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email"/>
                        </div>
                        <div>
                            <label htmlFor="comments">Comments:</label>
                            <textarea id="comments" name="comments" rows="5" columns="10">

                            </textarea>
                        </div>
                        <div>
                            <input type="checkbox" name="terms" id="terms"/>
                            <label htmlFor="terms">I agree to the terms and conditions</label>
                        </div>
                        <div>
                            <button>Submit</button>
                        </div>
                    </fieldset>
                </form>
            </div>
        </div>
    )
}

export default Contact;