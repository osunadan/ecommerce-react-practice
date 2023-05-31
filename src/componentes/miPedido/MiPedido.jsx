import React from 'react'

const MiPedido = () => {
  return (
    <section className='section status-pedido'>
        <div className="top container d-flex">
            <h2>Verifica el status del envio de tu producto ingresando el ID de tu pedido acá abajo</h2>
            <div className="statusForm">
                <form action="#" className='d-flex'>
                    <label htmlFor="idProducto" className="label-default">Ingresa tu ID</label>
                    <input type="text" id="idProducto" className="input-default"/>
                </form>
            </div>
        </div>
    </section>
  )
}

export default MiPedido