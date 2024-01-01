const create_btn = document.getElementById("edit-btn")


create_btn.addEventListener("click", (event) => {
  const stall_name = document.getElementById("edit-stall-name-ip").value;
  const stall_id = document.getElementById("edit-stall-id-ip").value;

  if (stall_name.length >= 5 && stall_id.length >= 5) {
    event.preventDefault();
    alert("Stall Edited Successfully");
    window.location.href = "/src/pages/Online_Expo/Online_Expo.html"
  } else {
    alert("Stall name and ID must be greater than 5 characters");
  }
});
