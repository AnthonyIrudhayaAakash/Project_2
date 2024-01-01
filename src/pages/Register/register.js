const letters_regex = /[a-zA-Z]/;
const character_regex = /[^a-zA-Z0-9]/
const sign_up_btn = document.getElementById("sign_up_btn");


sign_up_btn.addEventListener("click", (event)=>{
    // const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const confirm_password = document.getElementById("confirm-password").value;

    if(passwordchecker(password, confirm_password)){
        alert("Registered Successfully");
        role(event);
    }
    else{
        alert("password format is wrong")
       
    }

})
const passwordchecker = (password, confirm_password) => {
    if(letters_regex.test(password) && character_regex.test(password)){
        if(password===confirm_password){
            console.log("Matching password"); 
            return true;
        }
        alert("Verify Confirm Password")
       return false;
    }
    else{  
        return false;
    }
}
const role = (event) =>{
    const select = document.getElementById("options");

    const indexofoption = select.options[select.selectedIndex];

    if(indexofoption){
        const value = indexofoption.value;

        if(value=== "User"){
           
            
            event.preventDefault();
            window.location.href = "/src/pages/Online_Expo/Online_Expo.html"
        }
        else{
           
          
            event.preventDefault();
            window.location.href = "/src/pages/Stall_Creation/stall_creation.html"
        }
    }
}