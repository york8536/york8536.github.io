import { useState } from "react";
import "./TopBar_blank.css";

function TopBar_blank() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  // 切換懸停的索引，使用 toggle 的方式
  const handleMouseToggle = (index: number | null): void => {
    setHoveredIndex(prevIndex => (prevIndex === index ? null : index)); // 如果是同一個索引就隱藏，否則顯示
  };
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
    <ul className="blank">
{menuItems.map((item, index) => (
            <li
              key={index}
              onMouseEnter={() => handleMouseToggle(index)}  // 使用 toggle 處理懸停顯示
              onMouseLeave={() => handleMouseToggle(null)}   // 滑鼠離開時隱藏下拉選單
              style={{
                backgroundColor: hoveredIndex === index ? '#000' : 'transparent', // 懸停項目背景顏色變黑
                color: hoveredIndex === index ? '#fff' : '#000',  // 懸停項目文字顏色變白
                position: 'relative',  // 使下拉選單相對於 li 定位
              }}
            >
              {item.name}
              {/* 顯示對應的下拉選單 */}
              {hoveredIndex === index && (
                <ul
                style={{
                    position: 'absolute',
                    top: '100%',
                    left: 0,
                    backgroundColor: '#000', // 下拉選單的背景顏色設定為白色
                    color: '#fff',  // 確保下拉選單文字顏色與背景有對比
                    listStyleType: 'none',
                    padding: '10px',
                    margin: 0,
                    width: '100vw',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                    zIndex: 10, // 確保下拉選單層級高於其他元素
                  }}
                >
                  {item.subItems.map((subItem, subIndex) => (
                    <li key={subIndex} style={{ padding: '8px', cursor: 'pointer' }}>
                      {subItem}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
    </ul>
  );
}

export default TopBar_blank;
