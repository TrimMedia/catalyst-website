window.addEventListener('load', function(){
	var ammenity = document.querySelectorAll('.amenity'),
		cards = document.querySelectorAll('.card'),
		creditsTrigger = document.querySelector('#creditsTrigger'),
		credits = document.querySelector('.credits__overlay');

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

	// add trigger to show website credits
	creditsTrigger.addEventListener('click', function(){
		credits.classList.remove('credits__overlay--is-hidden');
		credits.addEventListener('click', function(){
			var target = event.target;
			if(target.classList.contains('credits__overlay') || target.classList.contains('credits__instruction')){
				this.classList.add('credits__overlay--is-hidden');
			}
		})
	})
});

var toggleClassTrigger = function (newClass, element, trigger){
	var e = element,
		t = trigger,
		c = newClass;

	t.addEventListener('click', function(){
		e.classList.toggle(c);
	});
};

