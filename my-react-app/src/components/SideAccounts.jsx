import React from 'react'
import "./SideAccounts.css";
import FirstOne from "./firstOne.png";
import SecondOne from "./secondOne.png";
import ThirdOne from "./thirdOne.png";
import LastOne from "./lastone.png";
function SideAccounts() {
  return (
    <div id='co'>
      <div className='sell'>
        <h1>Become a Seller</h1>
      </div>
      <div className='options'>
        <p>Artists</p>
        <p>Photographers</p>
      </div>
      <div className='iam'>
      <div className='Maindiv' id="Maindiv">
        <div className='MainBox'>
            <img src={FirstOne} id="smallImg" />
            <div className='middle'>
            <p>THOMAS EDWARD</p>
            <p id="hey">@thewildwithyou</p>
            </div>
        </div>
      </div>
      
      <div className='Maindiv'id="Maindi">
        <div className='MainBox'>
            <img src={SecondOne} id="smallImg" />
            <div className='middle'>
            <p>Chris Doe</p>
            <p id="hey">@thewildwithyou</p>
            </div>
        </div>
      </div>
      <div className='Maindiv' id="Maind">
        <div className='MainBox'>
            <img src={ThirdOne} id="smallImg" />
            <div className='middle'>
            <p>Emilie Jones</p>
            <p id="hey">@thewildwithyou</p>
            </div>
        </div>
      </div>
      <div className='Maindiv'id="Main">
        <div className='MainBox'>
            <img src={LastOne} id="smallImg" />
            <div className='middle'>
            <p>Jessica Williams</p>
            <p id="hey">@thewildwithyou</p>
            </div>
        </div>
      </div>
      <div className='Maindiv'id="Mai">
        <div className='MainBox'>
            <img src={LastOne} id="smallImg" />
            <div className='middle'>
            <p>THOMAS EDWARD</p>
            <p id="hey">@thewildwithyou</p>
            </div>
        </div>
      </div>
      </div>
      <div className='footer'>
        <p>Privacy</p>
        <p>Terms Of Service</p>
        <p>Cookie Notice</p>
      </div>
    </div>
    
  )
}
export default SideAccounts;