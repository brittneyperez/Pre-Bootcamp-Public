console.log('page is loaded...');

// Instrucitons:
// 1. Clicking the "edit profile" button will change the user's name from Jane Doe to any other name.
var newName = document.querySelector('#user-name');

function nameChange(id) {
    newName.innerText = 'Alice';
    console.log('Alice');
}

// 2. Clicking either button will remove the user from the requests list.
// 3. Bonus: either button decreases the "Connection Requests" number.

var reqNum = 2;
var reqSpan = document.querySelector('#status_num')

function hide() {
    var x = document.getElementById('user-remove');
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
        reqNum--;
        reqSpan.innerText = reqNum;
    }
}

// 4. Bonus: the accept button also increases the "Your Connections" number.