<br />
<div align="center">
  <h1 align="center">JustBuy eCommerce Store</h1>
  <p align="center">
    A minimalistic eCommerce store built and design by Osman Dumbuya, Neal Reeves and Julien Claivaz using ReactJS.
    <br />
    <a href="https://main--unrivaled-parfait-118a74.netlify.app/">View the demo</a>
  </p>
</div>

## About The Project

This is a minimalisitc e-commerce site built with ReactJS using react-router-dom for routing and react-redux for state management. Axios is used to fetch data from the [dummyJSON API](https://dummyjson.com).

![Screenshot of the webpage](./src/assets/images/justBuy-eCommerce.png)

## Getting Started

### Prerequisites

To run this project, you need to have Node.js installed on your system.

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/OsmanTolo/just_buy_ecommerce_react
   ```
2. Navigate to the cloned folder and install dependencies:
   ```sh
   cd just_buy_ecommerce_react
   npm install
   npm i axios react-router-dom react-redux
   ```
3. Start the development server:
   ```sh
   npm start
   ```

## Usage

Visit the deployed [link](https://main--unrivaled-parfait-118a74.netlify.app/) to access the website. The website has the following routes:

- `/` - displays the homepage with a carousel, top categories and top deals
- `/shop` - displays the shop page with all the categories and a top deals section highlighting the top deals based on the highest discount percentage
- `/about` - displays the about information of the e-commerce site
- `/contact` - displays information of how to get in contact with the company

You can navigate between the routes using the links in the header, within the page and footer. There are also various routes to other pages such as the FAQ section, Terms and Conditions section, Returns Policy etc.

## State Management

The app uses `react-redux` for state management. The state is split into the following slices:

products - contains a list of all the products
cart - contains the items that have been added to the shopping cart

The state is updated using Redux actions and reducers.

## Contact

- [Osman Dumbuya](https://twitter.com/OsmanTolo_)
- [Neal Reeves ](https://github.com/Spacepineapple)
- [Julien Claivaz](https://github.com/Julclay)

Project Link: [https://github.com/OsmanTolo/just_buy_ecommerce_react](https://github.com/OsmanTolo/just_buy_ecommerce_react)

## Acknowledgements

This website was built as the final project for the [Skills for Life Boot Camp by Trinity](https://skillsforlife.campaign.gov.uk/courses/skills-bootcamps/).
