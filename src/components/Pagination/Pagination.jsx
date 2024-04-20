const Pagination = ({ currentPage, setCurrentPage, dataLength }) => {
  const handlePrevBtn = () => {
    if (currentPage > 1) {
      setCurrentPage((currentPage -= 1))
    }
  }

  const handleNextBtn = () => {
    const pages = Math.ceil(dataLength / 10)
    if (currentPage < pages) {
      setCurrentPage((currentPage += 1))
    }
  }

  return (
    <div className="join ">
      <button className="join-item btn" onClick={handlePrevBtn}>
        «
      </button>
      <button className="join-item btn">{currentPage}</button>
      <button className="join-item btn" onClick={handleNextBtn}>
        »
      </button>
    </div>
  )
}

export default Pagination
