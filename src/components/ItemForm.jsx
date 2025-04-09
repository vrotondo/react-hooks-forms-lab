import React, { useState } from "react";

function ItemForm({ onItemFormSubmit }) {
  const [name, setName] = useState(""); // State for item name
  const [category, setCategory] = useState("Produce"); // State for item category

  function handleNameChange(event) {
    setName(event.target.value); // Update name state
  }

  function handleCategoryChange(event) {
    setCategory(event.target.value); // Update category state
  }

  function handleSubmit(event) {
    event.preventDefault();

    const newItem = {
      id: Date.now().toString(), // Convert id to a string
      name: name,
      category: category,
    };

    onItemFormSubmit(newItem); // Call the parent callback with the new item

    // Reset form fields
    setName("");
    setCategory("Produce");
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={name} // Controlled input
          onChange={handleNameChange}
          aria-label="Item Name" // Add a unique aria-label
        />
      </label>
      <label>
        Category:
        <select
          value={category} // Controlled select
          onChange={handleCategoryChange}
        >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>
      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;