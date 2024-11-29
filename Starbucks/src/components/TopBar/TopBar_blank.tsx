import "./TopBar_blank.css";

function TopBar_blank() {
  // 可以使用css, 效能較佳
  /* const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  // 切換懸停的索引，使用 toggle 的方式
  const handleMouseToggle = (index: number | null): void => {
    setHoveredIndex(prevIndex => (prevIndex === index ? null : index)); // 如果是同一個索引就隱藏，否則顯示
  }; */
  // 定義列表名稱

  const menuItems: { name: string, subItems: string[] }[]= [
    { name: '咖啡', subItems: ['咖啡飲品', '冷萃咖啡', '居家調理咖啡', '典藏咖啡', '道德採購'] },
    { name: '商品', subItems: ['咖啡豆', '杯具', '配件'] },
    { name: '門市', subItems: ['門市位置', '營業時間'] },
    { name: '星里程', subItems: ['積分查詢', '紅利兌換'] },
    { name: '第四生活空間', subItems: ['活動', '會員專區'] },
    { name: '送禮專區', subItems: ['禮品推薦', '精選禮盒'] },
    { name: '線上門市', subItems: ['線上商品', '特價商品'] }
  ];

  return (
    <nav className="navbar">
      {menuItems.map((item, index) => (
        <div key={index} className="dropdown">
          <button className="dropdown-btn">{item.name}</button>
          <div className="dropdown-content">
            <div className="row">
              {item.subItems.map((subItem, subIndex) => (
                <div key={subIndex} className="column">
                  <h3>{subItem}</h3>
                  <a href="#">{`${subItem}1`}</a>
                  <a href="#">{`${subItem}2`}</a>
                  <a href="#">{`${subItem}3`}</a>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
	  </nav>
  );
}

export default TopBar_blank;
