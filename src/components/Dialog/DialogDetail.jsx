import { useEffect, useState } from "react"
import { getDetailDivision } from "../../services/division"
import SkeletonDetail from "../Skeleton/SkeletonDetail"

function DialogDetail({ selectedData, setSelectedData }) {
  const [detailDivision, setDetailDivision] = useState(null)

  const handleClose = () => {
    setDetailDivision(null)
    setSelectedData(null)
  }

  useEffect(() => {
    if (selectedData) {
      const getDetail = async () => {
        const res = await getDetailDivision(selectedData.id)
        setDetailDivision(res)
      }
      getDetail()
    }
  }, [selectedData])

  return (
    <dialog id="dialog_detail" className="modal">
      <div className="modal-box w-9/12 sm:w-4/12 lg:w-3/12 xl:w-3/12">
        <h3 className="font-bold text-lg">Detail</h3>
        <div className="divider my-0" />

        <div className="flex">
          <h3 className="font-bold text-lg mb-4">Divisi</h3>
          <h3 className="font-bold text-lg">
            :{detailDivision && detailDivision.name}
          </h3>
        </div>

        <div>
          <h3 className="font-bold text-xs mb-4">Sub</h3>
          <h3 className="font-bold text-xs">
            {detailDivision &&
              detailDivision?.sub?.map((e) => (
                <div className="flex mb-4">
                  <div className="w-1/2 flex justify-between mr-1">
                    <div>{e?.name}</div>
                    <div>:</div>
                  </div>
                  <div>
                    {e?.sub?.map((sub) => (
                      <div>-{sub?.name}</div>
                    ))}
                  </div>
                </div>
              ))}
          </h3>
        </div>
        <div className="modal-action">
          <form method="dialog">
            <button className="btn" onClick={handleClose}>
              Close
            </button>
          </form>
        </div>
      </div>
    </dialog>
  )
}

export default DialogDetail
