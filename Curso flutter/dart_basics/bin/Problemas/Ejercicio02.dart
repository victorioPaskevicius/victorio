import 'dart:io';



void main() {
  // Usuario introduce la cuenta en str
  print("Cual es el total a pagar?");
  String cuenta = stdin.readLineSync()!;
  int cuentaNumber = int.parse(cuenta);
  // Usuario introduce la cantidad de comensales
  print("Cuantas personas comieron?");
  String comensales = stdin.readLineSync()!;
  int comensalesNumber = int.parse(comensales);

  // Cuenta mas propina
  double cuentaTotal = cuentaNumber + (20/100);
  // Total por persona
  double porPersona = cuentaTotal / comensalesNumber;

  print("El total de la cuenta con propina incluida del 20% es de $cuentaTotal y por persona seria de $porPersona cada una");
}
