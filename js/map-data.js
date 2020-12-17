'use strict'; 

(function(){

//как забить массив заданными числовыми значениями


//функция возвращающая случайное число из заданного диапазона

var renderRandomNumber = function (min, max) {
	var randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
	return randomNumber;
	}
  
//функция выбора случайного элемента из массива



// функция случайного перемещивания элементов массива



//функция выдающая несколько случайных элементов из массива 

// все данные, которые будем использовать.

//создадим функцию создания объектов с такими данными.



// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!



//similarHotels - массив, который должен получить с сервера


var errorHandler = function (errorMessage) {
	var node = document.createElement('div');
	node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
	node.style.position = 'absolute';
	node.style.left = 0;
	node.style.right = 0;
	node.style.fontSize = '30px';
	
	node.textContent = errorMessage; 
	document.body.insertAdjacentElement('afterbegin', node);
  };


  


// СОЗДАНИЕ ПИНОВ И ПОДОБНЫХ ОБЪЯВЛЕНИЙ

var map = document.querySelector('.map');
/* map.classList.remove('map--faded'); */

//map__pins - куда вставлять все ПИНы
window.hotelsContainer = document.querySelector('.map__pins');



// элемент, КУДА будем копировать разметку из шаблона
var hotelPin = document.querySelector('.map__pin');

// ЭТО ПИН
var pinTemplate = document.querySelector('template') 
	.content
	.querySelector('.map__pin');


// это генерация одного пина. надо потом эту функцию вставлять в цикл, который принимает на вход массив

var generatePinFromTemplate = function (hotel) {

	var hotelPinElement = pinTemplate.cloneNode(true);

	//так для МОКа координаты задавались
	/* hotelPinElement.style.top = renderRandomNumber(100, 500) + 'px'; // ТАК ЗАДАЮТСЯ КООРДИНАТЫ!!!!!!!!!! задавать надо ПИНУ
	hotelPinElement.style.left = renderRandomNumber(300, 900) + 'px';
 */
	
	hotelPinElement.style.top = hotel.location.y + 'px'; // ТАК ЗАДАЮТСЯ КООРДИНАТЫ!!!!!!!!!! задавать надо ПИНУ
	hotelPinElement.style.left = hotel.location.x + 'px';

	var pinAvatar = hotelPinElement.querySelector('img');
	
	pinAvatar.src = hotel.author.avatar; 
	
	pinAvatar.alt = hotel.offer.description;  
	
	return hotelPinElement;
}





//Отрисуйте сгенерированные DOM-элементы в блок .map__pins. Для вставки элементов используйте DocumentFragment.

// ФУНКЦИЯ ДОБАВЛЕНИЯ В ВЕРСТКУ ЧЕРЕЗ ДОКУМЕНТ ФРАГМЕНТ

	window.loadedHotelData = []; // записываю в переменную загруженные данные

	window.insertMapPins = function (hotels) {
		window.loadedHotelData = hotels;
		var fragment = document.createDocumentFragment(); 
		
		/* console.log(window.loadedHotelData); */
    
    for (var i = 0; i < window.loadedHotelData.length; i++) { 
		var newPin = generatePinFromTemplate(window.loadedHotelData[i]);
		newPin.classList.add('pin--'+ i);
		console.log(newPin);
       

        fragment.appendChild(newPin);
    }

    hotelsContainer.appendChild(fragment);

	};


	


	

// функции скрытия и показа отрисованных меток
/* 
var hideMapPins = function () {
	var mapPins = document.querySelectorAll('.map__pin');
	for (var i = 1; i <= similarHotels.length; i++ ) {
		mapPins[i].classList.add('hidden'); 
	}
}

hideMapPins();

var showMapPins = function () {
	var mapPins = document.querySelectorAll('.map__pin');
	for (var i = 1; i <= similarHotels.length; i++ ) {
		mapPins[i].classList.remove('hidden'); 
	}
}
 */








// ОБЪЯВЛЕНИЯ

//ПО ЗАДАНИЮ "РАБОТА С СЕТЬЮ" пока не надо делать загрузку объявления



/*.На основе ПЕРВОГО по порядку элемента ИЗ СГЕНЕРИРОВАННОГО МАССИВА и шаблона .map__card создайте DOM-элемент объявления, заполните его
данными из объекта и вставьте полученный DOM-элемент

в блок .map перед блоком.map__filters-container*/ 
//Можно задать переменную для .map__filters-container перед которым надо вставить элементы. И затем вместо аппенд использовать бифор


// map - КУДА ВСТАВЛЯТЬ

var mapFilter= document.querySelector('.map__filters-container');

//ШАБЛОН, КОТОРЫЙ БУДЕТ КОПИРОВАТЬ -- ЭТО ОБЪЯВЛЕНИЕ

 var hotelTemplate = document.querySelector('template')
	.content
	.querySelector('.map__card'); 




// по порядку задаю значения, но не добавляю никуда

//создать функцию генерации объявления

 var generateAd = function (hotel) {

var hotelElement = hotelTemplate.cloneNode(true);

var title = hotelElement.querySelector('h3');
title.classList.add('popup__title');
title.textContent = hotel.offer.title;



var address = hotelElement.querySelector('p').querySelector('small');
address.classList.add('popup__text--address');
address.textContent = hotel.offer.address;

var price = hotelElement.querySelector('.popup__price');
price.classList.add('popup__text--price');
price.textContent = hotel.offer.price + ' ₽/ночь';


var type = hotelElement.querySelector('h4');
type.classList.add('popup__type');
var typeName = hotel.offer.type;
if(typeName == 'flat'){
	type.textContent ='Квартира';
}
if(typeName == 'bungalo'){
	type.textContent ='Бунгало';
}
if(typeName == 'palace') {
	type.textContent ='Дворец';
}
;


var capacity = hotelElement.querySelector('p:nth-of-type(3)');
capacity.classList.add('popup__text--capacity');
capacity.textContent = hotel.offer.rooms + ' комната(ы) для ' + hotel.offer.guests + ' гост(я)ей';


var time = hotelElement.querySelector('p:nth-of-type(4)');
time.classList.add('popup__text--time');
time.textContent = 'Заезд после ' + hotel.offer.checkin + ', выезд до ' + hotel.offer.checkout ;



// в шаблоне уже есть список с классами. сделать проверку, если в массиве нет значения Н, то удалить класс Н


var popupFeatures = hotelElement.querySelector('.popup__features'); // нашел УЛ


var featureItems = hotel.offer.features;


//сматчить каждый элемент из списка ул

var wifiFeature = hotelElement.querySelector('.popup__features').querySelector('li:nth-child(1)');
var dishwasherFeature = hotelElement.querySelector('.popup__features').querySelector('li:nth-child(2)');
var parkingFeature = hotelElement.querySelector('.popup__features').querySelector('li:nth-child(3)');
var washerFeature = hotelElement.querySelector('.popup__features').querySelector('li:nth-child(4)');
var elevatorFeature = hotelElement.querySelector('.popup__features').querySelector('li:nth-child(5)');
var conditionerFeature = hotelElement.querySelector('.popup__features').querySelector('li:nth-child(6)');

if (featureItems.indexOf('wifi') == -1) {

	popupFeatures.removeChild(wifiFeature);
}

if (featureItems.indexOf('dishwasher') == -1) {

	popupFeatures.removeChild(dishwasherFeature);
}

if (featureItems.indexOf('parking') == -1) {

	popupFeatures.removeChild(parkingFeature);
}

if (featureItems.indexOf('washer') == -1) {

	popupFeatures.removeChild(washerFeature);
}

if (featureItems.indexOf('elevator') == -1) {

	popupFeatures.removeChild(elevatorFeature);
}

if (featureItems.indexOf('conditioner') == -1) {

	popupFeatures.removeChild(conditionerFeature);
}



var popupDescription = hotelElement.querySelector('p:nth-of-type(5)');
popupDescription.classList.add('.popup__description');
popupDescription.textContent = hotel.offer.description;


var popupPhotos = hotelElement.querySelector('.popup__pictures');
popupPhotos.classList.add('.popup__photos');

popupPhotos.querySelector('li:nth-child(1)').querySelector('img').src = hotel.offer.photos[0];

popupPhotos.querySelector('li:nth-child(1)').querySelector('img').classList.add('popupPhoto');
popupPhotos.querySelector('li:nth-child(2)').querySelector('img').src = hotel.offer.photos[1];
popupPhotos.querySelector('li:nth-child(2)').querySelector('img').classList.add('popupPhoto');
popupPhotos.querySelector('li:nth-child(3)').querySelector('img').src = hotel.offer.photos[2];
popupPhotos.querySelector('li:nth-child(3)').querySelector('img').classList.add('popupPhoto');

var popupAvatar = hotelElement.querySelector('img');
popupAvatar.src = hotel.author.avatar;

return hotelElement;

}; 




/* console.log(similarHotels[2]);
console.log(generateAd(similarHotels[2])); */












/* 1. Активация страницы

Для этого нужно добавить обработчик
события mouseup на элемент .map__pin--main.
Обработчик события mouseup должен вызывать функцию, которая будет отменять
изменения DOM-элементов, описанные в пункте «Неактивное состояние»
технического задания. */

//почему то в моем шаблоне notice__form вместо ад форм

var noticeForm = document.querySelector('.notice__form');
var formElements = noticeForm.querySelectorAll('.form__element');

var activateMap = function () {
	map.classList.remove('map--faded');
	noticeForm.classList.remove('notice__form--disabled');
	document.querySelector('.notice__header').removeAttribute('disabled');

	for (var i = 0; i<formElements.length; i++) {
		formElements[i].disabled=false;
	}
}


var mapPinMain= document.querySelector('.map__pin--main');
mapPinMain.addEventListener('click', function () {
	if (map.classList.contains('map--faded')) {
activateMap();
window.load(insertMapPins, errorHandler); 
addressField.value = MAIN_PIN_LOCATION__ACTIVE.x + ", " + MAIN_PIN_LOCATION__ACTIVE.y;
} 
}
);

// по клику на метки показывать страницу описания ДЕЛЕГИРОВАНИЕ

// отлавливать клики по контейнеру 



hotelsContainer.addEventListener('click', function (evt) {
	var target = evt.target.closest('button'); //так клик показывает кнопку, даже если клик по изображению внутри кнопки
	if (!target) { //чтобы только по кнопке срабатывал
		return;}		
	if (target.classList.contains('pin--0')) {
		map.insertBefore(generateAd(window.loadedHotelData[0]), mapFilter);
	} 
	if (target.classList.contains('pin--1')) {
		map.insertBefore(generateAd(window.loadedHotelData[1]), mapFilter);
	} 
	if (target.classList.contains('pin--2')) {
		map.insertBefore(generateAd(window.loadedHotelData[2]), mapFilter);
	} 
	if (target.classList.contains('pin--3')) {
		map.insertBefore(generateAd(window.loadedHotelData[3]), mapFilter);
	} 
	if (target.classList.contains('pin--4')) {
		map.insertBefore(generateAd(window.loadedHotelData[4]), mapFilter);
	} 
	if (target.classList.contains('pin--5')) {
		map.insertBefore(generateAd(window.loadedHotelData[5]), mapFilter);
	} 
	if (target.classList.contains('pin--6')) {
		map.insertBefore(generateAd(window.loadedHotelData[6]), mapFilter);
	} 
	if (target.classList.contains('pin--7')) {
		map.insertBefore(generateAd(window.loadedHotelData[7]), mapFilter);
	} 
	if (target.classList.contains('pin--8')) {
		map.insertBefore(generateAd(window.loadedHotelData[8]), mapFilter);
	}
	if (target.classList.contains('pin--9')) {
		map.insertBefore(generateAd(window.loadedHotelData[9]), mapFilter);
	}
	if (target.classList.contains('pin--10')) {
		map.insertBefore(generateAd(window.loadedHotelData[10]), mapFilter);
	}
})



/* Заполнение поля адреса
КООРДИНАТА ВЫДАЕТСЯ ОТ ЛЕВОГО ВЕРХНЕГО УГЛА МЕТКИ. ЕЕ НАДО СМЕСТИТЬ НА КОНЧИК МЕТКИ И ВЫДАТЬ ПРИ КЛИКЕ В ОКНО АДРЕСА
(то есть вначале у меня ее центровые значение, а после маусдаун надо добавить к координатам размер хвоста. ) */

//вычислить размеры метки из разметки и записать в константу.

var PIN_WIDTH = 40;
var PIN_HEIGHT = 40;
var PIN_END = 18;

//функция определяющая местоположение
var getCoords = function(elem) {
	let box = elem.getBoundingClientRect();
	return { top: box.top + pageYOffset, left: box.left + pageXOffset }; }

	console.log(getCoords(mapPinMain));

var MAIN_PIN_LOCATION = {
	y: mapPinMain.getBoundingClientRect().top + pageYOffset + (PIN_HEIGHT/2),
	x: mapPinMain.getBoundingClientRect().left + pageXOffset + (PIN_WIDTH/2) 
} 

var MAIN_PIN_LOCATION__ACTIVE = {
	y: mapPinMain.getBoundingClientRect().top + pageYOffset + PIN_HEIGHT + PIN_END,
	x: mapPinMain.getBoundingClientRect().left + pageXOffset + (PIN_WIDTH/2) 
} 

//задаю стандартное значение

var addressField = document.querySelector('#address');
addressField.value = MAIN_PIN_LOCATION.x + ", " + MAIN_PIN_LOCATION.y;

/* СДЕЛАНО Перемещение метки приводит к заполнению поля адреса. Поэтому в обработчике события mouseup на элементе метки, кроме вызова метода, переводящего страницу в активное состояние, должен находиться вызов метода, который устанавливает значения поля ввода адреса. 

-найти поле адреса
var addressField = document.querySelector();

.addEventListener(‘mouseup’. Function (event) {

addressField.value = (event.clientX + pageXOffset + PIN_WIDTH) +”, ” + (event.clientY + pageYOffset+PIN_HEIGHT);

})

СДЕЛАНО поле адреса должно быть заполнено всегда, даже сразу после открытия страницы. Мы можем взять за исходное значение поля адреса середину метки. А при «перетаскивании» значение поля изменится на то, на которое будет указывать острый конец метки.
 */


// MODULE 5

//активацию окна изменил на клик

//map - ограничивает область перемещения


mapPinMain.addEventListener('mousedown', function(evt) {
	
	evt.preventDefault();

	var startCoords = {
		x: evt.clientX,
		y: evt.clientY
	};
	
	console.log(startCoords.x);

	var onMouseMove = function (moveEvt) {
		moveEvt.preventDefault();
		var shift = {
			x: startCoords.x - moveEvt.clientX,
			y: startCoords.y - moveEvt.clientY
		}
		

		startCoords = {
			x: moveEvt.clientX,
			y: moveEvt.clientY
		} 

		//добавить в поле запись адреса!!!!!
		addressField.value = startCoords.x + ", " + startCoords.y;

		mapPinMain.style.left = (mapPinMain.offsetLeft - shift.x) + 'px';
		mapPinMain.style.top = (mapPinMain.offsetTop - shift.y) + 'px';
	}

	var onMouseUp = function (upEvt) {
		upEvt.preventDefault();
		map.removeEventListener('mousemove', onMouseMove);
		map.removeEventListener('mouseup', onMouseUp);
	   };

	

	   map.addEventListener('mousemove', onMouseMove);
	   map.addEventListener('mouseup', onMouseUp);

}) 




    
})();