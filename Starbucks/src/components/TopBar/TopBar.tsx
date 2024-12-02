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
            <li>夥伴招募</li>
            <li>門市查詢</li>
          </ul>
        </div>
      </div>
    </>
  );
}
export default TopBar;
