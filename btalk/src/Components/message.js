import React from 'react';





import './Message.css';

const Message = ({ message:{user,text}, name }) => {
let isSentbyCurrUser=false;

const trimmedName=name.trim().toLowerCase();

if(user===trimmedName)
isSentbyCurrUser=true;


return (
    isSentbyCurrUser?
    (<div className="messageContainer justifyEnd">
        <p className="sentText pr-10">{trimmedName}</p>
           <div className="messageBox">
               <p className="messageText colorWhite">{text}</p>
               </div> 
    </div>
    ):(
        <div className="messageContainer justifyStart">
    <p className="sentText backgroundLight">{trimmedName}</p>
       <div className="messageBox colorDark">
       <p className="sentText pl-10">{text}</p>   
       </div> 
</div>)
)



}

export default Message;