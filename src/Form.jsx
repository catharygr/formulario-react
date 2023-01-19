
import React from 'react'
import './Form.css'

function Form() {
  const [formData, setFormData] = React.useState(
    {
          nombre: '',
          apellido: '',
          email: '',
          comentarios: '',
          esAmigo: true,
          empleo: ''
    })
  console.log(formData)

  function manejarCambio(e) {
    const {name,value,type, checked} = e.target
    setFormData(preFormData => ({
      ...preFormData, 
      [name]: type === 'checkbox' ? checked :  value

    }))

  }
  return(
    <form>
      <input 
          type="text" 
          placeholder='Nombre'
          onChange={manejarCambio}
          name='nombre'
          value={formData.nombre}
      />
           <input 
          type="text" 
          placeholder='Apellido'
          onChange={manejarCambio}
          name='apellido'
          value={formData.apellido}
      />
          <input 
          type="text" 
          placeholder='Email'
          onChange={manejarCambio}
          name='email'
          value={formData.email}
      />
      <textarea 
          value={formData.comentarios}
          placeholder="Comentarios"
          onChange={manejarCambio}
          name='comentarios'
      />
        <input 
          type="checkbox" 
          id="esAmigo" 
          checked={formData.esAmigo}
          onChange={manejarCambio}
          name="esAmigo"
          />
          <label htmlFor="esAmigo">¿Eres amistosos?</label>
          <br />
          <br />

          <fieldset>
                <legend>Estado actual de empleo</legend>
                
                <input 
                    type="radio"
                    id="desempleados"
                    name='empleo'
                    value={desempleados}
                    checked={formData.empleo === 'desempleados'}
                />
                <label htmlFor="desempleados">Desempleados</label>
                <br />
                
                <input 
                    type="radio"
                    id="tiempo-parcial"
                    name='empleo'
                    value={tiempo-parcial}
                    checked={formData.empleo === 'tiempo-parcial'}
                />
                <label htmlFor="tiempo-parcial">Tiempo parcial</label>
                <br />
                
                <input 
                    type="radio"
                    id="tiempo-completo"
                    name='empleo'
                    value={tiempo-completo}
                    checked={formData.empleo === 'tiempo-completo'}
                />
                <label htmlFor="tiempo-completo">Tiempo-completo</label>
                <br />
                
            </fieldset>

    </form>
  )
 
}

export default Form
