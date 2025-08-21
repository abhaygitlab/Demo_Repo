import React, { useEffect, useState } from 'react'

export default function App(){
  const [msg, setMsg] = useState('Loading...')

  useEffect(()=>{
    fetch('/api/hello')
      .then(r=>r.json())
      .then(d=>setMsg(d.message))
      .catch(()=>setMsg('Could not reach backend'))
  },[])

  return (
    <div className="container">
      <h1>Simple React + Node Starter</h1>
      <p>Backend says: <strong>{msg}</strong></p>
    </div>
  )
}
