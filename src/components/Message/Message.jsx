import './Message.css'

import React from 'react'
import PropTypes from 'prop-types'

const Message = ({ type, content }) => {
  return (
    <div className={`message ${type}`}>
      <p>{content}</p>
    </div>
  )
}

Message.propTypes = {
  type: PropTypes.string,
  content: PropTypes.string
}

export default Message