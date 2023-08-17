import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import './NavbarStyle.css'
import { useState } from 'react';


export const Navbar = () => {

  const [isNavbarDisplayed, setNavbar] = useState(false)

  const onMouseEnter = ({target}) => {
    setNavbar(true);
  }

  const onMouseLeave = ({target}) => {
    setNavbar(false)
  }
  
  return (
    <>
        <div 
        className='lg-navbar-content'
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        >{
          isNavbarDisplayed ?
          <div className='d-flex flex-column float-start col-navbar'> 
              <a href="">W</a>
              <a href="">W</a>
              <a href="">W</a>
              <a href="">W</a>
              <a href="">W</a>
          </div>
          :
          <div></div>
          }

          <div 
            className='d-flex flex-column float-start sidebarEventTrigger'> 
              <a href="">W</a>
              <a href="">W</a>
              <a href="">W</a>
              <a href="">W</a>
              <a href="">W</a>
            </div>
        </div>

        <div
        className=''
        >

        </div>


    </>
  )
}
