import './App.css';
import { useState } from 'react';
import NewQuoteBtn from './newQuoteBtn'
import QuoteLabel from './quotelabel'
import Quotes from './Quotes'



function App() {

  
  let actualIndex = null;

  const [quoteToShow, setquoteToShow] = useState(Quotes[0])

  const [Color, setColor] = useState('color0')

  const randomQuoteGenerator = ()=>{


    // Quote picker
    const randomPicker = Math.floor(Math.random() * Quotes.length)

    if(actualIndex !== randomPicker){
      actualIndex = randomPicker
    }
    else {
      actualIndex++;
    }


    return Quotes[actualIndex];
  }

  let colorPicker = () =>{

    colorPicker = 'color'+(actualIndex%10).toString()
    console.log(colorPicker)
    return colorPicker
  }



  return (
    <div className="App">
      <header className={'App-header ' + `${Color}`}>
        <div className={'quote-container'}>

         <QuoteLabel quoteObject={quoteToShow}/>
        </div>
        <div className={'button-container'} onClick={()=>setquoteToShow(randomQuoteGenerator, setColor(colorPicker))}>
          <NewQuoteBtn />
        </div>
      </header>
    </div>
  );
}

export default App;
