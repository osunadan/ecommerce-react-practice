import React from "react";
import { Route, Routes} from "react-router-dom";
import BlogContainer from "./componentes/blog/BlogContainer";
import HighlightsContainer from "./componentes/highlights-section/HighlightsContainer";
import Header from "./componentes/Main/Header";
import ItemListContainer from "./componentes/product-cards/ItemListContainer";
import NewArrival from "./componentes/secundary-sections/NewArrival";
import FooterContainer from "./componentes/footer/FooterContainer"


function App() {
  return (
      <>
      <Header/>
      <Routes>
          <Route path="/" element={<ItemListContainer/>} />
          <Route path="/category/:categoryName" element={<ItemListContainer/>} />
      </Routes>
      <NewArrival/>
      <HighlightsContainer/>
      <BlogContainer/>
      <FooterContainer/>
      </>
);
}

export default App;
