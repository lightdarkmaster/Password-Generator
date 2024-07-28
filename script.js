function generatePassword(length) {
    const charset = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm1234567890!@#$?";
    let password = "";

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset.charAt(randomIndex);
    }
    return password;
}

function generateAndDisplayPassword() {
    // Get the selected value from the drop-down and convert it to a number
    var selectedValue = parseInt(document.getElementById('numbers').value);

    // Use the selected value as the length of the password
    var length = selectedValue;

    // Log the variable to the console (you can use it as needed)
    console.log("Selected Length:", length);

    const newPassword = generatePassword(length);

    // Display the generated password in the text box
    document.getElementById("password").value = newPassword;
}

// Add an event listener to the drop-down to trigger password generation on change
document.getElementById('numbers').addEventListener('change', function () {
    generateAndDisplayPassword();
});

//this code here to clear.
function clearButton() {
    clear();
}

function clear(){
    document.getElementById("password").value=""; 
}
