'use strict';
(function() {

    //window.loadedHotelData; //загруженные данные
    // записать в переменные данные формы

    var PriceRestrictions = {
        LOWER: 10000,
        UPPER: 50000
      };

    var filterForm = document.querySelector('.map__filters');
   /*  var filtersSelect = filterForm.querySelectorAll('select'); */
    var houseType = filterForm.querySelector('#housing-type'); 
    var housePrice = filterForm.querySelector('#housing-price');
    var houseRooms = filterForm.querySelector('#housing-rooms');
    var houseGuests = filterForm.querySelector('#housing-guests');
    var houseFeatures = filterForm.querySelector('#housing-features');

/*     var deactivateFilters = function () {
        filterForm.reset();
        houseFeatures.disabled = true;
      }; */
    /*   var setDisabled = function () {
        filtersSelect.forEach(function (item) {
        item.disabled = true;
        }); */
    /* 
      deactivateFilters();
    
     */
    
 


    //функции, которые будут вставлять коллбэком в фильтр

    var filterByType = function (it) {
        if (houseType.value === 'any') {
            return true;
        }
             
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

    //функция запуска фильтрации загруженных данных
  
 

    var removePin = function () {
        var mapPinItems = document.querySelectorAll('.map__pin:not(.map__pin--main)');
        mapPinItems.forEach(function (item) {
          item.innerHTML = '';
        });
      };

  


    var updateHotels = function () {
        /* window.insertMapPins(window.loadedHotelData); */
       
        removePin();
     
        var pinsCopy = window.loadedHotelData.slice();

        var unfilteredArray = window.loadedHotelData.slice();
      
        
        var filteredHotels = pinsCopy.slice();
        
       filteredHotels = pinsCopy.filter(filterByType).filter(filterByPrice).filter(filterByRooms).filter(filterByGuests).filter(filterByFeauters);

  
    
    /* console.log(houseType.value); */

    window.insertMapPins(filteredHotels); 
/* 
    console.log(unfilteredArray); */
 
       

};


filterForm.addEventListener('change', updateHotels)

    


/*   var houseTypeValue;

    houseType.addEventListener('change', function () {
        houseTypeValue = houseType.value; // отлавливаем изменения и записываем в переменную.
                console.log(houseTypeValue);

                updateHotels();
    })



    var housePriceValue;

    housePrice.addEventListener('change', function () {
        housePriceValue = housePrice.value; // отлавливаем изменения и записываем в переменную.
        console.log(housePriceValue);

    })  */

        
    //фильтрация массива
     /*  var filterByType = function() { 
          window.loadedHotelData.filter(function(hotel) {
            //   console.log(hotel.offer.type === houseTypeValue); // возвращает тру и фолс
               return hotel.offer.type === houseTypeValue;
        /* updateHotels(); */
   /*  }); }*/

    



})();