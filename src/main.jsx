import ReactDOM from 'react-dom/client'
import HelloWorld from "./components/HelloWorld.jsx";
import React from "react" ;

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <HelloWorld user={'Pepe'} id="1" />
    </React.StrictMode>
)
