
import React from 'react'
import './Form.css'

function Form() {
  const [formData, setFormData] = React.useState(
    {
          nombre: '',
          apellidos: '',
          email: '',
          comentarios: '',
          esAmigo: true,
          empleo: '',
          colorFav: ''
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
          placeholder='Apellidos'
          onChange={manejarCambio}
          name='apellidos'
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
                    value='desempleados'
                    checked={formData.empleo === 'desempleados'}
                    onChange={manejarCambio}
                />
                <label htmlFor="desempleados">Desempleados</label>
                <br />
                
                <input 
                    type="radio"
                    id="tiempo-parcial"
                    name='empleo'
                    value='tiempo-parcial'
                    checked={formData.empleo === 'tiempo-parcial'}
                    onChange={manejarCambio}
                />
                <label htmlFor="tiempo-parcial">Tiempo parcial</label>
                <br />
                
                <input 
                    type="radio"
                    id="tiempo-completo"
                    name='empleo'
                    value='tiempo-completo'
                    checked={formData.empleo === 'tiempo-completo'}
                    onChange={manejarCambio}
                />
                <label htmlFor="tiempo-completo">Tiempo-completo</label>
                <br />
            </fieldset>
            <br />
            
            <label htmlFor="favColor">¿Cuál es tu color favorito?</label>
            <br />
            <select id="colorFav">
                <option value="red">Rojo</option>
                <option value="orange">Anaranjado</option>
                <option value="yellow">Amarillo</option>
                <option value="green">Verde</option>
                <option value="blue">Azul</option>
                <option value="indigo">Indigo</option>
                <option value="violet">Violeta</option>
            </select>

    </form>
  )
 
}

export default Form
