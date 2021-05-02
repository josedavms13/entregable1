import React from 'react'


const QuoteLabel = ({quoteObject})=>{


   return(
      <div className={'quote-sub-container'}>
         <h1 className={'quote'}>{quoteObject.quote + '..'}</h1>
         <h6 className={'author'}>{quoteObject.author}</h6>

      </div>
   )
}

export default QuoteLabel