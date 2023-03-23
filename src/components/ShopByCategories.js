import "../assets/css/shopByCategories.css";

export default function ShopByCategories() {
  return (
    <div className="shop-page">
      <section class="categories">
        <h2 class="header-caption">Our Top Categories</h2>
        <div class="grid-container">
          <div class="shop-card clothing">
            <img
              class="shop-card__img"
              src="https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=734&q=80"
              alt=""
            />
            <p class="shop-card__caption">Clothing</p>
          </div>
          <div class="shop-card groceries">
            <img
              class="shop-card__img"
              src="https://images.unsplash.com/photo-1608686207856-001b95cf60ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80"
              alt=""
            />
            <p class="shop-card__caption">Groceries</p>
          </div>
          <div class="shop-card footwear">
            <img
              class="shop-card__img"
              src="https://images.unsplash.com/photo-1588361861040-ac9b1018f6d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Zm9vdHdlYXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
            <p class="shop-card__caption">Footwear</p>
          </div>
          <div class="shop-card tech">
            <img
              class="shop-card__img"
              src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
              alt=""
            />
            <p class="shop-card__caption">Tech</p>
          </div>
          <div class="shop-card home">
            <img
              class="shop-card__img"
              src="https://images.unsplash.com/photo-1556020685-ae41abfc9365?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              alt=""
            />
            <p class="shop-card__caption">Home</p>
          </div>
          <div class="shop-card beauty">
            <img
              class="shop-card__img"
              src="https://images.unsplash.com/photo-1643185539104-3622eb1f0ff6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              alt=""
            />
            <p class="shop-card__caption">Beauty</p>
          </div>
        </div>
      </section>
    </div>
  );
}
