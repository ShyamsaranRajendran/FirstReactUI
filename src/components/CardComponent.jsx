import React from 'react';
import { useState } from 'react';
import "/home/shyam/Documents/Projects/React/my-react/src/assets/Styles/card.css";
function CardComponent() {
    const [card, setCard] = useState([
      {
        id: 1,
        img: "https://www.skillto.in/images/DrawKit-Vector-Illustration-ecommerce-01-3-p-800.jpg",
        Titletext: "Lorem ipsum dolor sit amet  ",
        desc: "eveniet, quae soluta, atque labore vel omnis perspiciatis repellendus sapiente fugit, eius nulla.",
      },
      {
        id: 2,
        img: "https://www.skillto.in/images/DrawKit-Vector-Illustration-ecommerce-01-3-p-800.jpg",
        Titletext: "Lorem ipsum dolor sit amet  ",
        desc: "eveniet, quae soluta, atque labore vel omnis perspiciatis repellendus sapiente fugit, eius nulla.",
      },
      {
        id: 3,
        img: "https://www.skillto.in/images/DrawKit-Vector-Illustration-ecommerce-01-3-p-800.jpg",
        Titletext: "Lorem ipsum dolor sit amet  ",
        desc: "eveniet, quae soluta, atque labore vel omnis perspiciatis repellendus sapiente fugit, eius nulla.",
      },
    ]);
  return (
    <div className="CardComponent">
          { card.map((ele) => ( 
            <div className="card">
                     <img src={ele.img} alt="" />
                     <div className="title">
                        {ele.Titletext}
                     </div>
                     <div className="desc">
                        {ele.desc}
                     </div>
            </div>
           ))}
    </div>
  )
}

export default CardComponent