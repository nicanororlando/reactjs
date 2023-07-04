import SelectList from 'components/SelectList/SelectList'
import React, { useState } from 'react'

const SelectsAnidados = () => {
  const [state, setState] = useState("");
  const [town, setTown] = useState("");
  const [suburb, setSuburb] = useState("");
  let TOKEN = '0344f0bc-cece-4fc5-812f-0697cf88420f';

  return (
    <>
      <h2>SELECTS ANIDA2</h2>
      <h3>Argentina</h3>
      <SelectList
        title="estado"
        url={`https://api.copomex.com/query/get_estados?token=${TOKEN}`}
        handleChange={e => {
          setState(e.target.value)
        }} />
      {state && (
        <SelectList
          title="municipios"
          url={`https://api.copomex.com/query/get_municipio_por_estado/${state}?token=${TOKEN}`}
          handleChange={e => {
            setTown(e.target.value)
          }} />
      )}
      {town && (
        <SelectList
          title="colonia"
          url={`https://api.copomex.com/query/get_colonia_por_municipio/${town}?token=${TOKEN}`}
          handleChange={e => {
            setSuburb(e.target.value)
          }} />
      )}
      <pre>
        <code>
          {state} - {town} - {suburb}
        </code>
      </pre>
    </>
  )
}

export default SelectsAnidados