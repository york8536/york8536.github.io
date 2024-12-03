import Navbar from "./Navbar";
import "./TopBar.css";


function TopBar() {
  return (
    <>
      <div className="header_container">
        <div className="container">
          <a className="logo">logo</a>
          <Navbar />
          <ul className="utility_list">
            <a href="#">夥伴招募</a>
            <a href="#">門市查詢</a>
          </ul>
        </div>
      </div>
    </>
  );
}
export default TopBar;
