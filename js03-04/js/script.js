

          //Заголовок

var body = document.querySelector('body');

var div = document.createElement('div');
	div.className = 'wrapper';
	document.body.appendChild(div);

var wrapper = document.querySelector('.wrapper');

var h4 = document.createElement('h4');
	h4.innerHTML = 'Тест по программированию';
	wrapper.appendChild(h4);

var elemForm = document.createElement('form');
	elemForm. setAttribute('id', 'test');
	wrapper.appendChild(elemForm);


             //вопросы
  var elemForm = document.querySelector('form');
	 for (var i = 1; i < 4; i++) {
     p = document.createElement('p');
     p.innerHTML = i+'. Вопрос №'+i;
     elemForm.appendChild(p);

     elemMenu = document.createElement('ul');
     elemForm.appendChild(elemMenu);

  var ul = wrapper.querySelectorAll('ul');
        for(var j = 1; j < 4; j++){
        elemUl = document.createElement('li');
        elemUl.style.listStyle = 'none';
        ul[i-1].appendChild(elemUl);


	li = ul[i-1].querySelectorAll('li');
    elemLi = document.createElement('input');
    elemLi.setAttribute('id', 'answer');
    elemLi.setAttribute('type', 'checkbox');
    elemLi.style.backgroundColor = '#CFE2F3';
    li[j-1].appendChild(elemLi);

    element = document.createElement('span');
    element.innerHTML = 'Вариант ответа №'+j;
    element.style.marginLeft = '5px';
    li[j-1].appendChild(element);
}
}

 var body = document.querySelector('body');
 newElement = document.createElement('button');
 newElement.setAttribute('type', 'reset');
 newElement.setAttribute('form','test');
 newElement.innerHTML = 'Проверить мои результаты';
 newElement.style.backgroundColor = '#CFE2F3';
 newElement.style.width = '350px';
 newElement.style.height = '50px';
 newElement.style.marginLeft = '150px';
 newElement.style.fontSize = '16px';
 newElement.style.border = '2px solid';
 body.appendChild(newElement);
