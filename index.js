let form = document.getElementById('first');
let itemlist = document.getElementById('items');//ul

//form submit event
form.addEventListener('submit',addItem);
//Add item
function addItem(e){
e.preventDefault();
//console.log(1);
// get input value
let newItem = document.getElementById('item').value;
//create new li element
let li = document.createElement('li');
//add class
li.className ="item-group";
console.log(li);
//add text node with input value
li.appendChild(documet.createTextNode(newItem));
itemlist.appendChild(li);
//create a delete button element
let deleteBtn = document.createElement('button');
//add classes to delete button
deleteBtn.className = "btn delete";
//add text node
deleteBtn.appendChild(document.createTextNode('X'));
li.appendChild(deleteBtn);
}