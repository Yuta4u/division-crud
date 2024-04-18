import React, { Suspense } from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"
import SuspenseContent from "./containers/SuspenseContent"
import {
  QueryClient,
  QueryClientProvider,
  useQueryClient,
} from "@tanstack/react-query"

const root = ReactDOM.createRoot(document.getElementById("root"))
const queryClient = new QueryClient()
root.render(
  // <React.StrictMode>
  <Suspense fallback={<SuspenseContent />}>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </Suspense>
  // </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
