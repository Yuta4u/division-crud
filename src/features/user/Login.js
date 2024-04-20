import { useState } from "react"
import ErrorText from "../../components/Typography/ErrorText"
import InputText from "../../components/Input/InputText"
import { loginAction } from "../../services/user"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useNavigate } from "react-router-dom"
import { toastError } from "../../components/Toast"

function Login() {
  const queryClient = useQueryClient()
  const navigate = useNavigate()
  const INITIAL_LOGIN_OBJ = {
    password: "",
    username: "",
  }

  const [errorMessage, setErrorMessage] = useState("")
  const [loginObj, setLoginObj] = useState(INITIAL_LOGIN_OBJ)

  const mutationLogin = useMutation({
    mutationFn: loginAction,
    onSuccess: (e) => {
      // Invalidate and refetch
      localStorage.setItem("token", e.token)
      queryClient.setQueryData("user", e.user)
      navigate("/home")
    },
  })

  const submitForm = async (e) => {
    e.preventDefault()
    if (!loginObj.username || !loginObj.password) {
      toastError("username / password tidak boleh kosong")
      return
    }
    mutationLogin.mutate(loginObj)
  }

  const updateFormValue = ({ updateType, value }) => {
    setErrorMessage("")
    setLoginObj({ ...loginObj, [updateType]: value })
  }

  return (
    <div className="min-h-screen bg-base-200 flex items-center">
      <div className="card mx-auto w-full sm:w-5/12 md:w-4/12 xl:w-3/12 shadow-xl ">
        <div className="bg-base-100 rounded-xl ">
          <div className="py-10 px-10">
            <h2 className="text-2xl font-semibold mb-2 text-center">Login</h2>
            <form onSubmit={(e) => submitForm(e)}>
              <div className="mb-4">
                <InputText
                  type="username"
                  defaultValue={loginObj.username}
                  updateType="username"
                  containerStyle="mt-4"
                  labelTitle="Username"
                  updateFormValue={updateFormValue}
                />

                <InputText
                  defaultValue={loginObj.password}
                  type="password"
                  updateType="password"
                  containerStyle="mt-4"
                  labelTitle="Password"
                  updateFormValue={updateFormValue}
                />
              </div>

              <ErrorText styleClass="mt-8">{errorMessage}</ErrorText>
              <button type="submit" className={"btn mt-2 w-full btn-primary"}>
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
