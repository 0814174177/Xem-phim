import React, { useState } from "react";
import Magnifier from "../../Component/UI/Magnifier"; // Giả sử đây là component icon
import "./SearchForm.css"; // Sửa lại import file CSS

function SearchForm({ setData }) {
  const [input, setInput] = useState("");

  const handlerInput = (e) => {
    setInput(e.target.value);
  };

  const handlerSubmit = (event) => {
    event.preventDefault();
    setData(input);
    console.log("Đã gửi dữ liệu thành công");
  };

  return (
    <form className="search-form" onSubmit={handlerSubmit}>
      <div className="search-input-wrapper">
        <input type="text" onChange={handlerInput} value={input} required />
        <div className="search-icon">
          <Magnifier />
        </div>
      </div>

      <div className="control-buttons">
        <button type="reset" onClick={() => setInput("")}>
          RESET
        </button>
        <button type="submit">SEARCH</button>
      </div>
    </form>
  );
}

export default SearchForm;
