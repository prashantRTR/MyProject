import {react,useState,useEffect} from 'react';
import axios from 'axios';
import promo from '../promo-image.png';

function Destinations() {
    const [info,setInfo]= useState([])
    
    
    useEffect(() =>{
     if(info.length==0)
     {
        axios.get('https://run.mocky.io/v3/3e6901dd-9a60-4771-a8cb-9c62177a654c')
        .then((res)=>{
            console.log("Info returned",res);
            setInfo(res);
        }).catch((err)=>{
            console.log("error occurred");
        })
           
     }

    })

    return (
        <div>
        <h4>Featured Destinations</h4>
        <div className="inner">
       { info.length!=0?info.data.result.map((elem) => 
           (<>
               <div className="cities"><div className="imgdiv"><img src={elem.imageUrl} style={{height:'200px',width:'200px'}}></img></div><div className="textdiv">{elem.city}</div></div>
            
             </> 
           )
       ):''}
        </div>
        
        <div>
    <img src={promo} style={{height:'500px',width:'100%'}}
    ></img>  
        </div>
        </div>
    )
}

export default Destinations







