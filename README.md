# 什么是无缝轮播？

![](https://artjay-1258580758.cos.ap-shanghai.myqcloud.com/CarouselDemo/jieshao.png)
当焦点位于图片1时，如果再往前滚的话，整个队列会被拉倒真正的第五张图。至于真正的图片1前面的副本图片5只是让用户产生视觉差，从而不会让用户明显感觉到图片被倒向了图片5，看起来就像是无缝轮播。

# 实现功能

- 当鼠标放入容器内时左右出现控制按钮，并且轮播动画停止。
- 当鼠标移出时，控制按钮隐藏，轮播继续。
- 焦点随图片的滚动而变化。
- 跳跃点击焦点，会跳转到相应的图片。
# 代码

HTML代码
```html
<div id="wrapper">
        <div class="corlorlayer"></div>
        <div id="list" style="left:-600px;">
            <img src="images/5.jpg" alt="">
            <img src="images/1.jpg" alt="">
            <img src="images/2.jpg" alt="">
            <img src="images/3.jpg" alt="">
            <img src="images/4.jpg" alt="">
            <img src="images/5.jpg" alt="">
            <img src="images/1.jpg" alt="">
        </div>
        <div id="button">
            <span index="1" class="on"></span>
            <span index="2"></span>
            <span index="3"></span>
            <span index="4"></span>
            <span index="5"></span>
        </div>
        <a href="javascript:;" id="prev" class="arrow">&lt;</a>
        <a href="javascript:;" id="next" class="arrow">&gt;</a>
    </div>
```
