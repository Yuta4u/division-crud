import React, { lazy, useEffect } from "react"
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom"
import { themeChange } from "theme-change"
import initializeApp from "./app/init"
import ProtectedRoute from "./app/auth"

import { Toaster } from "react-hot-toast"
import Home from "./features/home"

// Importing pages
const Login = lazy(() => import("./pages/Login"))

// Initializing different libraries
initializeApp()

function App() {
  useEffect(() => {
    themeChange(false)
  }, [])

  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          {/* <Route path="/home" element={<ProtectedRoute element={Home} />} /> */}

          {/* Place new routes over this */}
          {/* <Route path="/app/*" element={<Layout />} /> */}

          <Route
            path="*"
            element={<Navigate to={false ? "/home" : "/login"} replace />}
          />
        </Routes>
      </Router>
      <Toaster />
    </>
  )
}

export default App
