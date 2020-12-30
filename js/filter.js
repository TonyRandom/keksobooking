'use strict';
(function () {
  //функция отрисовки
  window.insertMapPins = function (loadedHotelData) {
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < loadedHotelData.length; i++) {
      var newPin = window.generatePinFromTemplate(loadedHotelData[i]);
      newPin.classList.add('pin--' + i);
      console.log(newPin);

      fragment.appendChild(newPin);
    }
    hotelsContainer.appendChild(fragment);
  };


  var PriceRestrictions = {
    LOWER: 10000,
    UPPER: 50000
  };

  var filterForm = document.querySelector('.map__filters');
  var houseType = filterForm.querySelector('#housing-type');
  var housePrice = filterForm.querySelector('#housing-price');
  var houseRooms = filterForm.querySelector('#housing-rooms');
  var houseGuests = filterForm.querySelector('#housing-guests');
  var houseFeatures = filterForm.querySelector('#housing-features');



  //функции, которые будут вставлять коллбэком в фильтр

  var filterByType = function (it) {
    if (houseType.value === 'any') {
      return true;
    } else
      return it.offer.type === houseType.value;


  };

  var filterByPrice = function (it) {
    if (housePrice.value === 'any') {
      return true;
    } else if (housePrice.value === 'low') {
      return it.offer.price < PriceRestrictions.LOWER;
    } else if (housePrice.value === 'middle') {
      return it.offer.price >= PriceRestrictions.LOWER && it.offer.price <= PriceRestrictions.UPPER;
    } else if (housePrice.value === 'high') {
      return it.offer.price > PriceRestrictions.UPPER;
    }
    return true;

  };

  var filterByRooms = function (it) {
    return houseRooms.value === 'any' || it.offer.rooms === parseInt(houseRooms.value, 10);

  };

  var filterByGuests = function (it) {
    return houseGuests.value === 'any' || it.offer.guests === parseInt(houseGuests.value, 10);
  };

  var filterByFeauters = function (it) {
    var checkedFeatures = houseFeatures.querySelectorAll('input:checked');
    return [].every.call(checkedFeatures, function (element) {
      return it.offer.features.includes(element.value);
    });
  };




  var removePin = function () {
    var mapPinItems = document.querySelectorAll('.map__pin:not(.map__pin--main)');
    mapPinItems.forEach(function (item) {
      item.innerHTML = '';
    });
  };



  var updateHotels = function () {
    const HOTEL_DATA_FROM_SERVER = window.loadedHotelData;
    let filteredHotels = HOTEL_DATA_FROM_SERVER.slice();

    removePin();

    filteredHotels = HOTEL_DATA_FROM_SERVER.filter(function (it) {
      return filterByType(it) && filterByPrice(it) && filterByRooms(it) && filterByGuests(it) && filterByFeauters(it);
    })
    window.insertMapPins(filteredHotels);
  };


  filterForm.addEventListener('change', function () {
    updateHotels();
  })



})();