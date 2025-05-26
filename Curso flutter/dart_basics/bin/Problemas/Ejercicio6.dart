//     📌 EJERCICIO 6: FILTRAR PALABRAS ÚNICAS EN UN SET

//     ✅ Objetivo:
//     Escribe un programa en Dart que reciba una lista de palabras con 
//     algunas repetidas y almacene solo las palabras únicas en un Set. 
//     Luego, muestra el conjunto resultante.

//     🔹 Ejemplo:
//     Entrada: ["dart", "flutter", "dart", "codigo", "flutter", "movil"]
//     Salida: {dart, flutter, codigo, movil}

void main () {
  List<String> wordsRepeat = ["dart", "flutter", "dart", "codigo", "flutter", "movil"];
  void noRepeat () {
    List<String> wordsNoRepeat = [];
    for (var word in wordsRepeat) {
      if (wordsNoRepeat.contains(word)) {
        continue;
      }else{
        wordsNoRepeat.add(word);
      }
    }
    print(wordsRepeat);
    print(wordsNoRepeat);
  }
  noRepeat();
}