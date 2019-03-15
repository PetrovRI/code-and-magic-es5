'use strict';
(function(){

var names = ['Иван', 'Хуан', 'Мария', 'Кристоф', 'Юлия', 'Виктор', 'Люпита', 'Вашингтон'];
var lastNames = ['Да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Игвинг'];
var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161', 'rgb(56, 159, 117)','rgb(215, 210, 55', 'rgb(0, 0, 0)'];
var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];
var fireballColors = ['#ee4830', '#30a8ee' ,'#5ce6c0', '#e848d5', '#e6e848'];


var setupSimilarList = document.querySelector('.setup-similar');
var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');


//Генерируем шаблон волшебника.
var getWizardElement = (wizard) => {
	var templateClone = similarWizardTemplate.cloneNode(true);

	templateClone.querySelector('.setup-similar-label').textContent =  wizard.name;
	templateClone.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
	templateClone.querySelector('.wizard-eyes').style.fill = wizard.colorEyes

	return templateClone;
};


//отрисовка магов
window.backend.load(function(chudiki) {
	var fragment = document.createDocumentFragment();

	for(var i = 0; i < 4; i++) {
		fragment.appendChild(getWizardElement(chudiki[i]));
	}
	similarListElement.appendChild(fragment);
})

setupSimilarList.classList.remove('hidden');


var wizardCoat = document.querySelector('.wizard-coat');
var wizardEyes = document.querySelector('.wizard-eyes');
var fireball = document.querySelector('.setup-fireball-wrap');

wizardCoat.addEventListener('click', function() {
	this.style.fill = window.utils.getRandomElement(coatColors);
});

wizardEyes.addEventListener('click', function() {
	this.style.fill = window.utils.getRandomElement(eyesColors);
});

fireball.addEventListener('click', function() {
	this.style.backgroundColor = window.utils.getRandomElement(fireballColors);
});



}())
