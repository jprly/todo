const toDoContainer = document.querySelector('#toDoList');
let toDos = document.querySelectorAll('.todo');
let todoCloseButtons = document.querySelectorAll('.todoClose');
updateToDoIDs();


// ADDING ITEMS
function addItem() {
    //get value

    let newValue = document.querySelector("#toDoInput").value;
    toDoContainer.innerHTML +=  
    `<div  class="todo alert alert-light alert-dismissible fade show" role="alert">
    <strong class="uncomplete">${newValue}</strong><br><small>Added: ${getDate()}</small>
    <button type="button" class="close todoClose"  aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>`;;
  updateToDoIDs();
}

//REMOVING ITEMS
function removeItem(item){
    // let itemID = `#${item}`;
    // itemID = String(itemID);
    // console.log(itemID);
    let todo = document.querySelector(item);
    todo.remove();
    updateToDoIDs();
}

//COMPLETE ITEMS
function complete(item){
    updateToDoIDs();

    let completedItem = document.querySelector(`${item} > strong`);
    completedItem.classList.toggle("completed");
    console.log(completedItem);
    updateToDoIDs();

}
// SETUP FUNCTIONS

// get date
function getDate(){
    let date = new Date;
    let year = date.getFullYear();
    let month = "";
    if (date.getMonth() == 0){month = "January"};
    if (date.getMonth() == 1){month = "February"};
    if (date.getMonth() == 2){month = "March"};
    if (date.getMonth() == 3){month = "April"};
    if (date.getMonth() == 4){month = "May"};
    if (date.getMonth() == 5){month = "June"};
    if (date.getMonth() == 6){month = "July"};
    if (date.getMonth() == 7){month = "August"};
    if (date.getMonth() == 8){month = "September"};
    if (date.getMonth() == 9){month = "October"};
    if (date.getMonth() == 10){month = "November"};
    if (date.getMonth() == 11){month = "December"};

    let day = "";
    if ( date.getDay() == 1 ){day = "Monday"};
    if ( date.getDay() == 2 ){day = "Tuesday"};
    if ( date.getDay() == 3 ){day = "Wednesday"};
    if ( date.getDay() == 4 ){day = "Thursday"};
    if ( date.getDay() == 5 ){day = "Friday"};
    if ( date.getDay() == 6 ){day = "Saturday"};
    if ( date.getDay() == 7 ){day = "Sunday"};

    let dayNumber = date.getDate();
    return `${day}, ${month} ${dayNumber}, ${year}`;

}
// update list ids to keep order when items are removed and added
function updateToDoIDs(){
    toDos = document.querySelectorAll('.todo');
    toDos.forEach((item, number) => {
        item.setAttribute('id', `todo${number}`)
        item.setAttribute('onclick', `complete('#todo${number}')`)

      });
      todoCloseButtons = document.querySelectorAll('.todoClose');
      todoCloseButtons.forEach((item, number) => {
        item.setAttribute('id', `todoButton${number}`)
        item.setAttribute('onclick', `removeItem('#todo${number}')`)
      });

}

// function for testing basic items
function test(){
    console.log('testing... 1,2,3.')
}