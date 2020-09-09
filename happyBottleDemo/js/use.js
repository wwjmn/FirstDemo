createBottle("card1", 24); // 为card1创建24个瓶子
createBottle("card2", 24); // 为card2创建24个瓶子
createBottle("card3", 24); // 为card3创建24个瓶子
createBottle("card4", 24); // 为card4创建24个瓶子
createBottle("card5", 30); // 为card5创建30个瓶子

// 为卡片添加标签tag
addCardTag("card1", ["猫", "狗", "逛网店", "逛街", "看电影", "追剧", "吃零食", "奶茶", "火锅", "雨天", "晴天", "雪天", "游乐园", "大海", "森林", "饮料", "咖啡", "牛奶", "被夸奖", "旅行", "收礼物", "挑礼物", "见到好朋友", "喜欢的人"]);
addCardTag("card2", ["电影", "电视剧", "综艺", "奶茶", "咖啡", "果汁", "白开水", "晴天", "雨天", "唱歌", "逛街", "逛淘宝", "跑步", "散步", "追星", "养宠物", "旅行", "宅家", "大山", "大海", "森林", "沙漠", "电子产品", "乐器"]);
addCardTag("card3", ["家里", "自己房间", "被子里", "手机有电", "有Wi-Fi", "人多的地方", "学校", "图书馆", "安静的乡村", "梦里", "父母在身边", "吃饱之后", "阳光照射的地方", "发工资了", "有存款", "听到喜欢的音乐", "阅读", "做运动", "美颜滤镜", "通过考试", "放假", "不用早起", "没人管", "学习"]);
addCardTag("card4", ["外形", "vocal", "dance", "rap", "艺能", "反差", "事业心", "咖位", "腹肌", "智商", "情商", "手好看", "长腿", "脸好看", "幽默", "会特技", "cp真", "沙雕", "会外语", "厨艺好", "狼系", "奶系", "爹系", "低音炮", "可泥", "单眼皮"]);
addCardTag("card5", ["唐人街探案3", "夺冠", "紧急救援", "姜子牙", "花木兰", "小妇人", "乔乔的异想世界", "婚姻的故事", "1917", "毒液2", "神奇女侠1984", "黑寡妇", "一直游到海水变蓝", "兰心大剧院", "英格力士", "哈利波特", "007：无暇赴死", "王牌特工：源起", "信条", "沙丘", "阿凡达2", "速度与激情9", "寂静之地2", "哥斯拉大战金刚", "1/2的魔法", "奔月", "刺猬索尼克", "彼得兔2：逃跑计划", "超能敢死队2020", "莫比亚斯：安野博士", "法兰西特派"]);

// id为wrapper下，导航栏在class为cardNav下，点击跳转到相应的卡片页面
prepareInternalnav("wrapper", "cardNav");
prepareInternalnav("covercardNav", "cover");


//功能按钮
// 点击新建一个空白card：cardDiv
addLoadEvent(addCard);

// 点击删除一个自己建的card
addLoadEvent(delCard);

// 增加一个瓶子
addLoadEvent(addBottle);

// 删除最后一个瓶子
addLoadEvent(delBottle);

// 点击保存生成一张图
addLoadEvent(saveButton);

// 点击封面确定按钮，隐藏cover
addLoadEvent(yesButton);

// 更改配色
addLoadEvent(alterColor);