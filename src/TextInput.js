import {useState} from 'react';
import {FiSend} from "react-icons/fi";

function TextInput(props) {
    const[text, setText] = useState('')

    function sendMessage(){
        if(text==='') return // skip the function
        props.send(text)
        setText('')
    }
        function keyPressed(e){
        if(e.key==='Enter') {
            sendMessage()
        }
    }
    
    return <footer className="text-input">
      <input 
        className="input-box"
        placeholder="Type your message and hit enter"
        value={text}
        onChange={e=> setText(e.target.value)}
        onKeyPress={keyPressed}
      />
      <button 
        onClick={sendMessage} 
        disabled={!text}
        className="send-button">
          <FiSend title="send" 
            style={{minWidth:'1rem', marginRight:2, marginTop:2}} 
          />
      </button>
    </footer>
  }
  export default TextInput