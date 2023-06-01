import {React, useState} from 'react';
import {collection, getDoc, doc} from "firebase/firestore";
import {database} from "../../services/firebaseConfig"

const MiPedido = () => {
    const [orderId, setOrderId] = useState("");
    const [item, setItem] = useState({});

console.log(JSON.stringify(orderId))

    const handleId = (e) => setOrderId(e.target.value);

    const enviarId = (e) => {
        e.preventDefault();

        const collectionOrders = collection(database, "orders");
        const ref = doc(collectionOrders, orderId)

        getDoc(ref).then((res)=>{
            const productodelUsuario = {
				id: res.id,
				...res.data(),
			};
	        setItem(productodelUsuario)
            }) 
            .catch((error)=>{console.log("No se pudo bajar correctamente la data" + error)});

            console.log(item)
        }
    


  return (
    <section className='section status-pedido'>
        <div className="top container d-flex">
            <h2>Verifica el status del envio de tu producto ingresando el ID de tu pedido acá abajo</h2>
            <div className="statusForm">
                <form action="#" className='d-flex' onSubmit={enviarId}>
                    <input type="text" id="idProducto" className="input-default" onChange={handleId}/>
                    <button className="btn">Enviar</button>
                    <h3>{item.status}</h3>
                </form>
            </div>
        </div>
    </section>
  )
}

export default MiPedido