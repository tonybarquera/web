import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import NavLink from './NavLink';

function Header() {
  const [ activeMenu, setActiveMenu ] = useState(false);

  const handleMenu = () => {
    setActiveMenu(!activeMenu);
  }

  return (
    <header className="bg-primary py-8 px-10">
      <div className="max-w-5xl mx-auto flex flex-col gap-5 md:flex-row md:justify-between items-center">
        <h1 className="text-center text-3xl font-bold font-roboto text-primary">Tony Barquera</h1>
      
        { <FaBars className='md:hidden' color='white' size='28px' onClick={handleMenu} /> }
        
        <nav className={`flex flex-col md:flex-row gap-5 md:gap-10  ${ !activeMenu ? 'hidden' : ''} md:flex items-center transition-all`}>
          <NavLink text="About Me" setActiveMenu={setActiveMenu} />
          <NavLink text="Projects" setActiveMenu={setActiveMenu} />
          <NavLink text="Contact" setActiveMenu={setActiveMenu} />
        </nav>
      </div>
    </header>
  )
}

export default Header;