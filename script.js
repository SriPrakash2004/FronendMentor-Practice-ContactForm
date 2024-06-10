//select the required-filed, finame, laname, required-filed2, required-filed-mail
var labelContainer = document.querySelector(".required-filed1")
var firstName = document.getElementById("finame")
var lastName = document.getElementById("laname")
var mailId = document.getElementById("mailid")
var labelContainer1 = document.querySelector(".required-filed2")
var labelContainer2 = document.querySelector(".required-filed-mail")
var msgId = document.getElementById("msgid")
var labelContainer3 = document.querySelector(".required-filed-area")
var popUpContainer = document.querySelector(".main-popup-container")
//Validation format are create and store
var mailValidator = mailId.value
var mailRegex = "/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/"

//select the radio button
// var radioBtn = document.getElementById("radio-id");
// var radioBtn1 = document.getElementById("radio-id1");
// var selectedValue = "";

// // Check which radio button is selected
// if (radioBtn.checked) {
//     selectedValue = radioBtn.value;
// } else if (radioBtn1.checked) {
//     selectedValue = radioBtn1.value;
// }

var marginChange = document.querySelector(".container")


function update() {
    event.preventDefault()
    if (firstName.value == "" && lastName.value == "" && mailValidator != mailRegex && msgId.value == "") {
        labelContainer.style.display = "block";
        labelContainer1.style.display = "block";
        labelContainer2.style.display = "block"
        labelContainer3.style.display = "block"
    }else{
        popUpContainer.style.display ="block"
        marginChange.style.margin = "0px"
        
    }
    
}

