import { useModal } from 'hooks/useModal'
import React from 'react'
import Modal from 'components/Modal/Modal'
import ModalPortal from 'components/Modal/ModalPortal';

const Modals = () => {

  // Hago la desestructuracion como array xq en el hook retorno un array, solo x eso.
  const [isOpenModal1, openModal1, closeModal1] = useModal(true);
  const [isOpenModal2, openModal2, closeModal2] = useModal(false);
  const [isOpenPortal, openModalPortal, closeModalPortal] = useModal(false);

  return (
    <div>
      <h2>Modals</h2>
      <button onClick={openModal1}>Modal 1</button>
      <Modal isOpen={isOpenModal1} closeModal={closeModal1} >
        <h2>Modal 1</h2>
        <p>Q onda gatooooo</p>
        <img src="https://placeimg.com/200/200/animals" alt='Animals' />
      </Modal>
      <button onClick={openModal2}>Modal 2</button>
      <Modal isOpen={isOpenModal2} closeModal={closeModal2} >
        <h2>Modal 2</h2>
        <img src="https://placeimg.com/600/600/nature" alt='Nature' />
      </Modal>
      {/* <button onClick={openModalPortal}>Modal en portal</button>
      <ModalPortal isOpen={isOpenPortal} closeModal={closeModalPortal} >
        <h2>Modal en portal</h2>
        <p>Este es el contenido de un modal que carga en otro nodo del DOM diferente
          a donde carga nuestra app de React, gracias a un React portal.
        </p>
        <img src="https://placeimg.com/600/600/tech" alt='Animals' />
      </ModalPortal> */}
    </div >
  )
}

export default Modals