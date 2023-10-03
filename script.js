document.getElementById("contact-form").addEventListener("submit", function(event){

    event.preventDefault(); //parar el envio del formulario para ver que pasa
    
    const fname = (event.target.fname.value); //nombre
    const lname = (event.target.lname.value); //representative
    const email = (event.target.email.value); //email
    const tlf = (event.target.tlf.value); //telefono

    const plans = (event.target.plans.value); //plans

    const accept = (event.target.accept.checked); //checkbox - Booleano


    //VALIDACIONES

    let msj = "";

    // 3 < fname < 30 required
    if (fname.length < 3 || fname.length > 30) {
        msj += "Name must be between 3 and 30 characters. \n";
    }

    // 3 < representative < 30 required
    if (lname.length < 3 || lname.length > 30) {
        msj += "Name must be between 3 and 30 characters.  \n"
    }

    //hola@gmail.com
    //false && true && true --> false
    //hola@gmail.c
    //true && true && true --> true
    if (
        (!email.endsWith(".com") && !email.endsWith(".es")) ||
        !email.includes("@")
      ) {
        msj += "Email not written correctly. \n"
      }
  
    // tlf number y 9 valores required
    if (tlf.length != 11) {
    msj += "Phone not written correctly. \n"
    }

    // select
    if (plans == "") {
    msj += "Select a plan. \n"
    }

    //aceptar términos y publicidad
    if (!accept) {
    msj += "Please accept our ToS to proceed. \n"
    }

    if (msj.length != 0) {
        alert(msj);
    } else {
        alert("Form submitted succesfully.")
    }

    })