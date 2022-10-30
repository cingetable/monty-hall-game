var gameCount = document.getElementById('game_count');
var doorChangedCount = document.getElementById('door_changed_count');
var doorNotChangedCount = document.getElementById('door_not_changed_count');
var doorChangedWins = document.getElementById('door_changed_win');
var doorNotChangedWins = document.getElementById('door_not_changed_win');
var doorChangedLose = document.getElementById('door_changed_lose');
var doorNotChangedLose = document.getElementById('door_changed_lose');


function open_door(buttonId) {
    document.getElementById(buttonId).style.backgroundImage = "url(../img/open_door.png)";
}
function restart(buttonId) {
    gameCount.textContent = '0';
    doorChangedCount.textContent = '0';
    doorNotChangedCount.textContent = '0';
    doorChangedWins.textContent = '0';
    doorNotChangedWins.textContent = '0';
    doorChangedLose.textContent = '0';
    doorNotChangedLose.textContent = '0';
}