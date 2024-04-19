import { divisionData } from "../../dummy/divisionData"

const SelectDivision = ({ typeId }) => {
  return (
    <select
      id={typeId}
      className="select select-bordered select-sm w-full max-w-xs"
    >
      {divisionData.map((option, index) => (
        <option key={index}>{option}</option>
      ))}
    </select>
  )
}

export default SelectDivision
