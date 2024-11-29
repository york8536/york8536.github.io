import "./Submenu.css";

function Submenu() {
  // 定義列表名稱
  const menuItems: {name:string, submenuItems: string[]}[] = [
    {name: "咖啡飲品", submenuItems:['飲料客製化介紹']},
    {name: "冷萃咖啡", submenuItems:['']},
    {name: "居家調理咖啡", submenuItems:['經典咖啡豆', '季節咖啡豆', '星巴星巴克VIA']},
    {name: "典藏咖啡", submenuItems:['典藏咖啡豆', '典藏咖啡體驗']},
    {name: "道德採購", submenuItems:['咖啡和種植者公平規範', '道得採購']}
  ];

  return (
    <>
      <div className="menu_content">
        {menuItems.map((item, index) => (
            <li key={index}>
                {item.name}
                
            </li>
        ))}
        <div className="sp"></div>
      </div>
    </>
  );
}

export default Submenu;
