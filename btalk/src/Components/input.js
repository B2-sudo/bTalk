

import React from 'react';


import './input.css';

const Input=({message,setMessage,sendMessage})=>{

return (    
<form className="form">
<input value={message} 
type="text"
placeholder="Type Your Message.."
onChange={(event)=>{setMessage(event.target.value)} } 
onKeyPress={event=>event.key==='Enter'?sendMessage(event):null}></input>
<button className="sendButton" onClick={(event)=>sendMessage}>
    Send
</button>
</form>
);
}
export default Input;