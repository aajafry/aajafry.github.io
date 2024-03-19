"use client";

export default function CategoriesWrapper({ categories, onSelectCategory }) {
  return (
    <div className="categories-section-wrapper">
      {/* <h3 className="">Categories</h3> */}
      <div className="categories-wrapper">
        <ul className=" flex justify-center gap-4 my-8 ">
          {categories.map((category, index) => (
            <li
              key={index}
              onClick={() => onSelectCategory(category)}
              className="cursor-pointer"
            >
              {category}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
