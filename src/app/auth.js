import { useQueryClient } from "@tanstack/react-query"
import { Navigate } from "react-router-dom/dist"

function ProtectedRoute({ children }) {
  const queryClient = useQueryClient()
  const user = queryClient.getQueryData("user")
  if (!user) {
    return <Navigate to="/login" replace />
  }
  return children
}

export default ProtectedRoute
