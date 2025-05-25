import React, {useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'


const Navbar = () => {

    const [scrollPosition, setScrollPosition] = useState(0);
    const [isVisible, setIsVisible] = useState(true);
    const [open, setOpen] = useState(false);

    //Navbar Items

    const navItems =[
        {label:"Home", link: "/"},
        {label:"Services", link: "/services"},
        {label:"Tickets", link: "/bus-tickets"},
        {label:"About", link: "/about"},
    ]


    //Handle click open
     const handleOpen = () => {
        setOpen(!open)
     }

     //Handle click open
     const handleClose = () => {
        setOpen(false);
     }

     

     // to make navbar sticky and hide when scroll down and show when back scroll up and at the  top
     useEffect(() => {
      
      const handleScroll = () => {
      const currentScrollState = window.scrollY;

      //determin visisbility of navbar based on scroll position

      if (currentScrollState > scrollPosition && currentScrollState > 50){
        setIsVisible(false); //Hide navbar when scrolling down
      } else{
        setIsVisible(true); //show navbar when scrolling up and at the top
      }

      setScrollPosition(currentScrollState);
      };

      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll)
      };

     }, [scrollPosition]);
     

  return (
    <nav className={`w-full h-[8ch] fixed top-0 left-0 lg:px-24 md:px-16 sm:px-7 px-4 
      backdrop-blur-lg transition-transform duration-300 z-50 
    bg-white/80 shadow-lg ${isVisible ? "translate-y-0" : "-translate-y-full"} 
      ${scrollPosition > 50 ? "bg-neutral-300" : "bg-neutral-100/10"}`}>
        <div className="w-full h-full flex items-center justify-between">

          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-0"> {/* Reduce space */}
          <h1 className="text-3xl text-red-500 font-bold hover:text-neutral-500">Sai</h1>
             <span className="text-3xl text-neutral-500 font-bold hover:text-red-400">Travels</span>
          </Link>


          {/* Hamburger menu */}
             <div className="w-fit md:hidden flex items-center justify-center cursor-pointer flex-col gap-1
             text-neutral-700" onClick={handleOpen}>
                {
                    open
                    ?
                    <FaTimes className='w-5 h-5' />
                    :
                    <FaBars className='w-5 h-5' />
                }
             </div>


          {/* Nav links and buttons */}
               <div className={`${open ? "flex absolute top-20 left-0 w-full h-auto md:relative" : "hidden"}
                flex-1 md:flex flex-col md:flex-row md:gap-14 gap-8 md:items-center items-start md:p-0 
                sm:p-4 p-4 justify-end md:bg-transparent bg-neutral-50 border md:border-transparent border-neutral-200 md:shadow-none sm:shadow-md shadow-md
                rounded-xl `}>
                 {/* Nav Links */}
                 <ul className="list-none flex md:items-center items-start flex-wrap md:flex-row 
                 flex-col md:gap-8 gap-4 text-lg text-neutral-500 font-normal">
                  

                   {navItems.map((item, ind) => (
                     <li key={ind}>
                      <Link to={item.link} className='hover:text-red-500 ease-in-out
                    duration-300 hover:underline '>
                        {item.label}
                    </Link>
                   </li>
                   ))}
                    
                 </ul>

          {/* Buttons */}
                  <div className="flex items-center justify-center">
                    <button className="md:w-fit w-full md:px-3 px-6 md:py-1 py-2.5 bg-red-500
                    hover:bg-transparent
                    border border-red-500 hover:border-red-500 mg:rounded-full rounded-xl
                    text-base font-normal text-neutral-50 hover:text-red-500 ease-in-out duration-300">
                        Login
                    </button>
                  </div>
               </div>
        </div>
      
    </nav>
  )
}

export default Navbar
