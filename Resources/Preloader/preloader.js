

function trans(){

  anime({
    targets: '.screen1',
    top: ['0vh','100vh'],
    height: ['100vh','0vh'],
    delay: 200,
    duration: 600,
    easing: 'easeOutQuad'
  });
  
  anime({
    targets: '.screen2',
    top: ['0vh','100vh'],
    height: ['100vh','0vh'],
    delay: 700,
    duration: 500,
    easing: 'easeOutQuad'
  });
  
  anime({
    targets: '.screen3',
    top: ['0vh','100vh'],
    height: ['100vh','0vh'],
    delay: 1050,
    duration: 450,
    easing: 'easeOutQuad'
  });
  
  anime({
    targets: '.screen4',
    top: ['0vh','100vh'],
    height: ['100vh','0vh'],
    delay: 1300,
    duration: 350,
    easing: 'easeOutQuad'
  });
  anime({
    targets: '.screen5',
    top: ['0vh','100vh'],
    height: ['100vh','0vh'],
    delay: 1550,
    duration: 250,
    easing: 'easeOutQuad'
  });  
}



var circle1 = anime ({
  targets: ['.circle-1'],
  translateY: -24,
		translateX: 52,
		direction: 'alternate',
  loop: true,
  elasticity: 400,
		easing: 'easeInOutElastic',
	 duration: 1000,
		delay: 150,
});

var circle2 = anime ({
  targets: ['.circle-2'],
  translateY: 24,
		direction: 'alternate',
  loop: true,
  elasticity: 400,
		easing: 'easeInOutElastic',
	 duration: 1000,
		delay: 150,
});

var circle3 = anime ({
  targets: ['.circle-3'],
  translateY: -24,
		direction: 'alternate',
  loop: true,
  elasticity: 400,
		easing: 'easeInOutElastic',
	 duration: 1000,
		delay: 150,
});

var circle4 = anime ({
  targets: ['.circle-4'],
  translateY: 24,
		translateX: -52,
		direction: 'alternate',
  loop: true,
  elasticity: 400,
		easing: 'easeInOutElastic',
	 duration: 1000,
		delay: 150,
});


setTimeout(function(){
  anime({
    targets: '.circle-1',
    opacity: 0,
    duration:1000,
    easing: 'easeOutQuad'
  });

  anime({
    targets: '.circle-2',
    opacity: 0,
    duration:1000,
    easing: 'easeOutQuad'
  });

  anime({
    targets: '.circle-3',
    opacity: 0,
    duration:1000,
    easing: 'easeOutQuad'
  });

  anime({
    targets: '.circle-4',
    opacity: 0,
    duration:1000,
    easing: 'easeOutQuad'
  });  
  setTimeout(function(){trans();},100);


},4400);
