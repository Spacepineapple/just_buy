import Category from "../Category";
import CardItem from "./CardItem";

export default function ShopPage() {
  return (
    <div className="shop-page custom-container">
      <Category />

      <section class="sales">
        <h2 class="header-caption">Products at Slashed Prices</h2>
        {/* <CardItem /> */}
      </section>
    </div>
  );
}
