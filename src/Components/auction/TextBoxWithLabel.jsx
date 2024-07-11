import React, { useState } from "react";

const TextboxWithLabel = () => {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div className="p-4">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        {text}
      </label>
      <input
        type="text"
        value={text}
        onChange={handleChange}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
    </div>
  );
};

export default TextboxWithLabel;
