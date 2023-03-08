import React from "react";
import { Route, Routes} from "react-router-dom";
import BlogContainer from "./componentes/blog/BlogContainer";
import HighlightsContainer from "./componentes/highlights-section/HighlightsContainer";
import Header from "./componentes/Main/Header";
import ItemListContainer from "./componentes/product-cards/ItemListContainer";
import NewArrival from "./componentes/secundary-sections/NewArrival";
import FooterContainer from "./componentes/footer/FooterContainer"
import Provider from "./componentes/Context/CartContext";
import ItemDetailContainer from "./componentes/products-detail/ItemDetailContainer";
import Navbar from "./componentes/Main/Navbar"

function App() {
  return (
      <>
      <Provider>
          <Navbar/>
      <Header/>
      <Routes>
          <Route path="/" element={<ItemListContainer/>} />
          <Route path="/category/:categoryName" element={<ItemListContainer/>} />
          <Route path="/detail/:detalleid" element={<ItemDetailContainer/>} />
      </Routes>
      <NewArrival/>
      </Provider>
      <HighlightsContainer/>
      <BlogContainer/>
      <FooterContainer/>
      </>
);
}

export default App;
