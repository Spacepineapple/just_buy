import React from "react";

function Contact() {
  return (
    <div className="custom-container contact">
      <div className="contact-hero row py-4">
        <h2 className="contact-heading">Contact Us</h2>
        <div className="contact-left col-7">
          <p className="contact-text">
            We love to hear your feedback and we love answering your questions!
            Check out our FAQ for some of the most common questions we're asked
            by customers.{" "}
          </p>
          <p className="contact-text">
            If you still have a question or you need to get in touch with us,
            you can use any of the methods below. Or alternatively, fill our
            contact form and we promise to get back to you within two working
            days.
          </p>
          <ul className="contact-details">
            <li>
              <span>Phone:</span> +8891794797972
            </li>
            <li>
              <span>Email:</span> carrier.pigeon@justbuy.buy
            </li>
            <li>
              <span>Post:</span> Freepost, JustBuy, 99 Gumdrop Lane, The Moon,
              M01 0ON
            </li>
          </ul>
        </div>

        <div className="contact-form contact-right col">
          <form>
            <div className="mb-3">
              <label for="exampleInputName" className="form-label">
                Full Name
              </label>
              <input
                type="fullName"
                className="form-control"
                id="exampleInputName"
              />
            </div>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label for="exampleTextarea" className="form-label">
                Comments
              </label>
              <textarea
                class="form-control"
                placeholder="Leave a comment here"
                id="exampleTextarea"
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
