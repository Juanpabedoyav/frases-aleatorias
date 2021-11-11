import React, { useState } from 'react'

const Cards = () => {
  
    const [color, setColor] = useState()
    
    const handleQuote=()=>{
        setColor(
            ["#61fda"]
            )
    }

  

    return (
        
            <div style={{backgroundColor: `${color}` }}className= "background">    
            <div className="card">
                        <p>Change your thoughts and you change your world.</p>
                        <h5>- Norman Vincent Peale</h5>
        <button onClick={handleQuote}type="button">New quote</button>

            </div>

           </div>
    )
}

export default Cards
