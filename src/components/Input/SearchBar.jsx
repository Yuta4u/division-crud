const SearchBar = ({ searchKeyword, setSearchKeyword }) => {
  return (
    <div>
      <input
        value={searchKeyword}
        type="text"
        placeholder="Search keyword.."
        className="grow input input-bordered input-sm w-full max-w-xs"
        onChange={(e) => setSearchKeyword(e.target.value)}
      />
    </div>
  )
}

export default SearchBar
