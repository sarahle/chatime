import { useState } from 'react';
import './App.css';
import TextInput from './TextInput';
import Message from './Message';
import NamePicker from './NamePicker';
import {db, useDB} from './db';

function App() {
  const messages = useDB()
  const [username,setUsername] = useState(localStorage.getItem('username') || '')
  return <div className="App">
    
    <header className="header">
      <div className="logo" />
      CHATIME
      <NamePicker saveName={setUsername}/>
    </header>
    
    <main className="info">
      {messages.map((m,i)=> {
        const isMe = m.name===username
        return <Message key={i} {...m} isMe={isMe}/>
      })}
    </main>
    
    <TextInput 
      send={(t)=> db.send({text:t, name:username, date:new Date()})}
    />
    
  </div>
}
export default App;