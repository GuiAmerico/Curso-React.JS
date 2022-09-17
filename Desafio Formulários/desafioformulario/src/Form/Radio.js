import React from 'react'

const Radio = ({pergunta, options,onChange,value,id,active}) => {
    if(active === false) return null
  return (
    <fieldset>
        <legend>{pergunta}</legend>
        {options.map(option => (
            <label key={option}>
                <input type='radio' checked={value === option} value={option} onChange={onChange} id={id}/>
                value={option}
            </label>
        ))}
    </fieldset>
  )
}

export default Radio