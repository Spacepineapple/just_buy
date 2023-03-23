import axios from "axios";
import { useEffect, useState } from "react";
import "../assets/css/category.css";
import CategoryCard from "./CategoryCard";
import ProductList from "./ProductList";

export default function Category() {
  // "categories" state variable and initialised to an empty array
  const [categories, setCategories] = useState([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);

  // useEffect hook to fetch data from the API and store the response to in the "categories" state variable on component mount
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products/categories")
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleCategoryClick = (categoryId) => {
    setSelectedCategoryId(categoryId);
  };

  if (selectedCategoryId) {
    return <ProductList categoryName={selectedCategoryId} />;
  }

  // Render a list of CategoryCard components, passing in the "name" and "image" props for each category
  return (
    <section className="shop-categories custom-container">
      <h2 className="shop-header__caption">Shop by Category</h2>
      <div className="category-items">
        {categories.map((category) => (
          <CategoryCard
            key={category}
            name={category}
            onClick={() => handleCategoryClick(category)}
          />
        ))}
      </div>
    </section>
  );
}
