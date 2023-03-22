import { useState } from "react";

const homeCardContent = [
  {
    id: 1,
    title: "Top Deals",
    imgSrc:
      "https://images.unsplash.com/photo-1607083207685-aaf05f2c908c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    linkText: "Shop more deals",
  },
  {
    id: 2,
    title: "Top Deals",
    imgSrc:
      "https://images.unsplash.com/photo-1607083207685-aaf05f2c908c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    linkText: "Shop more deals",
  },
  {
    id: 3,
    title: "Top Deals",
    imgSrc:
      "https://images.unsplash.com/photo-1607083207685-aaf05f2c908c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    linkText: "Shop more deals",
  },
  {
    id: 4,
    title: "Top Deals",
    imgSrc:
      "https://images.unsplash.com/photo-1607083207685-aaf05f2c908c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    linkText: "Shop more deals",
  },
  {
    id: 5,
    title: "Top Deals",
    imgSrc:
      "https://images.unsplash.com/photo-1607083207685-aaf05f2c908c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    linkText: "Shop more deals",
  },
  {
    id: 6,
    title: "Top Deals",
    imgSrc:
      "https://images.unsplash.com/photo-1607083207685-aaf05f2c908c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    linkText: "Shop more deals",
  },
  {
    id: 7,
    title: "Top Deals",
    imgSrc:
      "https://images.unsplash.com/photo-1607083207685-aaf05f2c908c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    linkText: "Shop more deals",
  },
  {
    id: 8,
    title: "Top Deals",
    imgSrc:
      "https://images.unsplash.com/photo-1607083207685-aaf05f2c908c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    linkText: "Shop more deals",
  },
];

export default function HomeCard() {
  // const [content, setContent] = useState(0);

  // const handleContent = (selectedContent, e) => {
  //   setContent(selectedContent)
  // }

  return (
    <div className="grid-item">
      {/* {homeCardContent.map((content) => {
        <div className="home-card" key={content.id}>
          <h2 className="home-card__header">{content.title}</h2>
          <div className="home-card__img">
            <img src={content.imgSrc} alt="" />
          </div>
          <div className="home-card__link">
            <a href="https://www.google.com/">{content.linkText}</a>
          </div>
        </div>;
      })} */}
      <div className="home-card">
        <div className="home-card__header">Top Deals</div>
        <div className="home-card__img">
          <img
            src="https://images.unsplash.com/photo-1607083207685-aaf05f2c908c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt=""
          />
        </div>
        <div className="home-card__link">
          <a href="#">Shop more deals</a>
        </div>
      </div>
    </div>
  );
}
