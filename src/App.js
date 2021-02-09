import { useState } from 'react';
import './App.css';
import TextInput from './TextInput';
import Message from './Message';
import NamePicker from './NamePicker';


function App() {
  const [messages,setMessages] = useState([])
  const [username,setUsername] = useState('')
  return <div className="App">
    
    <header className="header">
      <div className="logo" />
      CHATIME
      <NamePicker saveName={setUsername}/>
    </header>
    
    <main className="info">
      {messages.map((m,i)=> {
        return <Message key={i} {...m} />
      })}
    </main>
    
    <TextInput 
      send={(t)=> setMessages(
        [{text:t, name:username, date: new Date()}, ...messages]
      )}
    />
    
  </div>
}
export default App;