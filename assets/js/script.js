/* Permitir al usuario ingresar un valor de temperatura en grados Fahrenheit, y 
hacer que el programa convierta el valor a grados Celsius, por medio de una función async/await */

let celsius = document.getElementById("celsius");
let convertir = document.getElementById("convertir");


convertir.addEventListener("click", function (event) {
    event.preventDefault();

    let gradosIngresados = document.getElementById("gradosIngresados").value;
    console.log(gradosIngresados);

    function convertirGrados() {
        return new Promise(resolve => {
            setTimeout(() => {
                let gradosCelsius = (5 / 9) * (gradosIngresados - 32);
                resolve(gradosCelsius);
            }, 2000);
        })
    }

    async function gradosConvertidos() {
        let resultado = await convertirGrados();
        celsius.textContent = resultado + " °C";
    }

    gradosConvertidos();

});

// C = (5/9) * (F - 32)
