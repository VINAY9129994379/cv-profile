import React from 'react'
import './HeaderList.css'

import HotelIcon from '@mui/icons-material/Hotel';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import CarRentalIcon from '@mui/icons-material/CarRental';
import BedIcon from '@mui/icons-material/Bed';
import LocalTaxiIcon from '@mui/icons-material/LocalTaxi';
function HeaderList() {
  return (
    <div className='headerList'>
        <div className="headerList">
          <div className="headerListItem">
            <HotelIcon />
            <span>Stays</span>
          </div>
          <div className="headerListItem">
            <AirplanemodeActiveIcon />
            <span>Flights</span>
          </div>
          <div className="headerListItem">
            <CarRentalIcon />
            <span>Car Rentals</span>
          </div>
          <div className="headerListItem">
            <BedIcon />
            <span>Attractions</span>
          </div>
          <div className="headerListItem">
            <LocalTaxiIcon />
            <span>Airport Taxi</span>
          </div>
        </div>
    </div>
  )
}

export default HeaderList