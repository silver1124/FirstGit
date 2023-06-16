var header = document.getElementById('main-header');
header.style.borderBottom = 'solid 3px #000'

var titles =document.querySelectorAll('.title');
console.log(titles)
titles[0].style.color = 'green'
titles[0].style.fontWeight = 'bold'

var items = document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[3]);
items[3].style.backgroundColor='green' 
items[0].style.fontWeight='bold'
items[1].style.fontWeight='bold'
items[2].style.fontWeight='bold'
items[3].style.fontWeight='bold'