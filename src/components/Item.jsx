import React, { useState } from "react";

function Item({ name, category }) {
  const [isInCart, setIsInCart] = useState(false);

  function handleAddToCartClick() {
    setIsInCart(!isInCart); // Simplified state update
  }

  const buttonText = isInCart ? "Remove From" : "Add to";
  const buttonClass = isInCart ? "remove" : "add";

  return (
    <li className={`item ${isInCart ? "in-cart" : ""}`}> {/* Preserve additional classes */}
      <span>{name}</span>
      <span className="category">{category}</span>
      <button
        className={buttonClass}
        onClick={handleAddToCartClick}
        aria-label={isInCart ? "Remove item from cart" : "Add item to cart"} // Accessibility
      >
        {buttonText} Cart
      </button>
    </li>
  );
}

export default Item;