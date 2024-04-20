const BtnRemoveSubDivision = ({ name, subData, setSubData }) => {
  const handleOnClick = () => {
    const filteredSubData = subData.filter((_) => _.name !== name)
    setSubData(filteredSubData)
  }
  return (
    <button className="btn btn-circle btn-xs mr-1" onClick={handleOnClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-2 w-2"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>
  )
}

export default BtnRemoveSubDivision
