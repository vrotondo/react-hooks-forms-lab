import React from "react";

function Filter({ search, onSearchChange, onCategoryChange }) {
  console.log("Filter Props:", { search, onSearchChange, onCategoryChange });

  return (
    <div className="Filter">
      <input
        name="search"
        placeholder="Search..."
        aria-label="Search Items" // Add a unique aria-label
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
      />
      <select
        name="filter"
        value={search} // Controlled select
        onChange={onCategoryChange}
      >
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;