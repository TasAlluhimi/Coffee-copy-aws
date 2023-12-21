import React from 'react'
import { Link, useNavigate } from 'react-router-dom';


function Nav() {

    const navigate = useNavigate()
    const [isLogged, setIsLogged] = React.useState(localStorage.getItem('isLogged'))
    function toggleMenu() {
        const navToggle = document.getElementsByClassName("toggle");
        for (let i = 0; i < navToggle.length; i++) {
          navToggle.item(i).classList.toggle("hidden");
        }
      };

      const log_out = ()=>{
        localStorage.clear()
        setIsLogged(false)
        navigate('/')
      }

  return (
    <>
        <nav class="flex flex-wrap items-center justify-between p-3 bg-white">
    <div className='text-xl font-bold'>Tasneem shop</div>
    <div class="flex md:hidden">
        <button 
        onClick={toggleMenu}
        >
          <img class="toggle block" src="https://img.icons8.com/fluent-systems-regular/2x/menu-squared-2.png" width="40" height="40" />
          <img class="toggle hidden" src="https://img.icons8.com/fluent-systems-regular/2x/close-window.png" width="40" height="40" />
        </button>
    </div>
    <div
        class="toggle hidden w-full md:w-auto md:flex text-left text-bold mt-5 md:mt-0 md:border-none">
        <Link to="/"
            class="block md:inline-block hover:text-[#D5B4B4] px-3 py-3 md:border-none text-left">Home
        </Link>
        <Link to="/Coffee"
            class="block md:inline-block hover:text-[#D5B4B4] px-3 py-3 md:border-none text-left">Coffee
        </Link>
        {isLogged? <Link to="/Profile"
            class="block md:inline-block hover:text-[#D5B4B4] px-3 py-3 md:border-none text-left">Profile
        </Link>
        : ''}
        {isLogged? <Link to="/Cart"
            class="block md:inline-block hover:text-[#D5B4B4] px-3 py-3 md:border-none text-left">Cart
        </Link>
        : ''}
    </div>
    {isLogged ? <button 
        onClick={log_out}
        class="toggle hidden md:flex md:w-auto px-4 py-2 w-full bg-[#867070] hover:bg-[#D5B4B4] text-white md:rounded text-left">Sign out
    </button>
    :
    <Link to="/SignUp"
        class="toggle hidden md:flex md:w-auto px-4 py-2 w-full bg-[#867070] hover:bg-[#D5B4B4] text-white md:rounded text-left">Create
        Account

    </Link>
    }
    
</nav>
    </>
  )
}

export default Nav