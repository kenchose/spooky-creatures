import React from "react";

import "./Searchbox.styles.css";

const Searchbox = ({ className, placeholder, handleChange }) => {
  return (
    <div>
      <input
        className={className}
        type="search"
        placeholder={placeholder}
        onChange={handleChange}
      />
    </div>
  );
};

export default Searchbox;
