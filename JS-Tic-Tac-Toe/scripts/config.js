function openPlayerConfig(event) {
    editedPlayer = +event.target.dataset.playerid; // + siguron që data është numër '1'=> 1
    playerConfigElement.style.display = 'block';
    backdropElement.style.display = 'block';
}




function closePlayerConfig(){
    playerConfigElement.style.display='none';
    backdropElement.style.display='none';

    //getting rid of error class:
    formElement.firstElementChild.classList.remove('error');
    errorsOutputElement.textContent=''; //clearing the message 'Please enter a valid name!'
    formElement.firstElementChild.lastElementChild.value='';


}

//playername part
function savePlayerConfig(event) {
    event.preventDefault();
    const formData = new FormData(event.target); // merr të dhënat nga formulari
    const enteredPlayername = formData.get('playername').trim(); // merr emrin nga inputi

    if (!enteredPlayername) {
        event.target.firstElementChild.classList.add('error');
        errorsOutputElement.textContent = 'Please enter a valid name!';
        return;
    }

    // Përditëso emrin e lojtarit në HTML
    const updatedPlayerDataElement = document.getElementById('player-' + editedPlayer + '-data');
    updatedPlayerDataElement.children[1].textContent = enteredPlayername; // kjo rreshton emrin e lojtarit ne artikun perkates

    // Përditëso emrin në array-n 'players'
    players[editedPlayer - 1].name = enteredPlayername;

    closePlayerConfig();
}


