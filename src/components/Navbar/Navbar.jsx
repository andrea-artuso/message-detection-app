import './Navbar.css'

import { useState, useEffect } from "react"

const Navbar = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    setInterval(() => {
      setDate(new Date());
    }, 1000);
  });

  return (
    <header className="page-header">
      <h1>Chat</h1>
      <p>{(date.getHours() < 10 ? "0"+date.getHours() : date.getHours()) + ":" + (date.getMinutes() < 10 ? "0"+date.getMinutes() : date.getMinutes())}</p>
    </header>
  )
}

export default Navbar