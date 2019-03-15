(function(){
	var shopElement = document.querySelector('.setup-artifacts-shop');
	var draggedItem = null;

	shopElement.addEventListener('dragstart', function (evt) {
	  if (evt.target.tagName.toLowerCase() === 'img') {
	    draggedItem = evt.target;
			evt.dataTransfer.setData('text/plain', evt.target.alt);

			Array.from(artifactsCell).forEach(function (item) {
				item.style.outline = '2px dashed red';
			})
			
	  }
	  
	});


	var artifactsElement = document.querySelector('.setup-artifacts');
	var artifactsCell = document.querySelectorAll('.setup-artifacts-cell');
	artifactsElement.addEventListener('dragstart' , function(evt) {
		evt.target.style.outline = '';
	});

	artifactsElement.addEventListener('drag', function (evt) {
		evt.preventDefault();
	  return false;
	});

	artifactsElement.addEventListener('dragover', function (evt) {
	  evt.target.style.backgroundColor = 'yellow';
	  evt.preventDefault();
	  return false;
	});

	artifactsElement.addEventListener('drop', function (evt) {
		Array.from(artifactsCell).forEach(function (item) {
			item.style.outline = 'none';
		})
	  evt.target.style.backgroundColor = '';
	  evt.target.appendChild(draggedItem);
	  evt.preventDefault();
	});


	artifactsElement.addEventListener('dragenter', function (evt) {
	  evt.target.style.backgroundColor = 'yellow';
	  evt.preventDefault();
	});

	artifactsElement.addEventListener('dragleave', function (evt) {
	  evt.target.style.backgroundColor = '';
	  evt.preventDefault();
	});
}());