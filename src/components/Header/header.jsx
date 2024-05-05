import React from "react";
import "/home/shyam/Documents/Projects/React/my-react/src/assets/Styles/Header.css";
import { AiFillTrademarkCircle } from "react-icons/ai";
import { IoMdArrowDropdown } from "react-icons/io";
function Header() {
  // Changed function name to PascalCase (Header)
  return (
    <div className="App-Header">
      <div className="logo">
        <img src="https://www.skillto.in/images/skillto-logo.svg" alt="" />
      </div>
      <div className="App-buttons">
        <select>
          <option value="OurPrograms1">Our Programs 1</option>
          <option value="OurPrograms2">Our Programs 2</option>
          <option value="OurPrograms3">Our Programs 3</option>
        </select>
        <button>Community</button>
        <button>About</button>
        <button>Design Studio</button>
      </div>
    </div>
  );
}

export default Header;
