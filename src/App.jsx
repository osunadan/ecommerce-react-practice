import React from "react";
import { Route, Routes} from "react-router-dom";
import Header from "./componentes/Main/Header";
import ItemListContainer from "./componentes/product-cards/ItemListContainer";


function App() {
  return (
      <>
      <Header/>
      <Routes>
          <Route path="/" element={<ItemListContainer/>} />
          <Route path="/category/:categoryName" element={<ItemListContainer/>} />
      </Routes>
      </>
);
}

export default App;
