import { useQuery, useQueryClient } from "@tanstack/react-query"
import CardDivision from "../../components/Card/CardDivision"
import { getDivision } from "../../services/division"
import { useEffect } from "react"
import { useState } from "react"
import BtnAddDivision from "../../components/Button/BtnAddDivision"
import DialogAddDivision from "../../components/Dialog/DialogAddDivision"
import DialogDetail from "../../components/Dialog/DialogDetail"
import BtnLogout from "../../components/Button/BtnLogout"
import Pagination from "../../components/Pagination/Pagination"
import SearchBar from "../../components/Input/SearchBar"

const Home = () => {
  const queryClient = useQueryClient()
  const division = queryClient.getQueryData(["division"])
  const [currentPage, setCurrentPage] = useState(1)
  const [pageData, setPageData] = useState([])
  const [selectedData, setSelectedData] = useState(null)
  const [searchKeyword, setSearchKeyword] = useState("")
  const [searchData, setSearchData] = useState([])
  const [flagSearch, setFlagSearch] = useState(false)

  const handleReset = () => {
    setSearchKeyword("")
    setSearchData([])
    setFlagSearch(false)
    setCurrentPage(1)
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

  useEffect(() => {
    if (division) {
      if (flagSearch) {
        setPageData(searchData.slice((currentPage - 1) * 10, currentPage * 10))
      } else {
        setPageData(division.slice((currentPage - 1) * 10, currentPage * 10))
      }
    }
  }, [currentPage, division, flagSearch, searchData])

  useEffect(() => {
    if (searchKeyword) {
      const tempDivision = division.filter((_) => {
        return _.name.toLowerCase().includes(searchKeyword)
      })
      !flagSearch && setFlagSearch(true)
      setPageData(tempDivision.slice(0, 10))
      setCurrentPage(1)
      setSearchData(tempDivision)
    } else if (!searchKeyword) {
      setFlagSearch(false)
      if (division) {
        setPageData(division.slice(0, 10))
      }
    }
  }, [division, flagSearch, searchKeyword])

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
        <SearchBar
          searchKeyword={searchKeyword}
          setSearchKeyword={setSearchKeyword}
        />
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
      {pageData.length > 10 ? (
        <></>
      ) : (
        <div className="w-full flex justify-center mt-8">
          <Pagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            dataLength={flagSearch ? searchData.length : division?.length}
          />
        </div>
      )}
      <DialogAddDivision reset={handleReset} />
      <DialogDetail
        selectedData={selectedData}
        setSelectedData={setSelectedData}
      />
    </div>
  )
}

export default Home
