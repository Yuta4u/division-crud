import toast from "react-hot-toast"

// toast loading
export const toastLoading = () => toast("Loading...")

// toast error
export const toastError = (msg) => {
  toast.remove()
  toast.error(msg)
}

// toast success
export const toastSuccess = (msg) => {
  toast.remove()
  toast.success(msg)
}
