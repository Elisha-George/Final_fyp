import React, { useState } from "react";

const AddPropertImage = () => {
  const [isToggleOn, setToggleOn] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleToggle = () => {
    setToggleOn(!isToggleOn);
    // Reset input value when hiding the text field
    if (!isToggleOn) setInputValue("");
  };

  return (
    <div>
      <label>
        Show Text Field:
        <input type="checkbox" checked={isToggleOn} onChange={handleToggle} />
      </label>
      {isToggleOn && (
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      )}
    </div>
  );
};

export default AddPropertImage;
