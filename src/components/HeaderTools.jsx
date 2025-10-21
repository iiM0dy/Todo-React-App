export function HeaderTools({setSearchTerm,setFilter,darkMode,filter,turnDark,nightIcon}){
      

    return(
              <div className="options">
                <input
                  type="text"
                  placeholder="Search note..."
                  className={darkMode ? "search-field-dark" : "search-field"}
                  onChange={(e)=>{
                    setSearchTerm(e.target.value)
                    
                  }}
                />
                <select value={filter}
                onChange={(e)=>{
                  setFilter(e.target.value);
                }}
                >
                  <option value="All">All</option>
                  <option value="Complete">Complete</option>
                  <option value="Incomplete">Incomplete</option>
                </select>
                <button className="night-mode-button" onClick={turnDark}>
                  <img src={nightIcon} alt="" />
                </button>
              </div>
    )
}