
// Date and time function updating every second to keep time up-to-date
function updateTime () {
    let dateTime =  moment().format('llll'); 
    $("#date-time").text(dateTime);
    console.log(dateTime);
}

setInterval(updateTime, 1000);
updateTime ();

// Local storage saving text
let storageInput = document.querySelector('.storage');
// let text = document.querySelector('.text');
let button = document.querySelector('.saveBtn');

storageInput.addEventListener('input', letter => {
    console.log(letter.target.value)
    console.log(storageInput.textContent)
    storageInput.textContent = letter.target.value
})

let saveToLocalStorage = () => {
    localStorage.setItem('textInput', storageInput.textContent)
}

button.addEventListener('click', saveToLocalStorage)



// var gradDate = moment("2021-06-15").format("MMM Do, YYYY");
// $("#1a").text(gradDate);

// setInterval(() =>{
//     let dateTime =  moment().format('llll'); 
//     $("#date-time").text(dateTime);
//     console.log(dateTime);
// }, 1000);