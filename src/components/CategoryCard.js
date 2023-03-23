import { Link, Route, Routes } from "react-router-dom";
import CategoryProducts from "./pages/CategoryProducts";

export default function CategoryCard({ name, onClick }) {
  // console.log(name);
  return (
    // Render a card with an image and the category name
    <Link to={`/category/${name}`} element={<CategoryProducts />}>
    <Routes>
      <Route to={"/category/:name"}/>
    </Routes>
    <li
      style={{
        display: "inline-block",
        padding: "10px",
        border: "1px solid #ccc",
        borderRadius: "5px",
        marginRight: "10px",
        cursor: "pointer",
      }}
    >
      {name}
    </li>
    </Link>
  );
}
