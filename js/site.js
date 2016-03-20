window.addEventListener('load', function(){
	var ammenity = document.querySelectorAll('.amenity'),
		cards = document.querySelectorAll('.card');

	// add triggers to .ammenity elements
	for (var i = 0; i < ammenity.length; i++) {
		if(!ammenity[i].classList.contains('amenity--small')){
			toggleClassTrigger('amenity--expanded', ammenity[i], ammenity[i]);
		}
	};

	// add triggers to .card elements
	for (var i = 0; i < cards.length; i++) {
		var card = cards[i],
			btn = card.querySelector('.card__btn--ancillary'),
			ctaBtn = card.querySelector('.card__btn--cta');
		btn.addEventListener('click', function(){
			var el = event.target,
				parent = el.parentElement.parentElement,
				parentBtn = this,
				parentCtaBtn = parent.querySelector('.card__btn--cta'),
				parentHead = parent.querySelector('.card__header');
			// add active class to card
			parent.classList.add('card--active');
			// swap anciallary and cta buttons
			parentBtn.style.display = "none";
			parentCtaBtn.style.display = "block";
			// add event listener to collapse card
			parentHead.addEventListener('click', function(){
				// remove active class from card
				parent.classList.remove('card--active');
				// swap anciallary and cta buttons
				parentBtn.style.display = "block";
				parentCtaBtn.style.display = "none";
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

