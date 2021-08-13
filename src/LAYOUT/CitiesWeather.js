import axios from 'axios';
import {react,useState,useEffect} from 'react';
import './Styling.css'

function CitiesWeather() {

    const[weather,setWeather]=useState([]);
   
   

  

   useEffect(()=>{

   console.log('useEffect called');
    if(weather.length==0||weather===undefined)
    axios.get('https://run.mocky.io/v3/e3ae9d2e-78f5-403d-b6cd-fa7f8c7e1576').
    then((res)=>{
        console.log(res);
        setWeather(res.data.result);
        
    }).catch((err)=>{
        console.log(err);
    })

    else
    {
       
    }
     
},[])

    return  (
       
        <>
         {console.log(weather)}
        <nav className="navbar"><div >CitiesWeather</div></nav>
        <div className="cityWeather">
            
       { weather.map((result)=>(

           
        <div className={`${result.city}`}>{result.city}
        <br></br>
        {result.temp_Celsius}
        <br></br>
        {result.temp_Fahr}
        </div>
     
       ))}
      
       
        </div>
       
        </>
    )
}

export default CitiesWeather
