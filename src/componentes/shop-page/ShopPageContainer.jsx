import React from 'react';
import Item from "../product-cards/Item"

export default function ShopPageContainer() {
  return (
    <div className="section all-products">
        <div className="top container">
            <h2>Todos los productos</h2>
            <form>
                <section>
                    <option value="1">Todos</option>
                    <option value="2">Por precio</option>
                    <option value="3">En oferta</option>
                    <option value="4">Hombre</option>
                    <option value="5">Mujer</option>
                </section>
            </form>
        </div>

        <div className="product-center container">
            <Item/>
        </div>
    </div>
  )
}
