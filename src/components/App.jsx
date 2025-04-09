import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import Header from "./Header";
import ItemForm from "./ItemForm"; // Import the new form component
import itemData from "../data/items";

function App() {
  const [items, setItems] = useState(itemData);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [searchText, setSearchText] = useState("");

  function handleDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  function handleSearchChange(newSearchText) {
    setSearchText(newSearchText);
  }

  function handleItemFormSubmit(newItem) {
    setItems((prevItems) => [...prevItems, newItem]); // Add the new item to the list
  }

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header
        isDarkMode={isDarkMode}
        onDarkModeClick={handleDarkModeClick}
        onSearchChange={handleSearchChange}
      />
      <ItemForm onItemFormSubmit={handleItemFormSubmit} /> {/* Add the form */}
      <ShoppingList items={filteredItems} />
    </div>
  );
}

export default App;