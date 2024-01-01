const name_one= document.getElementById("name-ip");
const mail= document.getElementById("mail-id-ip");
const phno= document.getElementById("phone-no-ip");
const opinion = document.getElementById("opinion-ip");



const submit_btn = document.getElementById("submit-btn");


submit_btn.addEventListener("click", (event) =>{
    event.preventDefault();
    console.log(name_one, mail, phno, opinion)

    if(name_one && mail && phno && opinion){
        alert("Your response has been saved\n Thank You for Contacting us");
        window.location.href = "Online_Expo.html";

    }
    else{
        alert("Fill the Contact Form");
    }

    

})