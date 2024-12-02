import "./Navbar.css";

function Navbar() {
  // 定義列表名稱
  // subSubItems
  const menuItems: {
    name: string;
    subItems: string[];
    subSubItems: string[][];
  }[] = [
    {
      name: "咖啡",
      subItems: ["咖啡飲品","冷萃咖啡","居家調理咖啡","典藏咖啡","道德採購",],
      subSubItems: [
        ["飲料客製化介紹"],
        [""],
        ["經典咖啡豆","季節咖啡豆","星巴克VIA","星巴克風味VIA","星巴克掛耳式咖啡","星巴克典藏咖啡"],
        ["典藏咖啡豆","典藏咖啡體驗","典藏商品"],
        ["咖啡和種植者公平規範","道德採購","咖啡農社區","咖啡產地原鄉之旅"],
      ],
    },
    {
      name: "商品",
      subItems: ["咖啡豆", "杯具", "配件"],
      subSubItems: [[""], [""]],
    },
    { name: "門市", subItems: ["門市位置", "營業時間"], subSubItems: [[""]] },
    { name: "星里程", subItems: ["積分查詢", "紅利兌換"], subSubItems: [[""]] },
    {
      name: "第四生活空間",
      subItems: ["活動", "會員專區"],
      subSubItems: [[""]],
    },
    {
      name: "送禮專區",
      subItems: ["禮品推薦", "精選禮盒"],
      subSubItems: [[""]],
    },
    {
      name: "線上門市",
      subItems: ["線上商品", "特價商品"],
      subSubItems: [[""]],
    },
  ];

  return (
    <>
      <div className="navbar">
        {menuItems.map((item, index) => (
          <div key={index} className="dropdown">
            <button className="dropdown-btn">{item.name}</button>
            <div className="dropdown-content">
              <div className="row">
                {item.subItems.map((subItem, subIndex) => (
                  <div key={subIndex} className="column">
                    <h3>{subItem}</h3>
                    <h4>{item.subSubItems[0][0]}</h4>
                    {}
                    {/* <a href="#">{subItem + 1}</a>
                    <a href="#">{subItem + 2}</a>
                    <a href="#">{subItem + 3}</a> */}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Navbar;
