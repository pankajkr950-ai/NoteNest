import React from "react";

function CategoryBar({ selectedCategory, setSelectedCategory }) {
  const categories = [
    "All",
    "CSE",
    "ECE",
    "ME",
    "Civil",
    "BCA",
    "MCA",
    "MBA",
    "B.Tech",
  ];

  return (
    <div className="category-bar">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setSelectedCategory(category)}
          className={
            selectedCategory === category ? "active-category" : ""
          }
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryBar;