import Category from "../Category";
import CardItem from "./CardItem";

export default function ShopPage() {
  return (
    <div className="shop-page custom-container">
      <Category />

      <section className="sales">
        <h2 className="header-caption">Products at Slashed Prices</h2>
        {/* <CardItem /> */}
      </section>
    </div>
  );
}
