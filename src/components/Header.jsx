import React from "react";

function Header({ isDarkMode, onDarkModeClick, onSearchChange, search }) {
  function handleInputChange(event) {
    if (onSearchChange) {
      onSearchChange(event.target.value); // Safety check
    }
  }

  return (
    <header>
      <h1>Shopping List</h1>
      <button onClick={onDarkModeClick}>
        {isDarkMode ? "Light Mode" : "Dark Mode"}
      </button>
      <input
        type="text"
        placeholder="Search items..."
        value={search} // Controlled input
        onChange={handleInputChange}
      />
    </header>
  );
}

export default Header;