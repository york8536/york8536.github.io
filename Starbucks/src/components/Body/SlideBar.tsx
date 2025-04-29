import "./SlideBar.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import '../../../node_modules/swiper/swiper.css'
import '../../../node_modules/swiper/modules/navigation.css'


// https://swiperjs.com/demos 滑動視窗套件

function SlideBar() {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="swiper">
        <SwiperSlide>
          <a href="#" className="slick-slide slick-cloned">
            <img src="https://www.starbucks.com.tw//common/objects/images/homeBanner/20241030161946211.jpg" loading="lazy" width="1326" height="605"></img>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="#" className="slick-slide slick-cloned">
            <img src="https://www.starbucks.com.tw//common/objects/images/homeBanner/20241128110747351.jpg" loading="lazy" width="1326" height="605"></img>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="#" className="slick-slide slick-cloned">
            <img src="https://www.starbucks.com.tw//common/objects/images/homeBanner/20241202145427719.jpg" loading="lazy" width="1326" height="605"></img>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="#" className="slick-slide slick-cloned">
            <img src="https://www.starbucks.com.tw//common/objects/images/homeBanner/20241114172057230.jpg" loading="lazy" width="1326" height="605" ></img>
          </a>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
export default SlideBar;
