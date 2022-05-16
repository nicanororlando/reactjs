import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';

const ModalPortal = ({ children, isOpen, closeModal }) => {
  // Evita los eventos que tenemos en el arbol (burbuja, captura... ). Lo usamos para que el closeModal no se ejecute en el contenedor del modal.
  const handleModalContainerClick = (e) => e.stopPropagation();

  // De esta manera inyectamos el contenido del componente en otro nodo del arbol del DOM
  return ReactDOM.createPortal(
    <article className={`modal ${isOpen && 'is-open'}`} onClick={closeModal}>
      <div className="modal-container" onClick={handleModalContainerClick}>
        <button className="modal-close" onClick={closeModal}>
          X
        </button>
        {/* Con esta prop, cuando llamo al componente desde otro lado, puedo desde 
        ahi, pasarle otra logica para que haga. */}
        {children}
      </div>
    </article>,
    document.getElementById('modal')
  );
};

export default ModalPortal;
