import React from 'react'
import { useState } from 'react'
import { FaRegTrashAlt } from "react-icons/fa";
const Body = () => {

  const [Items, setItems] = useState(
    [{
      id: 1,
      checked: true,
      item: "Coding"
    },
      {
        id: 2,
        checked: true,
        item:"Drawing"
      },
      {
        id: 3,
        checked: false,
        item:"writing"
      }
    ]
   )




  return (
    <main>
      {Items.map((ele) => (
        <li>
          <input type="checkbox" checked={ele.checked} />
          <label htmlFor="">{ele.item}</label>
          <FaRegTrashAlt type="button" />
        </li>
      ))}
     </main>
  )
}

export default Body