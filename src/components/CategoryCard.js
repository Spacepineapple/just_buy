import { Link, Route, Routes } from "react-router-dom";
import CategoryProducts from "./pages/CategoryProducts";

export default function CategoryCard({ name, onClick }) {
  // console.log(name);
  return (
    // Render a card with an image and the category name
    <div onClick={onClick} className="category-item">
      <Link to={`/category/${name}`} element={<CategoryProducts />}>
        <Routes>
          <Route to={"/category/:name"} />
        </Routes>
        <div>{name}</div>
      </Link>
    </div>
  );
}
