import BtnDeleteDivision from "../Button/BtnDeleteDivision"
import BtnDetailDivision from "../Button/BtnDetailDivision"
import BtnEditDivision from "../Button/BtnEditDivision"

const CardDivision = ({ data, setSelectedData }) => {
  return (
    <div
      key={data.id}
      className="card w-full md:w-60 bg-base-300 shadow-xl h-44"
    >
      <div className="card-body">
        <h2 className="card-title">{data.name}</h2>

        <div className="card-actions justify-end absolute bottom-3 right-3 gap-1">
          {/* btn detail  */}
          <BtnDetailDivision data={data} setSelectedData={setSelectedData} />
          {/* btn edit  */}
          <BtnEditDivision />
          {/* btn remove / delete  */}
          <BtnDeleteDivision />
        </div>
      </div>
    </div>
  )
}

export default CardDivision
