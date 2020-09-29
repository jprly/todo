const toDoContainer = document.querySelector('#toDoList');
let toDos = document.querySelectorAll('.todo');
let todoCloseButtons = document.querySelectorAll('.todoClose');

let toDoStorage = window.localStorage;
let toDoArray;

//pulls in demo data if not local storage found
if (toDoStorage.length == 1) {
 toDoArray = JSON.parse(toDoStorage.getItem('toDoItems'));
} else {
 toDoArray = [
    {'todo': 'Walk Dogs', 'created': 'Tuesday, September 25, 2020', 'status': 'open'},
    {'todo': 'Clean Garage', 'created': 'Tuesday, September 25, 2020', 'status': 'open'},
    {'todo': 'Bake Bread', 'created': 'Tuesday, September 25, 2020', 'status': 'complete'},
    {'todo': 'Take Nap', 'created': 'Tuesday, September 25, 2020', 'status': 'open'},
    {'todo': 'Wash Dishes', 'created': 'Tuesday, September 29, 2020', 'status': 'complete'}
];}

let html = ``;
publishToDos();

function publishToDos(){
html = ``;
toDoArray.forEach((element, index) => {
    return html += `<div  id="todo${index}"  class="todo alert alert-light alert-dismissible fade show"  role="alert">
    <strong onclick="changeStatus(${index})" class="${element['status']}">${element['todo']}</strong><br><small>Added: ${element['created']}</small>
    <button type="button" class="close todoClose"  aria-label="Close" onclick="removeItem(${index})">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>`
});
toDoContainer.innerHTML = html;
updateStorage();
}

function updateStorage(){
    toDoStorage.setItem('toDoItems', JSON.stringify(toDoArray));
}


function  changeStatus(item){
    toDoArray[item]['status'] = (toDoArray[item]['status'] == 'complete') ? 'open' : 'complete';
    publishToDos();

}

// ADDING ITEMS
function addItem() {
    //get value
    let newValue = document.querySelector("#toDoInput").value;
    toDoArray.unshift({todo: newValue, created: getDate(), status: 'open'})
    publishToDos();
}

//REMOVING ITEMS
function removeItem(item){
    console.log('trying to remove!', item);

    toDoArray.splice(item, 1);
    // delete toDoArray[item];
    publishToDos();
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