import React from 'react'
import Header from "../Main/Header";
import ItemListContainer from "../product-cards/ItemListContainer";
import NewArrival from "../secundary-sections/NewArrival";
import HighlightsContainer from "../highlights-section/HighlightsContainer";
import BlogContainer from "../blog/BlogContainer";
import PopUp from './PopUp';

export default function Home() {

  return (
    <>
     <Header/>
     <ItemListContainer />
     <NewArrival/>
     <HighlightsContainer/>
      <BlogContainer/>
      <PopUp/>
    </>
  )
}
