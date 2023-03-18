import React from "react";
import { Route, Routes} from "react-router-dom";
import FooterContainer from "./componentes/footer/FooterContainer"
import Provider from "./componentes/Context/CartContext";
import ItemDetailContainer from "./componentes/products-detail/ItemDetailContainer";
import Navbar from "./componentes/Main/Navbar";
import Home from "./componentes/Main/Home"
import Carrito from "./componentes/Checkout/Carrito";
import ShopPageContainer from "./componentes/shop-page/ShopPageContainer";

function App() {
  return (
      <>
      <Provider>
          <Navbar/>
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/category/:categoryName" element={<Home/>} />
          <Route path="/detail/:detalleid" element={<ItemDetailContainer/>} />
          <Route path="/carrito" element={<Carrito/>} />
          <Route path="/shop" element={<ShopPageContainer/>} />
      </Routes>
      </Provider>
      <FooterContainer/>
      </>
);
}

export default App;
