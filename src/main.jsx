import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

const h1 = React.createElement('div', null, React.createElement("ol",null, React.createElement("li",null, "Item 1")))
ReactDOM.createRoot(document.getElementById('root')).render(
    h1
)
