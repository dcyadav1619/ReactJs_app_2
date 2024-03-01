const navbar = ({searchText})=>{
  const updateSearchText = (e) => {
    console.log(e.target.value,"hi")
    return e.target.value
  }
    return(
      
        <nav className="navbar navbar-expand-lg bg-body-tertiary " >
          <div className="container-fluid">
            <a className="navbar-brand" href="#">Movies App</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="about">About</a>
                </li>
                
                <li className="nav-item">
                  <a className="nav-link disabled" aria-disabled="true">Coming Soon</a>
                </li>
              </ul>
              <form className="d-flex" >
              <input className="form-control me-2" type="search" placeholder="Search"  aria-label="Search" value={searchText} onChange={updateSearchText}/>
                <button className="btn btn-outline-success" type="submit">Search</button>
              </form>
            </div>           
          </div>
        </nav>
    )
  }
export default navbar;