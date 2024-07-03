# CALCULADORA

operacion = int(input('''Presiona los siguientes numeros dependiendo de la operacion que deseas realizar: 
    Suma = 1
    Resta = 2
    Multiplicacion = 3
    Division = 4
    Potencia = 5: 
'''))
print(operacion)

if (operacion == 1,2,3,4,5):
    number_a = int(input('Escribe el primer numero:'))
    number_b = int(input('Escribe el segundo numero:'))

if (operacion == 1):
    resultado = number_a + number_b
    
elif (operacion == 2):
    resultado = number_a - number_b
    
elif (operacion == 3):
    resultado = number_a * number_b
    
elif (operacion == 4):
        if (number_b != 0):
            resultado = number_a / number_b
        else:
            print('Error: Division por cero')
    
elif (operacion == 5):
    resultado = number_a ** number_b

print('Tu resultado es:', resultado)