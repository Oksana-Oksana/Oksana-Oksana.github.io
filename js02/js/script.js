var arr = [],
	list = 5,
	myBool = false;


for (var i = 0; i < list; i++) {
    arr[i] = prompt('Enter names['+i+']');

}
console.log(arr);

var username = prompt('enter your name', '');

for ( i=0; i < 5; i++) {
	if ( arr[i] == username && username !== null) {
		myBool = true;
		break;
	}
}

 if(myBool) {
     alert('Добро пожаловать, ' + username);
 }
  else {
     alert('Извините, но Вас нет в списке');
 }
