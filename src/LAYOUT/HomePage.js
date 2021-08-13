import {React,useState,useEffect} from 'react'
import './Styling.css';
import MainContent from './MainContent';
import CitiesWeather from './CitiesWeather';
import Destinations from './Destinations';
import FormComponent from './formComponent';
import Footer from './footer';


export default function HomePage() {

    
    return (
        <div>
            <header class="mynav">
           Book Now and get exciting deals.Upto 40% off on all your credit card payments.
           <br></br>
           Offer ends in 1d 10h 5m 10s

            </header>

            <nav class="flex-container">
              <div>Weather</div>  
              <div>Destinations</div>   
              <div>Get a Quote</div> 
            </nav>

            <div>
            
            <MainContent/>
                
            </div>

            <div>
            <CitiesWeather/>
            </div>

            <div>
              <Destinations/>  
            </div>
            <div>
            <FormComponent/>
            </div>
    
            <footer>
            <Footer/>
            </footer>
        </div>
    )
}
