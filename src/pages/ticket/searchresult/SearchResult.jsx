import React from 'react'
import TicketCard from '../../../components/ticket/TicketCard'
import { FaBus } from 'react-icons/fa'
import { GrRefresh } from 'react-icons/gr'

const SearchResult = () => {

  
  return (
    <div className='w-full col-span-3 space-y-10 pt-11'>
      
           <div className="space-y-6 ">
          

          <TicketCard icon={FaBus} busName={"Sai Travels Deluxe"} routeFrom={"Ahmedabad"} routeTo={"Shirdi"} arrivalTime={"10:00 PM"} departureTime={"08:00 AM"} price={"5000"} availableSeats={"5"}/>
          <TicketCard icon={FaBus} busName={"Sai Travels Deluxe"} routeFrom={"Nadiad"} routeTo={"Shirdi"} arrivalTime={"90:00 PM"} departureTime={"08:00 AM"} price={"5000"} availableSeats={"5"}/>
          <TicketCard icon={FaBus} busName={"Sai Travels Deluxe"} routeFrom={"Vadodara"} routeTo={"Shirdi"} arrivalTime={"11:00 PM"} departureTime={"08:00 AM"} price={"5000"} availableSeats={"5"}/>
          <TicketCard icon={FaBus} busName={"Sai Travels Deluxe"} routeFrom={"Lunawada"} routeTo={"Shirdi"} arrivalTime={"11:00 PM"} departureTime={"08:00 AM"} price={"5000"} availableSeats={"5"}/>
          <TicketCard icon={FaBus} busName={"Sai Travels Deluxe"} routeFrom={"Surat"} routeTo={"Shirdi"} arrivalTime={"12:00 AM"} departureTime={"08:00 AM"} price={"5000"} availableSeats={"5"}/>
          <TicketCard icon={FaBus} busName={"Sai Travels Deluxe"} routeFrom={"Anand"} routeTo={"Shirdi"} arrivalTime={"10:00 PM"} departureTime={"08:00 AM"} price={"5000"} availableSeats={"5"}/>
          <TicketCard icon={FaBus} busName={"Sai Travels Deluxe"} routeFrom={"Modasa"} routeTo={"Shirdi"} arrivalTime={"12:00 AM"} departureTime={"08:00 AM"} price={"5000"} availableSeats={"5"}/>
          <TicketCard icon={FaBus} busName={"Sai Travels Deluxe"} routeFrom={"HimmatNagar"} routeTo={"Shirdi"} arrivalTime={"08:00 AM"} departureTime={"08:00 AM"} price={"5000"} availableSeats={"5"}/>

           
           
           </div>

           <div className="w-full flex items-center justify-center">

           <button className="w-fit px-4 py-3 bg-primary hover:bg-transparent border-2 border-primary 
                    hover:border-primary rounded-xl text-base font-medium text-neutral-50 flex items-center justify-center gap-x-2 
                    hover:text-primary ease-in-out duration-300">
                      <GrRefresh />
                      Load More
            </button>
           </div>

    </div>
  )
}

export default SearchResult
