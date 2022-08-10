import React, {useState} from 'react';
import Modal from './components/modal/modal';
import Chat from './components/chat/Chat';
import './app.css'
export default function App(){
  const [disabled, setDisabled] = useState(true);

  const enabledChat = (e)=>{
    e.preventDefault();
    setDisabled((oldDisabled)=>{
      return !oldDisabled;
    })
  }
  return(
    <div className="app">
        <Chat/>
        {disabled && <Modal onSubmit={(e) =>enabledChat(e)}/>}
    </div>
  )
}