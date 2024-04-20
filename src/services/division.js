import axios from "axios"
import { toastError, toastLoading, toastSuccess } from "../components/Toast"
import toast from "react-hot-toast"

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

export const getDetailDivision = async (data) => {
  try {
    const act = await axios({
      method: "get",
      url: `api/v1/division/${data}?with=sub.sub`,
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

export const postDivision = async (data) => {
  toastLoading()
  try {
    const act = await axios({
      method: "post",
      url: `api/v1/division`,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      data: data,
    })
    toastSuccess(act.data.message)
  } catch (err) {
    toastError("gagal membuat division")
  }
}
