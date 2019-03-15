(function(){
	var setup = document.querySelector('.setup');
	var setupOpen = document.querySelector('.setup-open');
	var setupClose = document.querySelector('.setup-close');

	var escKeyCode = 27;
	var enterKeyCode = 13;


	var onPopupEscPress = function(evt) {
		if (evt.keyCode === escKeyCode) {
			closePopup();
		}
	};

	var openPopup = function () {
		setup.classList.remove('hidden');
		document.addEventListener('keydown', onPopupEscPress)
	}

	var closePopup = function () {
		setup.classList.add('hidden');
		document.removeEventListener('keydown', onPopupEscPress);
	};

	setupOpen.addEventListener('click', function () {
		openPopup();
	});

	setupClose.addEventListener('click', function () {
		closePopup();
	});

	setupClose.addEventListener('keydown', function (evt) {
		if(ect.keyCode === enterKeyCode) {
			closePopup();
		}
	});
}())
