import React from 'react'
import PropTypes from "prop-types";

const onClick = () => {
  console.log ("clicked...");
}
const Button = ({ color, text }) => {
  return (
    <button onClick={onClick}  style={{ backgroundColor: color }} className="btn">{text}</button>
  )  
}

Button.defultProps = {
  color: "steelblue"
}

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string
}

export default Button

