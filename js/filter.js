'use strict';
(function() {

    //window.loadedHotelData; //загруженные данные
    // записать в переменные данные формы

    var HOUSE_PRICE = {
        MIN: '10000',
        MAX: '50000'
    };

    var filterForm = document.querySelector('.map__filters');

    var houseType = filterForm.querySelector('#housing-type'); 
    var housePrice = filterForm.querySelector('#housing-price');
    var houseRooms = filterForm.querySelector('#housing-rooms');
    var houseGuests = filterForm.querySelector('#housing-guests');
    var houseFeatures = filterForm.querySelector('#housing-features');
    
    filterForm.addEventListener('change', function () {
       /*  console.log('hello'); */
 
       updateHotels();
    })

    
 


    //функции, которые будут вставлять коллбэком в фильтр

    var filterByType = function (it) {
        if (houseType.value === 'any') {
            return true;
        }
             
      return it.offer.type === houseType.value;
      
  }
    
  
 
    //функция запуска фильтрации загруженных данных
  
 

    var removePin = function () {
        var mapPinItems = document.querySelectorAll('.map__pin:not(.map__pin--main)');
        mapPinItems.forEach(function (item) {
          item.innerHTML = '';
        });
      };

     


    var updateHotels = function () {
        
       
       
     

      
        

        
      var filteredHotels = window.loadedHotelData.filter(filterByType);

    removePin();
    
    console.log(houseType.value);

    window.insertMapPins(filteredHotels); 
/* hotelArrayCopy = JSON.parse(JSON.stringify(window.loadedHotelData)); */
    console.log(window.loadedHotelData);
 
        return;

};



    


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