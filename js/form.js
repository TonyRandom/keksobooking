'use strict';

(function(){

//ФОРМА form.js


 //расставить реквайред
 //проверить типы
 // ограничения в разметке

 var priceField = document.querySelector('#price');
var houseTypeField = document.querySelector('#type');

houseTypeField.addEventListener('change', function () {
	if (houseTypeField.value === 'house') {
		priceField.min = 5000;
	}
	if (houseTypeField.value === 'flat') {
		priceField.min = 1000;
	}
	if (houseTypeField.value === 'bungalo') {
		priceField.min = 0;
	}
	
	if (houseTypeField.value === 'palace') {
		priceField.min = 10000;
	}

})





//синхронизация времени заезда

var timeInField = document.querySelector('#timein');
var timeOutField = document.querySelector('#timeout');


timeInField.addEventListener('change', function () {
	if (timeInField.selectedIndex === 0) {
		timeOutField.selectedIndex = 0;
	}
	if (timeInField.selectedIndex === 1) {
		timeOutField.selectedIndex = 1;
	}
	if (timeInField.selectedIndex === 2) {
		timeOutField.selectedIndex = 2;
	}
})

timeOutField.addEventListener('change', function () {
	if (timeOutField.selectedIndex === 0) {
		timeInField.selectedIndex = 0;
	}
	if (timeOutField.selectedIndex === 1) {
		timeInField.selectedIndex = 1;
	}
	if (timeOutField.selectedIndex === 2) {
		timeInField.selectedIndex = 2;
	}
})

//. Поле «Количество комнат» синхронизировано с полем «Количество мест»

var roomNumberField = document.querySelector('#room_number');
var capacityField = document.querySelector('#capacity');

/* capacityField.options[0].removeAttribute('selected'); */

//задать вместимость для одной комнаты по умолчанию. так как количеством меняется только по  клику на первый 
	capacityField.options[0].disabled= true;
	capacityField.options[1].disabled= true;
	capacityField.options[2].disabled= false;
	capacityField.options[3].disabled= true;


roomNumberField.addEventListener('click', function () {

	if (roomNumberField.selectedIndex == 0) {
		
		capacityField.options[0].disabled= true;
		capacityField.options[1].disabled= true;
		capacityField.options[2].disabled= false;
		capacityField.options[3].disabled= true;
	}
	if (roomNumberField.selectedIndex == 1) {
		capacityField.options[0].disabled= true;
		capacityField.options[1].disabled= false;
		capacityField.options[2].disabled= false;
		capacityField.options[3].disabled= true;
	}
		
	if (roomNumberField.selectedIndex == 2) {
		capacityField.options[0].disabled= false;
		capacityField.options[1].disabled= false;
		capacityField.options[2].disabled= false;
		capacityField.options[3].disabled= true;
	}
	if (roomNumberField.selectedIndex === 3) {
		capacityField.options[0].disabled= true;
		capacityField.options[1].disabled= true;
		capacityField.options[2].disabled= true;
		capacityField.options[3].disabled= false;
	}
});



//ВАЛИДАЦИЯ ФОРМЫ




/* 
 var checkValidity = function(input) {

    var validity = input.validity;

    if (validity.patternMismatch) {
      this.addInvalidity('This is the wrong pattern for this field');
    }

    if (validity.rangeOverflow) {
      var max = getAttributeValue(input, 'max');
      this.addInvalidity('The maximum value should be ' + max);
    }

    if (validity.rangeUnderflow) {
      var min = getAttributeValue(input, 'min');
      this.addInvalidity('The minimum value should be ' + min);
    }

    if (validity.stepMismatch) {
      var step = getAttributeValue(input, 'step');
      this.addInvalidity('This number needs to be a multiple of ' + step);
    }

};


console.log(CustomValidation()); */



var form = document.querySelector('.notice__form'); //форма
var inputs = form.querySelectorAll('input'); // все инпуты формы
var titleInput = form.querySelector('#title');
console.log(inputs);

var resetForm = function () {
	for (var i = 0; i < inputs.length; i++) {
		inputs[i].value = '';
	}

}

titleInput.addEventListener('invalid', function () {
	if (titleInput.validity.tooShort) {
		titleInput.setCustomValidity('Заголовок должен состоять минимум из ' + titleInput.getAttribute('minlength') + ' символов. Сейчас длина заголовка ' + titleInput.value.length + ' символа(-ов)');
	} else if (titleInput.validity.tooLong) {
		input.setCustomValidity('Имя должно состоять максимум из 100 символов');
	}  else if (titleInput.validity.valueMissing) {
		input.setCustomValidity('Обязательное поле')
		} 
		//самое главное при работе с обработчиками валидации – не забыть сбросить значение поля, если значение стало корректно
		else {
			titleInput.setCustomValidity('')
		} 

	});



//ОТПРАВКА ФОРМЫ
//ФОРМА ОТПРАВЛЯЕТСЯ, только если все поля верны

var formSubmitButton = document.querySelector('.form__submit');


formSubmitButton.addEventListener('click', function (evt) {




	if(form.checkValidity() === true) {

	window.save(new FormData(form), successCase, errorCase);
	resetForm();
	evt.preventDefault();
	}

})


var successCase = function (data) {
	console.log(data);
};

var errorCase = function (error) {
	console.error(error);
}
    
})();