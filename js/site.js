window.addEventListener('load', function(){
	var ammenity = document.querySelectorAll('.ammenity'),
		card = document.querySelectorAll('.card');

	// add triggers to .ammenity elements
	/*
	for (var i = 0; i < ammenity.length; i++) {
		if(!ammenity[i].classList.contains('ammenity--small')){
			toggleClassTrigger('ammenity--expanded', ammenity[i], ammenity[i]);
		}
	};
	*/

	// add triggers to .card elements
	for (var i = 0; i < card.length; i++) {
		var btn = card[i].querySelector('.card__btn'),
			body = card[i].querySelector('.card__body');

		toggleClassTrigger('card--active', card[i], btn);
		toggleClassTrigger('card__body--expanded', body, btn);
		// replace button text, add --cta modifier, and listen for 2nd click
		btn.addEventListener('click', function(){
			//this.classList.add('card__btn--cta');
			if(this.classList.contains('card__btn--ancillary')){
				var parent = this.parentElement,
					ctaBtn = parent.querySelector('.card__btn--cta');
				this.style.display = "none";
				ctaBtn.style.display = "block";
			}
			else{
				//this.innerText = 'Details';
			}
			// TO DO: properly remove eventlisteners after first click 
			//this.removeEventListener('click');
			this.addEventListener('click', function(){
				// take us to the proper purchase form
				console.log('2nd click');
				//document.location.href = 'http://google.com';
			});
		});
	};// end of .card loop
});

var toggleClassTrigger = function (newClass, element, trigger){
	var e = element,
		t = trigger,
		c = newClass;
	t.addEventListener('click', function(){
		e.classList.toggle(c);
	});
};

