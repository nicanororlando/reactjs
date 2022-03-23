import React from "react";
import '../hojas-de-estilo/Contador.css'

export function Contador({ numClicks }) {
  return (
    <div className="contador">
      {numClicks}
    </div>
  )
}