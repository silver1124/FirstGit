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

var odd = document.querySelectorAll('li:nth-child(odd)');

for (var i=0; i<odd.length;i++){
    odd[i].style.backgroundColor='green';
}

var items = document.querySelectorAll('.list-group-item');
items[1].style.color = 'green'