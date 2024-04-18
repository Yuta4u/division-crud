import axios from "axios"
import { toastError } from "../components/Toast"

const token = localStorage.getItem("token")

export const getDivision = async () => {
  try {
    const act = await axios({
      method: "get",
      url: "api/v1/division",
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
