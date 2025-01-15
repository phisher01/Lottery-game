
import './App.css'
import Lottery from './Lottery'

import { sum } from './helper'

function App() {

  let winningCond=(ticket)=>{
    // return sum(ticket)==15;


    // ticket.every((num)=>{
    //   num==ticket[0];
    // });

    return ticket[0]==0;



  }
 

  return (
    <>
  

<Lottery  n={4} winningCond={winningCond} />
</>
    
    
  )
}

export default App
