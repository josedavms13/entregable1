import React from 'react'
import { useState } from 'react'


const NewQuoteBtn = ()=>{

   const [label, setLabel] = useState("Show me")
   
   const text = ()=>{
      const randomNumb = Math.round(Math.random()*3)
      switch(randomNumb){
         case 0:
            return 'Give me another Quote please'
            break
         case 1:
            return `I don't like it, change it please!`
            break
         case 2:
            return 'That was good, tell me another one'
            break
         case 3:
            return 'Next one!'
            break
         
      }
      // console.log(randomNumb)
   }


   return(
      <button className={'new-quote-button'} onClick={()=>setLabel(text)}>{label}</button>
   )
}

export default NewQuoteBtn