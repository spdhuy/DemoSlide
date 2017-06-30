$(document).ready(function(){
    var myIndex = 0;
    carousel();

    function carousel() {
        var i;
        var x = document.getElementsByClassName("mySlides");
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        };
        myIndex++;
        if (myIndex > x.length) {myIndex = 1;}
        x[myIndex-1].style.display = "block";
        setTimeout(carousel, 2000); // 2 giay thay doi anh 1 lan

    };


});/**
 * Created by huy on 6/30/17.
 */
