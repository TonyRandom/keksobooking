(function () {

window.load = function (onLoad, onError) {
    var URL = 'https://javascript.pages.academy/keksobooking/data';
    /* var URL = 'https://raw.githubusercontent.com/TonyRandom/keksobooking-DB/main/db.json'; */

    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {
        if (xhr.status = 200) {
          window.loadedData = xhr.response;
        onLoad(xhr.response);
        } else {
          onError('Статус ответа: ' + xhr.status + ' ' + xhr.statusText);
        }
      });
      xhr.addEventListener('error', function () {
        onError('Произошла ошибка соединения');
      });
      xhr.addEventListener('timeout', function () {
        onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
      });
      
      xhr.timeout = 10000; // 10s


    xhr.open('GET', URL);
    xhr.send();
}


window.save = function (data, onLoad, onError) {
    var URL = 'https://javascript.pages.academy/keksobooking';
    /* var URL = 'https://jsonplaceholder.typicode.com/posts'; */

    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {
        if (xhr.status === 200) {
        onLoad(xhr.response);
        } else {
          onError('Статус ответа: ' + xhr.status + ' ' + xhr.statusText);
        }
      });
      xhr.addEventListener('error', function () {
        onError('Произошла ошибка соединения');
      });
      xhr.addEventListener('timeout', function () {
        onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
      });
      
      xhr.timeout = 10000; // 10s

    xhr.open('POST', URL);
    xhr.send(data);
}




})();