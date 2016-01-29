// @St. 2016-01-27-17.14
// 当页面加载完毕时开始动画。
window.onload = function() {
  //animateLogo();
  //alert('aaaa')
  ani.init();
  updateSliderControl();
  addSmoothScrolling();
};

// 使用 onscroll 回调函数来更新 slider
window.onscroll = function() {
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
    var links = document.querySelectorAll("#slider-control a");
    
    for(var i = 0; i < links.length; i++) {
        var link = links[i];
        var attr = link.getAttribute('href');
        
        //console.log(attr);
        // 获取被链接指向的部分
        //var section = document.querySelector('#intro-section', '#native', '#touch', '#android');
        var section = document.querySelector(attr);
        var sectionTop    = section.offsetTop;
        //var sectionBottom = sectionTop + window.innerHeight;  //  section.offsetHeight
        var sectionBottom = sectionTop + section.offsetHeight;
        //console.log(section.offsetHeight);
        //console.log(sectionTop + " / " + sectionBottom);
        //console.log(window.scrollY);
        //console.log(window.scrollY);
        
        // 检查 window.scrollY 是否在这部分中
        if(window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
            //console.log(attr);
            link.className = "active";
            //event.preventDefault();
            //location.hash = attr;
        }
        else {
            link.className = "";
        }
    }
}


// 练习：网页滚动动画
function scrollToElement(element) {
  //声明变量topOfElement = element.offsetTop
  var topOfElement = element.offsetTop;
  // window 的动画滚动，使用TweenMax plugins
  TweenMax.to(window, 1, {
    scrollTo: {
      y: topOfElement,
    },
    ease: Sine.easeInOut
  });
}

function addSmoothScrolling() {
    var links = document.querySelectorAll("#slider-control a");
    
    for(var i = 0; i < links.length; i++) {
        var link = links[i];
        
        //if (typeof window.addEventListener === 'function'){
        // 闭包
        (function (_link) {
            //console.log('_link: ' + _link);
            //console.log(link);
            link.addEventListener('click', function(event){
                /* 
                  这里禁用了鼠标的点击事件, 会导致hash无法更新，
                  也就是说hash就没有作用了
                  动画是否可以考虑换一种逻辑方式，
                  利用hash的方式去执行窗体混动的动画呢？？？
                */
                event.preventDefault();
                var attr = _link.getAttribute('href');
                //console.log('href: ' + _link);
                scrollToElement(document.querySelector(attr));
                //location.hash = attr;
            });
        })(link);
        //}
        //link.addEventListener("click", function(event) {
//        // `event` 是鼠标点击事件
//        //event.preventDefault();
//        
//        // BUG 警告！使用闭包或者 ES6 `let` 修复。
//        //var href = link.blahblahblah;
//            (function( _p ){
//                link.addEventListener("click", function(event) {
//                    event.preventDefault() ;
//                    scrollToElement(_p) ;
//                    return false;
//                });
//            //scrollToElement(...);
//        });
    }
}

