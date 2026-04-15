function generatePassword () {
         const length = 12;
         const charecters = "abcdefghijklmnoprstuvwxyz0987654321@$&";
         let password = "";
         for (let i =0; i < length; i++) {
         const randomIndex = Math.floor(Math.random() * charecters.length);
         password += charecters.charAt(randomIndex);
         }
         document.getElementById("password").value = password;
}
function copyPassword () {
         const passwordField = document.getElementById("password");
        passwordField.select();
         passwordField.setSelectionRange(0, 999999);
         navigator.clipboard.writeText(passwordField.value).then(() => {
            alert("password copied to clipboard");
         })
}