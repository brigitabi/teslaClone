import React, {useState} from 'react'; 
import { AiOutlineClose, AiOutlineQuestionCircle }  from 'react-icons/ai';
import { BiWorld } from 'react-icons/bi';
import {  GoPerson } from 'react-icons/go';

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => { 
        setNav(!nav)
    }

  return (
    <div className='flex justify-between items-center px-12 p-4 text-sm font-bold'>
        <div>
                <img
              className="h-3"
              src="data:image/svg+xml;base64,PHN2ZyBjbGFzcz0idGRzLWljb24gdGRzLWljb24tbG9nby13b3JkbWFyayB0ZHMtc2l0ZS1sb2dvLWljb24iIHZpZXdCb3g9IjAgMCAzNDIgMzUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgLjFhOS43IDkuNyAwIDAgMCA3IDdoMTFsLjUuMXYyNy42aDYuOFY3LjNMMjYgN2gxMWE5LjggOS44IDAgMCAwIDctN0gwem0yMzguNiAwaC02Ljh2MzQuOEgyNjNhOS43IDkuNyAwIDAgMCA2LTYuOGgtMzAuM1Ywem0tNTIuMyA2LjhjMy42LTEgNi42LTMuOCA3LjQtNi45bC0zOC4xLjF2MjAuNmgzMS4xdjcuMmgtMjQuNGExMy42IDEzLjYgMCAwIDAtOC43IDdoMzkuOXYtMjFoLTMxLjJ2LTdoMjR6bTExNi4yIDI4aDYuN3YtMTRoMjQuNnYxNGg2Ljd2LTIxaC0zOHpNODUuMyA3aDI2YTkuNiA5LjYgMCAwIDAgNy4xLTdINzguM2E5LjYgOS42IDAgMCAwIDcgN3ptMCAxMy44aDI2YTkuNiA5LjYgMCAwIDAgNy4xLTdINzguM2E5LjYgOS42IDAgMCAwIDcgN3ptMCAxNC4xaDI2YTkuNiA5LjYgMCAwIDAgNy4xLTdINzguM2E5LjYgOS42IDAgMCAwIDcgN3pNMzA4LjUgN2gyNmE5LjYgOS42IDAgMCAwIDctN2gtNDBhOS42IDkuNiAwIDAgMCA3IDd6IiBmaWxsPSJjdXJyZW50Q29sb3IiLz48L3N2Zz4="
              alt="Tesla logo"
                />
        </div>
        <div className='hidden lg:inline'>
            <ul className='flex justify-center hover:cursor-pointer'>
                <li className='py-1 px-3 hover:rounded hover:bg-slate-400'>Vechiles</li>
                <li className='py-1 px-3 hover:rounded hover:bg-slate-400'>Energy</li>
                <li className='py-1 px-3 hover:rounded hover:bg-slate-400'>Charging</li>
                <li className='py-1 px-3 hover:rounded hover:bg-slate-400'>Discover</li>
                <li className='py-1 px-3 hover:rounded hover:bg-slate-400'>Shop</li>
                <li  onClick={handleNav} className="py-1 px-3 hover:rounded hover:bg-black/5"> Menu   </li>
            </ul>
        </div>
        <div className='hidden lg:inline'>
            <ul className='flex justify-center hover:cursor-pointer '>
                <li className='py-1 px-3 hover:rounded hover:bg-slate-400'><AiOutlineQuestionCircle className='text-[#184518]' size={25}/></li>
                <li className='py-1 px-3 hover:rounded hover:bg-slate-400'><BiWorld className='text-[blue]' size={25}/> </li>
                <li className='py-1 px-3 hover:rounded hover:bg-slate-400'> <GoPerson className='' size={25} /> </li>
            </ul>
        </div>
        <div className='lg:hidden'>
            <button onClick={handleNav} className='inline-flex items-center rounded-md py-2 px-4 text-sm font-medium shadow-sm hover:bg-black/9'>Menu</button>
        </div>
        <div className={nav ? 'bg-white absolute top-0 right-0 w-80 h-full z-10' : "fixed right-[100%]"}>
            <div className='flex justify-end pr-8 pt-8'>
                <AiOutlineClose onClick={handleNav} className='rounded p-1 hover:bg-slate-400' size={25}/>
            </div>
            <ul className='pt-8 px-6'>
                <li className='py-3 pl-3 hover:rounded hover:bg-slate-400'>Existing Inventory</li>
                <li className='py-3 pl-3 hover:rounded hover:bg-slate-400'>Used Inventory</li>
                <li className='py-3 pl-3 hover:rounded hover:bg-slate-400'>Trade In</li>
                <li className='py-3 pl-3 hover:rounded hover:bg-slate-400'>Demo Drive</li>
                <li className='py-3 pl-3 hover:rounded hover:bg-slate-400'>Insurance</li>
                <li className='py-3 pl-3 hover:rounded hover:bg-slate-400'>Fleet</li>
                <li className='py-3 pl-3 hover:rounded hover:bg-slate-400'>Cybertruck</li>
                <li className='py-3 pl-3 hover:rounded hover:bg-slate-400'>Roadster</li>
                <li className='py-3 pl-3 hover:rounded hover:bg-slate-400'>Semi</li>
                <li className='py-3 pl-3 hover:rounded hover:bg-slate-400'>Charging</li>
                <li className='py-3 pl-3 hover:rounded hover:bg-slate-400'>Commercial Energy</li>
                <li className='py-3 pl-3 hover:rounded hover:bg-slate-400'>Utilities</li>
                <li className='py-3 pl-3 hover:rounded hover:bg-slate-400'>Career</li>
                <li className='py-3 pl-3 hover:rounded hover:bg-slate-400'>Events</li>
                <li className='py-3 pl-3 hover:rounded hover:bg-slate-400'>Support</li>
                <li className='py-3 pl-3 hover:rounded hover:bg-slate-400'>Investor Relations</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar