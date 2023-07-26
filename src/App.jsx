import './App.css'
import { useState, useEffect } from "react";
import ReactMarkdown from 'react-markdown'
import {FiMaximize2, FiMinimize2} from 'react-icons/fi'

function App() {
  const [textareaContent, setTextareaContent] = useState("");
  const [textareaMaximized, setTextareaMaximized] = useState(false);
  const [previewerMaximized, setPreviewerMaximized] = useState(false);

  useEffect(() => {
    console.log(textareaContent)
  }, [textareaContent]);

  const newTextareaContent = (event) => {
    setTextareaContent(event.target.value)
  }

  const changeTextareaContainer = () => {
    setTextareaMaximized(!textareaMaximized)
  }

  const changePreviewerContainer = () => {
    setPreviewerMaximized(!previewerMaximized)
  }

  return (
    <div id='container'>
      <div id='textarea-container'>
        <div id='textarea-header'>
          <img src='https://www.svgrepo.com/show/314005/free-code-camp.svg' />
          <h2>
            Markdown Editor
          </h2>
          <div className='button-container'>
            {
              textareaMaximized 
                ? <FiMinimize2 className='icon' onClick={() => changeTextareaContainer()}/>
                : <FiMaximize2 className='icon' onClick={() => changeTextareaContainer()}/>
            }
          </div>
        </div>
        <textarea rows={15} onChange={() => newTextareaContent(event)}/>
      </div>
      <div id='previewer-container'>
        <div id='previewer-header'> 
          <img src='https://www.svgrepo.com/show/314005/free-code-camp.svg' />
          <h2>
            Previewer
          </h2>
          <div className='button-container'>
            {
              previewerMaximized 
                ? <FiMinimize2 className='icon' onClick={() => changePreviewerContainer()}/>
                : <FiMaximize2 className='icon' onClick={() => changePreviewerContainer()}/>
            }
          </div>
        </div>
        <div id='textarea-content'>
          <ReactMarkdown>{textareaContent}</ReactMarkdown>
        </div>
      </div>
    </div>
  )
}

export default App
