import React from 'react';


function Footer() {

    return (
        <div className="Myfooter">
          <table className="mytable">
              <th>
              Tripzone
              </th>
              <th>
              Main Offices
              </th>
              <th>
              Sub offices
              </th>
              <th>
              Disclaimer
              </th>
              <tr >
                 <td> About</td>
                 <td> The United States</td>             
                 <td> Australia</td>
                 <td style={{textAlign:'left'}} rowSpan='2'> This layout is created as a part of Sirius UI Recruitments.<br></br>
            
                  All the above content has no direct relation with Sirius<br></br>
                  business.</td>
              </tr>


              <tr>
                 <td> Awards</td>
                 <td> Indian</td>             
                 <td> England</td>
                 
              </tr>


              <tr>
                 <td> Contact Us</td>
                 <td> Brazil</td>             
                 <td> France</td>
                 
              </tr>


              <tr>
                 <td> Feedback</td>
                 <td> Canada</td>             
                 <td> Germany</td>
                 
              </tr>
              
              </table>  
        </div>
    )
}

export default Footer
