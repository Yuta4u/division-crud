import { useState } from "react"
import SelectDivision from "../Select/SelectDivision"
import { divisionData } from "../../dummy/divisionData"

const DialogAddDivision = () => {
  const [data, setData] = useState({})
  const [currentSub, setCurrentSub] = useState(1)
  const [flagSub1, setFlagSub1] = useState(true)

  const handleSubmit = () => {
    setFlagSub1(true)

    // division
    const selectElement = document.getElementById("division")
    const selectedOption = selectElement.options[selectElement.selectedIndex]
    const selectedDivision = selectedOption.value

    const selectElement1 = document.getElementById("sub-1")
    const selectedOption1 = selectElement1.options[selectElement1.selectedIndex]
    const selectedSub = selectedOption1.value

    var selectedValues = []
    var checkboxes = document.querySelectorAll("input[type='checkbox']")
    checkboxes.forEach(function (checkbox) {
      if (checkbox.checked) {
        selectedValues.push(checkbox.value)
      }
      checkbox.checked = false
    })
    console.log(selectedDivision, selectedSub, selectedValues)
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
          </div>
        )}

        <div className="modal-action">
          <form method="dialog">
            <button className="btn" onClick={() => setFlagSub1(true)}>
              Close
            </button>
          </form>
          <button className="btn" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
    </dialog>
  )
}

export default DialogAddDivision
