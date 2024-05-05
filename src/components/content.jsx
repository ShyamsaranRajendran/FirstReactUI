import React from 'react'
import { useState } from 'react'

const Content= ()=> {
    
    const handleNAmeChange=() => {
        const names = ['Eran', 'grow', 'give']
        const int = Math.floor(Math.random() * 3);
        return names[int];
    }
    const Name = () => {
        console.log("Hello from shyam")
    }
    const [count, setCount] = useState(0);
    const [name,setName] = useState(()=>{ Name()})
    function increment() {
        setCount((count) => {
            return count+1
        })
    }

    function decrement() {
        setCount((count) => {
            return count-1
        })
    }
    
  return (
      <main>
          <p className='text-3xl font-bold underline'>lets Earn Money</p>
          <button> Submit</button>
          <button onClick={decrement}>-</button>
          <span>{count}</span>
          <button onClick={increment}>+</button>
    </main>
  )
}

export default Content