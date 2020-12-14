'use strict';
(function() {

    //window.loadedHotelData; //загруженные данные
    // записать в переменные данные формы

    var filterForm = document.querySelector('.map__filters');
    console.log(filterForm);
    var houseType = filterForm.querySelector('#housing-type');
    console.log(houseType);
    var housePrice = filterForm.querySelector('#housing-price');
 

    var updateHotels = function () {


        window.insertMapPins(window.loadedData);
    };
    

    var houseTypeValue;
   

    houseType.addEventListener('change', function () {
        houseTypeValue = houseType.value; // отлавливаем изменения и записываем в переменную.
        console.log(houseTypeValue);

        housePriceValue=housePrice.value;

        console.log(houseTypeValue);
})

    var housePriceValue;
    housePrice.addEventListener('change', function () {
        housePriceValue = housePrice.value; // отлавливаем изменения и записываем в переменную.
        console.log(housePriceValue);

    
})

        
        //фильтрация массива
        window.loadedHotelData.filter(function(hotel) {
            //   console.log(hotel.offer.type === houseTypeValue); // возвращает тру и фолс
               return hotel.offer.type === houseTypeValue;
        /* updateHotels(); */
    });



})();