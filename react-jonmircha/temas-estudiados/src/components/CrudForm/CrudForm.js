import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const initialForm = {
  id:"",
  name:"",
  constellation:"",
}

export const CrudForm = ({ createData, updateData, dataToEdit, setDataToEdit }) => {
  const [form, setForm] = useState(initialForm)
  let navigate = useNavigate();

  useEffect( ()=> {
    if(dataToEdit) setForm(dataToEdit);
    else setForm(initialForm);
  }, [dataToEdit])

  const handleChange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!form.name || !form.constellation){
      alert("Datos incompletos")
      return
    }
    
    if(!form.id){
      createData(form)
    } else {
      updateData(form)
    }

    handleReset();
  }

  const handleReset = e => {
    setForm(initialForm)  //Para limpiar imputs
    setDataToEdit(null)   //Para 
    navigate('/api')
  }

  return (
    <div>
      <h3>{dataToEdit ? "Editar" : "Agregar"}</h3>  {/* Renderizado condicional */}
      <form>
        <input type='text' name='name' placeholder='Nombre' onChange={handleChange} 
        value={form.name} />
        <input type='text' name='constellation' placeholder='Constelacion' 
        onChange={handleChange} value={form.constellation} />
        <input type='submit' value='Enviar' onSubmit={handleSubmit} onClick={handleSubmit} />
        <input type='reset' value='Limpiar' onSubmit={handleReset} onClick={handleReset}/>
      </form>
    </div>
  )
}
