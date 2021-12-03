let html = document.querySelector("#html");
let style = document.querySelector("#style");

let string = `
/* 准备一个div */
#div1{
    border: 1px solid red;
    width: 200px;
    height: 200px;
}
/* 把 div 变成一个八卦图,首先，把 div 变成一个圆 */
#div1{
    border-radius: 50%;
    box-shadow: 0 0 3px rgba(0,0,0,0.5);
    border: none;
}
/* 八卦是阴阳形成的，把圆颜色变成一黑一白 */
#div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/* 加两个神秘的小球 */
#div1::before{
    width: 100px;
    height: 100px;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    background: #000;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
#div1::after{
    width: 100px;
    height: 100px;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    background: #fff;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%, rgba(0,0,0,1) 100%);
}
`;

let string2 = "";
let n = 0;

let step = () => {
  setTimeout(() => {
    // 如果是回车，就不照搬
    // 如果不是回车就照搬
    if (string[n] === "\n") {
      string2 += "<br>";
      // <br>标签是空标签
    } else if (string[n] === " ") {
      string2 += "&nbsp;";
      //nbsp，是网页程序的代码,会使网页上显示一个空格。所以网页文本中的“&nbsp”就是一个未成功显示的空格,即不换行空格，全称No-Break Space。
    } else {
      string2 += string[n];
    }
    html.innerHTML = string2;
    style.innerHTML = string.substring(0, n);
    //substring() 方法返回一个字符串在开始索引到结束索引之间的一个子集, 或从开始索引直到字符串的末尾的一个子集。
    window.scrollTo(0, 99999);
    html.scrollTo(0, 99999);
    //设置滚动到文档中的某个坐标
    if (n < string.length - 1) {
      // 如果 n 不是最后一个,就继续执行。
      n += 1;
      step();
    }
  }, 50);
};

step(); // 1=>2
