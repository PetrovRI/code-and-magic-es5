
(function(){
  var setup = document.querySelector('.setup');
  var dialogHandler = setup.querySelector('.upload');


  dialogHandler.addEventListener('mousedown', function (evt) {
    evt.preventDefault();
    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    var dragged = false;
    var closeBtn = document.querySelector('.setup-close');

    closeBtn.addEventListener('click', function() {
      setup.style.top = 80 + 'px';
      setup.style.left = 50 + '%';
    })




    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();
      dragged = true;

      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      setup.style.top = (setup.offsetTop - shift.y) + 'px';
      setup.style.left = (setup.offsetLeft - shift.x) + 'px';
    };



    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);

      if (dragged) {
        var onClickPreventDefault = function (evt) {
          evt.preventDefault();
          dialogHandler.removeEventListener('click', onClickPreventDefault);
        }
        dialogHandler.addEventListener('click', onClickPreventDefault);
      }
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });


}())

