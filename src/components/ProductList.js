import axios from "axios";
import { useEffect, useState } from "react";

export default function ProductList({ categoryName }) {
  const [products, setProducts] = useState([]);
  // const [selectedProductId, setSelectedProductId] = useState(null);

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/category/${categoryName}`)
      .then((response) => {
        setProducts(response.data.products);
      })
      .catch((error) => console.log(error));
  }, [categoryName]);

  // const handleProductClick = (productId) => {
  //   setSelectedProductId(productId);
  // };

  // if (selectedProductId) {
  //   return <ProductPage productName={selectedProductId} />;
  // }

  if (products) {
    return (
      <div>
        <h2
          style={{
            textTransform: "capitalize",
          }}
        >
          {categoryName}
        </h2>
        <div>
          {products.map((product) => (
            <div key={product.id}>{product.title}</div>
          ))}
        </div>
      </div>
    );
  }
}

// onClick={() => handleProductClick(product)}
