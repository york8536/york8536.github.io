import "./Body.css";
import SlideBar from "./SlideBar";

function Body() {
  return (
    <div className="wrap index">
      <div className="banner_top_box">
        <a href="#">
          <img
            src="https://www.starbucks.com.tw/common/objects/images/homeBanner/20241126144744920.jpg"
            loading="lazy"
            width="1326"
            height="605"
          />
        </a>
      </div>
      <div className="banner_slide_box">
        <div className="slickTrack">
          <SlideBar />
        </div>
      </div>
      <div className="banner_rewards"></div>
    </div>
  );
}

export default Body;
