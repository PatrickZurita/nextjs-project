'use client'
 
import { useState } from 'react'
import { useEffect } from 'react'

export default function Users() {
  const [count, setCount] = useState(0)

  useEffect(()=>{
    alert('Alert')
  },[])
  
  return (
    <div>
        
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  )
}