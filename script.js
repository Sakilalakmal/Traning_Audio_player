const btn1 = document.getElementById('track1');
const btn2 = document.getElementById('track2');
const btn3 = document.getElementById('track3');

btn1.addEventListener('click',function(){
  const audio = new Audio("audio/track-1.mp3");
  audio.play();
});


btn2.addEventListener('click',function(){
  const audio = new Audio("audio/track-2.mp3");
  audio.play();
});

btn3.addEventListener('click',function(){
  const audio = new Audio("audio/track-3.mp3");
  audio.play();
});







