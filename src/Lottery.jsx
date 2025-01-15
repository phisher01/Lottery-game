import { useActionState, useState } from "react";

import Ticket from "./Ticket";

import Button from "./Button.";

import { genTicket,sum } from "./helper";

export default function lottery({n=3,winningCond}){

   
    let [tickets,setTickets]=useState( ()=>{return genTicket(n)});
    

   let isWinning =winningCond(tickets);




let buyTicket=()=>{
    setTickets(genTicket(n));
}



    return (
        <div> 
            <h1>Lottery Game!</h1>

            <Ticket ticket={tickets}/>
      
<br />
           <Button   action={buyTicket} />
            <h3>{isWinning && "Congratulations You won!"}</h3>
        </div>

    );
}   