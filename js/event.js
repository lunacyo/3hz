window.onload = function(){
    $('.logo_Wrap').css('display','block');
}

var vf2 = new eg.Flicking($("#vertical"), {
	duration : 300,
	circular : true,
	defaultIndex : 0,
	circular : true,
	horizontal : false
});
var f2 = new eg.Flicking($("#horizon"), {
	duration : 300,
	circular : true,
	defaultIndex : 0
});
$(document).ready(function(){
   $('.recruit1').click(function(){
       window.open('http://www.3hz.co.jp/seisaku16g.pdf#zoom=100');
   });
    $('.recruit2').click(function(){
        window.open('http://www.3hz.co.jp/douga17.pdf#zoom=100');
    });
    $('.ff').click(function(){
        window.open('http://www.flipflappers.com');
    });
    $('.ys').click(function(){
        window.open('http://www.falcom.co.jp/ys8/');
    });
    $('.dw').click(function(){
        window.open('http://dimension-w.net');
    });
    $('.ty').click(function(){
        window.open('http://www.falcom.co.jp/tokyo_xanadu/');
    });
     $('.so').click(function(){
        window.open('http://sora-no-method.jp');
    });
    $('.cursor').hover(function(){
        $(this).css('cursor','auto');
    });
});

