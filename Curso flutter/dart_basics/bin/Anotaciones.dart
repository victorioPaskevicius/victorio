// import 'dart:io';
// import 'package:dart_basics/IceCream';

// void main(List<String> arguments) {
//   nullability();
// }

// /*
// +-------------------------------------+
// |           VARIABLES                 |
// +-------------------------------------+
// */

// void greetings(String name) {
//   var age = 31;
//   var example = 41.3;

//   print("Hola, $name.");
// }

// void valuesExample() {
//   //Tipos fijos
//   final String example2 = "Aris";
//   const String example3 = "MI CLAVE 123";
// }

// void numbersExample() {
//   // Variables numéricas
//   int age = 31;
//   int test = -56;
//   int large = 01000000;

//   double age2 = 31.1;
//   double age3 = 31;
//   age2 = 1;

//   num age4 = 12;
//   num age5 = 12.1;
//   age5 = 1;
// }

// void boolExamples() {
//   // Variables booleanas
//   bool imHappy = true;
// }

// void stringExamples() {
//   // Variables de cadena de texto
//   String name = 'AristiDevs';
//   name = 'aris';
//   String currentAge = " 31 años";
//   // String fullText = name + currentAge;
//   String fullText = "Soy $name y tengo $currentAge";
//   print(fullText);
// }

// void dynamicExample() {
//   //Tipo dinámico
//   dynamic example = "Hola soy un ejemplo";
//   print(example);
//   example = 23;
//   print(example);
// }

// void parseExample() {
//   //Conversiones
//   String toNumber = "31";
//   int numbesOK = int.parse(toNumber);
//   // print("El numero es $numbesOK");

//   int numberToString = 615;
//   String stringOK = numberToString.toString();
//   // print(stringOK);

//   String toDouble = "34.23";
//   double doubleOk = double.parse(toDouble);
// }

// void mathExamples() {
//   //Operaciones matemáticas
//   int a = 2;
//   int b = 4;

//   int result = a + b; //Suma
//   // int result = a - b; Resta
//   // int result = a * b; Multiplicación
//   // double result = a / b; División
//   // int result = a ~/ b; División sin decimal
//   // int result = a % b; Módulo

//   a += b; //Suma
//   a -= b; //Resta
//   a *= b; //Multiplicacion

//   a++;
//   a--;

//   print("Resultado es: ${--a}");
// }

// /*
// +-------------------------------------+
// |           Condicionales             |
// +-------------------------------------+
// */

// void ifExamples() {
//   int userAge = 18;

//   if (userAge >= 18) {
//     print("Eres mayor de edad");
//   } else {
//     print("Eres menor de edad");
//   }

//   (userAge >= 18) ? print("Eres mayor de edad") : print("Eres menor de edad");

//   int experienceYears = 5;

//   if (experienceYears > 8) {
//     print("Eres un programador SENIOR");
//   } else if (experienceYears >= 5) {
//     print("Eres un programador MID");
//   } else {
//     print("Eres un programador Junior");
//   }

//   print("Introduce el día de la semana:");
//   int numberOfTheWeek = int.parse(stdin.readLineSync()!);

//   if (numberOfTheWeek == 1) {
//     print("Lunes");
//   } else if (numberOfTheWeek == 2) {
//     print("Martes");
//   } else if (numberOfTheWeek == 3) {
//     print("Miercoles");
//   } else if (numberOfTheWeek == 4) {
//     print("Jueves");
//   } else if (numberOfTheWeek == 5) {
//     print("Viernes");
//   } else if (numberOfTheWeek == 6) {
//     print("Sábado");
//   } else if (numberOfTheWeek == 7) {
//     print("Domingo");
//   } else {
//     print("El número no es válido");
//   }
// }

// void switchExamples() {
//   print("Introduce el día de la semana:");
//   int numberOfTheWeek = int.parse(stdin.readLineSync()!);

//   switch (numberOfTheWeek) {
//     case 1:
//       break;
//     case 2:
//       print("Martes");
//     case 3:
//       print("Miércoles");
//     case 4:
//       print("Jueves");
//     case 5:
//       print("Viernes");
//     case 6:
//       print("Sábado");
//     case 7:
//       print("Domingo");
//     default:
//       print("Número no");
//   }
// }

// /*
// +-------------------------------------+
// |           MÉTODOS                   |
// +-------------------------------------+
// */

// void simpleFunction() {
//   print("Esto es un ejemplo");
// }

// void inputFunction (int a, int b) {
//   int result = a + b;
//   print('El resultado es $result');
// }

// /*
// +-------------------------------------+
// |     ESTRUCTURAS DE DATOS            |
// +-------------------------------------+
// */

// void listExamples() {
//   List<String> names = ["Aris", "Pepe", "Manolo"];
//   var names2 = ["Alfonso", "Manolo", "Anna"];

//   // print(names[9]);
//   // print(names.last);
//   // print(names.first);
//   // print(names.length);
//   // print(names[names.length-1]);
//   // names[2] = "Pepe";
//   names.insert(1, "Ramon");
//   // names.add("Pikachu");
//   names.addAll(names2);
//   // names.remove("Manolo");
//   // names.removeAt(1);
//   // names.clear();
//   print(names);
// }

// void setExamples() {
//   Set<String> names = {"Aris", "Pepe"};
//   Set<String> names2 = {"Aris", "Pepe"};
//   names.add("Aris");
//   names.add("aris");
//   names.add("Bimbo");
//   names.remove("aris");
//   // names.clear();
//   // names.removeAll(names2);
//   bool result = names.contains("Aris");
//   if (names.contains("Aris")) {
//     print("Aris está invitado");
//   } else {
//     print("Aris NO está invitado");
//   }
//   print(names.length);

//   List<String> newNames = ["Aris", "Aris", "Juan"];
//   Set<String> newNamesSet = Set.from(newNames);
//   print(newNamesSet);
// }

// void mapExamples() {
//   Map<String, int> people = {"Aris": 32, "Pepe": 64, "MoureDev": 120};

//   people["Aris"] = 76;
//   people.addAll({"David": 44, "Miguel": 22});
//   people["Pikachu"] = 76;
//   people.remove("Pikachu");

//   people.containsKey("Aris");
//   people.containsValue(32);

//   people.length;
//   people.clear();

//   print(people.values);
// }

// void listLoop() {
//   List<int> numbers = [2, 4, 6, 8, 9, 5];

//   // for (var i = 0; i < numbers.length; i++) {
//   //   print("Con el for básico tenemos: ${numbers[i]}");
//   // }

//   for (var pepe in numbers) {
//     print("Con el for número 2 tengo $pepe");
//   }

//   numbers.forEach((item) {
//     print("El numero es $item");
//   });

//   numbers.forEach(print);
// }

// void setLoop() {
//   Set<int> numbers = {3, 4, 6, 8, 5};

//   for (var element in numbers) {
//     print("EL SET: $element");
//   }

//   numbers.forEach((item) {
//     print("El numero es $item");
//   });

//   numbers.forEach(print);
// }

// void mapLoop() {
//   Map<String, int> numbers = {"favNumber": 13, "birthday": 12, "address": 4};

//   for (var element in numbers.entries) {
//     print("La clave es ${element.key} y el valor es ${element.value}");
//   }

//   numbers.forEach((key, value) {
//     print("La clave es $key y el valor $value");
//   });
// }

// void nullability() {
//   String? name = "Aris";
//   name = "";
//   name = null;
//   String example2 = name ?? "Invitado";

//   name ??= "Pepe";

//   IceCream? test = IceCream();

  


//   if (name != null) {
//     print("Hola $name");
//   }

//   int? example = 13;
//   example = null;
// }

// /*
// +-------------------------------------+
// |           EJERCICIOS                |
// +-------------------------------------+
// */

// void exercise1() {
//   /*
//     📌 EJERCICIO 1: CALCULADORA DE EDAD

//     ✅ Objetivo:
//     Escribe un programa en Dart que pida al usuario su año de nacimiento
//     y calcule su edad actual.

//     🔹 Pasos a seguir:
//     1️⃣ Pedir al usuario su año de nacimiento (leerlo como String).
//     2️⃣ Convertir el año de nacimiento a un número entero.
//     3️⃣ Calcular la edad restando el año de nacimiento al año actual (2025).
//     4️⃣ Mostrar el resultado en un mensaje como: "Tienes X años."
//   */
//   print("Introduce tu año de nacimiento:");
//   String date = stdin.readLineSync()!;
//   const int currentYear = 2025;
//   int formatDate = int.parse(date);
//   int result = currentYear - formatDate;
//   print("Tienes $result años");
// }

// void exercise2() {
//   /*
//     📌 EJERCICIO 2: CALCULADORA DE PROPINA

//     ✅ Objetivo:
//     Escribe un programa en Dart que calcule cuánto debe pagar cada persona 
//     después de dividir la cuenta y agregar una propina.

//     🔹 Pasos a seguir:
//     1️⃣ Pedir al usuario el total de la cuenta.
//     2️⃣ Pedir el porcentaje de propina a agregar.
//     3️⃣ Calcular el total a pagar sumando la propina.
//     4️⃣ Pedir el número de personas para dividir la cuenta.
//     5️⃣ Calcular cuánto debe pagar cada persona.
//     6️⃣ Mostrar el resultado en pantalla.
//   */

//   double totalPrice = 29.99;
//   double tip = 20;
//   int numberOfPeople = 2;

//   double priceWithTip = (totalPrice * (tip / 100)) + totalPrice;
//   String priceResult = (priceWithTip / numberOfPeople).toStringAsFixed(2);

//   print(
//       "El precio total con propina es de ${priceWithTip.toStringAsFixed(2)} euros. El total a pagar es de $priceResult euros por persona.");
// }

// void exercise3() {
//   /*
//     📌 EJERCICIO 3: IDENTIFICAR NÚMEROS POSITIVOS Y NEGATIVOS

//     ✅ Objetivo:
//     Escribe un programa en Dart que determine si un número ingresado 
//     por el usuario es positivo, negativo o cero.
//   */

//   print("Introduce un número:");
//   int userNumber = int.parse(stdin.readLineSync()!);

//   if (userNumber > 0) {
//     print("Es positivo");
//   } else if (userNumber < 0) {
//     print("Es negativo");
//   } else {
//     print("Es 0");
//   }
// }

// void exercise4() {
// /*
//     📌 EJERCICIO 4: MESES DEL AÑO

//     ✅ Objetivo:
//     Escribe un programa en Dart que reciba un número entre 1 y 12 
//     e imprima el nombre del mes correspondiente del año.
//   */

//   print("Introduce un número:");
//   int userNumber = int.parse(stdin.readLineSync()!);

//   switch (userNumber) {
//     case 1:
//       print("Enero");
//     case 2:
//       print("Febrero");
//     case 3:
//       print("Marzo");
//     case 4:
//       print("Abril");
//     case 5:
//       print("Mayo");
//     case 6:
//       print("Junio");
//     case 7:
//       print("Julio");
//     case 8:
//       print("Agosto");
//     case 9:
//       print("Septiembre");
//     case 10:
//       print("Octubre");
//     case 11:
//       print("Noviembre");
//     case 12:
//       print("Diciembre");
//     default:
//       print("El mes no es válido");
//   }
// }

// void exercise5() {
//   /*
//     📌 EJERCICIO 5: SUMA DE NÚMEROS PARES EN UNA LISTA

//     ✅ Objetivo:
//     Escribe un programa en Dart que tome una lista de números enteros 
//     y calcule la suma de todos los números pares en la lista.

//     🔹 Ejemplo:
//     Entrada: [1, 2, 3, 4, 5, 6]
//     Salida: La suma de los números pares es: 12

//     TIP Si a un número le hacemos %2 == 0 es par.
//   */

//   var example = [2, 5, 6, 7, 8];
//   int result = 0;

//   for (int number in example) {
//     if (number % 2 == 0) {
//       result += number;
//     }
//   }
//   print("El resultado es $result");
// }

// void exercise6() {
//   /*
//     📌 EJERCICIO 6: FILTRAR PALABRAS ÚNICAS EN UN SET

//     ✅ Objetivo:
//     Escribe un programa en Dart que reciba una lista de palabras con 
//     algunas repetidas y almacene solo las palabras únicas en un Set. 
//     Luego, muestra el conjunto resultante.

//     🔹 Ejemplo:
//     Entrada: ["dart", "flutter", "dart", "codigo", "flutter", "movil"]
//     Salida: {dart, flutter, codigo, movil}
// */
//   List<String> words = [
//     "dart",
//     "flutter",
//     "dart",
//     "codigo",
//     "flutter",
//     "movil"
//   ];
//   Set<String> result = {};

//   for (var element in words) {
//     result.add(element);
//   }

//   var exampe = Set.from(words);

//   print(result);
// }

// void exercise7() {
// /*
//     📌 EJERCICIO 7: CONTAR LA FRECUENCIA DE PALABRAS EN UN MAP

//     ✅ Objetivo:
//     Escribe un programa en Dart que reciba una lista de palabras y cuente cuántas 
//     veces aparece cada una, almacenando el resultado en un Map.

//     🔹 Ejemplo:
//     Entrada: ["dart", "flutter", "dart", "codigo", "flutter", "movil", "dart"]
//     Salida: {dart: 3, flutter: 2, codigo: 1, movil: 1}
// */

//   List<String> words = [
//     "dart",
//     "flutter",
//     "dart",
//     "codigo",
//     "flutter",
//     "movil",
//     "dart"
//   ];
//   Map<String, int> result = {};

//   for (var element in words) {
//     if (result.containsKey(element)) {
//       result[element] = result[element]! + 1;
//     } else {
//       result[element] = 1;
//     }
//   }
// }

// void main () {
//   List<int> numbers = [1,2,3,4,5,6,7,8,9];

//   numbers.forEach((item){
//     print(item);
//   });

  // for (var i = 0; i < numbers.length; i++) {
  //   print('Con el bucle for 1 tengo: ${numbers[i]}');
  // }

  // for (var num in numbers) {
  //   print('Con el for numero 2 tengo: $num');
  // }
// }

// void main () {
//   Set<int> numbers = {1,2,3,4,5,6,7,8,9};

//   numbers.forEach(print);

//   // for (var i = 0; i < numbers.length; i++) {
//   //   print('Con el bucle for 1 tengo: ${numbers[i]}');
//   // }

//   // for (var num in numbers) {
//   //   print('Con el for numero 2 tengo: $num');
//   // }
// }