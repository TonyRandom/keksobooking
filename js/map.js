
/*Создайте массив, состоящий из 8 сгенерированных JS объектов, которые
будут описывать похожие объявления неподалёку. Структура объектов
должна быть следующей: */

// объявляю массив
var similarHotels = [];

//как забить массив заданными числовыми значениями

var numbersArray = [];

var arrayPush = function (min, max) {
	var newArray = [];
  for (var i = min; i<= max; i++) {
    newArray.push(i);

  } 
    return newArray;
}

//функция возвращающая случайное число из заданного диапазона

var renderRandomNumber = function (min, max) {
	var randomNumber = Math.floor(Math.random() * (max - min + 1) + min);

	return randomNumber;
	}
  
//функция выбора случайного элемента из массива

var renderRandomArrayItem = function(array) {
	var i = renderRandomNumber(0, array.length-1);
	var randomItem = array[i];
	return randomItem;
}

// функция случайного перемещивания элементов массива

function shuffle(array) {
	var currentIndex = array.length, temporaryValue, randomIndex;
  
	while (0 !== currentIndex) {
  
	  randomIndex = Math.floor(Math.random() * currentIndex);
	  currentIndex -= 1;
  
	  temporaryValue = array[currentIndex];
	  array[currentIndex] = array[randomIndex];
	  array[randomIndex] = temporaryValue;
	}
  
	return array;
  }


//функция выдающая несколько случайных элементов из массива // случайным должно быть число окончания цикла. и до этого перемеживать надо

var pushRandomArrayItems = function (array) {
	shuffle(array);// перемешаем массив
	var randomArrayItems = '';
	for (var i = 0; i<= renderRandomNumber(0, array.length); i++) {
	randomArrayItems += array[i] +' ';
	}
	return randomArrayItems;
}


// все данные, которые будем использовать.

var TITLE_DATA = ["Большая уютная квартира", "Маленькая неуютная квартира", "Огромный прекрасный дворец", "Маленький ужасный дворец", "Красивый гостевой домик", "Некрасивый негостеприимный домик", "Уютное бунгало далеко от моря", "Неуютное бунгало по колено в воде"];
var TYPE_DATA = ['palace', 'flat', 'house', 'bungalo'];
var CHECKINOUT_DATA = ['12:00', '13:00', '14:00'];
var FEATURES_DATA = ["wifi", "dishwasher", "parking", "washer", "elevator", "conditioner"]; // надо сделать массив строк случайной длины из ниже предложенных
var PHOTOS_DATA = ["http://o0.github.io/assets/images/tokyo/hotel1.jpg", "http://o0.github.io/assets/images/tokyo/hotel2.jpg", "http://o0.github.io/assets/images/tokyo/hotel3.jpg"];

// address ограничения для Х 300- 900 для Y 100 - 500.



//по порядку сгенерируем каждое значение

/* var avatar = 'img/avatars/user' + '0' + arrayPush(2, 8)[0] + '.png';

var title = TITLE_DATA[0];

var address = renderRandomNumber(300, 900) + ', ' + renderRandomNumber(100, 500); 

var price = renderRandomNumber(1000, 1000000);

var type = renderRandomArrayItem(TYPE_DATA);

var rooms = renderRandomNumber(1, 5);

var guests = renderRandomNumber(1, 10); //????????????????????????

var checkin = renderRandomArrayItem(CHECKINOUT_DATA);

var checkout = renderRandomArrayItem(CHECKINOUT_DATA);

var features = pushRandomArrayItems(FEATURES_DATA);

var description = '';

var photos = shuffle(PHOTOS_DATA);

var location = {
	x: renderRandomNumber(300, 900),
	y: renderRandomNumber(130, 630)
}; */


//ВСЕ ТОЖЕ САМОЕ ПРОПИСЫВАЮ ОБЪЕКТАМИ


/* var author = {};
var offer = {}; */

var hotel = {

author: {
	avatar: 'img/avatars/user' + '0' + arrayPush(2, 8)[0] + '.png'
},

offer: {
	title: shuffle(TITLE_DATA)[0],

	address: renderRandomNumber(300, 900) + ', ' + renderRandomNumber(100, 500),

	price: renderRandomNumber(1000, 1000000),

	type: renderRandomArrayItem(TYPE_DATA),

	rooms: renderRandomNumber(1, 5),

	guests: renderRandomNumber(1, 10), //????????????????????????

	checkin: renderRandomArrayItem(CHECKINOUT_DATA),

	checkout: renderRandomArrayItem(CHECKINOUT_DATA),

	features: pushRandomArrayItems(FEATURES_DATA),

	description: '',

	photos: shuffle(PHOTOS_DATA),

	location: {
		x: renderRandomNumber(300, 900),
		y: renderRandomNumber(130, 630)
	}
}

}

console.log(hotel);


 
//создадим функцию создания объектов с такими данными.

var generateHotelsArray = function () {
	var similarObject = {};
	
for (var i = 0; i < 8; i++) {
	similarObject = {
	author: {
		avatar: 'img/avatars/user' + '0' + arrayPush(1, 8)[i] + '.png'
	},
	
	offer: {
		title: shuffle(TITLE_DATA)[i],
	
		address: renderRandomNumber(300, 900) + ', ' + renderRandomNumber(100, 500),
	
		price: renderRandomNumber(1000, 1000000),
	
		type: renderRandomArrayItem(TYPE_DATA),
	
		rooms: renderRandomNumber(1, 5),
	
		guests: renderRandomNumber(1, 10), //????????????????????????
	
		checkin: renderRandomArrayItem(CHECKINOUT_DATA),
	
		checkout: renderRandomArrayItem(CHECKINOUT_DATA),
	
		features: pushRandomArrayItems(FEATURES_DATA),
	
		description: '',
	
		photos: shuffle(PHOTOS_DATA),

		location: {
			x: renderRandomNumber(300, 900),
			y: renderRandomNumber(130, 630)
		}
	}


	}

similarHotels.push(similarObject);
	
}
	return similarHotels;

}

generateHotelsArray();
console.log(similarHotels);





// 2 ЗАДАНИЕ
var map = document.querySelector('.map');
map.classList.remove('map--faded');

//map__pins - куда вставлять все элементы
var hotelsContainer = document.querySelector('.map__pins');
console.log(hotelsContainer);

//На основе данных, созданных в первом пункте, создайте DOM-элементы, соответствующие меткам на карте, и заполните их данными из массива. 
//Итоговую разметку метки .map__pin можно взять из шаблона .map__card.

// элемент, КУДА будем копировать разметку из шаблона
var hotelPin = document.querySelector('.map__pin');
console.log(hotelPin);

// ЭТО ПИН
var pinTemplate = document.querySelector('template') 
	.content
	.querySelector('.map__pin');



// добавляю все это в функцию

var generatePinFromTemplate = function (hotel) {

	var hotelPinElement = pinTemplate.cloneNode(true);

	hotelPinElement.style.top = renderRandomNumber(100, 500) + 'px'; // ТАК ЗАДАЮТСЯ КООРДИНАТЫ!!!!!!!!!! задавать надо ПИНУ
	hotelPinElement.style.left = renderRandomNumber(300, 900) + 'px';

	var pinAvatar = hotelPinElement.querySelector('img');
	
	pinAvatar.src = 'img/avatars/user' + '0' + arrayPush(1, 8)[i] + '.png'; 
	
	pinAvatar.alt = TITLE_DATA[i];  
	
	
	
	return hotelPinElement;

}


//Отрисуйте сгенерированные DOM-элементы в блок .map__pins. Для вставки элементов используйте DocumentFragment.

// ФУНКЦИЯ ДОБАВЛЕНИЯ В ВЕРСТКУ ЧЕРЕЗ ДОКУМЕНТ ФРАГМЕНТ

var fragment = document.createDocumentFragment(); 
    
    for (var i = 0; i < similarHotels.length; i++) { 
        var newPin = generatePinFromTemplate(similarHotels[i]);
       

        fragment.appendChild(newPin);
    }

    hotelsContainer.appendChild(fragment);


/*.На основе первого по порядку элемента из сгенерированного массива и шаблона .map__card создайте DOM-элемент объявления, заполните его
данными из объекта и вставьте полученный DOM-элемент

в блок .map перед блоком.map__filters-container*/ 
//Можно задать переменную для .map__filters-container перед которым надо вставить элементы. И затем вместо аппенд использовать бифор


// map - КУДА ВСТАВЛЯТЬ


//ШАБЛОН, КОТОРЫЙ БУДЕТ КОПИРОВАТЬ -- ЭТО ОБЪЯВЛЕНИЕ

 var hotelTemplate = document.querySelector('template')
	.content
	.querySelector('.map__card'); // ПОЛУЧАЕТСЯ ЭТО ОБЪЯВЛЕНИЕ


// по порядку задаю значения, но не добавляю никуда


var hotelElement = hotelTemplate.cloneNode(true);

//Выведите заголовок объявления offer.title в заголовок .popup__title
var title = document.createElement('h3');
title.classList.add('popup__title');
title.textContent = similarHotels[1].offer.title;


//Выведите адрес offer.address в блок .popup__text--address.
var address = document.createElement('p');
address.classList.add('popup__text--address');
address.textContent = similarHotels[1].offer.address;

//Выведите цену offer.price в блок .popup__text--price строкой вида {{offer.price}}₽/ночь. Например, 5200₽/ночь
var price = document.createElement('p');
price.classList.add('popup__text--price');
price.textContent = similarHotels[1].offer.price + ' ₽/ночь';

//В блок .popup__type выведите тип жилья offer.type: Квартира для flat, Бунгало для bungalo, Дом для house, Дворец для palace.
var type = document.createElement('p');
type.classList.add('popup__type');
var typeName = similarHotels[1].offer.type;
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


/*Выведите количество гостей и комнат offer.rooms и offer.guests в блок .popup__text--capacity строкой
вида {{offer.rooms}} комнаты для {{offer.guests}} гостей. Например,
2 комнаты для 3 гостей.*/

var capacity = document.createElement('p');
capacity.classList.add('popup__text--capacity');
capacity.textContent = similarHotels[1].offer.rooms + ' комната(ы) для ' + similarHotels[1].offer.guests + ' гост(я)ей';

/*Время заезда и выезда offer.checkin и offer.checkout в блок .popup__text-
-time строкой вида Заезд после {{offer.checkin}}, выезд до
{{offer.checkout}}. Например, заезд после 14:00, выезд до 12:00.*/

var time = document.createElement('p');
time.classList.add('popup__text--time');
time.textContent = 'Заезд после ' + similarHotels[1].offer.checkin + ', выезд до ' + similarHotels[1].offer.checkout ;

// В список .popup__features выведите все доступные удобства в объявлении

var features = document.createElement('ul');
	features.classList.add('popup__features');
var featureItems = similarHotels[1].offer.features.split(' '); // разбиваю строку на массив. в скобка что считается разделителем.
for (var i = 0; i<featureItems.length-1; i++) { // -1 убирает пустую строку в конце
	var featureItem = document.createElement('li');
	featureItem.textContent = featureItems[i];
	features.appendChild(featureItem);
}
	


console.log(featureItems);
console.log(features);


/*
//сначала СОЗДАЕМ ШАБЛОН и только потом вставляем отдельной функцией

var hotelElement = hotelTemplate.cloneNode(true);

//задаю координаты
hotelElement.style.top = renderRandomNumber(100, 500) + 'px'; // ТАК ЗАДАЮТСЯ КООРДИНАТЫ!!!!!!!!!! задавать надо ПИНУ
hotelElement.style.left = renderRandomNumber(300, 900) + 'px';

//задаю изображение
hotelElement.querySelector('.popup__avatar').src = 'img/avatars/user' + '0' + arrayPush(2, 8)[3] + '.png'; //адрес в разметке изменился

hotelElement.querySelector('.popup__avatar').alt = TITLE_DATA[0]; //альт в разметке изменился


hotelPin.appendChild(hotelElement);
console.log(hotelPin); */



// добавляю все это в функцию

/* var generateHotelFromTemplate = function (hotel) {

	var hotelElement = hotelTemplate.cloneNode(true);

	hotelElement.style.top = renderRandomNumber(100, 500) + 'px'; // ТАК ЗАДАЮТСЯ КООРДИНАТЫ!!!!!!!!!! задавать надо ПИНУ
	hotelElement.style.left = renderRandomNumber(300, 900) + 'px';
	
	hotelElement.querySelector('.popup__avatar').src = 'img/avatars/user' + '0' + arrayPush(2, 8)[i] + '.png'; 
	
	hotelElement.querySelector('.popup__avatar').alt = TITLE_DATA[i]; 
	
	
	
	return hotelElement;

}
 */

//Отрисуйте сгенерированные DOM-элементы в блок .map__pins. Для вставки элементов используйте DocumentFragment.

// ФУНКЦИЯ ДОБАВЛЕНИЯ В ВЕРСТКУ ЧЕРЕЗ ДОКУМЕНТ ФРАГМЕНТ

/* var fragment = document.createDocumentFragment(); 
    
    for (var i = 0; i < similarHotels.length; i++) { 
        var newHotel = generateHotelFromTemplate(similarHotels[i]);
       

        fragment.appendChild(newHotel);
    }

    hotelsContainer.appendChild(fragment);



/* hotelsContainer.appendChild(hotelPin);
 */
/* console.log(hotelsContainer); */

	
// цикл копирующий шаблон 8 раз

/* for (var i = 0; i<similarHotels.length; i++) { */

/* 	var hotelElement = hotelTemplate.cloneNode(true); // задаем элемент как копию шаблона

	hotelPin.appendChild(hotelElement);

	hotelTemplate.style.offsetTop = renderRandomNumber(100, 500);
	hotelTemplate.style.offsetLeft = renderRandomNumber(300, 900);
	
	



		hotelsContainer.appendChild(hotelPin); */
/* } */


//ФУНКЦИЯ ОТРИСОВКИ МАГА В ШАБЛОН

/* var renderHotel = function (hotelsArray) {
   
	var hotelElement = hotelTemplate.cloneNode(true); // hotelElement- это копия шаблона
	hotelElement.offsetTop = renderRandomNumber(130, 630);
	hotelElement.offsetLeft = renderRandomNumber(300, 900);

	var coat = wizardElement.querySelector('.wizard-coat')
	coat.style.fill = wizardsData[i].coatColor;

	var eyes = wizardElement.querySelector('.wizard-eyes')
	eyes.style.fill = wizardsData[i].eyesColor;

	/* similarListElement.appendChild(wizardElement); */

	/* return wizardElement; */ 

/* } */




// создаем функцию добавления в верстку 

/* var fragment = document.createDocumentFragment(); 

for (var i = 0; i < wizardsData.length; i++) { 
	var newWizard = renderWizard(wizardsData[i]);
   

	fragment.appendChild(newWizard);
}

similarListElement.appendChild(fragment);

 */




  /* *
   * renderPins - Добавляет DOM-элементы 'Метка объявления' в блок '.map__pins'.
   *
   * @param  {Array} mapPins Массив DOM-элементов 'Метка объявления'.
   */
/*   var renderPins = function (mapPins) {
    var fragment = document.createDocumentFragment(); */

    // Размещает DOM-элементы 'Метка объявления' из массива mapPins во фрагменте 'fragment'
  /*   mapPins.forEach(function (pin) {
      fragment.appendChild(pin);
    }); */

    // Добавляет DOM-элементы 'Метка объявления' в блок '.map__pins'
    /* pinsContainer.appendChild(fragment);
  };
 */