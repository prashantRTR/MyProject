import React from 'react'
import welcomeImage from '../welcome-image.svg';


export default function MainContent() {
    return (
        < >
        <div className="flex_layout">
    <div className="welcomeImg">
        
        <img src={welcomeImage}></img>
        
        </div>  
        <div className="tagline">
            
      <h1>Life is short</h1>  
        <h1>and the world is wide!</h1>
        <h4>Stay at the comfort of your homes and book a trip to travel</h4>
<h4>after the post pandemic era.
</h4>
<button className="btn">Plan a trip</button>
           
           </div>      
  
           </div>
        </>
    )
}
