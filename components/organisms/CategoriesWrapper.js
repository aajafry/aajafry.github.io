"use client";

export default function CategoriesWrapper({ categories, onSelectCategory }) {
  return (
    <div className="categories-section-wrapper">
      {/* <h3 className="">Categories</h3> */}
      <div className="categories-wrapper">
        <ul className="capitalize flex justify-center gap-4 my-8">
          {categories.map((category, index) => (
            <li
              key={index}
              onClick={() => onSelectCategory(category)}
              className="cursor-pointer text-neutral-800 dark:text-neutral-300 hover:text-rose-500 dark:hover:text-rose-500 transition duration-300 ease-linear"
            >
              {category}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
