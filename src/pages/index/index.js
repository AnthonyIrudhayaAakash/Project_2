const letters_regex = /[a-zA-Z]/;
const character_regex = /[^a-zA-Z0-9]/;
const alert_user_info = "Username atleast have five characters";
const alert_pass_info = "Password length atleast 8 character\n Atleast have one alphabet[A-Z,a-z]\n one special character[$,!,%,@..]";
const login_button =  document.getElementById("login-btn");

login_button.addEventListener("click", (event) => {
   const user = document.getElementById("username").value;
   const password = document.getElementById("password").value;

    if(userchecker(user) && passwordchecker(password)){
        alert("Logged In Successfully");
        event.preventDefault();
        window.location.href = "/src/pages/Online_Expo/Online_Expo.html"
    }
   
});

const userchecker = (user) =>{

    if(user.length>5){
        return true;
    }
    else{
        alert(alert_user_info);
        alert(alert_pass_info);
        return false;
    }
    
}
const passwordchecker = (password) => {
    if(password.length>=8 && letters_regex.test(password) && character_regex.test(password)){
        return true;
    }
    else{  
        alert(alert_pass_info);
        return false;
    }
}
document.addEventListener("DOMContentLoaded", ()=>{
    var login_slogan = document.getElementById("login-slogan");

    login_slogan.addEventListener("animationiteration", ()=>{
        login_slogan.textContent = slogan_generator();
    })

    const slogan_generator = () =>{
        const slogans = ["Login to Explore the Exhibition","Explore the World", "Engage with fellow minds", "Share knowledge to get Wisdom"]
        var randomIndex = Math.floor(Math.random() * slogans.length);
        return slogans[randomIndex];
    }
})