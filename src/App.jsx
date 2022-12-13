import React, { useState, Suspense } from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Loader from "./components/UI/Loader"
import "./App.css"

const AllSections = React.lazy(() => import("./AllSections"))

function App() {
  const getCurrentTheme = () =>
    window.matchMedia("(prefers-color-scheme: dark)").matches
  const [mode, setMode] = useState(getCurrentTheme())

  return (
    <div className={mode ? "modeDark" : "modeLight"}>
      <div className="wrapper">
        <Header mode={mode} setMode={setMode} />
        <Suspense fallback={<Loader />}>
          <AllSections mode={mode} />
        </Suspense>
        <Footer mode={mode} />
      </div>
    </div>
  )
}

export default App
