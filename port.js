function sendmail() {
    // alert(params);
    // var tempParams ={
    //     from_name:document.getElementById("fromName").value,
    //     to_name:document.getElementById("toName").value,
    //     message: document.getElementById("msg").value,

    // };
    
    var cname = document.getElementById("name").value;
    var cmail = document.getElementById("mail").value;
    var cnumber = document.getElementById("number").value;
    var message1 = document.getElementById("message").value;
    
    var templateParams = {
        mail:cmail,
        name:cname,
        number:cnumber,
        message: message1,

    };

    emailjs.send('service_nqjev38', 'template_207x24n', templateParams)
        .then(function (response) {
            console.log('SUCCESS!', response.status, response.text);
            alert("Form Submitted Successfully!");
            return true;
        }, function (error) {
            console.log('FAILED...', error);
        });

}