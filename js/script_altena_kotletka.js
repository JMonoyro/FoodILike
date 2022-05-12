var number = document.getElementById("number2");
var maskOptions = {
  mask: '+{7} (000) 000 00 00'
};
var mask = IMask(number, maskOptions);

var date = document.getElementById("date");
var maskOptions = {
  mask: '00-00-0000'
};
var mask = IMask(date, maskOptions);


/*ВЫПАДЫ делаем СПИСКА */ /*Убрать ес шо */
var sel= document.querySelector('select'),
    inSelect= false,
    timer;

sel.addEventListener('focus', function() {
  this.size= this.options.length;
  clearTimeout(timer);
  timer= setTimeout(function() {
    inSelect= true;
  },500);
});

sel.addEventListener('blur', function() {
  clearTimeout(timer);
  inSelect= false;
  this.size= 1;
});

sel.addEventListener('change', function() {
  this.blur();
});

sel.addEventListener('click', function(event) {
  if(inSelect) {
    this.blur();
  }
  else {
    event.preventDefault();
    event.stopPropagation();
    return false;
  }
});