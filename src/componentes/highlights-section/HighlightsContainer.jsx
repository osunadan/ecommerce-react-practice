import React from 'react'
import TitleProductCards from '../product-cards/TitleProductCards'
import Highlight from './Highlight'

export default function HighlightsContainer() {
  return (
    <section className="section highlights">
        <TitleProductCards title={"STATS"} subTitle={"Our Statistics"}/>
        <div className="row container">
        <Highlight icon={<box-icon name='check-square' color="#EC6D42" size='lg'></box-icon>} title="Easy Order System" description="Lorem Ispum is a placeholder text 
commomly used as a free text."/>
        <Highlight icon={<box-icon name='truck' type='solid' color={"#EC6D42"} size='lg'></box-icon>} title="On Time Delievery" description="Lorem Ispum is a placeholder text 
commomly used as a free text."/>
         <Highlight icon={<box-icon name='dollar-circle' color={"#EC6D42"} size='lg'></box-icon>} title="Money Back Gaurantee" description="Lorem Ispum is a placeholder text 
commomly used as a free text."/>
         <Highlight icon={<box-icon name='user' color={"#EC6D42"} size='lg'></box-icon>} title="24/7 Customer Support" description="Lorem Ispum is a placeholder text 
commomly used as a free text."/>
        </div>
    </section>
  )
}
