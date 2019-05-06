window.onload=function (){
    var thumbnails=document.querySelector("#thumbnails");
    var figure=document.querySelector("figure");

    //给小图片绑定单击事件
    thumbnails.addEventListener("click",function (e) {
        let target=e.target;
        let img=document.querySelector("#featured img");
        img.src="images/medium/"+getPath(target.src.toString());
        img.title=target.title;
        let figcaption=document.querySelector("figcaption");
        figcaption.innerHTML=target.title.toString();
    })

    //得到图片的stc路径
    function  getPath(Imgsrc) {
        var pictureNumber=/[0-9]+\.jpg$/;
        var path=pictureNumber.exec(Imgsrc).toString();
        return path;
    }

    //给大图片增加鼠标移入移出事件
    figure.addEventListener("mouseover",function (e) {
        var center=document.querySelector("figure figcaption");
        fadeIn(center);
    })
    figure.addEventListener("mouseout",function (e) {
        var center=document.querySelector("figure figcaption");
        fadeOut(center);
    })

    //淡入效果函数
    function fadeIn(t){
       /* t.style.transition="0.8s";
        t.style.opacity=0.8;*/
        var fig=0;
        var temp=0;
        var show = self.setInterval(function () {
            temp+=0.08;
            t.style.opacity=temp;
            if (temp>=0.8){
                show=window.clearInterval(show);
                return;
            }
            if (fig==1){
                show=window.clearInterval(show);
                return;
            }
        },100);
    }
    //淡出效果函数
    function fadeOut(t) {
        var fig=1;
        var temp=0.8;
        var faded = self.setInterval(function () {
            temp=temp-0.08;
            t.style.opacity=temp;
            if (temp<=0){
                faded=window.clearInterval(faded);
                return;
            }
            if (fig==0){
                faded=window.clearInterval(faded);
                return;
            }
        },100);
    }
}