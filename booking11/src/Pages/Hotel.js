import React from 'react';
import './Hotel.css';
import Navbar from '../components/Navbar';
import MailList from '../components/MailList';
import Footer from '../components/Footer';
import HeaderList from '../components/HeaderList';
import LocationOnIcon from '@mui/icons-material/LocationOn';

function Hotel() {


  return (
    <div className='hotel'>
      <Navbar />
      <HeaderList />
      <div className='hotelContainer'>
        <div className='hotelHeader'>
          <h1 className='hotelTitle'>Grand Welcome</h1>
          <LocationOnIcon />
          <span className='hotelLocation'>India, 125 Bombay</span>
          <button className='hotelBtn'>Reserve or Book Now!</button>
        </div>
        <div className='hotelCompo'>
          <h2 className='heading'>Book This Property for $125</h2>
          <img
            src="https://media.istockphoto.com/id/185083188/photo/luxury-shangri-la-hotel-room.jpg?s=612x612&w=0&k=20&c=5O6xdH0CYU008xoBbySJ81pKaNlvaRki5CFcM2orcBQ="
            alt="Hotel Room"
            className='hotelImg'
          />
          <img
            src="https://media.istockphoto.com/id/1300757575/photo/side-view-of-hotel-amenities-on-the-bed.jpg?s=612x612&w=0&k=20&c=NQK76wtCnGhNcvveUfs8FE4JGl9-A1zuqCsSS8vUmgI="
            alt="Hotel Amenities"
            className='hotelImg'
          />
          <img
            src="https://media.istockphoto.com/id/1482326431/photo/interior-bedroom-wall-mockup-3d-rendering-3d-illustration.jpg?s=612x612&w=0&k=20&c=-Smt8qpPo5OxmCKuPC36VSj80rJPeM1_dWZ6a-CHCog="
            alt="Hotel Interior"
            className='hotelImg'
          />
          <img
            src="https://media.istockphoto.com/id/185086520/photo/luxury-hotel-room.jpg?s=612x612&w=0&k=20&c=aky5Tl_ShRmxJ1FMuuaVh8FvisggxyFiqdW4o7o8sPc="
            alt="Luxury Hotel Room"
            className='hotelImg'
          />
          <img
            src="https://media.istockphoto.com/id/1030503458/photo/hotel-room-serviced-breakfast-in-cozy-hotel.jpg?s=612x612&w=0&k=20&c=p8HGZLGbDO0TwntbBBYGUDD4bFA9SzzqdsM4DHvY5_0="
            alt="Hotel Breakfast"
            className='hotelImg'
          />
          <img
            src="https://media.istockphoto.com/id/1373115332/photo/minimal-double-bed-with-wooden-floor-in-luxury-hotel-bedroom-in-manali-himachal-pradesh-india.jpg?s=612x612&w=0&k=20&c=uy0k96EVuJrsyhRzc06_WdiDUo2pHI_AmtB8BBpdXBM="
            alt="Minimal Hotel Bedroom"
            className='hotelImg'
          />
          <img
            src="https://media.istockphoto.com/id/185083188/photo/luxury-shangri-la-hotel-room.jpg?s=612x612&w=0&k=20&c=5O6xdH0CYU008xoBbySJ81pKaNlvaRki5CFcM2orcBQ="
            alt="Luxury Hotel Room"
            className='hotelImg'
          />
          <img
            src="https://media.istockphoto.com/id/1300757575/photo/side-view-of-hotel-amenities-on-the-bed.jpg?s=612x612&w=0&k=20&c=NQK76wtCnGhNcvveUfs8FE4JGl9-A1zuqCsSS8vUmgI="
            alt="Hotel Amenities"
            className='hotelImg'
          />
          <img
            src="https://media.istockphoto.com/id/1030503458/photo/hotel-room-serviced-breakfast-in-cozy-hotel.jpg?s=612x612&w=0&k=20&c=p8HGZLGbDO0TwntbBBYGUDD4bFA9SzzqdsM4DHvY5_0="
            alt="Hotel Breakfast"
            className='hotelImg'
          />
          <img
            src="https://media.istockphoto.com/id/1300757575/photo/side-view-of-hotel-amenities-on-the-bed.jpg?s=612x612&w=0&k=20&c=NQK76wtCnGhNcvveUfs8FE4JGl9-A1zuqCsSS8vUmgI="
            alt="Hotel Amenities"
            className='hotelImg'
          />
        </div>
        <div className='hotelRent'>
          <h2 className='hotelRenting'>Stay in the Heart of Delhi</h2>
          <span className='hSpan'>
            Hotel, a building that provides lodging, meals, and other services to the traveling public on a commercial basis. A motel performs the same functions as a hotel but in a format designed for travelers using automobiles.
          </span>
        </div>
        <div className='hotelDetailPrice'>
          <h1>Perfect for the Stay</h1>
          <span>
            Location – Describe the location by identifying if the hotel is centrally located or if it’s near any attractions or landmarks. You can include interesting facts and figures about this but don’t bombard readers with too much information.
          </span>
          <h2>
            <b>$550</b> (1 week)
          </h2>
          <button className='btn'>Reserve or Book Now!</button>
        </div>
      </div>
      <MailList />
      <Footer />
    </div>
  );
}

export default Hotel;
