import React from 'react'
import Button from './Button'
import Input from './Input'

const Form = () => {
  return (
    <form>
        <p>
        <Input id='email' label='Email' required/>
        <Input id='senha' type='password' label='Senha' required/>
        

        </p>
        
        <Button />
    </form>
  )
}

export default Form