import axios from "axios";
import { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";

const API_URL = "https://dummyjson.com/products";

// Array of objects containing the name and query parameter for each new category
const CATEGORIES = {
  tech: ["smartphones", "laptops"],
  home: ["home-decoration", "furniture", "lighting"],
  clothing: ["womens-dresses", "tops", "mens-shirts"],
  accessories: ["watches", "jewellery", "sunglasses", "bags"],
  beauty: ["skincare", "fragrances"],
  groceries: ["groceries"],
};

// Component
export default function Category() {
  // Use a single state variable for all categories
  const [categories, setCategories] = useState({});

  // Use the useEffect hook to fetch the data
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Use Promise.all to fetch data for all categories in parallel
        const categoryPromises = Object.entries(CATEGORIES).map(
          async ([name, category]) => {
            const url = `${API_URL}?category=${category.join("&category=")}`;
            console.log(url);
            const response = await axios.get(url);
            return { name, products: response.data };
          }
        );
        const categoryData = await Promise.all(categoryPromises);
        console.log(categoryData);
        // Convert the array of objects to an object with the category name as the key
        const newCategories = categoryData.reduce((acc, { name, products }) => {
          return { ...acc, [name]: products };
        }, {});

        setCategories(newCategories);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <section class="shop-categories">
      <h2 class="shop-header__caption">Shop by Categories</h2>
      <div className="shop-grid__container">
        {/* Map over the categories object instead of an array */}
        {Object.entries(categories).map(([name, products], index) => (
          <CategoryCard
            key={name}
            name={name}
            products={products}
            index={index}
            // image={image}
            // onClick={handleEvent}
          />
        ))}
      </div>
    </section>
  );
}
