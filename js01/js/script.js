

function pow(a, b) {
  var result = a;

  for (var i = 1; i < a; i++) {
    result *= a;
  }

  return result;
}

var a = prompt("a?", '');
var b = prompt("b?", '');

if (b <= 1) {
  alert('' + n +'' );
}
else {
  alert( pow(a, b) );
}
