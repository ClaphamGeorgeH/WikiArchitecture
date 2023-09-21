import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import './NavbarStyle.css'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


export const Navbar = () => {

  const [mousePos, setMousePos] = useState({});

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePos({x:event.clientX});
    };
   
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener(
        'mousemove',
        handleMouseMove
      )
    }
  }, [])
  
  return (
    <>

        {<div
        className='lg-navbar-content sticky-top'
        >{
          mousePos.x< 55 ?
          <div className='d-flex flex-column float-start col-navbar'> 
              <Link to={`composition/1`}>C1</Link>
              <Link to={`composition/2`}>C2</Link>
              <a href="">W</a>
              <a href="">W</a>
              <a href="">W</a>
              <a href="">W</a>
          </div>:
          <div></div>
        }

        </div>}
        
        <div className='sm-navbar-content'>
          <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                <a className="navbar-brand" href="#">Hidden brand</a>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                  </li>
                </ul>
                <form className="d-flex" role="search">
                  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                  <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
              </div>
            </div>
          </nav>
        </div>
    </>
  )
}
