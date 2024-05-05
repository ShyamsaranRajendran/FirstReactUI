import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import "/home/shyam/Documents/Projects/React/my-react/src/assets/Styles/question.css";

const Question = () => {
  const [items, setItems] = useState([
    {
      ques: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium sequi quia molestiae, ",
    },
    {
      ques: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium sequi quia molestiae, ",
    },
    {
      ques: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium sequi quia molestiae, ",
    },
    {
      ques: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium sequi quia molestiae, ",
    },
    {
      ques: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium sequi quia molestiae, ",
    },
    {
      ques: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium sequi quia molestiae, ",
    },
    {
      ques: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium sequi quia molestiae, ",
    },
    {
      ques: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium sequi quia molestiae, ",
    },
  ]);

  return (
    <div className="Question">
      {items.map((ele, index) => (
        <div className="bar" key={index}>
          <div className="title">{ele.ques} ?</div>
          <div>
            <IoIosArrowForward />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Question;
