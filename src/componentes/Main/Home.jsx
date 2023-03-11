import React from 'react'
import { useParams } from "react-router-dom";
import Header from "../Main/Header";
import ItemListContainer from "../product-cards/ItemListContainer";
import NewArrival from "../secundary-sections/NewArrival";
import HighlightsContainer from "../highlights-section/HighlightsContainer";
import BlogContainer from "../blog/BlogContainer";

export default function Home() {
const  {categoryName} = useParams();

  return (
    <>
     <Header/>
     <ItemListContainer categoria={categoryName}/>
     <NewArrival/>
     <HighlightsContainer/>
      <BlogContainer/>
    </>
  )
}
