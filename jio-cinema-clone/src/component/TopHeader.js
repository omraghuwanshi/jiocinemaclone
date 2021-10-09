import '../App.css';


function TopHeader () {
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-transparent fixed-top">
            <div className="container-fluid">
            <i class="fa fa-bars hamburger-icon"></i>
             <h1 className="navbar-brand website-name"><a href="#">JioCinema</a></h1>
               
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link menu-link" href="#">MOVIES</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link menu-link" href="#">TV</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link menu-link" href="#">MUSIC</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link menu-link" href="#">CLIPS</a>
                        </li>
                    </ul>
                    {/* <form className="d-flex" style="display: none;">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search </button>
                    </form> */}
                    <span className="menu-link">SEARCH <i class="fa fa-search menu-search-icon"></i></span>
                    <i class="fa fa-user-o menu-user-icon"></i>
                </div>
            </div>
        </nav>
        </>
        );
    };
    
    export default TopHeader;
    
    
    