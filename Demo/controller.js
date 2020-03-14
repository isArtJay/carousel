// 封装获取DOM节点方法   $("")
var $ = function(selector) {
  return document.querySelector(selector);
};

var carousel = $("#carousel");
var list = $("#list");
var button = $("#button").getElementsByTagName("span");
var prev = $("#prev");
var next = $("#next");
var index = 1; //button[0].classNme="on";
var timer;
var animated = false; //动画停止标记

function ShowButton() {
  for (var i = 0; i < button.length; i++) {
    if (button[i].className == "on") {
      button[i].className = "";
      break;
    }
  }
  button[index - 1].className = "on";
}

function animate(offset) {
  var time = 300;
  var inteval = 10;
  var speed = offset / (time / inteval);
  animated = true;
  var newLeft = parseInt(list.style.left) + offset;
  function go() {
    if (
      (speed > 0 && parseInt(list.style.left) < newLeft) ||
      (speed < 0 && parseInt(list.style.left) > newLeft)
    ) {
      list.style.left = parseInt(list.style.left) + speed + "px";
      setTimeout(go, inteval);
    } else {
      animated = false;
      if (newLeft > -600) {
        list.style.left = -3000 + "px";
      }
      if (newLeft < -3000) {
        list.style.left = -600 + "px";
      }
    }
  }
  go();
}

// 上一个箭头点击事件
prev.onclick = function() {
  if (!animated) {
    if (index == 1) {
      index = 5;
    } else {
      index -= 1;
    }

    ShowButton();
    animate(600);
  }
};

// 下一个箭头点击事件
next.onclick = function() {
  if (!animated) {
    if (index == 5) {
      index = 1;
    } else {
      index += 1;
    }

    ShowButton();
    animate(-600);
  }
};

for (var i = 0; i < button.length; i++) {
  button[i].onclick = function() {
    if (this.className == "on") {
      return;
    }
    var myIndex = parseInt(this.getAttribute("index"));
    var offset = -600 * (myIndex - index);
    if (!animated) {
      animate(offset);
    }

    index = myIndex;
    ShowButton();
  };
}

// 图片播放时间   2000ms
function play() {
  timer = setInterval(function() {
    next.onclick();
  }, 2000);
}

function stop() {
  clearInterval(timer);
}

play();
carousel.onmouseover = stop;
carousel.onmouseout = play;
