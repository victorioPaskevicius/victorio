import 'dart:async';
import 'dart:io';

void main () {
  print('Introduce un numero');
  int num = int.parse(stdin.readLineSync()!); 

  if (num > 0) {
    print('El numero $num es positivo');
  }else if (num < 0) {
    print('El numero $num es negativo');
  }else {
    print('El numero es cero ($num)');
  }
}