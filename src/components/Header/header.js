import { Link, NavLink } from "react-router-dom";

/*--------------------
* Header Menu
----------------------*/
function Menu(props){
    return (
        <li>
            <NavLink className="nav-link" to={props.link} activeClassName="active" exact>
                <span>{props.name}</span>
            </NavLink>
        </li>
    );
}

/*--------------------
* Header
----------------------*/
function Header(props) {
    const header_menus = [
        { id:0, name:'Home', link:'/' },
        { id:1, name:'Services', link:'/services' },
        { id:2, name:'Skills', link:'/skills' },
        { id:3, name:'Portfolio', link:'/works' },
        { id:4, name:'Contact', link:'/contactus' }
    ]
    return (
        <>
            <header className="main-header">
                <nav className="navbar header-nav navbar-expand-lg one-page-nav">
                    <div className="container">
                        <Link className="navbar-brand" to="/">
                            <img src="img/logo.svg" title="Logo" alt="Logo"/>
                        </Link>
                        <div className="collapse navbar-collapse justify-content-end" id="navbar-collapse-toggle">
                            <ul className="navbar-nav mx-auto">
                                {
                                    header_menus.map((val, i) => {
                                        return <Menu key={i} id={val.id} name={val.name} link={val.link}/>
                                    })
                                }
                            </ul>
                        </div>
                        <div className="ms-auto d-none d-lg-block">
                            <Link className="px-btn px-btn-theme" to="/blog">Blog</Link>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header;
