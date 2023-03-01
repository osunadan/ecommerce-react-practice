import React from 'react'
import Item from '../product-cards/Item'
import TitleProductCards from '../product-cards/TitleProductCards'

function BlogContainer() {
  return (
    <div className="section blog">
        <TitleProductCards title={"BLOGS"} subTitle={"Latest News"}/>
    <div className="row container">
    <Item blog={true} title={"Trendy"} image={"../../src/assets/blog-1.png"} description={"Lorem Ispum is a placeholder text commomly used as a free text."} date={"10 January 2021"}/>
    </div>
    </div>
  )
}

export default BlogContainer