import './UserInputs.css'
import '../Message/Message.css'

import React from 'react'
import { useState, useEffect } from 'react';
import { Send } from 'akar-icons';

const UserInputs = () => {
  const [themeColor, setThemeColor] = useState("#7b2cbf");

  useEffect(() => {
    //
  }, [themeColor]);

  return (
    <div className="input-bar">
      <form>
        <input type="radio" name="user-choice" id="user1" checked />
        <label htmlFor="user1">First user</label>
        <br />
        <input type="radio" name="user-choice" id="user2" />
        <label htmlFor="user2">Second user</label>
      </form>

      <div className="message-input">
        <input type="text" id="message" placeholder="Write a message..." />
        <button><Send strokeWidth={2} size={24} /></button>
      </div>

      <div>
        <label htmlFor="theme-color">Set theme color</label>
        <br />
        <input type="color" id="theme-color" value={themeColor} onChange={ e => setThemeColor(e.target.value)} />
      </div>
    </div>
  )
}

export default UserInputs