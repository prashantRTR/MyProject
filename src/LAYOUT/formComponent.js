import {react,useState} from 'react';


function FormComponent() {
const[name,setName]=useState('');

    return (
        <div>
         <h2> Travelling as a group? Get a Quote </h2> 
         <form>
             <div className="myform">
                 <div className="innerform">
  <label className="mylabel">Your Name</label>
     <input type="text">
     </input>


     <label className="mylabel">Contact No</label>
     <input type="text">
     </input>


     <label className="mylabel">Email</label>
     <input type="text">
     </input>
     
     <button class="formbtn" style={{marginTop:'16px',marginBottom:'35px'}}>Sunmit</button>
     </div>

     </div>
         </form>
        </div>
    )
}

export default FormComponent
