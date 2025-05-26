import 'dart:io';

void main () {
  print('Introduce el numero del mes');
  int month = int.parse(stdin.readLineSync()!);

  switch (month) {
    case 1:
      print('El mes es Enero');
      break;
    case 2:
      print('El mes es Febrero');
      break;
    case 3:
      print('El mes es Marzo');
      break;
    case 4:
      print('El mes es Abril');
      break;
    case 5:
      print('El mes es Mayo');
      break;
    case 6:
      print('El mes es Junio');
      break;
    case 7:
      print('El mes es Julio');
      break;
    case 8:
      print('El mes es Agosto');
      break;
    case 9:
      print('El mes es Septiembre');
      break;
    case 10:
      print('El mes es Octubre');
      break;
    case 11:
      print('El mes es Noviembre');
      break;
    case 12:
      print('El mes es Diciembre');
      break;
    default:
  }
}