import React, { useState } from 'react';
import './Header.css';
import HotelIcon from '@mui/icons-material/Hotel';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import CarRentalIcon from '@mui/icons-material/CarRental';
import BedIcon from '@mui/icons-material/Bed';
import LocalTaxiIcon from '@mui/icons-material/LocalTaxi';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { DateRange } from 'react-date-range'; // Import the DateRange component
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { useNavigate } from 'react-router-dom';

function Header({ type = "default" }) {  // default value for type
  const [destination ,setDestination] = useState("");
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ]);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });
  const navigate=useNavigate();

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === 'i' ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  const handleSearch = ()=>{
    navigate('/hotels' , {state:{destination , date , options}});

  }

  return (
    <div className="header">
      <div className={type === "list" ? "headerContainer listMode" : "headerContainer"}>
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
        <h1 className="headerTitle">This is the best website for booking...</h1>
        <p className="headerDesc">Get rewards for your travels and benefit from exclusive offers.</p>
        <button className="headerBtn">Sign In / Register</button>
        <div className="headerSearch">
          <div className="headerSearchItem">
            <BedIcon className="headerIcon" />
            <input
              type="text"
              placeholder="Where are you going?"
              className="headerSearchInput"
              onChange={e=>setDestination(e.target.value)}
            />
          </div>
          <div className="headerSearchItem">
            <CalendarMonthIcon className="headerIcon" />
            <span className="headerSearchText" onClick={() => setOpenDate(!openDate)}>
              {`${date[0].startDate.toDateString()} to ${date[0].endDate.toDateString()}`}
            </span>
            {openDate && (
              <div className="datePicker">
                <DateRange
                  editableDateInputs={true}
                  onChange={(item) => setDate([item.selection])}
                  moveRangeOnFirstSelection={false}
                  minDate={new Date()}
                  ranges={date}
                />
              </div>
            )}
          </div>
          <div className="headerSearchItem">
            <EmojiPeopleIcon className="headerIcon" />
            <span className="headerSearchText" onClick={() => setOpenOptions(!openOptions)}>
              {`${options.adult} adult · ${options.children} children · ${options.room} room`}
            </span>
            {openOptions && (
              <div className="options">
                <div className="optionItem">
                  <span className="optionText">Adult</span>
                  <button
                    className="optionButton"
                    onClick={() => handleOption('adult', 'd')}
                    disabled={options.adult <= 1}
                  >
                    -
                  </button>
                  <span className="optionNumber">{options.adult}</span>
                  <button className="optionButton" onClick={() => handleOption('adult', 'i')}>
                    +
                  </button>
                </div>
                <div className="optionItem">
                  <span className="optionText">Children</span>
                  <button
                    className="optionButton"
                    onClick={() => handleOption('children', 'd')}
                    disabled={options.children <= 0}
                  >
                    -
                  </button>
                  <span className="optionNumber">{options.children}</span>
                  <button className="optionButton" onClick={() => handleOption('children', 'i')}>
                    +
                  </button>
                </div>
                <div className="optionItem">
                  <span className="optionText">Room</span>
                  <button
                    className="optionButton"
                    onClick={() => handleOption('room', 'd')}
                    disabled={options.room <= 1}
                  >
                    -
                  </button>
                  <span className="optionNumber">{options.room}</span>
                  <button className="optionButton" onClick={() => handleOption('room', 'i')}>
                    +
                  </button>
                </div>
              </div>
            )}
          </div>
          <div className="headerSearchItem">
            <button className="headerBtn" onClick={handleSearch}>Search</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
