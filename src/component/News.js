import React, { useState, useEffect } from "react";
const cards = [
  {
    id: 1,
    category: "Community",
    title:
      "Thinking of becoming an Investor in Dubai – Here’s an ultimate Guide!",
    type: "community",
    image:"https://hjrealestates.com/wp-content/uploads/2024/05/hj-real-estates-blog-golden-visa-uae-768x520.webp"
  },
  {
    id: 2,
    category: "News",
    title: "Golden Visa UAE: Everything You Need to Know About It",
    type: "news",
    image:"https://hjrealestates.com/wp-content/uploads/2024/05/hj-real-estates-blog-investor-in-dubai-featured-768x512.webp"
  },
  {
    id: 3,
    category: "Developer",
    title: "Who is the No.1 Developer in Dubai?",
    type: "Developer",
    image:"https://hjrealestates.com/wp-content/uploads/2024/02/hj-real-estates-blog-top-developer-in-dubai-768x648.webp"
  },
];
const News = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filterCards = () => {
    if (selectedCategory === "All") {
      return cards;
    }
    return cards.filter((card) => card.category === selectedCategory);
  };
 
  return (

    <div>
    
      {/* all community */}
      <div className="container footerloop">
        <h2>News & Articles</h2>
        <div className="filter">
          <span
            className={selectedCategory === "All" ? "active" : ""}
            onClick={() => setSelectedCategory("All")}
          >
            All
          </span>
          <span
            className={selectedCategory === "Community" ? "active" : ""}
            onClick={() => setSelectedCategory("Community")}
          >
            Community
          </span>
          <span
            className={selectedCategory === "News" ? "active" : ""}
            onClick={() => setSelectedCategory("News")}
          >
            News
          </span>
          <span
            className={selectedCategory === "Developer" ? "active" : ""}
            onClick={() => setSelectedCategory("Developer")}
          >
            Developer
          </span>
        </div>
        <div className="row">
          <div className="col-md-9 col-sm-12 col-xs-12">
            <div className="cards">
              {filterCards().map((card) => (
                <div key={card.id} className="card" style={{borderRadius:"30px",border:"none",width: "18rem"}}>
                  <img src={card.image} alt={card.title} />
                  <div className="card-content">
                    <h3>{card.title}</h3>
                    <p>{card.type}</p>
                    <button className="explore-button">Explore</button>
                  </div>
                </div>
              ))}
            </div>{" "}
          </div>

          <div className="col-md-3 col-sm-12 col-xs-12">
            <img src="../img/banner.png" className="banner12"></img>{" "}
          </div>
        </div>
        <br />
        <a href="#" class="" target="_blank">
          {" "}
          <b>
            View All <i class="fa fa-arrow-right"></i>
          </b>
        </a>
      </div>
    
    </div>
  )
}

export default News
