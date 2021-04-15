var mousePos = 0;
var currentPos = 0;
var position = 0;
var draggable = false;
var blockAnimeAdd, countAnimePlus = anime.timeline(), countAnimeMinus = anime.timeline();
var offset = 130;
var direction;
var dur = 1000;
var count = parseInt($('.stepper').text());

var count1 = parseInt($('.stepper1').text());

var count2 = parseInt($('.stepper2').text());

var count3 = parseInt($('.stepper3').text());


//handle dates
var countDownDate = new Date("Apr 17, 2021 12:00:00").getTime();
function myfunc() {
  
  var now = new Date().getTime();
  var timeleft = countDownDate - now;
      
  var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
  var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);


  console.log(count,count1,count2);

  
  
  if(count!=seconds)
  {

    if(count3!=days)
    {
      count3 = days;
      minus3();
    }

    if(count2!=hours)
    {
      count2 = hours;
      minus2();
    }

    if(count1!=minutes)
    {
      count1 = minutes;
      minus1();
    }

    count = seconds;
    $.when(minus()).then(function(){
      myfunc();
    })
  }

 
  setTimeout(() => { myfunc(); }, 100);
  
  
}



function minus() {
  direction = 'minus';
  countAnimeMinus = anime.timeline();

  $('.next').text(count).css('transform', 'translateY(100px) translateX(-50%)');
  console.log(count)

  countAnimeMinus.add({
      targets: '.active',
      translateY: -100,
      translateX: '-50%',
      duration: dur,
  })
  .add({
      targets: '.next',
      translateY: 0,
      translateX: '-50%',
      duration: 1500,
      offset: '-=' + dur,
  });
}


function minus1() {
  countAnimeMinus = anime.timeline();

  $('.next1').text(count1).css('transform', 'translateY(100px) translateX(-50%)');
  console.log(count1)

  countAnimeMinus.add({
    targets: '.active1',
    translateY: -100,
    translateX: '-50%',
    duration: dur,
})
.add({
    targets: '.next1',
    translateY: 0,
    translateX: '-50%',
    duration: 1500,
    offset: '-=' + dur,
});
}

function minus2() {
  countAnimeMinus = anime.timeline();

  $('.next2').text(count2).css('transform', 'translateY(100px) translateX(-50%)');
  console.log(count2)

  countAnimeMinus.add({
      targets: '.active2',
      translateY: -100,
      translateX: '-50%',
      duration: dur,
  })
  .add({
      targets: '.next2',
      translateY: 0,
      translateX: '-50%',
      duration: 1500,
      offset: '-=' + dur,
  });
}




function minus3() {
  countAnimeMinus = anime.timeline();

  $('.next3').text(count3).css('transform', 'translateY(100px) translateX(-50%)');
  console.log(count3)

  countAnimeMinus.add({
      targets: '.active3',
      translateY: -100,
      translateX: '-50%',
      duration: dur,
  })
  .add({
      targets: '.next3',
      translateY: 0,
      translateX: '-50%',
      duration: 1500,
      offset: '-=' + dur,
  });
}



setTimeout(() => {
    $('.hide').removeClass('hide');
}, 300);

myfunc();

