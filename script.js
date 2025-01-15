let username =document.getElementById("username");
let userphone =document.getElementById("userphone");
let email =document.getElementById("email");
let manzil =document.getElementById("manzil");


document.querySelector("#sendbtn").addEventListener('click',()=>{
    sendtelegram(username.value+""+userphone.value+""+email.value+""+manzil.value);
});


// sendtelegram
function sendtelegram(message) { let telegram_bot_id = "8155254434:AAH8vfk9cNV3PxgFVEZEytXYuHoXjJf5coo"; let chat_id = 5987260202; let settings = { "async": true, "crossDomain": true, "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage", "method": "POST", "headers": { "Content-Type": "application/json", "cache-control": "no-cache" }, "data": JSON.stringify({ "chat_id": chat_id, "text": message }) }; $.ajax(settings).done(function (response) { }); };

