import CategoryCard from "../CategoryCard";

export default function ShopPage() {
  return (
    <div className="shop-page">
      <section class="shop-categories">
        <h2 class="shop-header__caption">Shop by Categories</h2>
        <CategoryCard />
      </section>

      <section class="sales">
        <h2 class="header-caption">Products at Slashed Prices</h2>
      </section>
    </div>
  );
}

/**
function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://dummyjson.com/products/category/smartphones',
      );
      const result2 = await axios(
        'https://dummyjson.com/products/category/laptops',
      );
      setProducts([...result.data, ...result2.data]);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Tech Products</h1>
      {products.map((product) => (
        <div key={product.id}>
          <img src={product.image} alt={product.name} />
          <p>{product.name}</p>
        </div>
      ))}
    </div>
  );
}
 */
