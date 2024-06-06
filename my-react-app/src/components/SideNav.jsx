import React from 'react'
import "./SideNav.css";
import Home from "./home.png";
import Notification from "./notification.png";
import Shop from "./heart.png";
import Conversation from "./message.png";
import Wallet from "./wallet.png";
import Subscription from "./subscription.png";
import Profile from "./profile.png";
import Settings from "./setting.png";
import Logout from "./logout.png";
 function SideNav() {
  return (
    <div id="co1">
      <div className='Logo'>
        <h1>LOGO</h1>
      </div>
      <div className='belowNav'>
        <ul>
          <li><img src={Home}/>Home</li>
          <li><img src={Notification}/>Notifications</li>
          <li><img src={Shop}/>Shop</li>
          <li><img src={Conversation}/>Conversation</li>
          <li><img src={Wallet}/>Wallet</li>
          <li><img src={Subscription}/>Subscription</li>
          <li><img src={Profile}/>My profile</li>
          <li><img src={Settings}/>Settings</li>
          <li id="logout"><img src={Logout}/>Log Out</li>
        </ul>
      </div>
      <div className='lastWords'>
        <p>2022©logo name</p>
        <p>Developed By ivan infotech</p>
      </div>
    </div>
  )
}
export default SideNav;