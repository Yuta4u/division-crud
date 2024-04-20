import { useState } from "react"
import SelectDivision from "../Select/SelectDivision"
import { divisionData } from "../../dummy/divisionData"
import DialogShowSub from "./DialogShowSub"
import { ToastErrorTR, toastError } from "../Toast"
import { postDivision } from "../../services/division"
import { useMutation, useQueryClient } from "@tanstack/react-query"

const DialogAddDivision = ({ reset }) => {
  const queryClient = useQueryClient()
  const [data, setData] = useState({})
  const [currentSub, setCurrentSub] = useState(1)
  const [flagSub1, setFlagSub1] = useState(true)
  const [subData, setSubData] = useState([])

  const handleClose = () => {
    setFlagSub1(true)
    setSubData([])
  }

  // post mutation function
  const postDivisionMutation = useMutation({
    mutationFn: postDivision,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["division"] })
    },
  })

  const handleSubmit = () => {
    setFlagSub1(true)

    // division
    const selectElement = document.getElementById("division")
    const selectedOption = selectElement.options[selectElement.selectedIndex]
    const selectedDivision = selectedOption.value
    let postData = {
      name: selectedDivision,
    }
    if (subData.length !== 0) {
      postData["division"] = subData
    }
    postDivisionMutation.mutate(postData)
    reset()
    setSubData([])
  }

  const handleAddSub = () => {
    const selectElement1 = document.getElementById("sub-1")
    const selectedOption1 = selectElement1.options[selectElement1.selectedIndex]
    const selectedSub = selectedOption1.value
    const tempSub = subData.map((_) => _?.name)

    if (tempSub.includes(selectedSub)) {
      ToastErrorTR("Sub sudah terdaftar")
      var checkboxes = document.querySelectorAll("input[type='checkbox']")
      checkboxes.forEach(function (checkbox) {
        checkbox.checked = false
      })
    } else {
      var selectedValues = []
      var checkboxes = document.querySelectorAll("input[type='checkbox']")
      checkboxes.forEach(function (checkbox) {
        if (checkbox.checked) {
          selectedValues.push(checkbox.value)
        }
        checkbox.checked = false
      })
      const subDivision = selectedValues.map((_) => {
        return {
          name: _,
        }
      })
      setSubData([
        ...subData,
        {
          name: selectedSub,
          division: subDivision,
        },
      ])
    }
  }

  return (
    <dialog id="dialog_add_division" className="modal">
      <div className="modal-box w-9/12 sm:w-4/12 lg:w-3/12 xl:w-3/12">
        <h3 className="font-bold text-lg">Add Division</h3>
        <div className="divider my-0"></div>
        <div className="mt-2">
          <div>Division:</div>
          <SelectDivision typeId={"division"} />
        </div>
        {subData.length !== 0 && (
          <button
            className="btn btn-sm mt-2"
            onClick={() => {
              document.getElementById("dialog_show_sub").showModal()
            }}
          >
            Show Selected Sub
          </button>
        )}
        {flagSub1 ? (
          <button
            className="btn btn-sm mt-2"
            onClick={() => setFlagSub1(!flagSub1)}
          >
            Add Sub
          </button>
        ) : (
          <div className="mt-2">
            <div>Sub:</div>
            <SelectDivision typeId={"sub-1"} />

            <div className="w-full h-48 mt-2 overflow-y-auto">
              {divisionData.map((_, i) => (
                <div key={i} className="flex items-center">
                  <input
                    id={`sub-division-${i}`}
                    value={_}
                    type="checkbox"
                    className="checkbox checkbox-xs"
                  />
                  <p className="pb-1 ml-1">{_}</p>
                </div>
              ))}
            </div>
            <button className="btn btn-sm mt-2" onClick={handleAddSub}>
              Add
            </button>
            <button
              className="btn btn-sm mt-2 ml-2"
              onClick={() => setFlagSub1(true)}
            >
              Close Sub
            </button>
          </div>
        )}

        <div className="modal-action">
          <form method="dialog">
            <button className="btn mr-2" onClick={handleClose}>
              Close
            </button>
            <button className="btn" onClick={handleSubmit}>
              Submit
            </button>
          </form>
        </div>
      </div>
      <DialogShowSub subData={subData} setSubData={setSubData} />
    </dialog>
  )
}

export default DialogAddDivision
