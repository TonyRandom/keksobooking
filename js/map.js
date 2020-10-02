
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


// элемент, куда будем копировать разметку из шаблона
var hotelPin = document.querySelector('.map__pin');
console.log(hotelPin);

//шаблон, который будем копировать.

var hotelTemplate = document.querySelector('template')
	.content
	.querySelector('.map__card');

console.log(hotelTemplate);


//вставляем шаблон



	
// цикл копирующий шаблон 8 раз

for (var i = 0; i<similarHotels.length; i++) {

	var hotelElement = hotelTemplate.cloneNode(true);





	hotelPin.appendChild(hotelElement);

	hotelPin.style="left: {{location.x}}px; top: {{location.y}}px;"

		hotelsContainer.appendChild(hotelPin);
}




