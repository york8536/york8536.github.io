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
      subItems: ["飲品", "糕點", "咖啡用品及設備", "隨行卡"],
      subSubItems: [
        ["咖啡飲品","茶瓦納","星冰樂","冷萃咖啡","星沁爽","其他飲料","罐裝飲料","隨行外帶盒"], 
        ["星早餐", "星想餐","午茶那堤組合","麵包","輕食","蛋糕點心","包裝食品","蛋糕預購","新鮮現烤"], 
        ["咖啡用品","咖啡設備","生活用品","典藏商品","城市特色系列","台灣在地文化系列","星座系列","DISNEY聯名系列"],
        [""]
      ],
    },
    {
      name: "門市", 
      subItems: ["門市位置", "營業時間", "門市服務"], 
      subSubItems: [
        ["全店活動","單店活動","星禮程活動","外部合作活動","重要公告"], 
        ["摩登典藏吧台","典藏咖啡體驗","特色門市"],
        ["咖啡講座","外賣服務","無線上網","門市服務常見問題","餘額卡常見問題","飲料券常見問題","星運卡常見問題"]
      ] 
    },
    { name: "星里程", 
      subItems: ["星禮程Starbucks® Rewards", "星禮程會員專屬活動", "星禮程 金星禮", "星禮程常見問題"], 
      subSubItems: [
      ["註冊/登入我的星禮程","星禮程說明","星禮程使用條款","隨行卡/電子卡使用條款","星巴克循環杯服務"], 
      ["最新回饋活動",  "LINE Pay星巴克隨行卡",  "星巴克行動預點"],
      ["門市回饋","線上回饋","線上兌換","回饋轉贈與受贈"],
      ["隨行卡自動儲值功能設定說明","線上兌換使用說明","回饋轉贈與受贈使用說明","查詢金星禮使用與兌換說明","線上兌換常見問題","回饋轉贈與受贈常見問題"]
      ]
    },
    {
      name: "第四生活空間",
      subItems: ["星巴克行動APP", "星巴克社群服務", "咖啡訂閱服務", "外送服務", "星消息電子報", "咖啡星聞"],
      subSubItems: [[""], [""], [""], [""], [""], [""]],
    },
    {
      name: "送禮專區",
      subItems: ["星巴克星送禮", "星巴克飲料券", "星巴克禮盒", "隨行卡企業採購", "商品電子兌換券企業採購"],
      subSubItems: [[""], [""], [""], [""], [""]]
    },
    {
      name: "線上門市",
      subItems: [],
      subSubItems: [[]],
    },
  ];

  return (
    <>
      <div className="navbar">
        {menuItems.map((item, index) => (
          <div key={index} className="dropdown">
            <button className="dropdown-btn">{item.name}</button>
            {item.subItems.length > 0 ? (
              <div className="dropdown-content">
                <div className="row">
                  {item.subItems.map((subItem, subIndex) => (
                    <div key={subIndex} className="column">
                      <h3>{subItem}</h3>
                      {item.subSubItems[subIndex].map(
                        (subSubItem, subSubIndex) => (
                          <div key={subSubIndex}>
                            <a href="#">{subSubItem}</a>
                          </div>
                        )
                      )}
                    </div>
                  ))}
                </div>
                <div className="blank"></div>
              </div>
            ) : (
              <></>
            )}
          </div>
        ))}
      </div>
    </>
  );
}

export default Navbar;
