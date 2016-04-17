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
		credits.addEventListener('click', function(event){
			var target = event.target;
			if(target.classList.contains('credits__overlay')
			|| target.classList.contains('credits__instruction')){
				this.classList.add('credits__overlay--is-hidden');
			}
		})
	});

	// instantiate flickity carousel
	var flkty = new Flickity( '.quote-list', {
		cellSelector: '.quote',
		wrapAround: true,
	});

	// define variables for GA event handlers
	var firstCta = document.getElementById('firstCtaBtn'),
		secondCta = document.getElementById('secondCtaBtn'),
		newsletter = document.getElementById('mc_embed_signup'),
		cards = document.querySelectorAll('.card'),
		footerLinks = document.querySelector('#footer').querySelectorAll('a');

	firstCta.addEventListener('click', function(){
		ga('send', 'event', 'Tour', 'click', this.id);
	});

	secondCta.addEventListener('click', function(){
		ga('send', 'event', 'Tour', 'click', this.id);
	});

	newsletter.addEventListener('submit', function(){
		ga('send', 'event', 'Community', 'submit', this.id);
	});
	// loop through all cards..
	for (var i = 0; i < cards.length; i++) {
		var btn = cards[i].querySelector('.card__btn--cta');
		// send event with plan name to GA on click
		btn.addEventListener('click', function(){
			var label = this.dataset.plan;
			ga('send', 'event', 'Plan', 'click', label);
		})
	};
	// loop through all footerLinks...
	for (var i = 0; i < footerLinks.length; i++) {
		var link = footerLinks[i];
		// send event with url to GA on click
		link.addEventListener('click', function(){
			var label = this.href;
			ga('send', 'event', 'Plan', 'click', label);
		})
	};

});

var toggleClassTrigger = function (newClass, element, trigger){
	var e = element,
		t = trigger,
		c = newClass;

	t.addEventListener('click', function(){
		e.classList.toggle(c);
	});
};

