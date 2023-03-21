import axios from "axios";
import { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";

// Array of objects containing the name and query parameter for each new category
const CATEGORIES = [
  {
    name: "tech",
    query: "smartphone&category=laptops",
    image:
      "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
  },
  {
    name: "home",
    query: "home-decoration&category=furniture&category=lighting",
    image:
      "https://images.unsplash.com/photo-1556020685-ae41abfc9365?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    name: "clothing",
    query: "womens-dresses&category=tops&category=mens-shirts",
    image:
      "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=734&q=80",
  },
  {
    name: "accessories",
    query: "watches&category=jewellery&category=sunglasses&category=bags",
    image:
      "https://images.unsplash.com/photo-1588361861040-ac9b1018f6d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Zm9vdHdlYXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "beauty",
    query: "skincare&category=fragrances",
    image:
      "https://images.unsplash.com/photo-1643185539104-3622eb1f0ff6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    name: "groceries",
    query: "groceries",
    image:
      "https://images.unsplash.com/photo-1608686207856-001b95cf60ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80",
  },
];

// Component
export default function Category() {
  // Create state variables for each category
  const [categoryData, setCategoryData] = useState(
    // Initialize categoryData as an array of objects with the name and an empty products array for each category
    CATEGORIES.map(({ name }) => ({ name, products: [] }))
  );

  // useEffect to fetch the data for each category when the component mounts
  useEffect(() => {
    CATEGORIES.forEach(({ query }, index) => {
      // Fetch data from the API with the query parameter for the current category using axios
      axios
        .get(`https://dummyjson.com/products?category=${query}`)
        .then(({ data }) => {
          // Update categoryData with the new products for the current category
          setCategoryData((prevCategoryData) => {
            // Create a new array of objects with the spread operator
            const newCategoryData = [...prevCategoryData];
            // Update the products array for the current category using the current index
            newCategoryData[index].products = data;
            // Return the new array to update the state
            return newCategoryData;
          });
        })
        .catch((err) => console.log(err));
    });
  });
  return (
    <section class="shop-categories">
      <h2 class="shop-header__caption">Shop by Categories</h2>
      <div className="shop-grid__container">
        {/* Map over the categoryData array and create a CategoryCard for each category */}
        {categoryData.map(({ name, products, image }) => (
          <CategoryCard key={name} name={name} products={products} />
        ))}
      </div>
    </section>
  );
}
