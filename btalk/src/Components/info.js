import React from 'react';


import './info.css';

const InfoBar=({room})=>{

return (    
<div className="infoBar">
    <div className="leftInnerContainer">
        <h3>{room}</h3>
    </div>
    <div className="righttInnerContainer">
        <a href="/">X</a>


    </div>
</div>


);
}
export default InfoBar;