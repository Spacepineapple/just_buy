import axios from "axios";
import { useEffect, useState } from "react";

export default function CategoryCard() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios("https://dummyjson.com/products/?limit=0");
      // console.log(response.data);

      // Filter products based on category and combine into new category "tech"
      const techProducts = response.data.products
        .filter(
          (product) =>
            product.category === "smartphones" || product.category === "laptops"
        )
        .map((product) => ({ ...product, category: "tech" }));

      // Filter products based on category and combine into new category "home"
      const homeProducts = response.data.products
        .filter(
          (product) =>
            product.category === "furniture" ||
            product.category === "home-decoration" ||
            product.category === "lighting"
        )
        .map((product) => ({ ...product, category: "home" }));

      // Filter products based on category and combine into new category "clothes"
      const clothesProducts = response.data.products
        .filter(
          (product) =>
            product.category === "tops" ||
            product.category === "womens-dresses" ||
            product.category === "mens-shirts"
        )
        .map((product) => ({ ...product, category: "clothes" }));

      // Filter products based on category and combine into new category "beauty"
      const beautyProducts = response.data.products
        .filter(
          (product) =>
            product.category === "fragrances" || product.category === "skincare"
        )
        .map((product) => ({ ...product, category: "beauty" }));

      // Filter products based on category and combine into new category "shoes"
      const shoesProducts = response.data.products
        .filter(
          (product) =>
            product.category === "womens-shoes" ||
            product.category === "mens-shoes"
        )
        .map((product) => ({ ...product, category: "shoes" }));

      // Filter products based on category and combine into new category "accessories"
      const accessoryProducts = response.data.products
        .filter(
          (product) =>
            product.category === "mens-watches" ||
            product.category === "womens-watches" ||
            product.category === "womens-bags" ||
            product.category === "womens-jewellery" ||
            product.category === "sunglasses"
        )
        .map((product) => ({ ...product, category: "accessories" }));

      // Filter products based on category and combine into new category "groceries"
      const groceryProducts = response.data.products
        .filter((product) => product.category === "groceries")
        .map((product) => ({ ...product, category: "groceries" }));

      setCategories([
        techProducts,
        homeProducts,
        clothesProducts,
        beautyProducts,
        shoesProducts,
        accessoryProducts,
        groceryProducts,
      ]);
      // console.log(techProducts);
    };
    fetchData();
  }, []);

  console.log(categories);

  // Todo:
  /**
   * Map through the fetched data and create a card for the chosen 6 categories
   * Combine some of the categories to make one category; i.e:
   * - smartphones + laptops = tech
   * - home-decoration + furniture + lighting = home
   * - womens dresses and shoes + mens shirt and shoes = clothing
   * - watches + jewellery + sunglasses + bags = accessories
   * - skincare + fragrances = beauty
   * - groceries
   */
  return (
    <div class="shop-grid__container">
      {/* {products.map((product) => {
        <a
          href="https://www.google.com/"
          key={product.id}
          className="category-card clothing"
        >
          <img
            className="category-card__img"
            src={product.images[1]}
            alt={product.brand}
          />
          <p className="category-card__caption">Tech</p>
        </a>;
      })} */}
      <a href="https://www.google.com/" className="category-card clothing">
        <img
          className="category-card__img"
          src="https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=734&q=80"
          alt=""
        />
        <p className="category-card__caption">Clothing</p>
      </a>
      <a href="https://www.google.com/" className="category-card groceries">
        <img
          className="category-card__img"
          src="https://images.unsplash.com/photo-1608686207856-001b95cf60ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80"
          alt=""
        />
        <p className="category-card__caption">Groceries</p>
      </a>
      <a href="https://www.google.com/" className="category-card footwear">
        <img
          className="category-card__img"
          src="https://images.unsplash.com/photo-1588361861040-ac9b1018f6d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Zm9vdHdlYXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
          alt=""
        />
        <p className="category-card__caption">Footwear</p>
      </a>
      <a href="https://www.google.com/" className="category-card tech">
        <img
          className="category-card__img"
          src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
          alt=""
        />
        <p className="category-card__caption">Tech</p>
      </a>
      <a href="https://www.google.com/" className="category-card home">
        <img
          className="category-card__img"
          src="https://images.unsplash.com/photo-1556020685-ae41abfc9365?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          alt=""
        />
        <p className="category-card__caption">Home</p>
      </a>
      <a href="https://www.google.com/" className="category-card beauty">
        <img
          className="category-card__img"
          src="https://images.unsplash.com/photo-1643185539104-3622eb1f0ff6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          alt=""
        />
        <p className="category-card__caption">Beauty</p>
      </a>
    </div>
  );
}
