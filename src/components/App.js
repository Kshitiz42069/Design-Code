import { useState, useEffect } from "react";
import Editor from "./Editor"
import './app.css'

function App() {

  const [html,setHtml] = useState('');
  const [css,setCss] = useState('');
  const [javascript,setJavascript] = useState('');
  const [srcdoc,setSrcdoc] = useState('');
  
  useEffect(()=>{
    const timeout = setTimeout(() => {
      setSrcdoc(`
        <html>
          <body>${html}</body>
          <style>${css}</style>
          <script>${javascript}</script>
        </html>
      `)
    }, 250);

    return()=> clearTimeout(timeout)
  },[html,css,javascript])


  
  return (
    <>
      <div className="pane top-pane">
        <Editor language="xml" displayName="HTML" value={html} onChange={setHtml}/>
        <Editor language="css" displayName="CSS" value={css} onChange={setCss}/>
        <Editor language="javascript" displayName="JavaScript" value={javascript} onChange={setJavascript}/>
      </div>
      <div className="pane">
        <iframe 
          srcDoc = {srcdoc}
          title="output"
          sandbox="allow-scripts"
          width="100%"
          height = "100%"
        />
      </div>
    </>
  );
}

export default App;
