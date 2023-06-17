// var header = document.getElementById('main-header');
// header.style.borderBottom = 'solid 3px #000'

// var titles =document.querySelectorAll('.title');
// console.log(titles)
// titles[0].style.color = 'green'
// titles[0].style.fontWeight = 'bold'

// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[3]);
// items[3].style.backgroundColor='green' 
// items[0].style.fontWeight='bold'
// items[1].style.fontWeight='bold'
// items[2].style.fontWeight='bold'
// items[3].style.fontWeight='bold'

// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// var newItem = document.createElement('li');
// newItem.className = 'list-group-item';
// newItem.textContent = 'Item 5';
// var list = items[0].parentNode;
// list.appendChild(newItem);  

// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// items[1].style.backgroundColor = 'green'
// items[2].style.visibility='hidden'

// var odd = document.querySelectorAll('li:nth-child(odd)');
// for (var i=0; i<odd.length;i++){
//     odd[i].style.backgroundColor='green';// }

// var items = document.querySelectorAll('.list-group-item');
// items[1].style.color = 'green'

// var itemList = document.querySelector('#items')
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = "#f4f4f4";
// console.log(itemList.parentElement)

// console.log(itemList.Children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor='yellow'

// console.log(itemList.firstChildChild);
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'Hello 1'

// console.log(itemList.lastChild);
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'Hello 4'

// console.log(itemList.nextSibling);
// console.log(itemList.nextElementSibling);

// console.log(itemList.previousSibling);
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = 'green'

var newDiv = document.createElement('div');
newDiv.className = 'Hello';
newDiv.id = 'Hello 1';
newDiv.setAttribute('title','Hello Div');
var newDivText = document.createTextNode('HEllo');
newDiv.appendChild(newDivText);
var container = document.querySelector('header .container');
var h1= document.querySelector('header h1');


var parentnode = document.getElementById('items');
parentnode.innerHTML = '<li>HEllo</li>' + parentnode.innerHTML


console.log(newDiv);

container.insertBefore(newDiv, h1);