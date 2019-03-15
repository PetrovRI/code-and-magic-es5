(function(){
  var userNameInput = document.querySelector('.setup-user-name');

  userNameInput.addEventListener('invalid', function (evt) {
    if(userNameInput.validity.valueMissing) {
      userNameInput.setCustomValidity('поле заполни!');
    } else if (userNameInput.validity.tooShort) {
      userNameInput.setCustomValidity('поле должно содержать минимум 2 символа');
    } else if (userNameInput.validity.tooLong) {
      userNameInput.setCustomValidity('поле должно содержать не более 25 символов');
    } else {
        userNameInput.setCustomValidity('');
      }
  });
  // обработчик для Edge
  userNameInput.addEventListener('input', function (evt) {
    var target = evt.target;
    if (target.value.length < 2) {
      target.setCustomValidity('Имя должно состоять минимум из 2-х символов');
    } else {
      target.setCustomValidity('');
    }
  });
}());



