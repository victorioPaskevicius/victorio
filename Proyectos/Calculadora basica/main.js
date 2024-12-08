// Elementos DOM
const results = document.getElementById("results")
const nums = document.querySelectorAll(".num_buttons")
const operadores = document.querySelectorAll(".operador")

let currentNumber = ""; // Número actual que el usuario está escribiendo
let firstOperand = null; // Primer número de la operación
let secondOperand = null; // Segundo número de la operación
let selectedOperator = null; // Operador seleccionado

// Funcion de los operadores
nums.forEach(num => {
    num.addEventListener("click", (e) => {
        currentNumber += e.target.textContent; // Concatenar dígitos
        results.innerHTML = currentNumber; // Mostrar en pantalla
    });
});

// Manejar los operadores
operadores.forEach(operador => {
    operador.addEventListener("click", (e) => {
        const operator = e.target.textContent;

        if (operator === "=") {
            // Realizar cálculo cuando se presione "="
            if (firstOperand !== null && selectedOperator !== null && currentNumber !== "") {
                secondOperand = Number(currentNumber); // Convertir el número actual
                let resultado;

                // Operación basada en el operador
                if (selectedOperator === "+") {
                    resultado = firstOperand + secondOperand;
                } else if (selectedOperator === "-") {
                    resultado = firstOperand - secondOperand;
                } else if (selectedOperator === "x") {
                    resultado = firstOperand * secondOperand;
                } else if (selectedOperator === "/") {
                    resultado = firstOperand / secondOperand;
                }

                // Mostrar resultado y reiniciar variables
                results.innerHTML = resultado;
                firstOperand = resultado; // Guardar resultado para próximas operaciones
                currentNumber = ""; // Reiniciar el número actual
                selectedOperator = null; // Reiniciar operador
            }
        } else {
            // Guardar el primer número y el operador
            if (currentNumber !== "") {
                firstOperand = Number(currentNumber);
                selectedOperator = operator;
                currentNumber = ""; // Reiniciar el número actual para el segundo operando
            }
        }
    });
});