import React from 'react'

const Input = ({id, label, value, onChange, value, type, onBlur, placeholder, error}) => {
  return (
    <div>
        <label htmlFor={id}>{label}</label>
        <input id={id} name={id} value={value} onChange={onChange}
         placeholder={placeholder} onBlur={onBlur} type={type}/>
         {error && <p>{error}</p>}
    </div>
  )
}

export default Input