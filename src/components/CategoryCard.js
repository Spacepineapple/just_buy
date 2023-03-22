export default function CategoryCard({ name, onClick }) {
  // console.log(name);
  return (
    // Render a card with an image and the category name
    <li
      style={{
        display: "inline-block",
        padding: "10px",
        border: "1px solid #ccc",
        borderRadius: "5px",
        marginRight: "10px",
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      {name}
    </li>
  );
}
