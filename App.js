import React, {useState} from 'react';
import Editor from './Editor'
function App() {
    const[html,setHtml]=useState('')
    const[css,setcss]=useState('')
    const[js,setJs]=useState('')

    const srcDoc=`
    <html>
    <body>${html}</body>
    <style>${css}</style>
    <script>${js}</script>
    </html>`
 return(
    <>
    <div className='pane top-pane'>
     <Editor 
     language="xml"
     displayName="HTML"
     value={html}
     onChange={setHtml}/>
     <Editor 
     language="css"
     displayName="CSS"
     value={css}
     onChange={setcss}/>
     <Editor 
     language="javascript"
     displayName="JAVASCRIPT"
     value={js}
     onChange={setJs}/>
    
    </div>
    <div className="pane">
        <iframe
        srcDoc={srcDoc}
        title="output"
        sandbox="allow-scripts"
        frameBorder="0"
        height="100%"
        width="100%"
        />
    </div>
    </>
 )
}

export default App;
