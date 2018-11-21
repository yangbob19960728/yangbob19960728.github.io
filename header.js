var banner_1;
var banner_2;
var banner_3;
var nav_L_box;               //左邊nav bar的顯示資料
var header_img;
var num;
var list_num ;
var show_style_mask;            //style的資料及效果的顯示所以需的變數
var show_style_info;
var style_left_top;
var show_style_info_title;
var show_style_info_content;
var show_style_info_img_top;
var show_style_info_img_bottom;
var ModernMinimalistStyle;
var ChineseClassical;
var ElegantStyle;
var ModernAvantGardeStyle;
var NewChineseStyle;
var MediterraneanStyle;
var JapaneseStyle;
var MixStyle;
var AmericanCountryStyle;
var collection_num;           //作品的計數
var Small_theme_img_info_img;    //作品現在顯示的照片
var Chengbao ;                    //存放Chengbao的照片
var Linkou_Yangxin_Store  ;         //存放Linkou Yangxin Store的照片
var Swallow  ;                      //存放Swallow的照片
var Zhongli_Grand_Hyatt_Hall  ;   //存放Zhongli Grand Hyatt Hall  的照片
var design_num;                  //design的圖片轉換的計數器
var design1_num;                  //設定第一位設計師的作品數目
var design2_num;                  //設定第二位設計師的作品數目
var design1_img;                 //存放第一設計師的作品
var design2_img;                 //存放第二設計師的作品
window.onload = function( ){
    header_img = document.getElementById("header_img");
    num = 0;
    list_num = 3;
    banner_1 = "img-design-web/BANNER/BANNER-1.jpg";
    banner_2 = "img-design-web/BANNER/BANNER-2.jpeg";
    banner_3 = "img-design-web/BANNER/BANNER-3.jpg";
    nav_L_box = document.getElementById("nav_L_box");
    show_style_mask=document.getElementById("show_style_mask");
    show_style_info=document.getElementById("show_style_info");
    style_left_top=document.getElementById("style_left_top");
    show_style_info_title = document.getElementById("show_style_info_title");    //風格的跳窗標題
    show_style_info_content = document.getElementById("show_style_info_content");  //風格的跳窗內容
    show_style_info_img_top = document.getElementById("show_style_info_img_top");    //風格的跳窗上面的圖片
    show_style_info_img_bottom = document.getElementById("show_style_info_img_bottom");  //風格的跳窗下面的圖片
    ModernMinimalistStyle =["現代簡約風格","注重居室的實用性，而且還體現出了現代社會生活的精緻與個性，符合現代人的生活品位。<br>從繁忙工作中解脫出來，不願花許多心思打理房間、享受簡單生活的人，沉浸於工作的高級白領、教師、單身貴族等。","img-design-web/style/Modern minimalist style/Modern minimalist style-1.jpg","img-design-web/style/Modern minimalist style/Modern minimalist style-2.jpg"];
    ChineseClassical = ["中式古典風格","以宮廷建築為代表的中國古典建築的室內裝飾設計藝術風格。<br>氣勢恢弘、壯麗華貴、高空間、雕樑畫棟、金碧輝煌，造型講究對稱，色彩講究對比，圖案多龍、鳳、龜、獅等，精雕細琢、瑰麗廳巧。性格沉穩、喜歡中國傳統文化的人。","img-design-web/style/Chinese classical/Chinese classical-1.jpg","img-design-web/style/Chinese classical/Chinese classical-2.jpg"];
    ElegantStyle = ["雅致主義風格","雅致主義是帶有極強文化品味的裝飾風格，注重線型的搭配和顏色的協調，把傳統的構件通過重新組合出現在新的情境之中，追求品味與和諧的色彩搭配。<br>有追求、有品位的時尚人士，尤其是一些格調高雅的文藝人士或有一定實力的成功人士。","img-design-web/style/Elegant style/Elegant style-1.jpg","img-design-web/style/Elegant style/Elegant style-2.jpg"];
    ModernAvantGardeStyle =["現代前衛風格","以實用功能主義為主的風格即為現代風格，故又稱功能主義風格。將設計的元素、色彩、照明、柔材料簡化到最少的程度，空間的架構由精準的比例及細部來顯現。依靠新材料、新技術加上光與影的無窮變化，追求無常規的空間解構，大膽鮮明對比強烈的色彩布置，以及剛柔並舉的選材搭配。<br>特點是簡潔明快、實用大方，誇張、怪異、另類的直覺只是其中的部分，更重要的是要注意色彩對比，注重材料類別和質地。","img-design-web/style/Modern avant-garde style/Modern avant-garde style-1.jpg","img-design-web/style/Modern avant-garde style/Modern avant-garde style-2.jpg"];
    NewChineseStyle =["新中式風格","古典、優雅是新中式風格特點。新中式風格包括兩方面的基本內容，一是中國傳統風格文化意義在當前時代背景下的演繹;一是對中國當代文化充分理解基礎上的當代設計。將現代元素和傳統元素進行了有機的結合，以現代人的審美需求去營造傳統韻味。新中式風格大多數採用對稱式的布局，用以營造清幽雅致的生活氛圍，在裝飾細節上崇尚自然情趣。","img-design-web/style/new Chinese style/new Chinese style-1.jpg","img-design-web/style/new Chinese style/new Chinese style-2.jpg"];
    MediterraneanStyle=["地中海式風格","蔚藍色的浪漫情懷，海天一色、艷陽高照的純美自然即是地中海風格。<br>地中海周邊國家眾多，民風各異，但是獨特的氣候特徵還是讓各國的地中海風格呈現出一些一 致的特點：白灰泥牆、連續的拱廊與拱門，陶磚、海藍色的屋瓦和門窗。<br>經常四處旅遊、追求浪漫的白領小資等","img-design-web/style/Mediterranean style/Mediterranean style-1.jpg","img-design-web/style/Mediterranean style/Mediterranean style-2.jpg"];
    JapaneseStyle=["日式風格","禪意，淡泊寧靜，清新脫俗，所以裝飾也大多強調其功能性，裝飾和點綴較少，造型簡潔，多為直線條，豪華、奢侈的風格幾乎不可能在日式家居當中出現。<br>適合欣賞日本文化，喜歡家裡有些禪意的人。","img-design-web/style/Japanese style/Japanese style-1.jpg","img-design-web/style/Japanese style/Japanese style-2.jpg"] ;
    MixStyle=["混搭風格","混搭風格是現在家居裝修中一種新型的裝修理念，它的特點就是輕鬆自然、隨意親切。將多種不同風格相結合來對家進行裝修設計。但設計中仍然是匠心獨具，深入推敲形體、色彩、材質等方面的總體構圖和視覺效果。可以將各種風格和為一體，滿足不同人群的各種需求。<br>滿足不同人群的不同需要，尤其是追求個性時尚的年輕人。","img-design-web/style/Mix style/Mix style-1.jpg","img-design-web/style/Mix style/Mix style-2.jpg"];
    AmericanCountryStyle=["美式鄉村風格","在家居設計中推崇回歸自然、結合自然的風格，將自然、鄉土風味整合成新的空間形式，稱為「鄉村風格」或「田園風格」。<br>適合教授學者，小資情調白領人員等，特別是英式田園贏得很多女性的喜愛。","img-design-web/style/American country style/American country style-1.jpg","img-design-web/style/American country style/American country style-2.jpg"];
    Small_theme_img_info_img = document.getElementById("Small_theme_img_info_img");
    Chengbao =["img-design-web/Chengbao/Chengbao-1.JPG","img-design-web/Chengbao/Chengbao-2.JPG","img-design-web/Chengbao/Chengbao-3.JPG","img-design-web/Chengbao/Chengbao-4.JPG","img-design-web/Chengbao/Chengbao-5.JPG","img-design-web/Chengbao/Chengbao-6.JPG"];                   //存放Chengbao的照片
    Linkou_Yangxin_Store =["img-design-web/Linkou Yangxin Store/Linkou Yangxin Store-1.jpg","img-design-web/Linkou Yangxin Store/Linkou Yangxin Store-2.jpg","img-design-web/Linkou Yangxin Store/Linkou Yangxin Store-3.jpg","img-design-web/Linkou Yangxin Store/Linkou Yangxin Store-4.jpg","img-design-web/Linkou Yangxin Store/Linkou Yangxin Store-5.jpg","img-design-web/Linkou Yangxin Store/Linkou Yangxin Store-6.jpg"];        
    Swallow =["img-design-web/Swallow/Swallow-1.jpg","img-design-web/Swallow/Swallow-2.jpg","img-design-web/Swallow/Swallow-3.jpg","img-design-web/Swallow/Swallow-4.jpg","img-design-web/Swallow/Swallow-5.jpg","img-design-web/Swallow/Swallow-6.jpg"];                   
    Zhongli_Grand_Hyatt_Hall =["img-design-web/Zhongli Grand Hyatt Hall/Zhongli Grand Hyatt Hall-1.jpg","img-design-web/Zhongli Grand Hyatt Hall/Zhongli Grand Hyatt Hall-2.jpg","img-design-web/Zhongli Grand Hyatt Hall/Zhongli Grand Hyatt Hall-3.jpg","img-design-web/Zhongli Grand Hyatt Hall/Zhongli Grand Hyatt Hall-4.jpg","img-design-web/Zhongli Grand Hyatt Hall/Zhongli Grand Hyatt Hall-5.jpg","img-design-web/Zhongli Grand Hyatt Hall/Zhongli Grand Hyatt Hall-6.jpg"];
    Small_theme_img_info_img.src = Zhongli_Grand_Hyatt_Hall[0];
    design1_num = 11;
    design2_num = 15;
    design1_img = ["img-design-web/designer-collection/designer-1/designer-1-1.jpg","img-design-web/designer-collection/designer-1/designer-1-2.jpg","img-design-web/designer-collection/designer-1/designer-1-3.jpg","img-design-web/designer-collection/designer-1/designer-1-4.jpg","img-design-web/designer-collection/designer-1/designer-1-5.jpg","img-design-web/designer-collection/designer-1/designer-1-6.jpg","img-design-web/designer-collection/designer-1/designer-1-7.jpg","img-design-web/designer-collection/designer-1/designer-1-8.jpg","img-design-web/designer-collection/designer-1/designer-1-9.jpg","img-design-web/designer-collection/designer-1/designer-1-10.jpg","img-design-web/designer-collection/designer-1/designer-1-11.jpg"];
}
// $(document).ready(function(){
//     $('#all').fullpage();
// });

//打開nav bar的函數
function open_nav_L(){
    // console.log(1);
    document.getElementById("nav_L_close").style.display = "block";
    var a = TweenMax.to("#nav_L_box",2,{
        rotationY:0,
        transformOrigin:"left 50%",
        // z:400,
        // scale: 0.8,
         opacity:1,
        // perspective:800,
        transformStyle:"preserve-3d",
        transformPerspective:600,
        perspectiveOrigin:"50% 50%",
        backfaceVisibility: "hidden",
        ease: Back.easeOut      //ease為速度的設定值   ,Elastic~Power0~3~Back~Bounce~Rough~SlowMo~Steppped       ,linear~Ease in~Ease out~Ease in out
    });
    document.getElementById("nav_L_close").addEventListener("click",close_nav_L);
    function close_nav_L(){
        document.getElementById("nav_L_box").style.display = "none";
        // var w = document.getElementById("nav_L_box").offsetWidth;
        // console.log(w);
        // var b = TweenMax.to("#nav_L_box",1,{
        //     x:-w,
        //     ease: Back.easeOut      //ease為速度的設定值   ,Elastic~Power0~3~Back~Bounce~Rough~SlowMo~Steppped       ,linear~Ease in~Ease out~Ease in out
        // });
        document.getElementById("nav_L_close").removeEventListener("click",close_nav_L);
        
        // setTimeout(function () {
        //     b.kill();
        //     document.getElementById("nav_L_box").style.display = "block";
        //     document.getElementById("nav_L_box").style.left = 0 + 'px';
        //     console.log(1);
        // }, 500);
        // setTimeout(function () {
        //     document.getElementById("nav_L_box").style.display = "block";
        //     TweenMax.to("#nav_L_box", 0.01, {
        //         x: 0,
        //         ease: Power0.linear
        //     });
        // }, 500);
        
    }
}
function hover_nav_L_box_content(id){

 var  hover_nav_L_box_content_show = TweenMax.fromTo('#' + id, 0.7, {
        boxShadow: "0px 0px 0px 0px rgba(0,255,0,0.3)"   //from
    },{
        boxShadow: "0px 0px 20px 10px rgba(0,255,0,0.7)",  //to
        repeat: -1,
        yoyo: true,
        ease:Linear.easeNone
    });
    var hover_nav_L_box_content_show_text = TweenMax.to('#' + id, 0.2, {
        textShadow:"1px 1px 1px rgba(255, 255, 255, 0.5)",
        color:"#000"
    });
    document.getElementById(id).addEventListener("mouseleave",nohover_nav_L_box_content);
    function nohover_nav_L_box_content(){
        hover_nav_L_box_content_show.kill();
        hover_nav_L_box_content_show_text.kill();
        TweenMax.set('#' + id, {
            boxShadow: "none",
            textShadow:"none",
            color:"white"
        });
    }
}
function add_num(){
    // alert("hi");
    num=num+1;
    run(num);
    }
function less_num(){
    num = num-1;
    var a = Math.abs(num);               
    run( a );
}
function run( x ){
    if(x % list_num == 0){
    document.getElementById("header_img").src=banner_1;
    }
    else if(x % list_num == 1){
    document.getElementById("header_img").src=banner_2;
    }
     else {
    document.getElementById("header_img").src=banner_3;
    }
}
function show_black_mask( id ){         /*風格黑色區塊的特效,滑鼠移入實有黑色區塊,移出時區塊消失*/
    var header = id+"_header";
    //   console.log( header );
    //   header.style.opacity="0.1";
    document.getElementById(header).style.display = "block";
    var img = id + '_img';
    //  console.log(img);
     document.getElementById(img).style.transform="scale(1.1)";
     window.setTimeout(function(){
     document.getElementById(header).style.opacity="0.7";
     },10);
    document.getElementById(id).addEventListener("mouseleave",close_black_mask);  //當滑鼠移開圖片遮罩時,黑色遮罩消失
    function close_black_mask(){
       document.getElementById(header).style.display="none";
       document.getElementById(img).style.transform="scale(1)";
       document.getElementById(id).removeEventListener("mouseleave",close_black_mask);
    }
      
} 
function show_info(num){                      //打開風格的資訊
    show_style_info.style.display= "flex" ;
    show_style_mask.style.display= "block";
    select_style(num);
}
function close_style_info( ){
    show_style_info.style.display="none";
    show_style_mask.style.display= "none";
}
function select_style(num){               //選擇為哪一種style
    if(num == 1){
        show_style_info_title.innerHTML = ModernMinimalistStyle[0];
        show_style_info_content.innerHTML = ModernMinimalistStyle[1];
        show_style_info_img_top.src = ModernMinimalistStyle[2];
        show_style_info_img_bottom.src = ModernMinimalistStyle[3];
    }
    else if(num == 2){
        show_style_info_title.innerHTML = ChineseClassical[0];
        show_style_info_content.innerHTML = ChineseClassical[1];
        show_style_info_img_top.src = ChineseClassical[2];
        show_style_info_img_bottom.src = ChineseClassical[3];
    }
    else if(num == 3){
        show_style_info_title.innerHTML = ElegantStyle[0];
        show_style_info_content.innerHTML = ElegantStyle[1];
        show_style_info_img_top.src = ElegantStyle[2];
        show_style_info_img_bottom.src = ElegantStyle[3];
    }
    else if(num == 4){
        show_style_info_title.innerHTML = ModernAvantGardeStyle[0];
        show_style_info_content.innerHTML = ModernAvantGardeStyle[1];
        show_style_info_img_top.src = ModernAvantGardeStyle[2];
        show_style_info_img_bottom.src = ModernAvantGardeStyle[3];
    }
    else if(num == 5){
        show_style_info_title.innerHTML = NewChineseStyle[0];
        show_style_info_content.innerHTML = NewChineseStyle[1];
        show_style_info_img_top.src = NewChineseStyle[2];
        show_style_info_img_bottom.src = NewChineseStyle[3];
    }
    else if(num == 6){
        show_style_info_title.innerHTML = MediterraneanStyle[0];
        show_style_info_content.innerHTML = MediterraneanStyle[1];
        show_style_info_img_top.src = MediterraneanStyle[2];
        show_style_info_img_bottom.src = MediterraneanStyle[3];
    }
    else if(num == 7){
        show_style_info_title.innerHTML = JapaneseStyle[0];
        show_style_info_content.innerHTML = JapaneseStyle[1];
        show_style_info_img_top.src = JapaneseStyle[2];
        show_style_info_img_bottom.src = JapaneseStyle[3];
    }
    else if(num == 8){
        show_style_info_title.innerHTML = MixStyle[0];
        show_style_info_content.innerHTML = MixStyle[1];
        show_style_info_img_top.src = MixStyle[2];
        show_style_info_img_bottom.src = MixStyle[3];
    }
    else {
        show_style_info_title.innerHTML = AmericanCountryStyle[0];
        show_style_info_content.innerHTML = AmericanCountryStyle[1];
        show_style_info_img_top.src = AmericanCountryStyle[2];
        show_style_info_img_bottom.src = AmericanCountryStyle[3];
    }

}
function open_Small_theme(name){
    document.getElementById("Small_theme").style.display = "flex";
    Small_theme_img_info_img.src = name[0];
    collection_num = 0;
    var Small_theme_img_info_close = document.getElementById("Small_theme_img_info_close");
    var Small_theme_img_info_add = document.getElementById("Small_theme_img_info_add");
    var Small_theme_img_info_less = document.getElementById("Small_theme_img_info_less");
    Small_theme_img_info_close.addEventListener("click",colse_Small_theme);
     function colse_Small_theme(){
        document.getElementById("Small_theme").style.display = "none";
    }
    Small_theme_img_info_add.addEventListener("click",collection_add);
    function collection_add(){
        collection_num++;
        if (collection_num > 5){
            collection_num = 5;
        }
        Small_theme_img_info_img.src = name[collection_num];
    }
    Small_theme_img_info_less.addEventListener("click",collection_less);
    function collection_less(){
        collection_num--;
        if (collection_num < 0){
            collection_num = 0;
        }
        Small_theme_img_info_img.src = name[collection_num];
    }
}
function design_add_img(){
    design_num++;                  
    if(design_num > design1_num){
        design_num = 1;
    }
    document.getElementById("designer_info_collection_img").src =  [design_num];
}
function open_designer_info_img(){
    design_num = 0;
    document.getElementById("designer_info_img_img").src = design1_img[design_num];
    document.getElementById("designer_info_img").style.display = "flex";
    var designer_info_img_box_close = document.getElementById("designer_info_img_box_close");
    var designer_info_img_box_add = document.getElementById("designer_info_img_box_add");
    var designer_info_img_box_less = document.getElementById("designer_info_img_box_less");
    designer_info_img_box_close.addEventListener("click",close_designer_info_img);
    function close_designer_info_img(){
        document.getElementById("designer_info_img").style.display = "none";
    }
    designer_info_img_box_add.addEventListener("click",designer_info_img_show_add);
    function designer_info_img_show_add(){
        design_num++;
        if (design_num > design1_num-1){
            design_num = 0;
        }
        document.getElementById("designer_info_img_img").src = design1_img[design_num];
    }
    designer_info_img_box_less.addEventListener("click",designer_info_img_show_less);
    function designer_info_img_show_less(){
        design_num--;
        if (design_num < 0){
            design_num = design1_num-1;
        }
        document.getElementById("designer_info_img_img").src = design1_img[design_num];
    }
    
}