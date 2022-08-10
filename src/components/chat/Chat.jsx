import React from 'react';
import User from './user.png';
import Send from './sender.png';
import './chat.css'
export default function Chat(){
    return(
        <div className="chat-container">
            <div className="chat">
                <div className="header-chat">
                    <img src={User} className="UserImg" alt="UserImg"></img>
                    <div className="username-chat">Boot User ♟</div>
                </div>
                <div className="body-chat">
                    
                </div>
                <div className="bottom-chat">
                    <form className="form-chat">
                        <input type="text" className="text-chat"/>
                        <button type="submit" className="btn-send"><img src={Send} className="Send" alt="Send"></img></button>
                    </form>
                </div>
            </div>
        </div>
        
    )
}