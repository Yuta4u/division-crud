import BtnRemoveSubDivision from "../Button/BtnRemoveSubDivision"

const DialogShowSub = ({ subData, setSubData }) => {
  return (
    <dialog id="dialog_show_sub" className="modal">
      <div className="modal-box w-9/12 sm:w-4/12 lg:w-5/12 xl:w-5/12">
        <h3 className="font-bold text-lg">Selected Sub</h3>
        <div className="h-60 w-full ">
          {subData.map((_, i) => (
            <div key={i} className="flex mb-4">
              <div className="w-1/2 flex justify-between mr-1 ">
                <div>
                  <BtnRemoveSubDivision
                    name={_.name}
                    subData={subData}
                    setSubData={setSubData}
                  />
                  {_?.name}
                </div>
                <div>:</div>
              </div>
              <div className="w-1/2 ">
                {_.division.map((sub, j) => (
                  <div key={j}>-{sub?.name}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="modal-action">
          <form method="dialog">
            <button className="btn">Close</button>
          </form>
        </div>
      </div>
    </dialog>
  )
}

export default DialogShowSub
