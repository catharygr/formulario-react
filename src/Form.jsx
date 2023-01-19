
import React from 'react'
import './Form.css'

function Form() {
  const [formData, setFormData] = React.useState({
    nombre: '',
    apellido: ''
  })
  console.log(formData)

  function manejarCambio(e) {
    const {name,value} = e.target.value
    setFormData(preFormData => ({
      ...preFormData, 
      [name]: value

    }))

  }
  return(
    <form>
      <input 
          type="text" 
          placeholder='Nombre'
          onChange={manejarCambio}
          name='nombre'
      />
           <input 
          type="text" 
          placeholder='Apellido'
          onChange={manejarCambio}
          name='apellido'
      />

    </form>
  )
 
}

export default Form
