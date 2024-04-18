import axios from "axios"
import { toastLoading, toastError, toastSuccess } from "../components/Toast"

export const verifyToken = async (token) => {
  try {
    const act = await axios({
      method: "get",
      url: "api/v1/auth",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }).then((response) => response?.data?.data)
    return act
  } catch (err) {
    toastError("invalid token")
  }
}

export const loginAction = async (data) => {
  toastLoading()
  try {
    const act = await axios({
      method: "post",
      url: "api/v1/login",
      data: {
        username: data.username,
        password: data.password,
      },
    }).then((response) => response?.data?.data)
    toastSuccess("Berhasil login")
    return act
  } catch (err) {
    toastError(err.response.data.message)
  }
}
