function game() {

  function n(min, max) {
    var rand = min + Math.random() * (max - min);
    rand = parseInt(rand);
    return rand;
  }

//random number
  var x = n(1, 10);
  console.log(x);


  function number() {
    var a;
    do {
      a = prompt('Введите число от 1 до 10');
      if (a === null) {
        break;
      } else if (a < 1 || a > 10) {
        alert('Ваше число не входит в зиапазон загадуемых чисел. Промазал!!!');
      } else if (isNaN(a)) {
        alert('Да напиши ты число!!! Олень!!!');
      } else if (a != parseInt(a)) {
        alert('Хватит дробей!!!Напиши ЦЕЛОЕ число!!!');
      }
    } while (a < 1 || a > 10 || isNaN(a) || a != parseInt(a));
//Enter number
    console.log(x);
    console.log(a);
    var y = a;

    if (y == x) {
      alert("That's right! Чисто по инглишу:)");
      var replay = confirm('Ещё раз?');
      if (replay) {
        return game();
      }

    } else if (y < x && y != null) {
      alert('Ваше число меньше чем загаданное!');
      return number();
    } else if (y > x) {
      alert('Ваше число больше чем загаданное!');
      return number();
    }

  }

  number();


}

game();

