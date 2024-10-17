import "./FeatureHome.css";

const FeatureHome = () => {
  return (
    <div className="fp">
      <div className="fpItem">
        <img
          src="https://media.istockphoto.com/id/1028621094/photo/service-bell-on-hotel-reception-desk.jpg?s=612x612&w=0&k=20&c=_bteb30WDXFou4aU8fa-DmKaFk90oZzmHR3kDokHS8M="
          alt=""
          className="fpImg"
        />
        <span className="fpName">Aparthotel Stare Miasto</span>
        <span className="fpCity">Madrid</span>
        <span className="fpPrice">Starting from $120</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://media.istockphoto.com/id/674909778/photo/happy-backpacker-traveller-stay-in-high-quality-hotel.jpg?s=612x612&w=0&k=20&c=Kg2nCRRLhKzH6gIVfhr3ZsSwxURttU3uXZEAEiV_AkA="
          alt=""
          className="fpImg"
        />
        <span className="fpName">Comfort Suites Airport</span>
        <span className="fpCity">Austin</span>
        <span className="fpPrice">Starting from $140</span>
        <div className="fpRating">
          <button>9.3</button>
          <span>Exceptional</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://media.istockphoto.com/id/1672145077/vector/world-tourism-day-concept-vector-illustration.jpg?s=612x612&w=0&k=20&c=bhE3O87NRbZubhl79yJ5qpIUvbxkxTAOS7pHSwv9lmA="
          alt=""
          className="fpImg"
        />
        <span className="fpName">Four Seasons Hotel</span>
        <span className="fpCity">Lisbon</span>
        <span className="fpPrice">Starting from $99</span>
        <div className="fpRating">
          <button>8.8</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://media.istockphoto.com/id/660955254/vector/business-trip-concept-businessman-touching-icons-travel-plan.jpg?s=612x612&w=0&k=20&c=kLTLJjaY36xzBXda_vxCZoVAQJivXt1bgoxrj2Ul_1M="
          alt=""
          className="fpImg"
        />
        <span className="fpName">Hilton Garden Inn</span>
        <span className="fpCity">Berlin</span>
        <span className="fpPrice">Starting from $105</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
    </div>
  );
};

export default FeatureHome;