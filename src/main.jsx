import React from "react"
import ReactDOM from "react-dom/client"
import smoothScrollPolyfill from "smoothscroll-polyfill"
import App from "./app/App"
import "./index.css"

 smoothScrollPolyfill.polyfill() 

ReactDOM.createRoot(document.getElementById("root")).render(<App />)
