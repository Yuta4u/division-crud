const BtnAddDivision = () => {
  return (
    <button
      className="btn btn-circle bg-base-200 border-none btn-sm hover:bg-base-500 tooltip tooltip-bottom flex justify-center align-middle"
      data-tip="detail"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-4 h-4"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 4.5v15m7.5-7.5h-15"
        />
      </svg>
    </button>
  )
}
export default BtnAddDivision
