function change_colors() {
    var R_border = document.getElementById("R_border").value;
    var G_border = document.getElementById("G_border").value;
    var B_border = document.getElementById("B_border").value;
    var W_border = document.getElementById("W_border").value;
    var R_background = document.getElementById("R_background").value;
    var G_background = document.getElementById("G_background").value;
    var B_background = document.getElementById("B_background").value;
    var type = document.getElementById("para");

    type.style.borderColor = `rgb(${R_border},${G_border},${B_border})`;
    type.style.borderWidth = W_border;
    type.style.backgroundColor = `rgb(${R_background},${G_background},${B_background})`;
}

function pass_check() {
    var password = document.getElementById("password").value;
    var password_r = document.getElementById("password_r").value;

    if (password.length < 8) {
        alert("Password length is not sufficient (must be 8+ characters)")
    } else if (password != password_r) {
        alert("Passwords do not match")
    } else {
        alert("Passwords are correct")
    }
    // excluded the second password length check since if the second matches,
    // then the first will be too short anyway
}