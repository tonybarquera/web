import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import NavLink from './NavLink';

function Header() {
  const [ activeMenu, setActiveMenu ] = useState(false);

  const handleMenu = () => {
    setActiveMenu(!activeMenu);
  }

  return (
    <header className="bg-primary py-3 px-3">
      <div className="max-w-5xl mx-auto md:flex md:justify-between md:items-center">
        <div className='flex justify-between items-center w-100'>
          <h1 className="text-center text-lg font-bold font-roboto text-primary">Tony Barquera</h1>
        
          { <FaBars className='md:hidden' color='#E3C78F' size='28px' onClick={handleMenu} /> }
        </div>
        
        <nav className={`flex flex-col mt-3 md:mt-0 md:flex-row gap-5 md:gap-10  ${ !activeMenu ? 'hidden' : ''} md:flex items-center transition ease-in-out delay-500`}>
          <NavLink text="About Me" reference='about' setActiveMenu={setActiveMenu} />
          <NavLink text="Projects" reference='projects' setActiveMenu={setActiveMenu} />
          <NavLink text="Contact" reference='contact' setActiveMenu={setActiveMenu} />
        </nav>
      </div>
    </header>
  )
}

export default Header;