// Add item to list
// steps:
// Get value from input
// create list item with value
// append list item to list

function addItem() {
    //get value
    let newValue = document.querySelector("#toDoInput").value;
    let newToDo = document.createElement('button');
    newToDo.setAttribute('class', 'list-group-item list-group-item-action')
    newToDo.textContent = newValue;
    let list = document.getElementById('toDoList');
    list.append(newToDo);
}

