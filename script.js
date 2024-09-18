

var password = document.getElementById("password")
var message = document.getElementById("message")
var newMessage = document.getElementById('disp-message')
var btn = document.getElementById('view-password')


password.addEventListener('input',() =>{
    if(password.value.length > 0){
        message.style.display = "block";
    }
    else{
        message.style.display = "none";
    }

    if(password.value.length < 5){
        newMessage.innerHTML = "Weak 😏";
        password.style.borderColor = "#ff0000";
        message.style.color = "#ff0000";
        btn.style.backgroundColor = "#ff0000";
    }
    else if(password.value.length >= 5 && password.value.length <= 8){
        newMessage.innerHTML = "Medium 🙄"
        password.style.borderColor = "#00b3ff";
        message.style.color = "#00b3ff";
        btn.style.backgroundColor = "#00b3ff";
    }
    else if(password.value.length >= 8){
        newMessage.innerHTML = "Strong 🥰"
        password.style.borderColor = "#00d833";
        message.style.color = "#00d833";
        btn.style.backgroundColor = "#00d833";
    }
})