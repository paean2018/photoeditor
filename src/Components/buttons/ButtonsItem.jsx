import React from 'react'

export default function ButtonsItem({ name, active, handleClick }) {
  return (
    <button 
      className={`button-item ${active ? 'active' : ''}`}
      onClick={handleClick}
    >
      {name}
    </button>
  )
}
