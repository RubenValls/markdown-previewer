import './App.css'
import { useState, useEffect } from "react";

function App() {
  const [textareaContent, setTextareaContent] = useState("");

  useEffect(() => {
    console.log(textareaContent)
  }, [textareaContent]);

  const newTextareaContent = (event) => {
    setTextareaContent(event.target.value)
  }

  return (
    <div id='container'>
      <div id='textarea-container'>
        <div id='textarea-header'>
          <img src='https://www.svgrepo.com/show/314005/free-code-camp.svg' />
          <h2>
            Editor
          </h2>
        </div>
        <textarea rows={15} onChange={() => newTextareaContent(event)}/>
      </div>
      <div id='previewer-container'>
        <div id='previewer-header'> 
          <img src='https://www.svgrepo.com/show/314005/free-code-camp.svg' />
          <h2>
            Previewer
          </h2>
        </div>
        <p id='textarea-content'>
          {
            textareaContent
          }
        </p>
      </div>
    </div>
  )
}

export default App
