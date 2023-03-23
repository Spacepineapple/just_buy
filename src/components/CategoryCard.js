export default function CategoryCard({ name, onClick }) {
  // console.log(name);
  return (
    // Render a card with an image and the category name
    <div onClick={onClick} className="category-item">
      {name}
    </div>
  );
}
