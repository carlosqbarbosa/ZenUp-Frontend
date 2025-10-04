import { useState } from "react"
import Login from "./pages/Login/Login"
import Register from "./pages/Register/Register"

function App() {
  const [showRegister, setShowRegister] = useState(false)

  return (
    <>
      {showRegister ? (
        <Register onBackToLogin={() => setShowRegister(false)} />
      ) : (
        <Login onRegisterClick={() => setShowRegister(true)} />
      )}
    </>
  )
}

export default App

