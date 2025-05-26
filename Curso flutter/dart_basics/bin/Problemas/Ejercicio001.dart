import 'dart:io';

void main(){
  print('Ingresa tu año de nacimiento');
  String anoString = stdin.readLineSync()!;
  // Pasando string a numero
  int anoNumber = int.parse(anoString);
  // Calcular edad
  int edad = 2025 - anoNumber;
  print('Tienes $edad años');
}