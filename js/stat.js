(function(){
	var CLOUD_WIDTH = 420;
	var CLOUD_HEIGHT = 270;
	var CLOUD_X = 100;
	var CLOUD_Y = 10;
	var GAP = 10;
	var FONT_GAP = 30;
	var TEXT_WIDTH = 50;
	var COLL_HEIGHT = 150;
	var COLL_WIDTH = 40;
	var COLL_GAP = 50;

	var renderCloud = (ctx, x, y, color) => {
		ctx.fillStyle = color;
		ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
	};

	var getMaxElement = (arr) => { 
		var maxElement = arr[0];

		for (var i = 0; i < arr.length; i++) {
			if (arr[i] > maxElement) {
				maxElement = arr[i];
			}
		}
		return maxElement;
	};

	var getColor = (names) => { 
		if(names === 'Вы') {
			return 'rgba(255, 0, 0, 1)';
		}
		return 'rgba(0, 0,' + randomInteger(0, 255) + ', 1)'; 
	};




	var randomInteger = (min, max) => { 
		var rand = min - 0.5 + Math.random() * (max - min + 1);
		 rand = Math.round(rand);
		return rand;
	}

	window.renderStatistics = (ctx, names, times) => {

		renderCloud(ctx, CLOUD_X  + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
		renderCloud(ctx, CLOUD_X , CLOUD_Y, '#fff');
		
		ctx.fillStyle = '#000';
		ctx.font = '16px PT Mono';
		ctx.fillText('Ура вы победили!', CLOUD_X + GAP, CLOUD_Y + FONT_GAP + GAP);
		ctx.fillText('Список результатов:', CLOUD_X + GAP, CLOUD_Y + TEXT_WIDTH + GAP);

		var maxTime = getMaxElement(times);

		for (var i = 0; i < names.length; i++) {
			ctx.fillText(names[i], CLOUD_X  + FONT_GAP + GAP + (TEXT_WIDTH + FONT_GAP + GAP) * i, CLOUD_HEIGHT);

			ctx.fillStyle = getColor(names[i]);
			ctx.fillRect(CLOUD_X  + FONT_GAP + GAP + (COLL_WIDTH + COLL_GAP) * i, CLOUD_HEIGHT - (TEXT_WIDTH - FONT_GAP) - (COLL_HEIGHT * times[i]) / maxTime, COLL_WIDTH, (COLL_HEIGHT * times[i]) / maxTime);

			ctx.fillStyle = '#000';
			ctx.fillText(Math.round(times[i]), CLOUD_X  + FONT_GAP + GAP + (TEXT_WIDTH + FONT_GAP + GAP) * i, CLOUD_HEIGHT - FONT_GAP - (COLL_HEIGHT * times[i]) / maxTime);
		}
	};
}())

