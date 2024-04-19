import { useQuery, useQueryClient } from "@tanstack/react-query"
import CardDivision from "../../components/Card/CardDivision"
import { getDivision } from "../../services/division"
import { useEffect } from "react"
import { useState } from "react"
import BtnAddDivision from "../../components/Button/BtnAddDivision"
import ShowAllDivision from "../../components/Button/ShowAllDivision"
import DialogAddDivision from "../../components/Dialog/DialogAddDivision"
import DialogDetail from "../../components/Dialog/DialogDetail"
import BtnLogout from "../../components/Button/BtnLogout"

const Home = () => {
  const queryClient = useQueryClient()
  const division = queryClient.getQueryData(["division"])
  const [currentPage, setCurrentPage] = useState(0)
  const [pageData, setPageData] = useState([])
  const [selectedData, setSelectedData] = useState(null)

  const handleShowAllDivisionBtn = () => {
    division && setPageData(division)
  }

  useQuery({
    queryKey: ["division"],
    queryFn: getDivision,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  })

  useEffect(() => {
    if (division) {
      setPageData(division.slice(0, 10))
    }
  }, [division])

  return (
    <div className="p-4 h-['100vh'] w-full justify-center">
      <div
        key={"division"}
        className="mx-auto mb-6 md:mb-8  text-xl md:text-5xl font-bold divider w-3/5 md:w-2/5"
      >
        DIVISION
      </div>
      <div className="w-full flex justify-center mb-3 gap-2 align-middle">
        <BtnAddDivision />
        <ShowAllDivision func={handleShowAllDivisionBtn} />
        <BtnLogout />
      </div>
      {pageData ? (
        <div className="flex flex-col md:flex-row flex-wrap gap-3 justify-center">
          {pageData.map((_) => (
            <div key={_.id}>
              <CardDivision data={_} setSelectedData={setSelectedData} />
            </div>
          ))}
        </div>
      ) : (
        <span className="loading loading-ring loading-lg"></span>
      )}
      <DialogAddDivision selectedData={selectedData} />
      <DialogDetail
        selectedData={selectedData}
        setSelectedData={setSelectedData}
      />
    </div>
  )
}

export default Home
