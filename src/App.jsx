import React from "react";
import { Route, Routes} from "react-router-dom";
import Header from "./componentes/Main/Header";
import ItemListContainer from "./componentes/product-cards/ItemListContainer";
import NewArrival from "./componentes/secundary-sections/NewArrival";


function App() {
  return (
      <>
      <Header/>
      <Routes>
          <Route path="/" element={<ItemListContainer/>} />
          <Route path="/category/:categoryName" element={<ItemListContainer/>} />
      </Routes>
      <NewArrival/>
      </>
);
}

export default App;
