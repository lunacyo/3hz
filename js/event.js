$(document).ready(function(){
    $('#ff').fullpage({
    loopTop: true,
    loopBottom: true,
    navigation: true,
    navigationPosition: 'left',
    afterRender: function(){
        $('video').get(0).play();
        $('video').get(1).play();
        $('video').get(2).play();
        $('video').get(3).play();
        $('video').get(4).play();
				}
    });
});
window.onload=function(){
$('.logo_Wrap').css('display','block');
$('.3hz').textillate({
  in: { effect: 'zoomInLeft',sequence:true,
    delayScale:4.5,
    delay: 45,
},
  out: { effect: 'rotateOut',shuffle:true},
  loop: true
});
}
