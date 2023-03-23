import Category from "../Category";
import TopDeals from "../TopDeals";

export default function ShopPage() {
  return (
    <div className="shop-page custom-container">
      <Category />

      <section class="sales">
        <TopDeals />
      </section>
    </div>
  );
}
