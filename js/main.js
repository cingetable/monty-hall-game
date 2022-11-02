let gameCount = document.getElementById('game_count');
let doorChangedCount = document.getElementById('door_changed_count');
let doorNotChangedCount = document.getElementById('door_not_changed_count');
let doorChangedWins = document.getElementById('door_changed_win');
let doorNotChangedWins = document.getElementById('door_not_changed_win');
let doorChangedLose = document.getElementById('door_changed_lose');
let doorNotChangedLose = document.getElementById('door_not_changed_lose');
let door1 = document.getElementById('0');
let door2 = document.getElementById('1');
let door3 = document.getElementById('2');

let doors = [door1, door2, door3];
let isDoorSelect = [false, false, false];
let doorsContent = ['goat', 'car', 'goat'];
let gameStart = false;


// main handler
function clickDoor(buttonId) {

}

function OpenDoor(door) {
    if (doorsContent[doors.indexOf(door)] === 'goat')
        door.style.backgroundColor = "red";
    else
        door.style.backgroundColor = "green";
}
function OpenGoat(door) {
    if (doorsContent.indexOf('goat') === doors.indexOf(door)) {
        OpenDoor(doors[doorsContent.indexOf('goat', doors.indexOf(door) + 1)]);
    } else {
        OpenDoor(doors[doorsContent.indexOf('goat')]);
    }
}
function SelectDoor(door) {
    door.style.border = "3px solid blue";
}
function PlusOne(object) {
    object.textContent = (parseInt(object.textContent) + 1).toString();
}
function AddStats(countObject, resultObject) {
    PlusOne(countObject);
    PlusOne(resultObject);
}
// other logic
function restart(buttonId) {
    gameCount.textContent = '0';
    doorChangedCount.textContent = '0';
    doorNotChangedCount.textContent = '0';
    doorChangedWins.textContent = '0';
    doorNotChangedWins.textContent = '0';
    doorChangedLose.textContent = '0';
    doorNotChangedLose.textContent = '0';

    for (i = 0; i < 3; i++) {
        doors[i].style.backgroundColor = "black";
        doors[i].style.border = "1px solid black";
    }


    doorsContent.sort(()=>Math.random()-0.5);
    isDoorSelect = [false, false, false];
    gameStart = false;
}