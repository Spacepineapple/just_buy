import { Link } from "react-router-dom";

export default function CategoryCard({ name, products }) {
  // console.log(products);
  return (
    <Link to={`/category/${name}`} className={`category-card`}>
      {/* Display the image for the first product in the products array */}
      <img className="category-card__img" src={products[0]?.image} alt="" />
      {/* Display the name of the category as a caption */}
      <p className="category-card__caption">{name}</p>
    </Link>
  );
}

/*
<a href="https://www.google.com/" className={`category-card ${name}`}>
  // Display the image for the first product in the products array
  <img className="category-card__img" src={products[0]?.image} alt="" />
  // Display the name of the category as a caption
  <p className="category-card__caption">{name}</p>
</a>;
*/
