import React, { useState } from 'react'
import "/home/shyam/Documents/Projects/React/my-react/src/assets/Styles/skillbox.css";
function Skillbox() {
   
  const [items, setItems] = useState(() => [
    {
      id: 1,
      title: " Lorem ipsum dolor",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing ",
    },
    {
      id: 2,
      title: " Lorem ipsum dolor",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing ",
    },
    {
      id: 3,
      title: " Lorem ipsum dolor",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing ",
    },
    {
      id: 4,
      title: " Lorem ipsum dolor",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing ",
    },
    {
      id: 5,
      title: " Lorem ipsum dolor",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing ",
    },
    {
      id: 6,
      title: " Lorem ipsum dolor",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing ",
    },
    {
      id: 7,
      title: " Lorem ipsum dolor",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing ",
    },
    {
      id: 8,
      title: " Lorem ipsum dolor",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing ",
    },
  ]);


  return (
    <div className="Skillbox">
      <div className="headskill-title">
        Why learn with <span>Skillto ?</span>
      </div>

      <div className="items">
        {items.map((ele) => (
          <div className="card-2">
            <div className="title">{ele.title}</div>
            <div className="desc">{ele.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skillbox