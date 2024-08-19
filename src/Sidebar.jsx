import React from 'react';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="panel">
    <div className=" border">
     <i className="fa-solid fa-bars"></i>
     All
    </div>

    <div className="panel-ops">
     <p>Today's Deals</p>
    <p> Customer Service</p>
     <p>Registry</p>
     <p>Gift Cards</p>
     <p>Sell</p>
    </div>

    <div className="panel-deals border">
     Shop deals on Electronics
    </div>
</div>
  );
}

export default Sidebar;
