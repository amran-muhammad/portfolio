function sendMail() {
    let parms = {
        from_name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
    }

    // emailjs.send("service_s5rv83c", "template_1ijog9l", parms).then(alert("Thank you!"));

    emailjs.send("service_m8x066e", "template_xtboypg", parms)
        .then(function (response) {
            alert("Thank you!");
            document.getElementById("contactjs").reset();
        });

}
