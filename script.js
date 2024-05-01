let age = +prompt("Сколько вам лет?");

if (age < 18) {
  alert("Вам еще рано работать");
} else if (age >= 18 && age < 50) {
  alert("Вам надо начинать работать или же дальше пахать");
} else if (age >= 50 && age < 59) {
  alert("Вам скоро на пенсию");
} else if (age >= 59 && age < 100) {
  alert("Вам уже пора на пенсию");
} else if (age >= 100) {
  alert("Произошла ошибка");
}
let time = +prompt('Ведите время от 00:00-23:00 только часы без минут и секунд');
switch (time) {
  case 0:
    alert("Время 00:00");
    break;
  case 1:
    alert("Время 01:00");
    break;
  case 2:
    alert("Время 02:00");
    break;
  case 3:
    alert("Время 03:00");
    break;
  case 4:
    alert("Время 04:00");
    break;
  case 5:
    alert("Время 05:00");
    break;
  case 6:
    alert("Время 06:00");
    break;
  case 7:
    alert("Время 07:00");
    break;
  case 8:
    alert("Время 08:00");
    break;
  case 9:
    alert("Время 09:00");
    break;
  case 10:
    alert("Время 10:00");
    break;
  case 11:
    alert("Время 11:00");
    break;
  case 12:
    alert("Время 12:00");
    break;
  case 13:
    alert("Час дня");
    break;
  case 14:
    alert("Два часа дня");
    break;
  case 15:
    alert("Три часа дня");
    break;
  case 16:
    alert("Четыре часа дня");
    break;
  case 17:
    alert("Пять часов вечера");
    break;
  case 18:
    alert("Шесть часов вечера");
    break;
  case 19:
    alert("Семь часов вечера");
    break;
  case 20:
    alert("Восемь часов вечера");
    break;
  case 21:
    alert("Девять часов вечера");
    break;
  case 22:
    alert("Десять часов ночи");
    break;
  case 23:
    alert("Одиннадцать часов ночи");
    break;
   
}
  let number = +prompt("Введите одно любое любое вами число");
  let number2 = +prompt('Введите второе любимое вами число');
  let number3 = +prompt('Введите третье любимое вами число');
  if ((number >= number2 && number <= number3) || (number <= number2 && number >= number3)){
alert("Cреднее число " + number);
  }else if((number2 >= number && number2 <= number3)|| (number2 <= number && number2 >= number3)){
    alert("Cреднее число " + number2);
  }else if((number3 >= number && number3 <= number2) || (number3 <= number && number3 >= number2)){
    alert("Cреднее число " + number3);
  }