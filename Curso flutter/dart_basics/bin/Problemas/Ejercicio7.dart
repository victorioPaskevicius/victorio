//     📌 EJERCICIO 7: CONTAR LA FRECUENCIA DE PALABRAS EN UN MAP

//     ✅ Objetivo:
//     Escribe un programa en Dart que reciba una lista de palabras y cuente cuántas 
//     veces aparece cada una, almacenando el resultado en un Map.

//     🔹 Ejemplo:
//     Entrada: ["dart", "flutter", "dart", "codigo", "flutter", "movil", "dart"]
//     Salida: {dart: 3, flutter: 2, codigo: 1, movil: 1}

void main () {
  List<String> words = ["dart", "flutter", "dart", "codigo", "flutter", "movil", "dart"];
  Map<String,int> wordsCount = {};
  // int count = 1
  for (var word in words) {
    if (wordsCount.containsKey(word)) {
      wordsCount[word] = wordsCount[word]! + 1;
    }else{
      wordsCount.addAll({word: 1});
    }
  }
  print(wordsCount);
}