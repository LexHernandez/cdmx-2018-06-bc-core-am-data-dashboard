//Declaro variables que recibe llamado del DOM
const userCapture = document.getElementById('user-capture');
const passwordCapture = document.getElementById('password-capture');


const submitButton = document.getElementById('submit-button');

submitButton.addEventListener('click', (event) => {
    let = userCaptureL = userCapture.value;
    let = passwordCaptureL = passwordCapture.value;
    console.log(passwordCaptureL, userCaptureL)
    if(userCaptureL === 'admin@laboratoria.la' && passwordCaptureL ==='password'){
        location.href= 'views/page2.html';
console.log('hola');

    }else{
        alert('Contraseña o correo incorrecto');
    }
});