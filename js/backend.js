(function(){
	var URL = 'https://js.dump.academy/code-and-magick/data';

	window.backend = {

			load: function(onSuccess, onError) {
				var xhr = new XMLHttpRequest();
				xhr.responseType = 'json';

				xhr.open('GET', URL);

				xhr.addEventListener('load', function() {
					onSuccess(xhr.response);
				});

				xhr.send();
			}

	}
}())

