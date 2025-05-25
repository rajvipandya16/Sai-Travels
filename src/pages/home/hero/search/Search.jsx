import React from 'react'
import { easeOut, motion } from 'framer-motion';
import { TbArrowsExchange } from 'react-icons/tb';
import { FaMapMarkerAlt, FaSearch } from 'react-icons/fa';

const Search = () => {
  return (
    <motion.div
    initial={{ opacity: 0, y: -800 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -800 }}
    transition={{ duration: 2.15, ease: easeOut }}
    className="w-full bg-neutral-50/20 border-2 border-neutral-300 shadow-lg rounded-xl p-5"
    >


      <div className="w-full flex items-center gap-5 justify-between">


        {/* From and to input section */}

           <div className="w-[60%] flex items-center gap-5 relative">
                 {/* From */}
              <div className="w-1/2 h-14 border border-neutral-300 bg-white/70 text-base text-neutral-700 font-medium 
                   px-5 flex items-center gap-x-1 rounded-lg relative">
                <input type="text" placeholder="From" className="flex-1 h-full border-none bg-transparent 
                  focus:outline-none" />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-neutral-400">
                      <FaMapMarkerAlt className="w-5 h-5" />
                </div>
              </div>



                 {/* To */}
              <div className="w-1/2 h-14 border border-neutral-300 bg-white/70 text-base text-neutral-700 font-medium 
                   px-5 flex items center gap-x-1 rounded-lg">
                 <input type="text" placeholder="To" className="flex-1 h-full border-none bg-transparent 
                  focus:outline-none" />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-neutral-400">
                      <FaMapMarkerAlt className="w-5 h-5" />
                </div>
              </div>

                 {/* Exchange Button */}
                 <button className="absolute w-11 h-6 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full
                 flex items-center justify-center bg-primary hover hover:bg-white">
                      <TbArrowsExchange className='w-6 h-6 text-neutral-50 hover:text-red-500' />
                 </button>
           </div>

        {/* date and button section */}

            <div className="flex-1 h-14 flex items-center gap-5" />

        {/* Date */}

              <div className="w-1/2 h-14 border border-neutral-300 bg-white/70 text-base text-neutral-700 font-medium 
                   px-5 flex items center gap-x-1 rounded-lg">
                 <input type="Date" className="flex-1 h-full border-none bg-transparent 
                  focus:outline-none" />
                
              </div>


        {/* Search Button */}

        <button className="w-fit px-5 h-12 bg-primary hover:bg-transparent border-2 border-primary 
        hover:border-primary rounded-xl text-base font-medium text-neutral-50 flex items-center justify-center gap-x-2 
        hover:text-primary ease-in-out duration-300">
          <FaSearch />
          Search
        </button>
            


      </div>
      
    </motion.div>
  )
}

export default Search
