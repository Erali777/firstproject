let di = document.querySelector('.di');
di.classList.add('hide');
let se = document.querySelector('.se');
se.classList.add('hide');
let add = document.querySelector('#add');
add.addEventListener('click', function() {
	di.classList.remove('hide');
});
let close = document.querySelector('#close');
close.addEventListener('click', function() {
	di.classList.add('hide');
});
let closeSearch = document.querySelector('#closeSearch');
closeSearch.addEventListener('click', function() {
	se.classList.add('hide');
});
let input = document.querySelectorAll('name');
let but = document.querySelector('#button');
let object = {};
let array = [];
but.addEventListener('click', function() {
	array.forEach((item)=> {
		array[item.name] = item.value;
	object.name = input.value;
	object.number = input.value;
	object.adress = input.value;
	object.mail = input.value;
	console.log(input.value);
	
		})
	array.push(object);
	
	
});
console.log(object);
console.log(array);
let search = document.querySelector('#search');
search.addEventListener('click', function() {
	se.classList.remove('hide');
});
let inpSearch = document.querySelector('#inpSearch');
let buttonSearch = document.querySelector('#buttonSearch');
buttonSearch.addEventListener('click', function() {
	for(let i=0; i<array.length; i++) {
		if(inpSearch.value===array[i].name) {
			console.log(array[i].name);
			alert('In database have information about this person!');
		} else {
			alert('Sorry, In database have not information about this person!')
		};
	};
});