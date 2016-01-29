// @St. 2016-01-27-17.14
// 当页面加载完毕时开始动画。
window.onload = function() {
  //animateLogo();
  //alert('aaaa')
  ani.init();
  updateSliderControl();
};

// 使用 onscroll 回调函数来更新 slider
window.onscroll = function() {
  // ...
  updateSliderControl();
  //locator.stop();
}


//hash监听
/*var locator = {
    start: function (handler) {
            //window.onhashchange = handler;
            //handler();
        },
        stop: function () {
            window.onhashchange = null;
        }
};*/

var ani = {
    init: function (){
        this.logo();
        this.robot();
    },
    logo: function (){
        TweenMax.fromTo("#react-logo", 2, {
            // from
            css: {
              y: 0,
            }
            },{
            // to
            css: {
              y: "30px",
            },
            
            // 永久重复动画的选项
            repeat: -1,
            
            // 反转、重新运行动画的选项
            yoyo: true,
            
            // 改变 easing 类型
            ease: Sine.easeInOut
            }
        );
    },
    robot: function () {
       var tag = "#android-robot";
       //var tag = document.querySelectorAll("#android-robot");
       var t = new TimelineMax({yoyo: true, repeat: -1, ease: Sine.easeInOut});
           t.to(tag, 1, {rotation: '-=10deg'})
            .to(tag, 1, {rotation: '+=20deg'}); // 可以使用 += / -= 在原有角度上做动画
    }
};

function updateSliderControl() {
  // 获得所有的 slider 链接
    var links = document.querySelectorAll("#slider-control a")
    for(var i = 0; i < links.length; i++) {
    var link = links[i];
    var attr = link.getAttribute('href');;
    //console.log(attr);
    // 获取被链接指向的部分
    //var section = document.querySelector('#intro-section', '#native', '#touch', '#android');
    var section = document.querySelector(attr);
    var sectionTop    = section.offsetTop;
    var sectionBottom = sectionTop + section.offsetHeight;  //  section.offsetHeight
    //console.log(section.offsetHeight);
    //console.log(sectionTop + " / " + sectionBottom);
    //console.log(window.scrollY);
    //console.log(window.scrollY);
    // 检查 window.scrollY 是否在这部分中
    if(window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
        link.className = "active";
    // location.hash = attr;
    } else {
        link.className = "";
    }
    }
}


//function animate() {
//  // Animation duration is 2 seconds.
//  var t = new TimelineMax();
//  t.to("#box",1,{x: 200})
//    .to("#box",0.5,{rotation: "360deg"})
//    .to("#box",1,{y: 100})
//    .to("#box",0.5,{rotation: "-=360deg"});
//}
//
//var $startButton = document.getElementById("start-button");
//
//$startButton.onclick = animate;

